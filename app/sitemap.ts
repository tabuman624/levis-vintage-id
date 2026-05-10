import { MetadataRoute } from 'next';
import { ARTICLES } from '@/lib/articles';

const BASE_URL = 'https://levis-vintage-id.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${BASE_URL}/`, priority: 1.0 },
    { url: `${BASE_URL}/en`, priority: 0.9 },
    { url: `${BASE_URL}/identify`, priority: 0.9 },
    { url: `${BASE_URL}/en/identify`, priority: 0.8 },
    { url: `${BASE_URL}/articles`, priority: 0.8 },
    { url: `${BASE_URL}/en/articles`, priority: 0.7 },
    { url: `${BASE_URL}/guide`, priority: 0.7 },
    { url: `${BASE_URL}/en/guide`, priority: 0.6 },
    { url: `${BASE_URL}/legal`, priority: 0.3 },
    { url: `${BASE_URL}/contact`, priority: 0.3 },
  ].map(page => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }));

  const articlePages = ARTICLES.flatMap(article => [
    {
      url: `${BASE_URL}/articles/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/en/articles/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]);

  return [...staticPages, ...articlePages];
}
