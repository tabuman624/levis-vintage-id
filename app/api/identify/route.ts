import { NextRequest, NextResponse } from 'next/server';

// ===== 型定義 =====
interface IdentifyResult {
  era: string;
  model: string;
  factory: string;
  country: string;
  confidence: 'HIGH' | 'MID' | 'LOW';
  rarity: string;
  reasoning: string;
}

// ===== 判定プロンプト =====
const SYSTEM_PROMPT_JA = `
あなたはヴィンテージリーバイスの専門鑑定AIです。
提供された写真から以下をJSON形式のみで返してください。マークダウンや説明文は一切含めないでください。

{
  "era": "推定年代（例：1960年代後半〜1970年代前半）",
  "model": "型番（例：501 Big E / 505 など。不明な場合は「判定困難」）",
  "factory": "製造工場（ボタン刻印から。不明なら「不明」）",
  "country": "製造国（例：USA / 不明）",
  "confidence": "HIGH / MID / LOW のいずれか",
  "rarity": "希少性（高・中・低 と簡単な理由）",
  "reasoning": "判定根拠を3〜5文で説明。どのポイントから何を判断したかを具体的に。"
}

【判定ロジック】
- ケアラベルなし → 1971年以前確定（Big E期）
- 赤タブ両面大文字「LEVI'S」 → 1971年以前（Big E）
- 赤タブ片面小文字「Levi's」 → 1971年以降
- オレンジタブ → 1969〜1979年
- ジッパーConmar → 1940年代〜1950年代前半
- ジッパーTALON 42 → 1950年代〜1960年代
- ジッパーTALON → 1960年代〜1970年代前半
- ジッパーYKK → 1970年代以降
- セルビッジあり → 1981年以前
- 本革パッチ → 1954年以前
- クロッチリベットあり → 1941年以前（超希少）
- ボタン裏刻印1・2 → SF工場（高希少性）

写真が不鮮明な場合はconfidenceをLOWにし、reasoningで理由を説明すること。
`;

const SYSTEM_PROMPT_EN = `
You are an expert vintage Levi's authentication AI.
Return ONLY a JSON object. No markdown, no explanation text.

{
  "era": "Estimated era (e.g. Late 1960s – Early 1970s)",
  "model": "Model number (e.g. 501 Big E / 505 / Unknown)",
  "factory": "Factory from button stamp (or Unknown)",
  "country": "Country of manufacture (e.g. USA / Unknown)",
  "confidence": "HIGH / MID / LOW",
  "rarity": "Rarity level and brief reason",
  "reasoning": "3-5 sentences explaining what features led to each conclusion."
}

Dating logic:
- No care label → pre-1971 confirmed (Big E era)
- Red tab both sides uppercase "LEVI'S" → pre-1971 (Big E)
- Red tab one side lowercase "Levi's" → post-1971
- Orange tab → 1969-1979
- Conmar zipper → 1940s–early 1950s
- TALON 42 zipper → 1950s–1960s
- TALON zipper → 1960s–early 1970s
- YKK zipper → post-1970
- Selvedge present → pre-1981
- Leather patch → pre-1954
- Crotch rivet → pre-1941 (extremely rare)
- Button stamp 1 or 2 → SF factory (high rarity)

If photos are unclear, set confidence to LOW and explain in reasoning.
`;

export async function POST(req: NextRequest) {
  try {
    const { images, locale } = await req.json();

    if (!images || images.length === 0) {
      return NextResponse.json({ error: 'No images provided' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const isJa = locale !== 'en';
    const systemPrompt = isJa ? SYSTEM_PROMPT_JA : SYSTEM_PROMPT_EN;
    const userText = isJa
      ? '上記の写真を鑑定してください。JSONのみ返してください。'
      : 'Please identify these items. Return JSON only.';

    // Gemini API リクエスト構築
    const parts: any[] = [{ text: systemPrompt }];

    for (const image of images) {
      // dataURL → base64 + mimeType
      const [header, data] = image.split(',');
      const mimeType = header.match(/:(.*?);/)?.[1] || 'image/jpeg';
      parts.push({ inline_data: { mime_type: mimeType, data } });
    }

    parts.push({ text: userText });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts }],
          generationConfig: { temperature: 0.2, maxOutputTokens: 1024 },
        }),
      }
    );

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || `Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const clean = text.replace(/```json|```/g, '').trim();
    const result: IdentifyResult = JSON.parse(clean);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Identify API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
