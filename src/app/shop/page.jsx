import Link from 'next/link';
import { CATEGORIES } from '@/config/site';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Shop All Categories',
  description: 'Browse disposable vapes, pod systems, e-liquids, nicotine pouches, and accessories.',
  alternates: { canonical: '/shop/' },
};

export default function ShopHubPage() {
  return (
    <>
      <PageHero title="Shop VaporVault" subtitle="Browse our full catalog by category." trail={[{ label: 'Shop' }]} image="/images/hero-1.jpg" />
      <section className="section">
        <div className="container">
          <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))' }}>
            {CATEGORIES.map((c) => (
              <Link key={c.id} href={`/shop/${c.id}/`} className="brand-tile" style={{ padding: '32px 20px' }}>
                <span className="brand-emoji" aria-hidden="true">{c.emoji}</span>
                <span className="brand-name">{c.label}</span>
                <p style={{ fontSize: 13, color: 'var(--silver)', lineHeight: 1.6 }}>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
