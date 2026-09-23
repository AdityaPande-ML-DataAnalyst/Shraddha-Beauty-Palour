import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shraddha-beauty-parlour.vercel.app';
  const currentDate = new Date();

  const routes = [
    '',
    '/about/',
    '/services/',
    '/gallery/',
    '/offers/',
    '/testimonials/',
    '/faq/',
    '/contact/',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}

