import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';
import { ARTICLES, getArticle } from '@/lib/articles';

const BASE_URL = 'https://www.levis-id.com';

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

  const isJa = locale === 'ja';
  const articleUrl = isJa
    ? `${BASE_URL}/articles/${slug}`
    : `${BASE_URL}/en/articles/${slug}`;
  const publishedDate = article.publishedAt ?? '2026-04-01';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isJa ? article.titleJa : article.titleEn,
    description: isJa ? article.descJa : article.descEn,
    url: articleUrl,
    datePublished: publishedDate,
    dateModified: publishedDate,
    inLanguage: isJa ? 'ja' : 'en',
    author: {
      '@type': 'Organization',
      name: "LEVI'S VINTAGE ID.",
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: "LEVI'S VINTAGE ID.",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    keywords: article.tags.join(', '),
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

        {/* パンくずナビ */}
        <nav className="flex flex-wrap gap-2 mb-8 font-mono text-[10px] text-fade">
          <Link href={p('/')} className="text-fade hover:text-stitch transition-colors">TOP</Link>
          <span className="opacity-40">/</span>
          <Link href={p('/articles')} className="text-fade hover:text-stitch transition-colors">{t('記事一覧', 'Articles')}</Link>
          <span className="opacity-40">/</span>
          <span className="opacity-70 truncate max-w-[200px]">{t(article.titleJa, article.titleEn)}</span>
        </nav>

        {/* 記事ヘッダー */}
        <div className="mb-12">
          <p className="font-mono text-[9px] tracking-[3px] text-stitch uppercase mb-4">
            {t(article.catJa, article.catEn)}
          </p>
          <h1 className="font-playfair font-bold text-[#f0ebe0] leading-tight mb-5" style={{ fontSize: 'clamp(26px,4.5vw,42px)' }}>
            {t(article.titleJa, article.titleEn)}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag) => (
              <span key={tag} className="font-mono text-[9px] text-[#1a2a3a] bg-stitch/80 px-2.5 py-0.5 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
          <p className="font-mono text-[9px] text-fade/50 tracking-wide">
            {isJa
              ? `公開：${publishedDate.replace(/-/g, '.')}`
              : `Published: ${publishedDate}`}
          </p>
        </div>

        {/* 本文セクション */}
        <div className="mb-12">
          {article.sections.map((section, i) => (
            <div key={i} className="mb-10">
              <h2 className="font-playfair font-bold text-stitch text-xl mb-4 pb-2.5 border-b border-stitch/20">
                {t(section.headingJa, section.headingEn)}
              </h2>
              {t(section.bodyJa, section.bodyEn)
                .split('\n\n')
                .filter(Boolean)
                .map((para, pi) => (
                  <p key={pi} className="text-sm text-[#f0ebe0]/85 leading-loose font-light mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
            </div>
          ))}
        </div>

        {/* AI鑑定CTA */}
        <div className="card-denim p-8 text-center mb-12">
          <p className="text-sm text-fade font-light mb-5 leading-relaxed">
            {t(
              '写真をアップロードするだけで年代・型番・製造工場をAIが判定します',
              'Upload photos and AI instantly identifies era, model & factory'
            )}
          </p>
          <Link
            href={p('/identify')}
            className="inline-block bg-rust text-white font-mono text-xs tracking-[3px] uppercase px-8 py-3.5 rounded hover:bg-red-500 transition-colors"
          >
            {t('無料でAI鑑定する', 'Identify for Free')}
          </Link>
        </div>

        {/* 用語集・年表バナー */}
        <div className="card-denim px-6 py-5 mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[9px] tracking-[3px] text-fade uppercase mb-1">
              {t('用語を調べる', 'Look up terms')}
            </p>
            <p className="text-sm text-[#f0ebe0] font-light">
              {t(
                'Big E・セルビッジ・TALONなど鑑定用語を28語解説',
                '28 identification terms explained — Big E, selvedge, TALON & more'
              )}
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Link
              href={p('/glossary')}
              className="font-mono text-[10px] tracking-[2px] uppercase text-fade border border-fade/30 rounded px-4 py-2 whitespace-nowrap hover:bg-fade/10 transition-colors"
            >
              {t('用語集 →', 'Glossary →')}
            </Link>
            <Link
              href={p('/timeline')}
              className="font-mono text-[10px] tracking-[2px] uppercase text-fade border border-fade/30 rounded px-4 py-2 whitespace-nowrap hover:bg-fade/10 transition-colors"
            >
              {t('年表 →', 'Timeline →')}
            </Link>
          </div>
        </div>

        {/* 関連記事 */}
        {related.length > 0 && (
          <div>
            <p className="font-mono text-[9px] tracking-[3px] text-stitch/80 uppercase mb-4">
              {t('関連記事', 'Related Articles')}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={p(`/articles/${a.slug}`)}
                  className="card-denim px-4 py-4 block hover:border-stitch/40 transition-colors"
                >
                  <p className="font-mono text-[8px] tracking-[2px] text-stitch uppercase mb-1.5">
                    {t(a.catJa, a.catEn)}
                  </p>
                  <p className="text-sm text-[#f0ebe0] leading-snug font-light">
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
