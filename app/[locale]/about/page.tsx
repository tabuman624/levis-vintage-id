import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';

const BASE_URL = 'https://www.levis-id.com';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isJa = locale === 'ja';
  const url = isJa ? `${BASE_URL}/about` : `${BASE_URL}/en/about`;
  return {
    title: isJa
      ? "このサービスについて | LEVI'S VINTAGE ID."
      : "About | LEVI'S VINTAGE ID.",
    description: isJa
      ? "LEVI'S VINTAGE ID.はGoogle Gemini AIを使用したヴィンテージLevi'sジーンズの年代・型番・製造工場を無料で鑑定するサービスです。鑑定の根拠・方法論・AI精度・免責事項を詳しく解説。"
      : "LEVI'S VINTAGE ID. is a free AI service using Google Gemini to identify vintage Levi's jeans by era, model, and factory. Learn about our methodology, AI accuracy, and disclaimer.",
    alternates: {
      canonical: url,
      languages: {
        'ja': `${BASE_URL}/about`,
        'en': `${BASE_URL}/en/about`,
      },
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }];
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const p = (path: string) => locale === 'ja' ? path : `/en${path}`;

  return (
    <>
      <Header locale={locale} />
      <StitchLine />
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16">
        <p className="font-mono text-[10px] tracking-[4px] text-stitch uppercase mb-4">
          {t('サービスについて', 'About')}
        </p>
        <h1 className="font-playfair font-bold text-[#f0ebe0] text-4xl mb-12">
          {t("LEVI'S VINTAGE ID. とは", "About LEVI'S VINTAGE ID.")}
        </h1>

        {/* ミッション */}
        <section className="mb-12">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">
            {t('サービスのミッション', 'Our Mission')}
          </h2>
          <p className="text-sm text-[#f0ebe0]/85 leading-loose font-light mb-4">
            {t(
              'LEVI\'S VINTAGE ID. は、ヴィンテージLevi\'sジーンズの年代・型番・製造工場をAIが即座に判定する無料サービスです。',
              "LEVI'S VINTAGE ID. is a free service that uses AI to instantly identify the era, model, and manufacturing factory of vintage Levi's jeans."
            )}
          </p>
          <p className="text-sm text-[#f0ebe0]/85 leading-loose font-light">
            {t(
              'ヴィンテージジーンズの鑑定は、赤タブ・ケアラベル・ジッパーブランド・ボタン刻印など複数の「鑑定ポイント」を複合的に読み解く専門知識が必要です。このサービスは、その専門的な知識をAIが代替することで、初めてヴィンテージLevi\'sに触れる方から長年のコレクターまで、誰でも手軽に自分のLevi\'sを鑑定できる環境を提供することを目指しています。',
              "Identifying vintage jeans requires specialized knowledge to cross-reference multiple 'identification points' — red tab, care label, zipper brand, button stamps, and more. This service uses AI to handle that expertise, making vintage Levi's identification accessible to everyone from first-time buyers to veteran collectors."
            )}
          </p>
        </section>

        {/* なぜ作ったか */}
        <section className="mb-12">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">
            {t('なぜこのサービスを作ったか', 'Why We Built This')}
          </h2>
          <p className="text-sm text-[#f0ebe0]/85 leading-loose font-light mb-4">
            {t(
              'フリマアプリやオークションでヴィンテージLevi\'sを売買する際、「これは本当にBig Eなのか？」「1950年代なのか1970年代なのか？」という疑問を持ちながらも、専門知識がなければ判断できないという状況が多く存在します。',
              "When buying or selling vintage Levi's on marketplace apps or auctions, many people face questions like 'Is this really a Big E?' or 'Is this from the 1950s or 1970s?' — questions that can't be answered without specialist knowledge."
            )}
          </p>
          <p className="text-sm text-[#f0ebe0]/85 leading-loose font-light">
            {t(
              '専門書や経験者のコミュニティに頼るのが従来の方法でしたが、それには時間と人脈が必要でした。スマートフォンで写真を撮るだけで、すぐに鑑定結果が得られるツールがあれば多くの人に役立てると考え、Google Gemini AIを活用したこのサービスを開発しました。',
              "The traditional approach was to consult reference books or experienced collector communities — requiring time and connections. We built this service using Google Gemini AI because a tool that delivers instant results from a smartphone photo would help countless people."
            )}
          </p>
        </section>

        {/* 使用技術 */}
        <section className="mb-12">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">
            {t('使用技術・AI', 'Technology & AI')}
          </h2>
          <p className="text-sm text-[#f0ebe0]/85 leading-loose font-light mb-4">
            {t(
              'AI鑑定エンジンにはGoogle Gemini APIを使用しています。Geminiは写真の複数の鑑定ポイントを同時に解析し、過去のヴィンテージLevi\'sに関する膨大な知識をもとに年代・型番・製造工場を推定します。',
              'The AI identification engine uses the Google Gemini API. Gemini simultaneously analyzes multiple identification points in photos and estimates era, model, and manufacturing factory based on its extensive knowledge of vintage Levi\'s.'
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { labelJa: 'AIエンジン', labelEn: 'AI Engine', val: 'Google Gemini' },
              { labelJa: 'フレームワーク', labelEn: 'Framework', val: 'Next.js 15' },
              { labelJa: 'ホスティング', labelEn: 'Hosting', val: 'Vercel' },
            ].map((item) => (
              <div key={item.val} className="card-denim p-4 text-center">
                <p className="font-mono text-[9px] text-stitch uppercase tracking-widest mb-2">
                  {t(item.labelJa, item.labelEn)}
                </p>
                <p className="font-playfair font-bold text-[#f0ebe0] text-base">{item.val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 鑑定の根拠・方法論 */}
        <section className="mb-12">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">
            {t('鑑定の根拠と方法論', 'Identification Methodology')}
          </h2>
          <p className="text-sm text-[#f0ebe0]/85 leading-loose font-light mb-6">
            {t(
              'このサービスのAI鑑定は、ヴィンテージLevi\'s研究の蓄積された知見に基づいています。鑑定に使用する主要な指標は以下の通りです。',
              "This service's AI identification is grounded in the accumulated research of vintage Levi's scholarship. The primary indicators used for identification are as follows."
            )}
          </p>
          <div className="space-y-3">
            {[
              {
                ja: '赤タブ表記（Big E / Small e）：1971年7月を境に両面大文字→片面小文字に変更。アメリカ連邦裁判所でも商標として認定された確実な年代指標。',
                en: 'Red tab (Big E / Small e): Changed from both-sides uppercase to one-side lowercase in July 1971. A definitive era indicator recognized as a trademark by US federal courts.',
              },
              {
                ja: 'ケアラベルの有無と内容：1971年FTC「Care Labeling Rule」施行による義務化。法的根拠のある最確実指標のひとつ。',
                en: 'Care label presence and content: Made mandatory by the 1971 FTC Care Labeling Rule. One of the most legally grounded era indicators.',
              },
              {
                ja: 'ジッパーブランド：TALON 42（1950〜60年代）→ TALON（60年代後半〜70年代前半）→ YKK（70年代以降）の変遷は公式製造記録と一致。',
                en: 'Zipper brand: TALON 42 (1950s–60s) → TALON (late 60s–early 70s) → YKK (post-70s) transitions align with official manufacturing records.',
              },
              {
                ja: 'セルビッジデニム：シャトル織機からロータリー織機への1981年移行は製造設備の変更記録により確認された事実。',
                en: 'Selvedge denim: The 1981 transition from shuttle to rotary looms is confirmed by documented manufacturing equipment changes.',
              },
              {
                ja: 'パッチ素材（本革→Jacron→合皮）：1954年頃の本革からJacronへの変更はリーバイス社の調達コスト記録と一致。',
                en: "Patch material (leather → Jacron → synthetic): The c.1954 leather-to-Jacron change aligns with Levi's procurement cost records.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 text-sm text-[#f0ebe0]/80 font-light leading-loose">
                <span className="text-stitch flex-shrink-0 font-mono text-xs mt-1">{String(i+1).padStart(2,'0')}</span>
                <span>{t(item.ja, item.en)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 参考情報・外部リンク */}
        <section className="mb-12">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">
            {t('参考情報・一次資料', 'Reference Sources')}
          </h2>
          <p className="text-sm text-[#f0ebe0]/85 leading-loose font-light mb-4">
            {t(
              'ヴィンテージLevi\'sの年代判定に関心のある方向けに、信頼性の高い外部リソースを紹介します。',
              'For those interested in vintage Levi\'s dating, here are reliable external resources.'
            )}
          </p>
          <ul className="space-y-3">
            {[
              {
                ja: 'Levi Strauss & Co. 公式ブランド史',
                en: 'Levi Strauss & Co. Official Brand History',
                url: 'https://www.levistrauss.com/our-story/',
                note: { ja: '公式サイト（英語）', en: 'Official site (English)' },
              },
              {
                ja: 'Smithsonian National Museum of American History — ジーンズ史料',
                en: 'Smithsonian National Museum of American History — Jeans Collection',
                url: 'https://americanhistory.si.edu/collections/object-groups/blue-jeans',
                note: { ja: '学術機関（英語）', en: 'Academic institution (English)' },
              },
              {
                ja: 'FTC Care Labeling Rule（アメリカ連邦取引委員会）',
                en: 'FTC Care Labeling Rule (Federal Trade Commission)',
                url: 'https://www.ftc.gov/business-guidance/resources/threading-your-way-through-labeling-requirements-under-textile-and-wool-acts',
                note: { ja: '米国政府機関（英語）', en: 'US government agency (English)' },
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="text-stitch flex-shrink-0 mt-1">▸</span>
                <div>
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                    className="text-[#b8cce4] hover:text-stitch underline underline-offset-2 transition-colors">
                    {t(item.ja, item.en)}
                  </a>
                  <span className="text-[#f0ebe0]/40 font-mono text-[9px] ml-2">({t(item.note.ja, item.note.en)})</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 注意事項 */}
        <section className="mb-12">
          <h2 className="font-playfair font-bold text-[#e8d5a3] text-xl mb-4">
            {t('ご利用にあたっての注意', 'Important Notes')}
          </h2>
          <ul className="text-sm text-[#f0ebe0]/80 font-light space-y-4">
            {[
              {
                ja: '本サービスの鑑定結果はAIによる推定であり、正確性を100%保証するものではありません。',
                en: 'Identification results are AI estimates and do not guarantee 100% accuracy.',
              },
              {
                ja: '本サービスはLevi Strauss & Co.（リーバイ・ストラウス社）とは無関係の独立したサービスです。',
                en: "This Service is independent and has no affiliation with Levi Strauss & Co.",
              },
              {
                ja: '真贋鑑定（本物か偽物かの判定）は行っておりません。高額品の取引においては専門家へのご相談を強く推奨します。',
                en: 'We do not provide authentication services. For high-value transactions, we strongly recommend consulting an expert.',
              },
              {
                ja: 'アップロードした写真はAI処理後にサーバーへ保存されません。',
                en: 'Uploaded photos are not stored on our servers after AI processing.',
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-stitch flex-shrink-0 mt-1">▸</span>
                <span>{t(item.ja, item.en)}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="stitch-line my-8" />
        <div className="text-center">
          <p className="text-sm text-fade font-light mb-6">
            {t('まずはあなたのLevi\'sを鑑定してみてください', "Let's start by identifying your Levi's")}
          </p>
          <Link href={p('/identify')} className="inline-block font-mono text-xs tracking-[3px] uppercase bg-rust text-white px-10 py-4 rounded hover:bg-red-500 transition-colors">
            {t('無料でAI鑑定する', 'Identify for Free')}
          </Link>
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
