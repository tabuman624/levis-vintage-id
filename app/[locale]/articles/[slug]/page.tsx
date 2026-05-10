import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';
import { ARTICLES, getArticle } from '@/lib/articles';

const BASE_URL = 'https://levis-vintage-id.vercel.app';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const isJa = locale === 'ja';
  const title = isJa ? article.titleJa : article.titleEn;
  const desc = isJa ? article.descJa : article.descEn;
  const url = isJa
    ? `${BASE_URL}/articles/${slug}`
    : `${BASE_URL}/en/articles/${slug}`;

  return {
    title: `${title} | LEVI'S VINTAGE ID.`,
    description: desc,
    keywords: article.tags,
    openGraph: {
      title: `${title} | LEVI'S VINTAGE ID.`,
      description: desc,
      url,
      siteName: "LEVI'S VINTAGE ID.",
      locale: isJa ? 'ja_JP' : 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LEVI'S VINTAGE ID.`,
      description: desc,
    },
    alternates: {
      canonical: url,
      languages: {
        'ja': `${BASE_URL}/articles/${slug}`,
        'en': `${BASE_URL}/en/articles/${slug}`,
      },
    },
  };
}

export function generateStaticParams() {
  return ARTICLES.flatMap((a) => [
    { locale: 'ja', slug: a.slug },
    { locale: 'en', slug: a.slug },
  ]);
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const t = (ja: string, en: string) => locale === 'ja' ? ja : en;
  const p = (path: string) => locale === 'ja' ? path : `/en${path}`;

  const related = ARTICLES
    .filter((a) => a.catJa === article.catJa && a.slug !== slug)
    .slice(0, 4);

  return (
    <>
      <Header locale={locale} />
      <StitchLine />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <nav style={{display:'flex',gap:'8px',marginBottom:'32px',fontFamily:'DM Mono,monospace',fontSize:'10px',color:'#b8cce4'}}>
          <Link href={p('/')} style={{color:'#b8cce4',textDecoration:'none'}}>TOP</Link>
          <span style={{opacity:0.4}}>/</span>
          <Link href={p('/articles')} style={{color:'#b8cce4',textDecoration:'none'}}>{t('記事一覧','Articles')}</Link>
          <span style={{opacity:0.4}}>/</span>
          <span style={{opacity:0.7}}>{t(article.titleJa, article.titleEn)}</span>
        </nav>

        <div style={{marginBottom:'48px'}}>
          <p style={{fontFamily:'DM Mono,monospace',fontSize:'9px',letterSpacing:'3px',color:'#e8d5a3',textTransform:'uppercase',marginBottom:'16px'}}>
            {t(article.catJa, article.catEn)}
          </p>
          <h1 style={{fontFamily:'Playfair Display,serif',fontSize:'clamp(26px,4.5vw,42px)',fontWeight:'bold',color:'#f0ebe0',lineHeight:1.2,marginBottom:'20px'}}>
            {t(article.titleJa, article.titleEn)}
          </h1>
          <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
            {article.tags.map((tag) => (
              <span key={tag} style={{fontFamily:'DM Mono,monospace',fontSize:'9px',color:'#1a2a3a',background:'rgba(232,213,163,0.8)',padding:'3px 10px',borderRadius:'2px'}}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div style={{marginBottom:'48px'}}>
          {article.sections.map((section, i) => (
            <div key={i} style={{marginBottom:'40px'}}>
              <h2 style={{fontFamily:'Playfair Display,serif',fontSize:'22px',fontWeight:'bold',color:'#e8d5a3',marginBottom:'16px',paddingBottom:'10px',borderBottom:'1px solid rgba(232,213,163,0.2)'}}>
                {t(section.headingJa, section.headingEn)}
              </h2>
              <p style={{fontSize:'14px',color:'rgba(240,235,224,0.85)',lineHeight:2.1,fontWeight:300}}>
                {t(section.bodyJa, section.bodyEn)}
              </p>
            </div>
          ))}
        </div>

        <div style={{background:'rgba(25,50,88,0.5)',border:'1px dashed rgba(232,213,163,0.25)',borderRadius:'8px',padding:'32px',textAlign:'center',marginBottom:'48px'}}>
          <p style={{fontSize:'13px',color:'#b8cce4',marginBottom:'20px',lineHeight:1.8,fontWeight:300}}>
            {t('写真をアップロードするだけで年代・型番・製造工場をAIが判定します','Upload photos and AI instantly identifies era, model & factory')}
          </p>
          <Link href={p('/identify')} style={{display:'inline-block',background:'#c0392b',color:'white',fontFamily:'DM Mono,monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',textDecoration:'none',padding:'14px 32px',borderRadius:'4px'}}>
            {t('無料でAI鑑定する','Identify for Free')}
          </Link>
        </div>

        {related.length > 0 && (
          <div>
            <p style={{fontFamily:'DM Mono,monospace',fontSize:'9px',letterSpacing:'3px',color:'#e8d5a3',textTransform:'uppercase',marginBottom:'16px',opacity:0.8}}>
              {t('関連記事','Related Articles')}
            </p>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'12px'}}>
              {related.map((a) => (
                <Link key={a.slug} href={p(`/articles/${a.slug}`)} style={{background:'rgba(25,50,88,0.45)',border:'1px dashed rgba(232,213,163,0.2)',borderRadius:'6px',padding:'16px 18px',textDecoration:'none',display:'block'}}>
                  <p style={{fontFamily:'DM Mono,monospace',fontSize:'8px',letterSpacing:'2px',color:'#e8d5a3',textTransform:'uppercase',marginBottom:'6px'}}>
                    {t(a.catJa, a.catEn)}
                  </p>
                  <p style={{fontSize:'13px',color:'#f0ebe0',lineHeight:1.5,fontWeight:300}}>
                    {t(a.titleJa, a.titleEn)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer locale={locale} />
    </>
  );
}
