import { SITE, BRANDS, FLAVORS, POSTS, CATEGORIES } from '@/config/site';

const STATIC_ROUTES = [
  '', 'shop', 'brands', 'flavors', 'blog', 'best-sellers', 'new-arrivals', 'deals',
  'about', 'contact', 'faq', 'wholesale', 'how-to-order', 'shipping-info', 'vape-laws',
  'privacy-policy', 'terms-of-service',
];

export default function sitemap() {
  const base = `https://${SITE.domain}`;
  const now = new Date();

  const entries = STATIC_ROUTES.map((route) => ({
    url: `${base}/${route ? `${route}/` : ''}`,
    lastModified: now,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));

  CATEGORIES.forEach((c) => entries.push({ url: `${base}/shop/${c.id}/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 }));
  BRANDS.forEach((b) => entries.push({ url: `${base}/brands/${b.id}/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 }));
  FLAVORS.forEach((f) => entries.push({ url: `${base}/flavors/${f.id}/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 }));
  POSTS.forEach((p) => entries.push({ url: `${base}/blog/${p.slug}/`, lastModified: new Date(p.date), changeFrequency: 'monthly', priority: 0.6 }));

  return entries;
}
