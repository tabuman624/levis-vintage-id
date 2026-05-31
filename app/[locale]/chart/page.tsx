import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StitchLine from '@/components/StitchLine';
import ChartClient from './ChartClient';

const BASE_URL = 'https://www.levis-id.com';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isJa = locale === 'ja';
  const url = isJa ? `${BASE_URL}/chart` : `${BASE_URL}/en/chart`;

  const title = isJa
    ? '年代判定チャート＆比較表 | ヴィンテージリーバイスの年代を見分ける'
    : 'Vintage Levi\'s Dating Chart & Comparison Tables';
  const desc = isJa
    ? 'ヴィンテージリーバイスの年代をステップ式で判定できるフローチャートと、年代別・型番別の仕様比較表。ジーンズ・ジャケット別タブ対応。Big E、ケアラベル、ジッパーブランドなど主要な判定ポイントを網羅。'
    : 'Step-by-step flowchart and comparison tables for dating vintage Levi\'s jeans and jackets. Covers Big E, care labels, zipper brands, selvedge, Type I/II/III jacket identification, and more.';

  return {
    title: `${title} | LEVI'S VINTAGE ID.`,
    description: desc,
    keywords: isJa
      ? ['年代判定', 'ヴィンテージリーバイス', 'フローチャート', 'Big E', 'ケアラベル', 'セルビッジ', '比較表', '501', 'ジャケット', 'Type1', 'Type2', 'Type3', '506XX', '557XX']
      : ['vintage levis dating', 'flowchart', 'Big E', 'care label', 'selvedge', 'comparison chart', '501', 'jacket type', '506XX', '557XX'],
    openGraph: {
      title: `${title} | LEVI'S VINTAGE ID.`,
      description: desc,
      url,
      siteName: "LEVI'S VINTAGE ID.",
      locale: isJa ? 'ja_JP' : 'en_US',
      type: 'article',
    },
    alternates: {
      canonical: url,
      languages: {
        'ja': `${BASE_URL}/chart`,
        'en': `${BASE_URL}/en/chart`,
      },
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }];
}

export default async function ChartPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isJa = locale === 'ja';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: isJa
      ? '年代判定チャート＆比較表 | ヴィンテージリーバイスの年代を見分ける'
      : 'Vintage Levi\'s Dating Chart & Comparison Tables',
    description: isJa
      ? 'ヴィンテージリーバイスの年代をステップ式で判定できるフローチャートと、年代別・型番別の仕様比較表。ジーンズ・ジャケット別タブ対応。'
      : 'Step-by-step flowchart and comparison tables for dating vintage Levi\'s jeans and jackets.',
    url: isJa ? `${BASE_URL}/chart` : `${BASE_URL}/en/chart`,
    datePublished: '2026-05-24',
    dateModified: '2026-05-31',
    inLanguage: isJa ? 'ja' : 'en',
    author: { '@type': 'Organization', name: "LEVI'S VINTAGE ID.", url: BASE_URL },
    publisher: { '@type': 'Organization', name: "LEVI'S VINTAGE ID.", url: BASE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale} />
      <StitchLine />
      <ChartClient locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
