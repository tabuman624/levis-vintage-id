import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';
import Link from 'next/link';

// Google FormsのURLをここに設定してください
const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-url-here';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const p = (path: string) => locale === 'ja' ? path : `/en${path}`;

  return (
    <>
      <Header locale={locale} />
      <StitchLine />
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16">
        <p style={{fontFamily:'DM Mono,monospace',fontSize:'9px',letterSpacing:'3px',color:'#e8d5a3',textTransform:'uppercase',marginBottom:'16px'}}>
          {t('お問い合わせ', 'Contact')}
        </p>
        <h1 style={{fontFamily:'Playfair Display,serif',fontSize:'clamp(28px,5vw,42px)',fontWeight:'bold',color:'#f0ebe0',marginBottom:'16px'}}>
          {t('ご連絡はこちら', 'Get in Touch')}
        </h1>
        <p style={{fontSize:'14px',color:'#b8cce4',fontWeight:300,lineHeight:2,marginBottom:'48px'}}>
          {t(
            '鑑定結果に関するご質問、誤りのご報告、ご意見・ご要望などお気軽にご連絡ください。通常2〜5営業日以内にご返信いたします。',
            'Feel free to reach out with questions about identification results, error reports, or any feedback. We typically respond within 2–5 business days.'
          )}
        </p>

        {/* お問い合わせボタン */}
        <div style={{background:'rgba(25,50,88,0.5)',border:'1px dashed rgba(232,213,163,0.25)',borderRadius:'8px',padding:'40px',marginBottom:'32px',textAlign:'center'}}>
          <p style={{fontFamily:'DM Mono,monospace',fontSize:'10px',letterSpacing:'2px',color:'#e8d5a3',textTransform:'uppercase',marginBottom:'16px'}}>
            {t('お問い合わせフォーム', 'Contact Form')}
          </p>
          <p style={{fontSize:'13px',color:'rgba(184,204,228,0.8)',fontWeight:300,lineHeight:1.8,marginBottom:'24px'}}>
            {t(
              'Googleフォームよりお問い合わせいただけます。',
              'Please use the Google Form below to contact us.'
            )}
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{display:'inline-block',background:'#c0392b',color:'white',fontFamily:'DM Mono,monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',textDecoration:'none',padding:'14px 32px',borderRadius:'4px'}}
          >
            {t('フォームを開く', 'Open Contact Form')}
          </a>
        </div>

        {/* よくある質問 */}
        <div style={{background:'rgba(25,50,88,0.5)',border:'1px dashed rgba(232,213,163,0.25)',borderRadius:'8px',padding:'32px',marginBottom:'32px'}}>
          <p style={{fontFamily:'DM Mono,monospace',fontSize:'10px',letterSpacing:'2px',color:'#e8d5a3',textTransform:'uppercase',marginBottom:'20px'}}>
            {t('よくある質問', 'FAQ')}
          </p>
          {[
            {
              qJa: 'AI鑑定の精度はどのくらいですか？',
              qEn: 'How accurate is the AI identification?',
              aJa: '複数の鑑定ポイント（赤タブ・ケアラベル・ジッパー等）の写真を組み合わせることで精度が上がります。写真が鮮明なほど、また多いほど正確な判定が可能です。',
              aEn: 'Accuracy improves with more identification points (red tab, care label, zipper, etc.). Clearer and more photos yield more accurate results.',
            },
            {
              qJa: 'アップロードした写真はどうなりますか？',
              qEn: 'What happens to my uploaded photos?',
              aJa: 'アップロードされた写真はAI鑑定処理のためのみ使用され、当サービスのサーバーに保存されることはありません。',
              aEn: 'Uploaded photos are used solely for AI identification processing and are never stored on our servers.',
            },
            {
              qJa: '鑑定結果の保証はありますか？',
              qEn: 'Are identification results guaranteed?',
              aJa: '本サービスの鑑定結果はAIによる推定であり、正確性を保証するものではありません。真贋鑑定は行っておりません。高額品の取引は専門家への相談を推奨します。',
              aEn: 'Results are AI estimates only and are not guaranteed for accuracy. We do not authenticate genuineness. For high-value transactions, consult an expert.',
            },
            {
              qJa: 'Levi Strauss & Co.の公式サービスですか？',
              qEn: 'Is this an official Levi Strauss & Co. service?',
              aJa: 'いいえ。本サービスはLevi Strauss & Co.とは無関係の独立したサービスです。',
              aEn: "No. This is an independent service with no affiliation with Levi Strauss & Co.",
            },
          ].map((faq, i) => (
            <div key={i} style={{marginBottom: i < 3 ? '24px' : '0', paddingBottom: i < 3 ? '24px' : '0', borderBottom: i < 3 ? '1px solid rgba(232,213,163,0.1)' : 'none'}}>
              <p style={{fontSize:'13px',color:'#e8d5a3',fontWeight:500,marginBottom:'8px'}}>
                Q. {t(faq.qJa, faq.qEn)}
              </p>
              <p style={{fontSize:'13px',color:'rgba(240,235,224,0.75)',fontWeight:300,lineHeight:1.8}}>
                A. {t(faq.aJa, faq.aEn)}
              </p>
            </div>
          ))}
        </div>

        <div style={{textAlign:'center'}}>
          <Link href={p('/identify')} style={{display:'inline-block',background:'#c0392b',color:'white',fontFamily:'DM Mono,monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',textDecoration:'none',padding:'14px 32px',borderRadius:'4px'}}>
            {t('無料でAI鑑定する', 'Identify for Free')}
          </Link>
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
