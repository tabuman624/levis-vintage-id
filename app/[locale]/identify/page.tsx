import type { Metadata } from 'next';
import IdentifyClient from './IdentifyClient';

const BASE_URL = 'https://www.levis-id.com';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isJa = locale === 'ja';
  const url = isJa ? `${BASE_URL}/identify` : `${BASE_URL}/en/identify`;

  return {
    title: isJa
      ? "リーバイスジーンズ年代判定AI | 写真で即座に鑑定 | LEVI'S VINTAGE ID."
      : "Vintage Levi's Jeans AI Identification | Instant Era Dating from Photos | LEVI'S VINTAGE ID.",
    description: isJa
      ? '写真をアップロードするだけで、ヴィンテージリーバイスジーンズの年代・型番・製造工場をAIが即座に鑑定。赤タブ・ケアラベル・ジッパー・セルビッジを総合判定。完全無料。'
      : "Upload photos and AI instantly identifies your vintage Levi's jeans era, model number, and factory. Analyzes red tab, care label, zipper, and selvedge together. Completely free.",
    keywords: isJa
      ? ['リーバイス 年代判定', 'リーバイス 鑑定', 'ヴィンテージ リーバイス', 'Big E 判定', 'リーバイス 赤タブ', 'ケアラベル 年代', 'セルビッジ 判定', 'AI 鑑定', '501 年代', 'リーバイス 型番']
      : ["Levi's vintage dating", "vintage Levi's identification", 'Big E', 'red tab dating', 'care label era', 'selvedge dating', 'AI identification', '501 vintage', "Levi's model number"],
    alternates: {
      canonical: url,
      languages: {
        'ja': `${BASE_URL}/identify`,
        'en': `${BASE_URL}/en/identify`,
      },
    },
    openGraph: {
      title: isJa
        ? 'リーバイスジーンズ AI年代鑑定 | LEVI\'S VINTAGE ID.'
        : "Vintage Levi's Jeans AI Identification | LEVI'S VINTAGE ID.",
      description: isJa
        ? '写真をアップロードするだけで年代・型番・製造工場をAIが判定。完全無料。'
        : 'Upload photos and AI instantly identifies era, model, and factory. Free.',
      url,
      siteName: "LEVI'S VINTAGE ID.",
      locale: isJa ? 'ja_JP' : 'en_US',
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }];
}

export default async function IdentifyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <IdentifyClient locale={locale} />;
}
