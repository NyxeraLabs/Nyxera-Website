import type { MetadataRoute } from 'next';

const routes = ['/', '/about', '/contact', '/security', '/security-policy', '/terms-of-service'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `https://nyxera.cloud${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.8
  }));
}
