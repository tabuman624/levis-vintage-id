import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';
import { ARTICLES } from '@/lib/articles';

export default async function ArticlesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const p = (path: string) => locale === 'ja' ? path : `/en${path}`;

  const catOrder = [
    { ja: '型番別',     en: 'Model Guide' },
    { ja: 'ポイント別', en: 'Feature Guide' },
    { ja: '年代別',     en: 'Era Guide' },
    { ja: '価値・希少性', en: 'Value & Rarity' },
    { ja: '売買',       en: 'Buy & Sell' },
  ];

  return (
    <>
      <Header locale={locale} />
      <StitchLine />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <p className="font-mono text-[10px] tracking-[4px] text-stitch uppercase mb-4">
          {t('ヴィンテージリーバイス 知識ベース', "Vintage Levi's Knowledge Base")}
        </p>
        <h1 className="font-playfair font-bold text-[#f0ebe0] mb-12" style={{fontSize:'clamp(28px,5vw,44px)'}}>
          <span className="text-rust">LEVI&apos;S</span> {t('知識ベース','Knowledge Base')}
        </h1>
        {catOrder.map(cat => {
          const articles = ARTICLES.filter(a =>
            locale === 'ja' ? a.catJa === cat.ja : a.catEn === cat.en
          );
          if (articles.length === 0) return null;
          return (
            <div key={cat.ja} className="mb-12">
              <p className="font-mono text-[9px] tracking-[4px] text-stitch/80 uppercase mb-4 pb-3 border-b border-stitch/10">
                {locale === 'ja' ? cat.ja : cat.en}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {articles.map(a => (
                  <Link key={a.slug} href={p(`/articles/${a.slug}`)} className="card-denim p-5 flex flex-col gap-2 no-underline">
                    <h3 className="text-sm font-medium text-[#f0ebe0] leading-snug">
                      {locale === 'ja' ? a.titleJa : a.titleEn}
                    </h3>
                    <p className="text-xs text-fade font-light leading-relaxed">
                      {locale === 'ja' ? a.descJa : a.descEn}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {a.tags.map(tag => (
                        <span key={tag} className="font-mono text-[8px] text-[#1a2a3a] bg-stitch/60 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
        <div className="stitch-line my-8" />
        <div className="card-denim p-10 text-center">
          <h2 className="font-playfair font-bold text-[#f0ebe0] text-2xl mb-3">
            {t('知識が揃ったら','Ready?')} <span className="text-stitch">{t('AI鑑定を試してみよう','Try AI Identification')}</span>
          </h2>
          <Link href={p('/identify')} className="inline-block font-mono text-xs tracking-[3px] uppercase bg-rust text-white px-10 py-4 rounded mt-6 hover:bg-red-500 transition-colors">
            {t('無料でAI鑑定する','Identify for Free')}
          </Link>
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
