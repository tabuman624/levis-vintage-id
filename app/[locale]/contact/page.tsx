import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';
import Link from 'next/link';

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
            '鑑定結果のご質問、誤りのご報告、ご意見・ご要望がございましたらお気軽にお問い合わせください。',
            'For questions about identification results, error reports, or any feedback, please feel free to contact us.'
          )}
        </p>

        <div style={{background:'rgba(25,50,88,0.5)',border:'1px dashed rgba(232,213,163,0.25)',borderRadius:'8px',padding:'32px',marginBottom:'32px'}}>
          <p style={{fontFamily:'DM Mono,monospace',fontSize:'10px',letterSpacing:'2px',color:'#e8d5a3',textTransform:'uppercase',marginBottom:'12px'}}>
            {t('お問い合わせ方法', 'How to Contact')}
          </p>
          <p style={{fontSize:'14px',color:'rgba(240,235,224,0.85)',fontWeight:300,lineHeight:2}}>
            {t(
              '現在、メールフォームを準備中です。お問い合わせはAI鑑定ページのフィードバック機能をご利用いただくか、しばらくお待ちください。',
              'Our contact form is currently being set up. For now, please use the feedback feature on the AI identification page, or check back soon.'
            )}
          </p>
        </div>

        <div style={{background:'rgba(25,50,88,0.5)',border:'1px dashed rgba(232,213,163,0.25)',borderRadius:'8px',padding:'32px',marginBottom:'32px'}}>
          <p style={{fontFamily:'DM Mono,monospace',fontSize:'10px',letterSpacing:'2px',color:'#e8d5a3',textTransform:'uppercase',marginBottom:'12px'}}>
            {t('よくある質問', 'FAQ')}
          </p>
          {[
            {
              qJa: 'AI鑑定の精度はどのくらいですか？',
              qEn: 'How accurate is the AI identification?',
              aJa: '複数の鑑定ポイント（赤タブ・ケアラベル・ジッパー等）の写真を組み合わせることで精度が上がります。写真が鮮明なほど、また多いほど正確な判定が可能です。',
              aEn: 'Accuracy improves with more identification points (red tab, care label, zipper, etc.). Clearer photos and more points submitted together yield more accurate results.',
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
              aJa: '本サービスの鑑定結果はAIによる推定であり、正確性を保証するものではありません。真贋鑑定は行っておりません。',
              aEn: 'Results are AI estimates only and are not guaranteed for accuracy. We do not authenticate genuineness.',
            },
          ].map((faq, i) => (
            <div key={i} style={{marginBottom: i < 2 ? '24px' : '0', paddingBottom: i < 2 ? '24px' : '0', borderBottom: i < 2 ? '1px solid rgba(232,213,163,0.1)' : 'none'}}>
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
            {t('AI鑑定を試す', 'Try AI Identification')}
          </Link>
        </div>
      </div>
      <Footer locale={locale} />
    </>
  );
}
