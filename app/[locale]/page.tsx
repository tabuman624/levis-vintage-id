import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';

export default async function TopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const p = (path: string) => locale === 'ja' ? path : `/en${path}`;

  const steps = [
    {
      num: '01',
      titleJa: '写真を撮る', titleEn: 'Take Photos',
      descJa: '赤タブ・ケアラベル・ジッパーなど鑑定ポイントをアップロード。撮影ガイドに従えば初心者でも簡単。',
      descEn: 'Upload photos of key points like the red tab, care label, and zipper. Easy with our photo guide.',
    },
    {
      num: '02',
      titleJa: 'AIが分析', titleEn: 'AI Analyzes',
      descJa: 'Google Gemini AIが複数の鑑定ポイントを照合し、年代・型番を推定します。',
      descEn: 'Google Gemini AI cross-references multiple identification points to estimate era and model.',
    },
    {
      num: '03',
      titleJa: '結果を確認', titleEn: 'Get Results',
      descJa: '年代・型番・製造工場・信頼度スコアを表示。eBay・メルカリへの検索リンク付き。',
      descEn: 'View era, model, factory, and confidence score — with links to eBay and Mercari.',
    },
  ];

  const features = [
    { titleJa: '完全無料', titleEn: 'Free to Use', descJa: '登録・課金なしで利用できます。', descEn: 'No sign-up or payment required.' },
    { titleJa: 'プライバシー保護', titleEn: 'Privacy First', descJa: '写真はサーバーに保存されません。', descEn: 'Photos are never stored on our servers.' },
    { titleJa: '日英対応', titleEn: 'Bilingual', descJa: '日本語・英語に対応しています。', descEn: 'Available in Japanese and English.' },
    { titleJa: '複数ポイント照合', titleEn: 'Multi-Point Analysis', descJa: 'タブ・ジッパー・ラベルを組み合わせて精度UP。', descEn: 'Combines multiple points for higher accuracy.' },
  ];

  return (
    <>
      <Header locale={locale} />

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-8 py-32">
        <p style={{fontFamily:'DM Mono,monospace',fontSize:'11px',letterSpacing:'5px',color:'#e8d5a3',textTransform:'uppercase',marginBottom:'24px',opacity:0.9}}>
          {t('AI ヴィンテージ鑑定サービス', 'AI Vintage Identification Service')}
        </p>
        <h1 style={{fontFamily:'Playfair Display,serif',fontWeight:'bold',lineHeight:1,marginBottom:'16px',fontSize:'clamp(52px,10vw,110px)'}}>
          <span style={{color:'#e8d5a3'}}>LEVI&apos;S</span>
        </h1>
        <p style={{fontFamily:'Playfair Display,serif',fontWeight:'bold',color:'#f0ebe0',letterSpacing:'6px',marginBottom:'40px',fontSize:'clamp(28px,5vw,56px)'}}>
          VINTAGE ID.
        </p>
        <p style={{fontSize:'14px',color:'#b8cce4',fontWeight:300,lineHeight:2,maxWidth:'480px',marginBottom:'48px'}}>
          {t('写真を撮るだけ。年代・型番・製造工場をAIが即座に鑑定します。', 'Just take a photo. AI instantly identifies the era, model & factory.')}
        </p>
        <div style={{display:'flex',gap:'16px',flexWrap:'wrap',justifyContent:'center'}}>
          <Link href={p('/identify')} style={{fontFamily:'DM Mono,monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',background:'#c0392b',color:'white',padding:'18px 40px',borderRadius:'4px',textDecoration:'none'}}>
            {t('無料で鑑定する', 'Identify for Free')}
          </Link>
          <Link href={p('/guide')} style={{fontFamily:'DM Mono,monospace',fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',color:'#e8d5a3',border:'1px solid rgba(232,213,163,0.3)',padding:'18px 32px',borderRadius:'4px',textDecoration:'none'}}>
            {t('使い方を見る', 'How It Works')}
          </Link>
        </div>
      </section>

      <StitchLine />

      {/* Steps */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-24">
        <p style={{fontFamily:'DM Mono,monospace',fontSize:'9px',letterSpacing:'4px',color:'#e8d5a3',textTransform:'uppercase',marginBottom:'12px',opacity:0.8}}>
          {t('使い方', 'How It Works')}
        </p>
        <h2 style={{fontFamily:'Playfair Display,serif',fontWeight:'bold',color:'#f0ebe0',fontSize:'36px',marginBottom:'48px'}}>
          {t('3ステップで鑑定完了', '3 Steps to Identification')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="card-denim p-8">
              <div style={{fontFamily:'Playfair Display,serif',fontWeight:'bold',color:'rgba(232,213,163,0.15)',fontSize:'64px',lineHeight:1,marginBottom:'16px'}}>{s.num}</div>
              <div style={{fontFamily:'DM Mono,monospace',fontSize:'11px',letterSpacing:'2px',color:'#e8d5a3',textTransform:'uppercase',marginBottom:'12px'}}>{t(s.titleJa, s.titleEn)}</div>
              <p style={{fontSize:'13px',color:'#b8cce4',fontWeight:300,lineHeight:1.8}}>{t(s.descJa, s.descEn)}</p>
            </div>
          ))}
        </div>
      </section>

      <StitchLine />

      {/* Features */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-24">
        <p style={{fontFamily:'DM Mono,monospace',fontSize:'9px',letterSpacing:'4px',color:'#e8d5a3',textTransform:'uppercase',marginBottom:'12px',opacity:0.8}}>
          {t('特徴', 'Features')}
        </p>
        <h2 style={{fontFamily:'Playfair Display,serif',fontWeight:'bold',color:'#f0ebe0',fontSize:'36px',marginBottom:'48px'}}>
          {t("LEVI'S VINTAGE ID. の特徴", "Why LEVI'S VINTAGE ID.")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div key={i} className="card-denim p-6">
              <div style={{fontFamily:'DM Mono,monospace',fontSize:'10px',letterSpacing:'2px',color:'#e8d5a3',textTransform:'uppercase',marginBottom:'8px'}}>{t(f.titleJa, f.titleEn)}</div>
              <p style={{fontSize:'13px',color:'#b8cce4',fontWeight:300,lineHeight:1.7}}>{t(f.descJa, f.descEn)}</p>
            </div>
          ))}
        </div>
      </section>

      <StitchLine />

      {/* CTA */}
      <section className="relative z-10 text-center px-8 py-24" style={{background:'rgba(26,42,58,0.3)'}}>
        <h2 style={{fontFamily:'Playfair Display,serif',fontWeight:'bold',color:'#f0ebe0',fontSize:'clamp(24px,4vw,40px)',marginBottom:'16px'}}>
          {t('あなたのリーバイスを', 'Identify Your')}{' '}
          <span style={{color:'#e8d5a3'}}>{t('今すぐ鑑定しよう', "Levi's Now")}</span>
        </h2>
        <p style={{fontSize:'14px',color:'#b8cce4',fontWeight:300,marginBottom:'40px'}}>
          {t('写真を用意して、無料で試してみてください', 'Grab your photos and try it free')}
        </p>
        <Link href={p('/identify')} style={{display:'inline-block',fontFamily:'DM Mono,monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',background:'#c0392b',color:'white',padding:'18px 40px',borderRadius:'4px',textDecoration:'none'}}>
          {t('無料で鑑定する →', 'Identify for Free →')}
        </Link>
      </section>

      <Footer locale={locale} />
    </>
  );
}
