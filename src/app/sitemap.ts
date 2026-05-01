import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://unidxswnc.org';
  const locales = ['en', 'es'];
  
  // Define all public routes
  const routes = [
    '', // home
    '/about',
    '/contact',
    '/services',
    '/team',
    '/donations',
    '/education',
    '/warehouse',
  ];

  // Generate sitemap entries for all routes in all locales
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      const path = `/${locale}${route}`;
      
      sitemapEntries.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            es: `${baseUrl}/es${route}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
