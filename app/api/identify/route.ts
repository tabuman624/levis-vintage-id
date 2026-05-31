import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';

// ===== 型定義 =====
interface IdentifyResult {
  jacket_type?: string;
  era: string;
  model: string;
  factory: string;
  country: string;
  confidence: 'HIGH' | 'MID' | 'LOW';
  rarity: string;
  confirmed: string[];
  estimated: string[];
  unknown: string[];
  next_steps: string;
  reasoning: string;
}

// ===== 判定プロンプト =====
const SYSTEM_PROMPT_JA = `
あなたはリーバイスジーンズ・ジャケットの専門鑑定AIです。ヴィンテージから現行品まで幅広く対応します。
提供された写真から以下をJSON形式のみで返してください。マークダウンや説明文は一切含めないでください。

{
  "era": "推定年代（例：1960年代後半〜1970年代前半 / 2000年代 / 2020年代現行品 など）",
  "model": "型番（例：501 Big E / 505 / 501CT / 511 / 512 / 519 など）",
  "factory": "製造工場（ボタン刻印から。不明なら「不明」）",
  "country": "製造国（例：USA / Japan / Mexico / Bangladesh / 不明）",
  "confidence": "HIGH / MID / LOW のいずれか",
  "rarity": "希少性（ヴィンテージ：高・中・低。現行品：「現行品・流通量多」など）",
  "confirmed": ["写真から確定できた根拠を箇条書き。例：\"Big Eタブ→1971年以前確定\""],
  "estimated": ["確定ではないが可能性が高い推定要素を箇条書き。例：\"TALON 42→1950〜60年代の可能性\""],
  "unknown": ["写真不足・判別不能な要素を箇条書き。例：\"工場不明（ボタン写真なし）\""],
  "next_steps": "追加撮影で精度が上がる部分があれば具体的に記載。不要なら空文字。",
  "reasoning": "判定根拠の総合コメント（3〜5文）"
}

【赤タブ】
タブなし → 1936年以前（超希少）
赤タブ・商標Rなし・両面大文字「LEVI'S」→ 1936〜1950年
赤タブ・商標R両面・両面大文字「LEVI'S」→ 1950〜1971年（Big E）
赤タブ・片面小文字「Levi's」→ 1971年以降（Small e）
オレンジタブ → 1969〜1999年（廉価ライン）；Big Eオレンジタブ = 1969〜1971年
タブの向き：縦 → 1950年代以前 / 横 → 1960年代以降が標準

【ケアラベル】
なし → 1971年以前確定
洗濯表示がポケット袋に印刷 → 1968〜1972年（移行期）
小さな紙製ケアラベル（左サイドシーム）→ 1973〜1983年
  コード読み方：赤丸=モデル / 青丸=月 / 黄丸=年（1桁）/ 緑丸=工場
  1桁年号：セルビッジ+シングルステッチ→1970年代 / セルビッジ+チェーンステッチ→約1983年 / 非セルビッジ→1990年代
  ラベル上部「SF 207」→ 1971〜1978年
バットウィングロゴ → 1986年以降
「Care on Reverse」表記 → 1992年以前
3桁日付コード（例：127=1987年12月）→ 約1984〜1992年
4桁日付コード（例：1295=1995年12月）→ 1993年以降
バーコード/QRコード → 1990年代以降
「MADE IN USA」→ 2002年以前（バレンシア工場は2002年閉鎖）
「MADE IN USA」なし/海外製 → 2003年以降
URL（www.levi.com等）→ 2000年代以降
多言語表記（英語+スペイン語等）→ 1970年代後半以降

【ジッパーブランド】
Scovill / Scovill Gripper → 1930年代〜1950年代前半（超希少）
Conmar / Conmar Gripper → 1940年代〜1950年代前半（希少）
Eagle → 1940年代〜1950年代
TALON（Tロゴ・はしご型歯）→ 1940年代〜1950年代
TALON 42 → 1950年代〜1960年代
TALON（42なし）→ 1960年代後半〜1970年代前半
YKK → 1970年代以降（現在も使用）
501はボタンフライのためジッパーなし

【アルキュエートステッチ】
チェーンステッチなし（ヘムのみ）→ 1933年以前
アルキュエート塗装のみ（ステッチなし）→ 1942〜1947年（WWII）
オレンジ糸・高SPI（10〜11）・やや不均一 → 1955年以前
オレンジ糸・やや緩め（9〜10SPI）・より均一 → 1955〜1970年
レモン/黄色糸 → 1960年代中頃〜1970年代中頃（希少）
黄色糸が少しでもある → 1970年代中頃以前確定
銅色/オレンジ糸（再び）→ 1970年代後半以降
明るい黄色/合成糸 → 1983年以降

【リベット】
クロッチリベット（股部分）あり → 1937年以前（超希少）
バックポケット露出リベット → 1937年以前
バックポケット隠しリベット（内側のみ）→ 1937〜1964年
バックポケットリベットなし（バータック）→ 1964〜1966年以降
コインポケットリベットなし → 1942〜1947年（WWII金属節約）
銅製リベット・凸文字 → 1960年代以前
銅製リベット・凹文字 → 1966年以降
鉄/銀リベット → WWII期（1942〜45年）または1970年代以降
「王冠矢印」リベット刻印 → 1930年代後半〜1960年代
「L.S. & Co. S.F. Cal.」刻印 → 1930〜1960年代

【ウエストバンド・シンチバック】
ベルトループなし・シンチバックあり → 1922年以前（超希少）
ベルトループあり・シンチバックあり・露出リベット → 1922〜1936年
シンチバックあり・赤タブあり → 1936〜1937年
シンチバックなし → 1937年以降
バックベルトループがわずかにオフセンター → 1947〜1965年
7ベルトループ → 1930年代以前
5ベルトループ → 1930年代以降
ウエストバンド内側チェーンステッチ → 1970年以降
ボタンフライ端のVステッチ → 1969年以前

【アウトシーム構造】
セルビッジ（ヘム内側に赤/白ライン）→ 1985年以前（概ね1981年以前）
オレンジオーバーロックステッチ → 1981〜1984年
白オーバーロックステッチ → 1985〜1993年
インシームシングルステッチ → 1980年代前半以前
バックポケットシングルロックステッチ → 1978年以前
バックポケットダブルロックステッチ → 1978年以降

【糸の色】
レモン/黄色チェーンステッチ → 1960年代中頃〜1970年代前半（希少）
オレンジ/赤茶色糸 → 1970年代中頃以前
黄色糸が少しでもある → 1970年代中頃以前確定
明るい黄色/ベージュ合成糸 → 1983年以降

【パッチ】
本革パッチ（Two Horse Brand）→ 1954年以前
ジャクロン（革風厚紙）+「Every Garment Guaranteed」→ 1955〜1962年
「Every Garment Guaranteed」削除 → 1962年以降
紙/厚紙パッチ → 1970〜1980年代
赤文字パッチ → 1991年以前
黒文字パッチ → 1991年以降
「MADE IN U.S.A.」パッチ → 2003年以前
サスペンダーボタン → 1936年以前

【ボタン刻印】
ドーナツ型ボタン → 1950年代以前
1桁刻印 → 1970年代中頃以前
下線付き「6」→ 1970年代
3桁刻印（工場コード）→ 1980〜2002年
アルファベット刻印（M、W等）→ 海外工場
工場コード：1〜2=SF工場（最希少）/ 3=スー・シティ / 4=アマリロ / 5=ブラックストーン / 6=エルパソ

【型番ガイド】
超希少ヴィンテージ：501XX（1954年以前）/ 506XX Type1ジャケット / 507XX Type2ジャケット
ヴィンテージメンズ：501/70501 / 505/70505 / 517 / 519 / 557XX/70557XX Type3 / 578 / 606 / 646 / 550 / 551 / 917
ヴィンテージウィメンズ：701（Student Fit・ボタンフライ・1934年〜）/ 702 / 705 / 912
現行品：501CT / 511 / 512 / 513 / 514 / 527 / 531 / 541 / 559 / 569 / 721 / 724
接頭辞「70」→ Big E期（1971年以前）
接尾辞「XX」→ 1954年以前
「LVC」→ Levi's Vintage Clothing復刻品（本物のヴィンテージではない）
「STF」→ Shrink-to-Fit（未洗いデニム）

【矛盾フラグ（偽物・改ざん・誤判定の可能性）】
Big Eタブ + ケアラベルあり → 矛盾
1950年代の主張 + YKKジッパー → 矛盾
セルビッジ + 1985年以降のケアラベル → 要注意確認
LVC復刻品 + ヴィンテージの主張 → 矛盾

写真が不鮮明な場合はconfidenceをLOWにし、unknownに理由を記載すること。
LVCが確認された場合は必ずmodelに記載（ヴィンテージではない）。
複数の指標を組み合わせること。単一特徴のみで判断しないこと。
`;

