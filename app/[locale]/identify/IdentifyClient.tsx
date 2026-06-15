'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';
import { MERCARI_LINK, EBAY_BASE, A8_PIXEL, IMAGE_MAX_PX, IMAGE_QUALITY } from '@/lib/constants';
import { getPriceRange } from '@/lib/prices';

type HistoryEntry = {
  id: string;
  timestamp: number;
  era: string;
  model: string;
  confidence: 'HIGH' | 'MID' | 'LOW';
  itemType: 'jeans' | 'jacket';
  jacketType?: string;
};

const HISTORY_KEY = 'levis_history';
const HISTORY_MAX = 20;

type ItemType = 'jeans' | 'jacket';

export default function IdentifyClient({ locale, fixedType }: { locale: string; fixedType?: ItemType }) {
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;

  const [itemType, setItemType] = useState<ItemType>(fixedType ?? 'jeans');
  const [requiredImages, setRequiredImages] = useState<(string|null)[]>([null, null]);
  const [optionalImages, setOptionalImages] = useState<(string|null)[]>(Array(6).fill(null));
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(HISTORY_KEY);
      if (stored) setHistory(JSON.parse(stored));
    } catch {}
  }, []);

  const switchTab = (type: ItemType) => {
    if (type === itemType) return;
    setItemType(type);
    setRequiredImages([null, null]);
    setOptionalImages(Array(6).fill(null));
    setResult(null);
    setError('');
  };

  const requiredSlots = itemType === 'jeans'
    ? (locale === 'ja'
        ? ['赤タブ\n(両面)', 'ケアラベル\n(全体)']
        : ['Red Tab\n(both sides)', 'Care Label\n(full)'])
    : (locale === 'ja'
        ? ['正面全体\n(フロントビュー)', '赤タブ or\n内部ラベル']
        : ['Front View\n(full body)', 'Red Tab or\nInner Label']);

  const optionalSlots = itemType === 'jeans'
    ? (locale === 'ja'
        ? ['ジッパー/\nボタンフライ', 'ボタン裏\n(刻印番号)', 'バックポケット\n(ステッチ+リベット)', 'アウトシーム\nセルビッジ', 'パッチ\n(ウエスト裏)', 'その他\n(シンチ・糸色等)']
        : ['Zipper/\nButton Fly', 'Button Back\n(stamp)', 'Back Pocket\n(stitch+rivet)', 'Outseam/\nSelvedge', 'Patch\n(waistband)', 'Other\n(cinch·thread)'])
    : (locale === 'ja'
        ? ['背面全体\n(バックビュー)', 'パッチ\n(腰部裏)', 'ボタン裏\n(刻印番号)', 'ジッパー\n(ブランド)', '胸ポケット\n(フラップ近景)', 'ケアラベル\n(洗濯表示)']
        : ['Back View\n(full body)', 'Patch\n(rear waist)', 'Button Back\n(stamp)', 'Zipper\n(brand)', 'Chest Pocket\n(flap detail)', 'Care Label\n(washing tag)']);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>, idx: number, isRequired: boolean) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const canvas = document.createElement('canvas');
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      let w = img.width, h = img.height;
      if (w > IMAGE_MAX_PX || h > IMAGE_MAX_PX) {
        if (w > h) { h = Math.round(h * IMAGE_MAX_PX / w); w = IMAGE_MAX_PX; }
        else { w = Math.round(w * IMAGE_MAX_PX / h); h = IMAGE_MAX_PX; }
      }
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d')!.drawImage(img, 0, 0, w, h);
      const dataUrl = canvas.toDataURL('image/jpeg', IMAGE_QUALITY);
      if (isRequired) {
        const next = [...requiredImages]; next[idx] = dataUrl; setRequiredImages(next);
      } else {
        const next = [...optionalImages]; next[idx] = dataUrl; setOptionalImages(next);
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const analyze = async () => {
    const errorMsg = itemType === 'jeans'
      ? t('赤タブまたはケアラベルの写真を1枚以上アップロードしてください', 'Please upload at least one required photo (Red Tab or Care Label)')
      : t('正面全体または内部ラベルの写真を1枚以上アップロードしてください', 'Please upload at least one required photo (Front View or Label)');

    if (!requiredImages.some(Boolean)) { setError(errorMsg); return; }

    const photos: string[] = [];
    const JEANS_REQ_KEYS = ['red_tab', 'care_label'];
    const JEANS_OPT_KEYS = ['zipper_or_button_fly', 'button_back_stamp', 'back_pocket_stitch_rivet', 'outseam_selvedge', 'waistband_patch', 'other'];
    const JACKET_REQ_KEYS = ['front_view', 'red_tab_or_inner_label'];
    const JACKET_OPT_KEYS = ['back_view', 'rear_waist_patch', 'button_back_stamp', 'zipper_brand', 'chest_pocket_flap', 'care_label'];
    const reqKeys = itemType === 'jeans' ? JEANS_REQ_KEYS : JACKET_REQ_KEYS;
    const optKeys = itemType === 'jeans' ? JEANS_OPT_KEYS : JACKET_OPT_KEYS;
    const slotsUsed: string[] = [];
    requiredImages.forEach((img, i) => { if (img) { photos.push(img); slotsUsed.push(reqKeys[i]); } });
    optionalImages.forEach((img, i) => { if (img) { photos.push(img); slotsUsed.push(optKeys[i]); } });

    setError(''); setLoading(true); setResult(null);
    try {
      const res = await fetch('/api/identify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ images: photos, slots: slotsUsed, locale, itemType }),
      });
      if (!res.ok) throw new Error((await res.json()).error);
      const data = await res.json();
      setResult(data);
      const entry: HistoryEntry = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        timestamp: Date.now(),
        era: data.era,
        model: data.model,
        confidence: data.confidence,
        itemType,
        jacketType: data.jacket_type,
      };
      setHistory(prev => {
        const next = [entry, ...prev].slice(0, HISTORY_MAX);
        try { localStorage.setItem(HISTORY_KEY, JSON.stringify(next)); } catch {}
        return next;
      });
      document.getElementById('result')?.scrollIntoView({ behavior: 'smooth' });
    } catch (e: any) {
      setError(e.message || t('エラーが発生しました', 'An error occurred'));
    } finally { setLoading(false); }
  };

  const confidenceClass = result?.confidence === 'HIGH'
    ? 'border-green-500 text-green-400 bg-green-500/10'
    : result?.confidence === 'MID'
    ? 'border-stitch text-stitch bg-stitch/10'
    : 'border-rust text-red-400 bg-rust/10';

  const ebaySearchUrl = result
    ? `${EBAY_BASE}${encodeURIComponent('levis ' + (itemType === 'jacket' ? 'jacket denim ' : '') + (result.model || '') + ' ' + (result.era || '') + ' vintage')}`
    : `${EBAY_BASE}levis+vintage`;

  const mercariSearchUrl = result
    ? `https://jp.mercari.com/search/?keyword=${encodeURIComponent('リーバイス ' + (result.model || '') + ' ヴィンテージ')}&utm_source=affi&utm_medium=affi&utm_campaign=a8`
    : MERCARI_LINK;

  const photoTips = itemType === 'jeans'
    ? [
        [t('赤タブ', 'RED TAB'), t('文字がはっきり読めるよう接写で', 'Close-up so text is clearly readable')],
        [t('ケアラベル', 'CARE LABEL'), t('裏タグ全体を明るい場所で撮影', 'Shoot entire inner tag in good light')],
        [t('ジッパー刻印', 'ZIPPER STAMP'), t('刻印が見える角度でマクロ撮影', 'Macro shot at angle showing stamp')],
        [t('ボタン裏', 'BUTTON BACK'), t('数字の刻印が見えるよう撮影', 'Show the number stamped on back')],
      ]
    : [
        [t('正面全体', 'FRONT VIEW'), t('胸ポケット数・Vステッチが分かるよう全体を撮影', 'Show chest pockets and V-stitch from full front')],
        [t('背面全体', 'BACK VIEW'), t('シンチバック・サイドアジャスター・脇ポケットを確認', 'Show cinch back, side adjusters, or side pockets')],
        [t('内部ラベル', 'INNER LABEL'), t('ラベルサイズが分かるよう全体を明るい場所で撮影', 'Shoot full label in good light to show size')],
        [t('ボタン裏', 'BUTTON BACK'), t('数字・アルファベット刻印が見えるよう撮影', 'Show the stamp number on button back')],
      ];

  return (
    <>
      <Header locale={locale} />
      <StitchLine />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">

        {/* ヘッダー */}
        <div className="text-center mb-10">
          <p className="font-mono text-[10px] tracking-[4px] text-stitch uppercase mb-4">
            {fixedType === 'jacket' ? t('ジャケット AI 鑑定', 'JACKET AI IDENTIFICATION') : t('AI 鑑定', 'AI IDENTIFICATION')}
          </p>
          <h1 className="font-playfair font-bold text-[#f0ebe0] mb-4" style={{fontSize:'clamp(28px,5vw,48px)'}}>
            <span className="text-rust">LEVI&apos;S</span> {fixedType === 'jacket' ? 'JACKET ID.' : 'VINTAGE ID.'}
          </h1>
          <p className="text-sm text-fade font-light">
            {itemType === 'jeans'
              ? t('写真をアップロードして、年代・型番・製造工場をAIが判定します', 'Upload photos to identify era, model & factory with AI')
              : t('Type I〜III（506XX/507XX/557XX/70505）を写真から年代・型番をAIが判定します', 'AI identifies era and model for Type I–III jackets from your photos')}
          </p>
        </div>

        {/* タブ（fixedType が指定されている場合は非表示） */}
        {!fixedType && (
          <div className="flex gap-8 border-b border-stitch/20 mb-8">
            {(['jeans', 'jacket'] as const).map(type => (
              <button
                key={type}
                onClick={() => switchTab(type)}
                className={`pb-3 font-mono text-[11px] tracking-[3px] uppercase transition-colors relative ${
                  itemType === type ? 'text-stitch' : 'text-fade/40 hover:text-fade/70'
                }`}
              >
                {type === 'jeans' ? t('ジーンズ', 'JEANS') : t('ジャケット', 'JACKET')}
                {itemType === type && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-stitch rounded-full" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* カテゴリバッジ */}
        <div className="flex flex-wrap gap-2 mb-7">
          {(itemType === 'jeans'
            ? [
                [t('Big E era', 'Big E era'), '501 / 505 etc.', t('〜1971年', '〜1971')],
                [t('Small e era', 'Small e era'), '501 / 505 etc.', t('1971〜2002年', '1971〜2002')],
                [t('現行品', 'Current'), '511 / 512 etc.', t('2003年〜', '2003〜')],
              ]
            : [
                ['Type I', '506XX', t('1905〜1952年', '1905〜1952')],
                ['Type II', '507XX', t('1953〜1962年', '1953〜1962')],
                ['Type III', '557XX / 70505', t('1962年〜', '1962〜')],
              ]
          ).map(([label, model, era]) => (
            <div key={label} className="bg-[#1a2a3a]/40 border border-stitch/20 rounded px-3 py-1.5 text-center">
              <span className="font-mono text-[9px] text-stitch block">{label}</span>
              <span className="font-mono text-[8px] text-rust block">{model}</span>
              <span className="font-mono text-[7px] text-fade/60 block">{era}</span>
            </div>
          ))}
        </div>

        {/* 必須セクション */}
        <div className="mb-2 flex items-center gap-2">
          <p className="font-mono text-[10px] tracking-[3px] text-stitch/80 uppercase">
            {t('必須（1枚以上）', 'REQUIRED — Upload at least one')}
          </p>
          <span className="font-mono text-[8px] tracking-[1px] bg-rust/20 text-rust border border-rust/30 rounded-full px-2 py-0.5">
            {t('最重要ポイント', 'KEY PHOTOS')}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-5">
          {requiredImages.map((img, i) => (
            <div key={i} className={`aspect-square rounded-md flex flex-col items-center justify-center relative overflow-hidden cursor-pointer transition-all ${img ? 'border border-stitch/60' : 'border border-dashed border-rust/40 bg-[#1a2a3a]/30 hover:border-rust/60'}`}>
              {img ? (
                <>
                  <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover rounded-md" />
                  <div className="absolute inset-0 bg-[#1a2a3a]/70 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-md"
                    onClick={() => { const n=[...requiredImages]; n[i]=null; setRequiredImages(n); }}>
                    <span className="font-mono text-[9px] text-rust">✕ {t('削除', 'Remove')}</span>
                  </div>
                </>
              ) : (
                <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
                  <span className="text-rust/50 text-xl mb-1">＋</span>
                  <span className="font-mono text-[8px] text-fade/70 text-center px-1 leading-tight whitespace-pre-line">{requiredSlots[i]}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e, i, true)} />
                </label>
              )}
            </div>
          ))}
        </div>

        {/* 任意セクション */}
        <p className="font-mono text-[10px] tracking-[3px] text-stitch/50 uppercase mb-2">
          {t('任意（追加で精度UP）', 'OPTIONAL — Improves accuracy')}
        </p>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {optionalImages.map((img, i) => (
            <div key={i} className={`aspect-square rounded-md flex flex-col items-center justify-center relative overflow-hidden cursor-pointer transition-all ${img ? 'border border-stitch/60' : 'border border-dashed border-stitch/20 bg-[#1a2a3a]/20 hover:border-stitch/40'}`}>
              {img ? (
                <>
                  <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover rounded-md" />
                  <div className="absolute inset-0 bg-[#1a2a3a]/70 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-md"
                    onClick={() => { const n=[...optionalImages]; n[i]=null; setOptionalImages(n); }}>
                    <span className="font-mono text-[9px] text-rust">✕ {t('削除', 'Remove')}</span>
                  </div>
                </>
              ) : (
                <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
                  <span className="text-stitch/30 text-xl mb-1">＋</span>
                  <span className="font-mono text-[8px] text-fade/50 text-center px-1 leading-tight whitespace-pre-line">{optionalSlots[i]}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e, i, false)} />
                </label>
              )}
            </div>
          ))}
        </div>

        {error && <p className="text-rust font-mono text-xs mb-4 bg-rust/10 border border-rust/25 rounded px-4 py-3">{error}</p>}

        <button onClick={analyze} disabled={loading || !requiredImages.some(Boolean)}
          className="w-full py-5 rounded font-mono text-sm tracking-[4px] uppercase bg-rust text-white transition-all hover:bg-red-500 disabled:opacity-40 disabled:cursor-not-allowed mb-10">
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              {t('AIが鑑定中...', 'Analyzing...')}
            </span>
          ) : t('無料でAI鑑定する', 'Identify for Free')}
        </button>

        {/* 鑑定結果 */}
        {result && (
          <div id="result">
            <p className="font-mono text-[10px] tracking-[3px] text-stitch/80 uppercase mb-3">{t('鑑定結果', 'RESULT')}</p>
            <div className="bg-[#1a2a3a]/40 border border-stitch/20 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-5 border-b border-stitch/10 bg-gradient-to-r from-rust/20 to-stitch/10">
                <span className="font-playfair font-bold text-stitch text-lg">{t('鑑定レポート', 'VINTAGE REPORT')}</span>
                <span className={`font-mono text-[10px] tracking-[2px] border rounded-full px-3 py-1 ${confidenceClass}`}>
                  {result.confidence === 'HIGH' ? t('信頼度: 高', 'CONFIDENCE: HIGH')
                    : result.confidence === 'MID' ? t('信頼度: 中', 'CONFIDENCE: MID')
                    : t('信頼度: 低', 'CONFIDENCE: LOW')}
                </span>
              </div>
              <div className="p-6 grid grid-cols-2 gap-3 mb-2">
                {/* ジャケットタイプ（ジャケットモードのみ） */}
                {itemType === 'jacket' && result.jacket_type && (
                  <div className="col-span-2 bg-rust/10 border border-rust/25 rounded px-4 py-3">
                    <div className="font-mono text-[8px] tracking-[2px] text-rust uppercase mb-1">{t('ジャケットタイプ', 'JACKET TYPE')}</div>
                    <div className="text-base font-bold text-[#f0ebe0]">{result.jacket_type}</div>
                  </div>
                )}
                {[
                  { key:'era', label:t('推定年代','ERA') },
                  { key:'model', label:t('型番','MODEL') },
                  { key:'factory', label:t('製造工場','FACTORY') },
                  { key:'country', label:t('製造国','COUNTRY') },
                  { key:'rarity', label:t('希少性','RARITY') },
                ].map(({key,label}) => (
                  <div key={key} className="bg-[#1a2a3a]/40 border border-stitch/10 rounded px-4 py-3">
                    <div className="font-mono text-[8px] tracking-[2px] text-stitch/70 uppercase mb-1">{label}</div>
                    <div className="text-sm font-medium text-[#f0ebe0]">{result[key] || '—'}</div>
                  </div>
                ))}
                {(() => {
                  const price = getPriceRange(result.model || '', result.era || '', itemType, locale);
                  if (!price) return null;
                  return (
                    <div className="col-span-2 bg-stitch/5 border border-stitch/20 rounded px-4 py-3">
                      <div className="font-mono text-[8px] tracking-[2px] text-stitch/70 uppercase mb-1">
                        {t('参考相場', 'MARKET PRICE RANGE')}
                      </div>
                      <div className="text-base font-bold text-stitch">{price.range}</div>
                      <div className="font-mono text-[9px] text-fade/50 mt-1 leading-relaxed">
                        ※ {locale === 'ja' ? price.noteJa : price.noteEn}
                      </div>
                    </div>
                  );
                })()}
              </div>
              <div className="px-6 pb-4">
                <div className="h-px bg-stitch/10 mb-4" />
                <div className="grid grid-cols-1 gap-3 mb-4">
                  {result.confirmed?.length > 0 && (
                    <div className="bg-green-500/5 border border-green-500/20 rounded px-4 py-3">
                      <div className="font-mono text-[8px] tracking-[2px] text-green-400 uppercase mb-2">{t('確定', 'CONFIRMED')}</div>
                      <ul className="space-y-1">
                        {result.confirmed.map((item: string, i: number) => (
                          <li key={i} className="text-xs text-[#f0ebe0]/80 font-light flex gap-2">
                            <span className="text-green-400 shrink-0">✓</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {result.estimated?.length > 0 && (
                    <div className="bg-stitch/5 border border-stitch/20 rounded px-4 py-3">
                      <div className="font-mono text-[8px] tracking-[2px] text-stitch uppercase mb-2">{t('推定', 'ESTIMATED')}</div>
                      <ul className="space-y-1">
                        {result.estimated.map((item: string, i: number) => (
                          <li key={i} className="text-xs text-[#f0ebe0]/80 font-light flex gap-2">
                            <span className="text-stitch shrink-0">〜</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {result.unknown?.length > 0 && (
                    <div className="bg-[#1a2a3a]/30 border border-stitch/10 rounded px-4 py-3">
                      <div className="font-mono text-[8px] tracking-[2px] text-fade/60 uppercase mb-2">{t('不明・写真不足', 'UNKNOWN')}</div>
                      <ul className="space-y-1">
                        {result.unknown.map((item: string, i: number) => (
                          <li key={i} className="text-xs text-[#f0ebe0]/50 font-light flex gap-2">
                            <span className="shrink-0">—</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {result.next_steps && (
                  <div className="bg-rust/5 border border-rust/20 rounded px-4 py-3 mb-4">
                    <div className="font-mono text-[8px] tracking-[2px] text-rust uppercase mb-1">{t('精度を上げるには', 'IMPROVE ACCURACY')}</div>
                    <p className="text-xs text-[#f0ebe0]/70 font-light leading-relaxed">→ {result.next_steps}</p>
                  </div>
                )}

                <div className="h-px bg-stitch/10 mb-4" />
                <p className="text-xs text-[#f0ebe0]/70 leading-loose font-light">
                  <strong className="text-stitch/80">{t('■ 総合判定', '■ Summary')}</strong><br /><br />
                  {result.reasoning}
                </p>
              </div>

              {/* アフィリエイトリンク */}
              <div className="px-6 pb-5 border-t border-stitch/10 pt-4">
                <p className="font-mono text-[9px] tracking-[2px] text-stitch/70 uppercase mb-3">
                  {t('類似品を探す', 'Find Similar Items')}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a href={ebaySearchUrl} target="_blank" rel="nofollow noopener noreferrer"
                    className="font-mono text-[10px] border border-stitch/25 text-stitch hover:bg-stitch/10 rounded px-4 py-2 transition-colors">
                    {t('eBayで類似品を見る', 'Find on eBay')}
                  </a>
                  <a href={MERCARI_LINK} target="_blank" rel="nofollow noopener noreferrer"
                    className="font-mono text-[10px] border border-rust/25 text-red-400 hover:bg-rust/10 rounded px-4 py-2 transition-colors">
                    {t('メルカリで検索', 'Search Mercari')}
                  </a>
                </div>
                <img src={A8_PIXEL} width="1" height="1" alt="" style={{display:'block'}} />
              </div>
            </div>
            <p className="font-mono text-[9px] text-fade/50 text-center mt-4 leading-relaxed">
              {t('※ 本鑑定はAIによる推定です。正確性を保証するものではありません。本サービスはLevi Strauss & Co.とは無関係の独立サービスです。',
                '※ Results are AI estimates only. Not guaranteed. Independent of Levi Strauss & Co.')}
            </p>
          </div>
        )}

        {history.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-[10px] tracking-[3px] text-stitch/80 uppercase">
                {t('あなたの鑑定履歴', 'YOUR HISTORY')}
              </p>
              <button
                onClick={() => {
                  setHistory([]);
                  try { localStorage.removeItem(HISTORY_KEY); } catch {}
                }}
                className="font-mono text-[9px] text-fade/40 hover:text-rust transition-colors"
              >
                {t('履歴を削除', 'Clear')}
              </button>
            </div>
            <div className="space-y-2">
              {history.map((entry) => {
                const confColor = entry.confidence === 'HIGH'
                  ? 'text-green-400 border-green-500/30'
                  : entry.confidence === 'MID'
                  ? 'text-stitch border-stitch/30'
                  : 'text-fade/50 border-white/10';
                const date = new Date(entry.timestamp);
                const dateStr = `${date.getMonth() + 1}/${date.getDate()} ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`;
                return (
                  <div key={entry.id} className="flex items-center gap-3 bg-[#1a2a3a]/30 border border-stitch/10 rounded-lg px-4 py-3">
                    <span className="font-mono text-[9px] text-fade/30 shrink-0 w-10">{dateStr}</span>
                    <span className="font-mono text-[8px] text-rust/70 shrink-0">
                      {entry.itemType === 'jacket' ? t('ジャケット', 'JACKET') : t('ジーンズ', 'JEANS')}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#f0ebe0]/80 truncate">{entry.model}</p>
                      <p className="font-mono text-[8px] text-fade/50 truncate">{entry.era}</p>
                    </div>
                    <span className={`font-mono text-[8px] border rounded-full px-2 py-0.5 shrink-0 ${confColor}`}>
                      {entry.confidence}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="stitch-line my-10" />
        <p className="font-mono text-[10px] tracking-[3px] text-stitch/80 uppercase mb-4">{t('撮影のコツ', 'PHOTO TIPS')}</p>
        <div className="grid grid-cols-2 gap-3">
          {photoTips.map(([title, desc], i) => (
            <div key={i} className="py-3">
              <div className="font-mono text-[9px] tracking-[1px] text-stitch mb-1">{title}</div>
              <div className="text-[11px] text-fade font-light leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
