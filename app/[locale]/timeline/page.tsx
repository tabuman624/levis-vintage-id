import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';
import TimelineClient from './TimelineClient';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isJa = locale === 'ja';
  return {
    title: isJa
      ? "ヴィンテージLevi's 年代別タイムライン｜1873年〜2002年の変遷 | LEVI'S VINTAGE ID."
      : "Vintage Levi's Historical Timeline 1873–2002 | LEVI'S VINTAGE ID.",
    description: isJa
      ? '1873年の創業から2002年のMade in USA終了まで。Big E・ケアラベル・セルビッジ・TALON・日付コードなど鑑定に直結するLevi\'sの変遷を年表で解説。ジーンズ・ジャケット別タブ対応。'
      : "From 1873 founding to 2002 Made in USA end. Levi's changes that directly affect identification — Big E, care label, selvedge, TALON, date codes — presented as a historical timeline. Separate tabs for jeans and jackets.",
    alternates: {
      languages: {
        ja: 'https://www.levis-id.com/timeline',
        en: 'https://www.levis-id.com/en/timeline',
      },
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }];
}

export default async function TimelinePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isJa = locale === 'ja';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isJa
      ? "ヴィンテージLevi's 年代別タイムライン 1873〜2002"
      : "Vintage Levi's Historical Timeline 1873–2002",
    description: isJa
      ? 'Big E・ケアラベル・セルビッジ・TALON・日付コードなど鑑定に直結するLevi\'sの変遷を年表で解説。'
      : "Levi's changes that directly affect identification presented as a historical timeline.",
    url: isJa ? 'https://www.levis-id.com/timeline' : 'https://www.levis-id.com/en/timeline',
    datePublished: '2026-05-24',
    dateModified: '2026-05-31',
    author: { '@type': 'Organization', name: "LEVI'S VINTAGE ID.", url: 'https://www.levis-id.com' },
    publisher: { '@type': 'Organization', name: "LEVI'S VINTAGE ID.", url: 'https://www.levis-id.com' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale} />
      <StitchLine />
      <TimelineClient locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
