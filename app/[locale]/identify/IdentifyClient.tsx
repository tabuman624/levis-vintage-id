'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';

const MERCARI_LINK = "https://px.a8.net/svt/ejp?a8mat=4B3MEQ+DIF60I+5LNQ+5YJRM";
const EBAY_BASE = "https://www.ebay.com/sch/i.html?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339152643&toolid=10001&mkevt=1&_nkw=";

export default function IdentifyClient({ locale }: { locale: string }) {
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const [images, setImages] = useState<(string|null)[]>(Array(8).fill(null));
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const slots = locale === 'ja'
    ? ['赤タブ\n(必須)','ケアラベル\n(必須)','ジッパー\n(必須)','ボタン裏\n(重要)','ステッチ\n(重要)','セルビッジ\n(任意)','パッチ\n(任意)','その他']
    : ['Red Tab\n(req.)','Care Label\n(req.)','Zipper\n(req.)','Button Back\n(key)','Stitching\n(key)','Selvedge\n(opt.)','Patch\n(opt.)','Other'];

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const canvas = document.createElement('canvas');
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const MAX = 1024;
      let w = img.width, h = img.height;
      if (w > MAX || h > MAX) {
        if (w > h) { h = Math.round(h * MAX / w); w = MAX; }
        else { w = Math.round(w * MAX / h); h = MAX; }
      }
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d')!.drawImage(img, 0, 0, w, h);
      const next = [...images];
      next[idx] = canvas.toDataURL('image/jpeg', 0.8);
      setImages(next);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const analyze = async () => {
    const photos = images.filter(Boolean);
    if (!photos.length) { setError(t('写真を1枚以上アップロードしてください','Please upload at least one photo')); return; }
    setError(''); setLoading(true); setResult(null);
    try {
      const res = await fetch('/api/identify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ images: photos, locale }),
      });
      if (!res.ok) throw new Error((await res.json()).error);
      const data = await res.json();
      setResult(data);
      document.getElementById('result')?.scrollIntoView({ behavior: 'smooth' });
    } catch (e: any) {
      setError(t('エラー: ','Error: ') + e.message);
    } finally { setLoading(false); }
  };

  const confidenceClass = result?.confidence === 'HIGH'
    ? 'border-green-500 text-green-400 bg-green-500/10'
    : result?.confidence === 'MID'
    ? 'border-stitch text-stitch bg-stitch/10'
    : 'border-rust text-red-400 bg-rust/10';

  const ebaySearchUrl = result
    ? `${EBAY_BASE}${encodeURIComponent('levis ' + (result.model || '') + ' ' + (result.era || '') + ' vintage')}`
    : `${EBAY_BASE}levis+vintage+big+e`;

  const mercariSearchUrl = result
    ? `https://jp.mercari.com/search/?keyword=${encodeURIComponent('リーバイス ' + (result.model || '') + ' ヴィンテージ')}&utm_source=affi&utm_medium=affi&utm_campaign=a8`
    : MERCARI_LINK;

  return (
    <>
      <Header locale={locale} />
      <StitchLine />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="font-mono text-[10px] tracking-[4px] text-stitch uppercase mb-4">{t('AI 鑑定','AI IDENTIFICATION')}</p>
          <h1 className="font-playfair font-bold text-[#f0ebe0] mb-4" style={{fontSize:'clamp(28px,5vw,48px)'}}>
            <span className="text-stitch">LEVI&apos;S</span> VINTAGE ID.
          </h1>
          <p className="text-sm text-fade font-light">{t('写真をアップロードして、年代・型番・製造工場をAIが判定します','Upload photos to identify era, model & factory with AI')}</p>
        </div>

        <p className="font-mono text-[10px] tracking-[3px] text-stitch/80 uppercase mb-3">{t('写真をアップロード（多いほど精度UP）','UPLOAD PHOTOS — More = better accuracy')}</p>
        <div className="grid grid-cols-4 gap-2 mb-6">
          {images.map((img, i) => (
            <div key={i} className={`aspect-square rounded-md flex flex-col items-center justify-center relative overflow-hidden cursor-pointer transition-all ${img ? 'border border-stitch/60' : 'border border-dashed border-stitch/25 bg-[#1a2a3a]/30 hover:border-stitch/50'}`}>
              {img ? (
                <>
                  <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover rounded-md" />
                  <div className="absolute inset-0 bg-[#1a2a3a]/70 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-md"
                    onClick={() => { const n=[...images]; n[i]=null; setImages(n); }}>
                    <span className="font-mono text-[9px] text-rust">✕ {t('削除','Remove')}</span>
                  </div>
                </>
              ) : (
                <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
                  <span className="text-stitch/40 text-xl mb-1">＋</span>
                  <span className="font-mono text-[8px] text-fade/70 text-center px-1 leading-tight whitespace-pre-line">{slots[i]}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e, i)} />
                </label>
              )}
            </div>
          ))}
        </div>

        {error && <p className="text-rust font-mono text-xs mb-4 bg-rust/10 border border-rust/25 rounded px-4 py-3">{error}</p>}

        <button onClick={analyze} disabled={loading || !images.some(Boolean)}
          className="w-full py-5 rounded font-mono text-sm tracking-[4px] uppercase bg-rust text-white transition-all hover:bg-red-500 disabled:opacity-40 disabled:cursor-not-allowed mb-10">
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              {t('AIが鑑定中...','Analyzing...')}
            </span>
          ) : t('鑑定スタート','IDENTIFY NOW')}
        </button>

        {result && (
          <div id="result">
            <p className="font-mono text-[10px] tracking-[3px] text-stitch/80 uppercase mb-3">{t('鑑定結果','RESULT')}</p>
            <div className="bg-[#1a2a3a]/40 border border-stitch/20 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-5 border-b border-stitch/10 bg-gradient-to-r from-rust/20 to-stitch/10">
                <span className="font-playfair font-bold text-stitch text-lg">{t('鑑定レポート','VINTAGE REPORT')}</span>
                <span className={`font-mono text-[10px] tracking-[2px] border rounded-full px-3 py-1 ${confidenceClass}`}>
                  {result.confidence === 'HIGH' ? t('信頼度: 高','CONFIDENCE: HIGH')
                    : result.confidence === 'MID' ? t('信頼度: 中','CONFIDENCE: MID')
                    : t('信頼度: 低','CONFIDENCE: LOW')}
                </span>
              </div>
              <div className="p-6 grid grid-cols-2 gap-3 mb-2">
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
              </div>
              <div className="px-6 pb-4">
                <div className="h-px bg-stitch/10 mb-4" />
                <p className="text-xs text-[#f0ebe0]/80 leading-loose font-light">
                  <strong className="text-stitch">{t('■ 判定根拠','■ Reasoning')}</strong><br /><br />
                  {result.reasoning}
                </p>
              </div>

              {/* アフィリエイトリンク */}
              <div className="px-6 pb-5 border-t border-stitch/10 pt-4">
                <p className="font-mono text-[9px] tracking-[2px] text-stitch/70 uppercase mb-3">
                  {t('類似品を探す','Find Similar Items')}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={ebaySearchUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="font-mono text-[10px] border border-stitch/25 text-stitch hover:bg-stitch/10 rounded px-4 py-2 transition-colors"
                  >
                    {t('eBayで類似品を見る','Find on eBay')}
                  </a>
                  <a
                    href={MERCARI_LINK}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="font-mono text-[10px] border border-rust/25 text-red-400 hover:bg-rust/10 rounded px-4 py-2 transition-colors"
                  >
                    {t('メルカリで検索','Search Mercari')}
                  </a>
                </div>
                <img src="https://www10.a8.net/0.gif?a8mat=4B3MEQ+DIF60I+5LNQ+5YJRM" width="1" height="1" alt="" style={{display:'block'}} />
              </div>
            </div>
            <p className="font-mono text-[9px] text-fade/50 text-center mt-4 leading-relaxed">
              {t('※ 本鑑定はAIによる推定です。正確性を保証するものではありません。本サービスはLevi Strauss & Co.とは無関係の独立サービスです。',
                '※ Results are AI estimates only. Not guaranteed. Independent of Levi Strauss & Co.')}
            </p>
          </div>
        )}

        <div className="stitch-line my-10" />
        <p className="font-mono text-[10px] tracking-[3px] text-stitch/80 uppercase mb-4">{t('撮影のコツ','PHOTO TIPS')}</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            [t('赤タブ','RED TAB'), t('文字がはっきり読めるよう接写で','Close-up so text is clearly readable')],
            [t('ケアラベル','CARE LABEL'), t('裏タグ全体を明るい場所で撮影','Shoot entire inner tag in good light')],
            [t('ジッパー刻印','ZIPPER STAMP'), t('刻印が見える角度でマクロ撮影','Macro shot at angle showing stamp')],
            [t('ボタン裏','BUTTON BACK'), t('数字の刻印が見えるよう撮影','Show the number stamped on back')],
          ].map(([title,desc],i) => (
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
