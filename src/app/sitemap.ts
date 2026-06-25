import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.smart-ui.pro';

const pages = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/ai-automation', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/backend-development', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/frontend-development', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/cms', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/ui-ux-design', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/qa', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/custom-service', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/for-agency', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/about-us', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/our-work', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/contact-us', priority: 0.6, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    entries.push({
      url: `${BASE_URL}/en${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${BASE_URL}/en${page.path}`,
          uk: `${BASE_URL}/uk-UA${page.path}`,
        },
      },
    });
  }

  return entries;
}