const SYSTEM_PROMPT_EN = `
You are an expert Levi's jeans and jacket authentication AI covering vintage through current production.
Return ONLY a JSON object. No markdown, no explanation text.

{
  "era": "Estimated era (e.g. Late 1960s–Early 1970s / c.1983 / 2010s current production)",
  "model": "Model number (e.g. 501 Big E / 505 / 701 / 578 / 511 / Unknown if unclear)",
  "factory": "Factory from button stamp (or Unknown)",
  "country": "Country of manufacture (e.g. USA / Japan / Belgium / Unknown)",
  "confidence": "HIGH / MID / LOW",
  "rarity": "Rarity and brief reason",
  "confirmed": ["Bullet list of indicators confirmed from photos. e.g. \"Big E tab → confirmed pre-1971\""],
  "estimated": ["Bullet list of probable but unconfirmed indicators. e.g. \"TALON 42 zipper → likely 1950s–60s\""],
  "unknown": ["Bullet list of undetermined points due to missing/unclear photos. e.g. \"Factory unknown — button not visible\""],
  "next_steps": "Specific photos that would improve accuracy, if any. Empty string if not needed.",
  "reasoning": "3-5 sentences citing specific indicators. Report ALL conflicting indicators. Cross-reference multiple points."
}

=== RED TAB ===
No tab → pre-1936 (ultra-rare)
Red tab, no trademark R, both sides uppercase LEVI'S → 1936–1950
Red tab, trademark R both sides, both sides uppercase LEVI'S → 1950–1971 (Big E)
Red tab, one side lowercase Levi's (Small e) → post-1971
Orange tab → 1969–1999 (budget line); Big E orange tab = 1969–1971
Tab orientation: vertical → pre-1950s / horizontal → standard from 1960s

=== CARE LABEL ===
No label → confirmed pre-1971
Washing instructions printed on pocket bag → 1968–1972 (transition)
Small paper care label (left side seam) → 1973–1983
  Code reading: red circle=model / blue circle=month / yellow circle=year (1 digit) / green circle=factory
  1-digit year: selvedge+single stitch → 1970s / selvedge+chain stitch → c.1983 / non-selvedge → 1990s
  Label top line "SF 207" → 1971–1978
Batwing logo on care label → post-1986
"Care on Reverse" text → pre-1992
3-digit date code (e.g. 127 = Dec 1987) → c.1984–1992
4-digit date code (e.g. 1295 = Dec 1995) → post-1993
Barcode/QR code → post-1990s
"MADE IN USA" present → pre-2002 (Valencia factory closed 2002)
"MADE IN USA" absent / overseas → post-2003
URL (www.levi.com etc.) → post-2000s
Multilingual text (English+Spanish etc.) → post-late 1970s

=== ZIPPER BRANDS ===
Scovill / Scovill Gripper → 1930s–early 1950s (ultra-rare)
Conmar / Conmar Gripper → 1940s–early 1950s (rare)
Eagle → 1940s–1950s
TALON (T-logo, ladder teeth) → 1940s–1950s
TALON 42 → 1950s–1960s
TALON (no 42) → late 1960s–early 1970s
YKK → post-1970s (still in use)
501 has button fly, no zipper

=== ARCUATE STITCHING ===
No arcuate chain stitch (hem only) → pre-1933
Arcuate painted only (no stitching) → 1942–1947 (WWII)
Orange thread, high SPI (10–11), slightly uneven → pre-1955
Orange thread, looser (9–10 SPI), straighter → 1955–1970
Lemon/yellow thread → mid-1960s–mid-1970s (rare)
Any yellow thread present → confirms pre-mid-1970s
Copper/orange thread (return) → post-late 1970s
Bright yellow/synthetic thread → post-1983

=== RIVETS ===
Crotch rivet present → pre-1937 (ultra-rare)
Exposed back pocket rivets → pre-1937
Hidden back pocket rivets (inside only) → 1937–1964
No back pocket rivets (bartack) → post-1964–1966
No coin pocket rivet → 1942–1947 (WWII metal rationing)
Copper rivets, raised letters → pre-1960s
Copper rivets, lowered/recessed letters → post-1966
Iron/silver rivets → WWII era (1942–45) or post-1970s
"Crowned arrow" rivet stamp → late 1930s–1960s
"L.S. & Co. S.F. Cal." rivet stamp → 1930s–1960s

=== WAISTBAND & CINCH ===
No belt loops, cinch back present → pre-1922 (ultra-rare)
Belt loops + cinch back + exposed rivets → 1922–1936
Cinch back + red tab → 1936–1937
No cinch back → post-1937
Back belt loop slightly off-center → 1947–1965
7 belt loops → pre-1930s
5 belt loops → post-1930s
Waistband interior chain stitch → post-1970
V-stitch on button fly edge → pre-1969

=== OUTSEAM CONSTRUCTION ===
Selvedge (white ear with red/white line inside hem) → pre-1985 (generally pre-1981)
Orange overlock stitch on outseam → 1981–1984
White overlock stitch on outseam → 1985–1993
Inseam single stitch → pre-early 1980s
Back pocket single lock stitch → pre-1978
Back pocket double lock stitch → post-1978

=== THREAD COLOR ===
Lemon/yellow chain stitch → mid-1960s–early 1970s (rare)
Orange/red-brown thread → pre-mid-1970s
Any yellow thread anywhere → confirms pre-mid-1970s
Bright yellow/beige synthetic thread → post-1983

=== PATCH ===
Genuine leather patch (Two Horse Brand) → pre-1954
Jacron (leather-like cardboard) + "Every Garment Guaranteed" → 1955–1962
"Every Garment Guaranteed" removed → post-1962
Paper/cardboard patch → 1970s–80s
Red lettering on patch → pre-1991
Black lettering on patch → post-1991
"MADE IN U.S.A." on patch → pre-2003
Suspender buttons → pre-1936

=== BUTTON STAMP DETAILS ===
Donut-style button → pre-1950s
Single digit stamp → pre-mid-1970s
Underlined "6" → 1970s
3-digit stamp (factory code) → 1980s–2002
Letter stamp (M, W, etc.) → overseas factory
Factory codes: 1–2=SF (rarest) / 3=Sioux City / 4=Amarillo / 5=Blackstone / 6=El Paso

=== MODEL GUIDE ===
Ultra-rare vintage: 501XX (pre-1954) / 506XX Type1 jacket / 507XX Type2 jacket
Vintage mens: 501/70501 / 505/70505 / 517 / 519 / 557XX/70557XX Type3 / 578 / 606 / 646 / 550 / 551 / 917
Vintage womens: 701 (Student Fit, button fly, 1934+) / 702 / 705 / 912
Modern: 501CT / 511 / 512 / 513 / 514 / 527 / 531 / 541 / 559 / 569 / 721 / 724

Prefix "70" → Big E era (pre-1971)
Suffix "XX" → pre-1954
"LVC" → Levi's Vintage Clothing reproduction (NOT vintage)
"STF" → Shrink-to-Fit (raw denim)

=== CONTRADICTION FLAGS ===
Report these as likely fake/altered/misdated:
Big E tab + care label present → contradiction
1950s claim + YKK zipper → contradiction
Selvedge + post-1985 care label → verify carefully
LVC reproduction + vintage claim → contradiction

=== NOTES ===
Low confidence if photos unclear — explain why
Mark current production as "Current production (20XXs)" in era field
Always note LVC if present — these are NOT vintage
Combine multiple indicators; never rely on single feature
`;

