import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';

const BASE_URL = 'https://www.levis-id.com';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isJa = locale === 'ja';
  const url = isJa ? `${BASE_URL}/legal` : `${BASE_URL}/en/legal`;
  return {
    title: isJa
      ? "プライバシーポリシー・免責事項 | LEVI'S VINTAGE ID."
      : "Privacy Policy & Disclaimer | LEVI'S VINTAGE ID.",
    description: isJa
      ? "LEVI'S VINTAGE ID.のプライバシーポリシー、免責事項、Google AdSense・アフィリエイトリンクに関する情報。"
      : "Privacy Policy, disclaimer, and information on Google AdSense and affiliate links for LEVI'S VINTAGE ID.",
    alternates: {
      canonical: url,
      languages: {
        'ja': `${BASE_URL}/legal`,
        'en': `${BASE_URL}/en/legal`,
      },
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }];
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;

  return (
    <>
      <Header locale={locale} />
      <StitchLine />
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16">
        <p className="font-mono text-[10px] tracking-[4px] text-stitch uppercase mb-4">{t('法的情報', 'Legal Information')}</p>
        <h1 className="font-playfair font-bold text-[#f0ebe0] text-4xl mb-4">{t('プライバシーポリシー・免責事項', 'Privacy Policy & Disclaimer')}</h1>
        <p className="font-mono text-[10px] text-fade/50 mb-12">{t('最終更新：2026年5月24日', 'Last Updated: May 24, 2026')}</p>

        {/* 基本方針 */}
        <section className="mb-10">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">{t('1. 基本方針', '1. Basic Policy')}</h2>
          <p className="text-sm text-[#f0ebe0]/80 leading-loose font-light">
            {t(
              'LEVI\'S VINTAGE ID.（以下「本サービス」）は、ヴィンテージLevi\'sジーンズの年代・型番・製造工場をAIで判定する無料サービスです。本プライバシーポリシーは、本サービスをご利用いただく方の個人情報及びプライバシーの取り扱いについて定めたものです。',
              "LEVI'S VINTAGE ID. (\"the Service\") is a free AI-powered identification service for vintage Levi's jeans. This Privacy Policy describes how we handle personal information and privacy for users of the Service."
            )}
          </p>
        </section>

        {/* 収集する情報 */}
        <section className="mb-10">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">{t('2. 収集する情報', '2. Information We Collect')}</h2>
          <p className="text-sm text-[#f0ebe0]/80 leading-loose font-light mb-4">
            {t(
              '本サービスは以下の情報を収集する場合があります：',
              'The Service may collect the following information:'
            )}
          </p>
          <ul className="text-sm text-[#f0ebe0]/80 font-light space-y-3 ml-4">
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>{t('アップロードされた写真（AI鑑定処理後、当サービスのサーバーには保存されません）', 'Uploaded photos (not stored on our servers after AI processing)')}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>{t('アクセスログ（IPアドレス・ブラウザ情報・閲覧ページ等）', 'Access logs (IP address, browser information, pages visited, etc.)')}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>{t('Cookieおよびこれに類する技術を通じた情報（広告・アクセス解析目的）', 'Information collected via cookies and similar technologies (for advertising and analytics purposes)')}</span>
            </li>
          </ul>
        </section>

        {/* アップロード写真 */}
        <section className="mb-10">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">{t('3. アップロード写真の取り扱い', '3. Handling of Uploaded Photos')}</h2>
          <p className="text-sm text-[#f0ebe0]/80 leading-loose font-light">
            {t(
              'ユーザーがAI鑑定のためにアップロードした写真は、Google Gemini APIへの送信および鑑定結果の生成のみに使用されます。当サービスのサーバーには写真データを保存しておらず、鑑定処理完了後は即座に破棄されます。Google Gemini APIのデータ取り扱いについてはGoogleのプライバシーポリシーをご参照ください。',
              'Photos uploaded by users for AI identification are used solely for transmission to the Google Gemini API and generation of identification results. We do not store photo data on our servers; it is discarded immediately after processing. For Google Gemini API data handling, please refer to Google\'s Privacy Policy.'
            )}
          </p>
        </section>

        {/* Google AdSense */}
        <section className="mb-10">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">{t('4. Google AdSenseについて', '4. Google AdSense')}</h2>
          <p className="text-sm text-[#f0ebe0]/80 leading-loose font-light mb-4">
            {t(
              '本サービスはGoogle AdSenseを利用した広告を掲載しています。Google AdSenseはCookieを使用して、ユーザーの興味・関心に基づいた広告を表示します。',
              'This Service displays advertisements using Google AdSense. Google AdSense uses cookies to show ads based on your interests.'
            )}
          </p>
          <ul className="text-sm text-[#f0ebe0]/80 font-light space-y-3 ml-4">
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>{t('GoogleはCookieを使用してユーザーのサービス利用状況に基づいた広告を配信します', 'Google uses cookies to serve ads based on your prior visits to this site and other sites on the Internet')}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>{t('DoubleClick CookieによりGoogleとパートナーはユーザーへの広告を最適化します', 'The DoubleClick cookie enables Google and its partners to serve ads based on your visit to this and other sites')}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>
                {t('広告のパーソナライズを無効にするには', 'To opt out of personalized advertising, visit')}{' '}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-stitch hover:underline">
                  Google 広告設定
                </a>
                {t('をご利用ください', '')}
              </span>
            </li>
          </ul>
          <p className="text-sm text-[#f0ebe0]/80 leading-loose font-light mt-4">
            {t(
              'Google AdSenseのプライバシーポリシーの詳細は',
              'For more information on Google AdSense, please see the'
            )}{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-stitch hover:underline">
              {t('Googleプライバシーポリシー', 'Google Privacy Policy')}
            </a>
            {t('をご参照ください。', '.')}
          </p>
        </section>

        {/* Cookie */}
        <section className="mb-10">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">{t('5. Cookieについて', '5. Cookies')}</h2>
          <p className="text-sm text-[#f0ebe0]/80 leading-loose font-light mb-4">
            {t(
              '本サービスでは、以下の目的でCookieを使用しています：',
              'The Service uses cookies for the following purposes:'
            )}
          </p>
          <ul className="text-sm text-[#f0ebe0]/80 font-light space-y-3 ml-4">
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>{t('広告の配信・最適化（Google AdSense）', 'Ad delivery and optimization (Google AdSense)')}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>{t('アクセス解析（サービス品質改善目的）', 'Access analytics (for service quality improvement)')}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>{t('言語設定の保持', 'Retaining language preferences')}</span>
            </li>
          </ul>
          <p className="text-sm text-[#f0ebe0]/80 leading-loose font-light mt-4">
            {t(
              'ブラウザの設定によりCookieを無効にすることができますが、一部機能が正常に動作しない場合があります。',
              'You may disable cookies through your browser settings, but some features may not function properly as a result.'
            )}
          </p>
        </section>

        {/* アフィリエイト */}
        <section className="mb-10">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">{t('6. アフィリエイトリンクについて', '6. Affiliate Links')}</h2>
          <p className="text-sm text-[#f0ebe0]/80 leading-loose font-light">
            {t(
              '鑑定結果ページには、eBay・メルカリ等のマーケットプレイスへのアフィリエイトリンクが含まれる場合があります。これらリンクを経由してご購入いただいた場合、本サービスに紹介料が支払われることがあります。アフィリエイトリンクの有無は鑑定結果の客観性に影響を与えません。',
              'Result pages may contain affiliate links to marketplaces such as eBay and Mercari. We may receive a referral fee if you make a purchase through these links. The presence of affiliate links does not influence the objectivity of identification results.'
            )}
          </p>
        </section>

        {/* 免責事項 */}
        <section className="mb-10">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">{t('7. 免責事項', '7. Disclaimer')}</h2>
          <ul className="text-sm text-[#f0ebe0]/80 font-light space-y-3 ml-4">
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>{t('鑑定結果はAIによる推定であり、正確性を保証するものではありません', 'Identification results are AI estimates and are not guaranteed for accuracy')}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>{t('本サービスは真贋鑑定を目的としたものではありません', 'This Service is not intended for authentication or counterfeit detection')}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>{t('高額品の取引においては専門家への相談を強く推奨します', 'For high-value transactions, we strongly recommend consulting an expert')}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>{t('本サービスはLevi Strauss & Co.とは無関係の独立サービスです', "This Service is independent and has no affiliation with Levi Strauss & Co.")}</span>
            </li>
          </ul>
        </section>

        {/* 第三者サービス */}
        <section className="mb-10">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">{t('8. 第三者サービス', '8. Third-Party Services')}</h2>
          <p className="text-sm text-[#f0ebe0]/80 leading-loose font-light mb-3">
            {t('本サービスは以下の第三者サービスを利用しています：', 'The Service uses the following third-party services:')}
          </p>
          <ul className="text-sm text-[#f0ebe0]/80 font-light space-y-3 ml-4">
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>Google Gemini API — {t('AI鑑定処理', 'AI identification processing')}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>Google AdSense — {t('広告配信', 'Ad delivery')}</span>
            </li>
            <li className="flex gap-2">
              <span className="text-stitch flex-shrink-0">▸</span>
              <span>Vercel — {t('サービスホスティング', 'Service hosting')}</span>
            </li>
          </ul>
        </section>

        {/* ポリシー変更 */}
        <section className="mb-10">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">{t('9. プライバシーポリシーの変更', '9. Changes to Privacy Policy')}</h2>
          <p className="text-sm text-[#f0ebe0]/80 leading-loose font-light">
            {t(
              '本ポリシーは必要に応じて変更される場合があります。重要な変更がある場合はページ上部の「最終更新日」を更新します。継続してご利用いただくことで変更後のポリシーに同意したものとみなします。',
              'This Policy may be updated as needed. When significant changes occur, we will update the "Last Updated" date at the top of the page. Continued use of the Service constitutes acceptance of the updated policy.'
            )}
          </p>
        </section>

        {/* お問い合わせ */}
        <section className="mb-10">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">{t('10. お問い合わせ', '10. Contact')}</h2>
          <p className="text-sm text-[#f0ebe0]/80 leading-loose font-light">
            {t(
              'プライバシーポリシーに関するご質問はお問い合わせページよりご連絡ください。',
              'For questions regarding this Privacy Policy, please contact us via the Contact page.'
            )}
          </p>
        </section>

        <p className="font-mono text-[10px] text-fade/40 text-center mt-8">
          {t('最終更新：2026年5月24日', 'Last Updated: May 24, 2026')}
        </p>
      </div>
      <Footer locale={locale} />
    </>
  );
}
