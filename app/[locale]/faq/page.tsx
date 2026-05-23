import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';

export const metadata: Metadata = {
  title: "よくある質問 | LEVI'S VINTAGE ID.",
  description: "LEVI'S VINTAGE ID.のよくある質問。AI鑑定の精度・写真の取り扱い・判定の仕組み・Levi'sとの関係などを解説。",
};

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isJa = locale === 'ja';
  const t = (ja: string, en: string) => isJa ? ja : en;
  const p = (path: string) => isJa ? path : `/en${path}`;

  const faqs = [
    {
      catJa: 'サービスについて',
      catEn: 'About the Service',
      items: [
        {
          qJa: 'LEVI\'S VINTAGE ID.とはどんなサービスですか？',
          qEn: "What is LEVI'S VINTAGE ID.?",
          aJa: 'ヴィンテージLevi\'sジーンズの写真をアップロードすると、Google Gemini AIが年代・型番・製造工場を推定する無料の鑑定サービスです。赤タブ・ケアラベル・ジッパー・ボタン刻印など複数の鑑定ポイントを組み合わせて分析します。',
          aEn: "A free service where you upload photos of vintage Levi's jeans and Google Gemini AI estimates the era, model, and manufacturing factory. The AI analyzes multiple identification points including red tab, care label, zipper brand, and button stamps.",
        },
        {
          qJa: 'Levi Strauss & Co.の公式サービスですか？',
          qEn: 'Is this an official Levi Strauss & Co. service?',
          aJa: 'いいえ。本サービスはLevi Strauss & Co.（リーバイ・ストラウス社）とは無関係の独立したサービスです。リーバイスの商標はLevi Strauss & Co.に帰属します。',
          aEn: "No. This is an independent service with no affiliation with Levi Strauss & Co. The Levi's trademark belongs to Levi Strauss & Co.",
        },
        {
          qJa: '利用料金はかかりますか？',
          qEn: 'Is there a fee to use the service?',
          aJa: '完全無料でご利用いただけます。会員登録・クレジットカード情報の入力も不要です。',
          aEn: 'The service is completely free. No account registration or credit card information required.',
        },
      ],
    },
    {
      catJa: 'AI鑑定について',
      catEn: 'About AI Identification',
      items: [
        {
          qJa: 'AI鑑定の精度はどのくらいですか？',
          qEn: 'How accurate is the AI identification?',
          aJa: '精度は写真の品質と枚数に大きく左右されます。赤タブ・ケアラベル・ジッパー・ボタン刻印・セルビッジなど複数のポイントの写真を提出するほど精度が上がります。1枚の写真より5〜7枚の組み合わせのほうが格段に精度が高くなります。',
          aEn: 'Accuracy depends heavily on photo quality and quantity. Submitting photos of multiple identification points — red tab, care label, zipper, button stamps, selvedge — increases accuracy significantly. 5–7 photos together are much more accurate than a single photo.',
        },
        {
          qJa: '真贋鑑定（本物か偽物かの判定）はできますか？',
          qEn: 'Can it authenticate genuine vs. fake items?',
          aJa: '真贋鑑定は行っておりません。本サービスはAIによる年代・型番の推定を目的としており、偽造品の検出には対応していません。高額品の購入・売却においては専門家への相談を強く推奨します。',
          aEn: 'Authentication is not provided. This service focuses on AI-based era and model estimation, not counterfeit detection. For high-value purchases or sales, we strongly recommend consulting an expert.',
        },
        {
          qJa: 'どのAIを使っていますか？',
          qEn: 'Which AI is used?',
          aJa: 'Google Gemini APIを使用しています。Geminiは画像解析に優れたGoogleのAIで、複数の写真から鑑定ポイントを読み取り、膨大なヴィンテージLevi\'sに関する知識をもとに推定を行います。',
          aEn: "The service uses the Google Gemini API — Google's AI with strong image analysis capabilities. Gemini reads identification points from multiple photos and estimates based on extensive knowledge of vintage Levi's.",
        },
        {
          qJa: '対応している型番・年代はどのくらいですか？',
          qEn: 'Which models and eras are covered?',
          aJa: '501・505・517・557XXなどの主要型番と、1930年代〜1990年代までのヴィンテージモデルに対応しています。Big E期（1971年以前）・Small e期・セルビッジ有無など主要な判定ポイントをカバーしています。',
          aEn: 'Major models including 501, 505, 517, and 557XX are supported, covering vintage pieces from the 1930s through 1990s. Key identification points including Big E era (pre-1971), Small e era, and selvedge presence are all covered.',
        },
      ],
    },
    {
      catJa: '写真・プライバシーについて',
      catEn: 'Photos & Privacy',
      items: [
        {
          qJa: 'アップロードした写真はどこに保存されますか？',
          qEn: 'Where are uploaded photos stored?',
          aJa: '当サービスのサーバーには保存されません。写真はAI鑑定処理（Google Gemini APIへの送信）のみに使用され、処理完了後に破棄されます。',
          aEn: 'Photos are not stored on our servers. They are used solely for AI identification processing (transmission to Google Gemini API) and discarded after processing.',
        },
        {
          qJa: 'どんな写真を撮ればいいですか？',
          qEn: 'What photos should I take?',
          aJa: '赤タブ（両面）・ケアラベル・ジッパーの3点が必須です。さらにボタン裏刻印・セルビッジ（裾内側）・バックポケットステッチを追加すると精度が上がります。詳しくは撮影ガイドをご覧ください。',
          aEn: 'Red tab (both sides), care label, and zipper are the three essentials. Adding button back stamps, selvedge (inside hem), and back pocket stitching improves accuracy. See the Photo Guide for details.',
        },
        {
          qJa: '写真はどれくらい鮮明である必要がありますか？',
          qEn: 'How clear do the photos need to be?',
          aJa: '刻印・タブの文字が読み取れるほど鮮明であることが重要です。スマートフォンのマクロモードや、刻印に斜め45度から光を当てて撮影することで精度が上がります。',
          aEn: 'Photos should be clear enough to read stamps and tab text. Using smartphone macro mode and holding a light at 45-degree angles to stamps significantly improves image quality.',
        },
      ],
    },
    {
      catJa: '鑑定結果について',
      catEn: 'About Results',
      items: [
        {
          qJa: '鑑定結果はどこに表示されますか？',
          qEn: 'Where are results displayed?',
          aJa: '写真をアップロードして送信すると、同じページに鑑定結果が表示されます。年代・型番・製造工場・信頼度スコアとともに、eBay・メルカリへの参考検索リンクも表示されます。',
          aEn: 'After uploading and submitting photos, results appear on the same page. Era, model, factory, and confidence score are shown, along with reference search links to eBay and Mercari.',
        },
        {
          qJa: '鑑定結果を保存することはできますか？',
          qEn: 'Can I save my identification results?',
          aJa: '現在、結果の保存機能はございません。必要な情報はスクリーンショットやメモでの保存をお願いします。',
          aEn: 'Result saving is not currently available. Please use a screenshot or note to save any important information.',
        },
        {
          qJa: '結果が「判定不能」と表示されました',
          qEn: 'The result says "unable to identify"',
          aJa: '写真の枚数が少ない・ピントが合っていない・撮影ポイントが不足している場合に判定できないことがあります。撮影ガイドを参照して、より鮮明な写真・複数のポイントの写真を再送信してください。',
          aEn: "This may occur when photos are insufficient, out of focus, or key identification points are missing. Please refer to the Photo Guide and resubmit clearer photos covering more identification points.",
        },
      ],
    },
  ];

  // FAQPage JSON-LD（全カテゴリのQ&Aを平坦化）
  const allFaqs = faqs.flatMap(cat => cat.items);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(item => ({
      '@type': 'Question',
      name: isJa ? item.qJa : item.qEn,
      acceptedAnswer: {
        '@type': 'Answer',
        text: isJa ? item.aJa : item.aEn,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale} />
      <StitchLine />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <p className="font-mono text-[10px] tracking-[4px] text-stitch uppercase mb-4">
          {t('よくある質問', 'Frequently Asked Questions')}
        </p>
        <h1 className="font-playfair font-bold text-[#f0ebe0] mb-12" style={{fontSize:'clamp(28px,5vw,42px)'}}>
          FAQ
        </h1>

        {faqs.map((cat) => (
          <section key={cat.catJa} className="mb-14">
            <h2 className="font-mono text-[10px] tracking-[4px] text-stitch uppercase mb-6 pb-3 border-b border-stitch/20">
              {t(cat.catJa, cat.catEn)}
            </h2>
            <div className="space-y-6">
              {cat.items.map((item, i) => (
                <div key={i} className="card-denim p-6">
                  <p className="font-playfair font-bold text-[#e8d5a3] text-base mb-3 leading-snug">
                    Q. {t(item.qJa, item.qEn)}
                  </p>
                  <p className="text-sm text-[#f0ebe0]/80 font-light leading-loose">
                    {t(item.aJa, item.aEn)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="stitch-line my-8" />

        {/* 解決しない場合 */}
        <div className="card-denim p-8 text-center mb-8">
          <p className="font-mono text-[10px] tracking-[3px] text-stitch uppercase mb-4">
            {t('解決しない場合', 'Still have questions?')}
          </p>
          <p className="text-sm text-fade font-light mb-6 leading-loose">
            {t(
              'ご不明な点はお問い合わせページからご連絡ください。',
              'For anything not covered above, please contact us through the contact page.'
            )}
          </p>
          <Link href={p('/contact')} className="inline-block font-mono text-xs tracking-[3px] uppercase border border-stitch/40 text-stitch px-8 py-3 rounded hover:bg-stitch/10 transition-colors">
            {t('お問い合わせ', 'Contact Us')}
          </Link>
        </div>

        <div className="text-center">
          <Link href={p('/identify')} className="inline-block font-mono text-xs tracking-[3px] uppercase bg-rust text-white px-10 py-4 rounded hover:bg-red-500 transition-colors">
            {t('無料でAI鑑定する', 'Identify for Free')}
          </Link>
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