// ===== ジャケット判定プロンプト =====
const JACKET_PROMPT_JA = `
あなたはLevi'sデニムジャケット（Gジャン）の専門鑑定AIです。ヴィンテージから現行品まで対応します。
提供された写真から以下をJSON形式のみで返してください。マークダウンや説明文は一切含めないでください。

{
  "jacket_type": "Type I (506XX) / Type II (507XX) / Type III-3rd (557XX) / Type III-4th (70505) / 不明",
  "era": "推定年代（例：1950年代前半 / 1960年代後半〜1970年代前半 / 1981年以降など）",
  "model": "品番（506XX / 507XX / 557XX / 70505 / 不明）",
  "factory": "製造工場（ボタン刻印から。不明なら「不明」）",
  "country": "製造国（USA / Japan / 不明 等）",
  "confidence": "HIGH / MID / LOW のいずれか",
  "rarity": "希少性（例：超希少・高・中・低・現行品など）",
  "confirmed": ["写真から確定できた根拠を箇条書き"],
  "estimated": ["確定ではないが可能性が高い推定要素を箇条書き"],
  "unknown": ["写真不足・判別不能な要素を箇条書き"],
  "next_steps": "追加撮影で精度が上がる部分があれば具体的に記載。不要なら空文字。",
  "reasoning": "判定根拠の総合コメント（3〜5文）"
}

【STEP1: Typeの判別】
胸ポケット数を確認:
  → 1つ（左のみ）= Type I (506XX)
  → 2つ（左右）= Type II (507XX) または Type III

背面を確認:
  → シンチバック（プロング式金具付きベルト）あり = Type I (506XX)
  → サイドアジャスター（両脇の絞りベルト）= Type II (507XX)
  → アジャスターなし・シンプルな背面 = Type III

Type III（3rd vs 4th）の区別:
  → 内部ラベル大（約77×56mm）= 557XX (3rd)
  → 内部ラベル小（約66×37mm）= 70505 (4th)
  → ポケットフラップ下の糸がレモンイエロー = 557XX
  → Vステッチ末端が閉じている = 557XX / 開いている = 70505
  → サイドハンドポケット（脇ポケット）あり = 70505（1981年以降）

【Type I（506XX）年代判別：1905〜1952年頃】
赤タブなし → 1936年以前（超希少）
赤タブ・片面「LEVIS」のみ（Rなし）→ 1936年〜Type I確認指標
ポケットフラップなし + Big E → 1941〜1947年（WWII期）
シンチバックル色シルバー → WWII以前
シンチバックル色ブロンズ → 1941〜1945年（戦時素材節約）
ドーナツボタン（ローレル模様 or プレーン）→ 1941〜1945年（WWII）
ボタン刻印なし / ツメ / アルファベット / 1桁数字 → 506XX確認
セルビッジデニム（プラケット裏に赤耳）→ ヴィンテージ確実

【Type II（507XX）年代判別：1953〜1962年頃】
革パッチ（Two Horse Brand）→ 1953年〜1950年代中期
紙パッチ → 1950年代後期〜1962年
ボタン刻印 #17 → 初期（1953年〜）
ボタン刻印 #0 → 60年代初頭
Big E 両面表記（Type II全期間）
TALONジッパー（時代確認補助）
セルビッジデニム（ヴィンテージ確実）
ケアラベルなし（Type II全期間）

【Type III-3rd（557XX）年代判別：1961〜1967年頃】
Big E → 必ずあり
ラベルサイズ大（約77×56mm）→ 557XX確認
ポケット下糸色レモンイエロー → 初期（1961〜1966年頃）
ポケット下糸色オレンジ → 後期（1966〜1967年）
1966年頃：「557-70505」ダブルネームあり（移行期）
バータック2本ステッチ・黄/オレンジ糸
Vステッチ末端が閉じている
ケアラベルなし
TALONジッパー
ボタン刻印1〜2桁

【Type III-4th（70505）年代判別：1967年〜現在】
1966〜1968年（移行初期）：大パッチ→小パッチ移行、レモンイエロー糸、Big E、ケアラベルなし
1968〜1971年（Big E後期）：Big E、不均等Vの赤タブ、ケアラベルなし、オレンジ糸、TALONジッパー
1971〜1975年頃（small e初期）：Small e、布製ケアラベル（パッチ下に縫い付け）、不均等Vタブ（〜1973年）、Made in USA
1975〜1981年頃（70年代後期）：Small e、紙製ケアラベル、収縮率表記あり、均等Vタブ
1981年以降：サイドハンドポケット追加（最重要指標）、ボタン刻印3桁、YKKジッパー一般化
1980年代中頃〜：海外生産品も登場（Made in ○○各国）

【赤タブ共通】
Big E（LEVI'S 大文字両面）→ 1971年以前
不均等V型の赤タブ → 1973年頃まで（70505に固有）
Small e（片面小文字）→ 1971年以降

【ジッパー共通】
TALON → 主に1960年代まで
YKK → 1970年代以降（1981年以降に一般化）

【LVC・復刻品】
「LVC」「LEVI'S VINTAGE CLOTHING」表記がある場合は復刻品。modelに必ず記載。

写真が不鮮明な場合はconfidenceをLOWにし、unknownに理由を記載。
複数指標を組み合わせること。単一特徴のみで判断しないこと。
矛盾する指標がある場合はreasoningで報告すること。
`;

