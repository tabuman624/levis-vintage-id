import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;

  const sections = [
    { title: t('アップロード写真について','Uploaded Photos'), body: t('写真はAI鑑定処理のためのみ使用され、サーバーに保存されません。','Photos are used solely for AI identification and are never stored.') },
    { title: t('AI鑑定の限界','Limitations'), body: t('鑑定結果はAIによる推定であり、正確性を保証しません。真贋鑑定は行いません。','Results are AI estimates only. No accuracy guaranteed. We do not authenticate genuineness.') },
    { title: t('Levi Strauss & Co. との関係','Brand Relationship'), body: t('本サービスはLevi Strauss & Co.とは無関係の独立サービスです。','This service is independent and has no affiliation with Levi Strauss & Co.') },
    { title: t('アフィリエイトリンク','Affiliate Links'), body: t('鑑定結果ページにはeBay・メルカリ等へのアフィリエイトリンクが含まれます。','Result pages may contain affiliate links to eBay, Mercari, etc.') },
  ];

  return (
    <>
      <Header locale={locale} />
      <StitchLine />
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16">
        <p className="font-mono text-[10px] tracking-[4px] text-stitch uppercase mb-4">{t('法的情報','Legal Information')}</p>
        <h1 className="font-playfair font-bold text-[#f0ebe0] text-4xl mb-12">{t('プライバシーポリシー・免責事項','Privacy Policy & Disclaimer')}</h1>
        {sections.map((s) => (
          <div key={s.title} className="mb-8">
            <h2 className="font-mono text-[11px] tracking-[2px] text-stitch/80 uppercase mb-3">{s.title}</h2>
            <p className="text-sm text-[#f0ebe0]/80 leading-loose font-light">{s.body}</p>
          </div>
        ))}
        <p className="font-mono text-[10px] text-fade/40 text-center mt-8">{t('最終更新：2026年5月','Last Updated: May 2026')}</p>
      </div>
      <Footer locale={locale} />
    </>
  );
}
