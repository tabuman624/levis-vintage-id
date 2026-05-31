import type { Metadata } from 'next';
import '../globals.css';

const BASE_URL = 'https://www.levis-id.com';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isJa = locale === 'ja';

  return {
    metadataBase: new URL(BASE_URL),
    title: isJa
      ? "リーバイス年代判定・AI鑑定 | LEVI'S VINTAGE ID."
      : "Vintage Levi's AI Identification | LEVI'S VINTAGE ID.",
    description: isJa
      ? '写真をアップロードするだけで、ヴィンテージリーバイスの年代・型番・製造工場をAIが即座に鑑定。Big E・501XX・セルビッジ・ケアラベル・ジッパーブランドを総合判定。完全無料。'
      : "Upload photos and AI instantly identifies your vintage Levi's era, model number, and factory. Analyzes Big E, 501XX, selvedge, care labels, and zipper brands. Completely free.",
    keywords: isJa
      ? ['リーバイス', 'ヴィンテージリーバイス', 'リーバイス年代判定', 'リーバイス鑑定', 'Big E', 'ビッグE', 'リーバイス501', 'セルビッジ', 'ケアラベル', 'AI鑑定', '501XX', '赤タブ', 'リーバイス古着', 'ヴィンテージデニム', 'リーバイス見分け方', 'リーバイス型番', 'リーバイス507', 'リーバイス557', 'トラッカージャケット']
      : ["Levi's vintage", "vintage Levi's dating", "Levi's identification", 'Big E', 'selvedge denim', 'care label dating', 'AI identification', '501XX', 'TALON zipper', 'red tab', 'vintage denim', "Levi's 501"],
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
    verification: {
      google: '-IPdQxoTo5OJ79rp_aBX2IYMIGdaPSd01E040g8iDjQ',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "LEVI'S VINTAGE ID.",
              "url": "https://www.levis-id.com",
              "description": locale === 'ja'
                ? "写真をアップロードするだけでヴィンテージLevi'sの年代・型番・製造工場をAIが鑑定する無料サービス。"
                : "Free AI service that identifies vintage Levi's era, model, and factory from your photos.",
              "inLanguage": locale === 'ja' ? "ja" : "en",
              "publisher": {
                "@type": "Organization",
                "name": "LEVI'S VINTAGE ID.",
                "url": "https://www.levis-id.com"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.levis-id.com/articles"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