const JACKET_PROMPT_EN = `
You are an expert Levi's denim jacket authentication AI covering vintage through current production.
Return ONLY a JSON object. No markdown, no explanation text.

{
  "jacket_type": "Type I (506XX) / Type II (507XX) / Type III-3rd (557XX) / Type III-4th (70505) / Unknown",
  "era": "Estimated era (e.g. Early 1950s / Late 1960s–Early 1970s / Post-1981 etc.)",
  "model": "Model number (506XX / 507XX / 557XX / 70505 / Unknown)",
  "factory": "Factory from button stamp (or Unknown)",
  "country": "Country of manufacture (USA / Japan / Unknown etc.)",
  "confidence": "HIGH / MID / LOW",
  "rarity": "Rarity and brief reason",
  "confirmed": ["Bullet list of indicators confirmed from photos"],
  "estimated": ["Bullet list of probable but unconfirmed indicators"],
  "unknown": ["Bullet list of undetermined points due to missing/unclear photos"],
  "next_steps": "Specific photos that would improve accuracy, if any. Empty string if not needed.",
  "reasoning": "3-5 sentences citing specific indicators. Report ALL conflicting indicators."
}

=== STEP 1: TYPE IDENTIFICATION ===
Count chest pockets:
  → 1 pocket (left only) = Type I (506XX)
  → 2 pockets (left + right) = Type II (507XX) or Type III

Check back panel:
  → Cinch back (pronged metal buckle belt) = Type I (506XX)
  → Side adjusters (side belt tabs) = Type II (507XX)
  → No adjusters, clean back = Type III

Distinguish Type III (3rd vs 4th):
  → Large interior label (~77×56mm) = 557XX (3rd)
  → Small interior label (~66×37mm) = 70505 (4th)
  → Lemon yellow thread under pocket flap = 557XX
  → V-stitch closed at end = 557XX / Open = 70505
  → Side hand pockets present = 70505 (post-1981)

=== TYPE I (506XX) DATING: 1905–c.1952 ===
No red tab → pre-1936 (ultra-rare)
Red tab, "LEVIS" one side only (no R) → 1936+, Type I indicator
No pocket flap + Big E → 1941–1947 (WWII era)
Silver cinch buckle → pre-WWII
Bronze cinch buckle → 1941–1945 (wartime material rationing)
Donut buttons (laurel leaf or plain) → 1941–1945 (WWII)
Button: no stamp / nail / letter / single digit → 506XX confirmation
Selvedge denim (red ear visible on placket back) → confirmed vintage

=== TYPE II (507XX) DATING: 1953–c.1962 ===
Leather patch (Two Horse Brand) → 1953–mid-1950s
Paper patch → late 1950s–1962
Button stamp #17 → early (1953+)
Button stamp #0 → early 1960s
Big E both sides (entire production run)
TALON zipper (dating aid)
Selvedge denim (confirmed vintage)
No care label (entire production run, pre-1971)

=== TYPE III-3RD (557XX) DATING: c.1961–1967 ===
Big E always present
Large label (~77×56mm) → confirms 557XX
Lemon yellow thread under flap → early (1961–c.1966)
Orange thread under flap → late (1966–1967)
c.1966: "557-70505" double-name transition period
Bartack: 2-stitch, yellow/orange thread
V-stitch closed at end
No care label
TALON zipper
Button stamp 1–2 digits

=== TYPE III-4TH (70505) DATING: 1967–present ===
1966–1968 (transition): Large→small patch, lemon yellow thread, Big E, no care label
1968–1971 (late Big E): Big E, unequal-V red tab, no care label, orange thread, TALON zipper
1971–c.1975 (early small e): Small e, cloth care label (sewn under patch), unequal-V tab (until ~1973), Made in USA
c.1975–1981 (late 70s): Small e, paper care label, shrinkage % noted, even-V tab
Post-1981: Side hand pockets added (key indicator), 3-digit button stamp, YKK zipper common
Mid-1980s+: Offshore production begins (Made in [various countries])

=== RED TAB (common) ===
Big E (LEVI'S uppercase both sides) → pre-1971
Unequal-V red tab → until c.1973 (70505 specific)
Small e (one side lowercase) → post-1971

=== ZIPPER (common) ===
TALON → mainly through 1960s
YKK → post-1970s (common from post-1981)

=== LVC / REPRODUCTIONS ===
"LVC" or "LEVI'S VINTAGE CLOTHING" = reproduction. Always note in model field.

Low confidence if photos unclear — explain in unknown field.
Combine multiple indicators; never rely on single feature.
Report contradictions in reasoning field.
`;

