import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get('host') || '';

  // vercel.app経由のアクセスはクロール禁止（重複コンテンツ防止）
  if (host.includes('vercel.app')) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    };
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.levis-id.com/sitemap.xml',
  };
}
