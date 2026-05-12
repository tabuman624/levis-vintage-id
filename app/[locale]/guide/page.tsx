import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';

export default async function GuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const base = locale === 'ja' ? '' : '/en';

  const guides = [
    { num:'01', req:'text-rust', reqLabel: t('必須','Required'), title: t('赤タブ（Red Tab）','Red Tab'), why: t('両面大文字「LEVI\'S」なら1971年以前のBig E。最重要ポイントです。','Both sides uppercase "LEVI\'S" = pre-1971 Big E. Most critical point.') },
    { num:'02', req:'text-rust', reqLabel: t('必須','Required'), title: t('ケアラベル','Care Label'), why: t('ケアラベルなし→1971年以前確定。1枚で年代を二分できます。','No care label = pre-1971 confirmed. One photo divides the era in two.') },
    { num:'03', req:'text-rust', reqLabel: t('必須','Required'), title: t('ジッパー刻印','Zipper Stamp'), why: t('Conmar→1940s、TALON 42→1950〜60s、YKK→1970s以降。','Conmar→1940s, TALON 42→1950–60s, YKK→1970s+') },
    { num:'04', req:'text-stitch', reqLabel: t('重要','Important'), title: t('ボタン裏の刻印','Button Back'), why: t('数字＝工場番号。1・2番はSF工場で最高希少性。','Number = factory code. 1 or 2 = SF factory, highest rarity.') },
    { num:'05', req:'text-stitch', reqLabel: t('重要','Important'), title: t('セルビッジ（裾内側）','Selvedge'), why: t('白い耳が確認できれば1981年以前確定。','White selvedge edge = pre-1981 confirmed.') },
  ];

  return (
    <>
      <Header locale={locale} />
      <StitchLine />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <p className="font-mono text-[10px] tracking-[4px] text-stitch uppercase mb-4">{t('撮影ガイド','Photo Guide')}</p>
        <h1 className="font-playfair font-bold text-[#f0ebe0] text-4xl mb-6">{t('撮影のポイント','Photography Points')}</h1>
        <p className="text-sm text-fade font-light leading-loose mb-12">{t('AIの鑑定精度は写真の品質と撮影ポイントに大きく左右されます。','AI accuracy depends heavily on photo quality and which details you capture.')}</p>
        <div className="space-y-4">
          {guides.map((g) => (
            <div key={g.num} className="card-denim p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="font-playfair text-stitch/20 text-4xl font-bold">{g.num}</span>
                <div>
                  <span className={`font-mono text-[8px] uppercase tracking-widest ${g.req}`}>{g.reqLabel}</span>
                  <h3 className="font-playfair font-bold text-stitch text-lg">{g.title}</h3>
                </div>
              </div>
              <p className="text-sm text-fade font-light leading-relaxed">{g.why}</p>
            </div>
          ))}
        </div>
        <div className="stitch-line my-10" />
        <div className="text-center">
          <Link href={`${base}/identify`} className="inline-block font-mono text-xs tracking-[3px] uppercase bg-rust text-white px-10 py-4 rounded hover:bg-red-500 transition-colors">
            {t('鑑定ページへ','Go to Identifier')}
          </Link>
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
