import type { Metadata } from 'next';
import JacketIdentifyClient from './JacketIdentifyClient';

const BASE_URL = 'https://www.levis-id.com';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isJa = locale === 'ja';
  const url = isJa ? `${BASE_URL}/jacket` : `${BASE_URL}/en/jacket`;

  return {
    title: isJa
      ? "リーバイスGジャン年代判定AI | Type I/II/III（506XX/507XX/70505）鑑定 | LEVI'S VINTAGE ID."
      : "Vintage Levi's Jacket AI Identification | Type I/II/III (506XX/507XX/70505) | LEVI'S VINTAGE ID.",
    description: isJa
      ? '写真をアップロードするだけで、ヴィンテージリーバイスGジャンのType・年代・型番をAIが即座に鑑定。506XX・507XX・557XX・70505に完全対応。無料。'
      : "Upload photos and AI instantly identifies your vintage Levi's denim jacket type, era, and model. Full support for 506XX, 507XX, 557XX, and 70505. Free.",
    keywords: isJa
      ? ['リーバイス Gジャン', 'リーバイス ジャケット 年代', '506XX', '507XX', '557XX', '70505', 'Type I', 'Type II', 'Type III', 'リーバイス トラッカージャケット', 'ヴィンテージ Gジャン 判別', 'Big E ジャケット']
      : ["Levi's denim jacket vintage", "506XX jacket", "507XX jacket", "70505 jacket", "Type I Type II Type III Levi's", "vintage trucker jacket dating", "Big E jacket"],
    alternates: {
      canonical: url,
      languages: {
        'ja': `${BASE_URL}/jacket`,
        'en': `${BASE_URL}/en/jacket`,
      },
    },
    openGraph: {
      title: isJa
        ? "リーバイスGジャン AI年代鑑定 | LEVI'S VINTAGE ID."
        : "Levi's Vintage Jacket AI Identification | LEVI'S VINTAGE ID.",
      description: isJa
        ? '506XX・507XX・557XX・70505に対応。写真から年代・TypeをAIが判定。無料。'
        : 'Supports 506XX, 507XX, 557XX, 70505. AI identifies era and type from photos. Free.',
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

export default async function JacketPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <JacketIdentifyClient locale={locale} />;
}