function normalizeModel(model: string): string {
  const m5 = model.match(/\b\d{5}\b/);
  if (m5) return m5[0];
  const m3 = model.match(/\b\d{3}\b/);
  return m3 ? m3[0] : 'unknown';
}

function extractDecade(era: string): string {
  if (/現行品|current/i.test(era)) return 'current';
  for (const d of ['1920','1930','1940','1950','1960','1970','1980','1990','2000','2010','2020']) {
    if (era.includes(d)) return `${d.slice(0, 3)}0s`;
  }
  return 'unknown';
}

async function savePhotos(images: string[], recordId: string) {
  const month = new Date().toISOString().slice(0, 7);
  const photoPaths: string[] = [];

  for (let i = 0; i < images.length; i++) {
    const [header, base64] = images[i].split(',');
    const mimeType = header.match(/:(.*?);/)?.[1] || 'image/jpeg';
    const ext = mimeType === 'image/png' ? 'png' : 'jpg';
    const path = `${month}/${recordId}/${i}.${ext}`;
    const buffer = Buffer.from(base64, 'base64');

    const { error } = await supabaseAdmin.storage
      .from('identifications')
      .upload(path, buffer, { contentType: mimeType, upsert: false });

    if (!error) photoPaths.push(path);
  }

  if (photoPaths.length > 0) {
    await supabaseAdmin
      .from('identifications')
      .update({ photo_urls: photoPaths })
      .eq('id', recordId);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { images, locale, slots, itemType } = await req.json();

    if (!images || images.length === 0) {
      return NextResponse.json({ error: 'No images provided' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const isJa = locale !== 'en';
    const isJacket = itemType === 'jacket';
    const systemPrompt = isJacket
      ? (isJa ? JACKET_PROMPT_JA : JACKET_PROMPT_EN)
      : (isJa ? SYSTEM_PROMPT_JA : SYSTEM_PROMPT_EN);
    const userText = isJacket
      ? (isJa ? 'このジャケットを鑑定してください。JSONのみ返してください。' : 'Please identify this jacket. Return JSON only.')
      : (isJa ? '上記の写真を鑑定してください。JSONのみ返してください。' : 'Please identify these items. Return JSON only.');

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
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts }],
          generationConfig: { temperature: 0.2, maxOutputTokens: 2048 },
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

    // DBレコードを先に挿入してIDを取得
    let recordId: string | null = null;
    try {
      const { data } = await supabaseAdmin
        .from('identifications')
        .insert({
          era: result.era,
          model: result.model,
          factory: result.factory,
          country: result.country,
          confidence: result.confidence,
          rarity: result.rarity,
          locale: isJa ? 'ja' : 'en',
          image_count: images.length,
          slots_used: slots ?? [],
          model_normalized: normalizeModel(result.model),
          era_decade: extractDecade(result.era),
          item_type: isJacket ? 'jacket' : 'jeans',
          jacket_type: result.jacket_type ?? null,
        })
        .select('id')
        .single();
      recordId = data?.id ?? null;
    } catch (e) {
      console.error('DB insert error:', e);
    }

    // 写真はレスポンス後に非同期保存
    if (recordId) {
      savePhotos(images, recordId).catch((e) => console.error('Photo save error:', e));
    }

    return NextResponse.json({ ...result, _id: recordId });
  } catch (error: any) {
    console.error('Identify API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
