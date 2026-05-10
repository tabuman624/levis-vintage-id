import type { Metadata } from 'next';
import '../globals.css';

const BASE_URL = 'https://levis-vintage-id.vercel.app';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isJa = locale === 'ja';

  return {
    title: isJa
      ? "LEVI'S VINTAGE ID. | ヴィンテージリーバイスAI鑑定"
      : "LEVI'S VINTAGE ID. | Vintage Levi's AI Identification",
    description: isJa
      ? '写真をアップロードするだけで、ヴィンテージリーバイスの年代・型番・製造工場をAIが即座に鑑定。Big E・501XX・セルビッジ・ケアラベル・ジッパーブランドを総合判定。完全無料。'
      : "Upload photos and AI instantly identifies your vintage Levi's era, model number, and factory. Analyzes Big E, 501XX, selvedge, care labels, and zipper brands. Completely free.",
    keywords: isJa
      ? ['リーバイス', 'ヴィンテージ', '年代判定', 'Big E', '501', 'セルビッジ', 'ケアラベル', 'AI鑑定', '501XX', 'タブ']
      : ["Levi's", 'vintage', 'dating', 'Big E', '501', 'selvedge', 'care label', 'AI identification', '501XX'],
    authors: [{ name: "LEVI'S VINTAGE ID." }],
    openGraph: {
      title: isJa
        ? "LEVI'S VINTAGE ID. | ヴィンテージリーバイスAI鑑定"
        : "LEVI'S VINTAGE ID. | Vintage Levi's AI Identification",
      description: isJa
        ? '写真をアップロードするだけで、ヴィンテージリーバイスの年代・型番・製造工場をAIが即座に鑑定。完全無料。'
        : "Upload photos and AI instantly identifies your vintage Levi's era, model, and factory. Free.",
      url: isJa ? BASE_URL : `${BASE_URL}/en`,
      siteName: "LEVI'S VINTAGE ID.",
      locale: isJa ? 'ja_JP' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: isJa
        ? "LEVI'S VINTAGE ID. | ヴィンテージリーバイスAI鑑定"
        : "LEVI'S VINTAGE ID. | Vintage Levi's AI Identification",
      description: isJa
        ? '写真をアップロードするだけで、ヴィンテージリーバイスの年代・型番・製造工場をAIが即座に鑑定。'
        : "Upload photos and AI instantly identifies your vintage Levi's era, model, and factory.",
    },
    alternates: {
      canonical: isJa ? BASE_URL : `${BASE_URL}/en`,
      languages: {
        'ja': BASE_URL,
        'en': `${BASE_URL}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400;500&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9006140407795306"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
