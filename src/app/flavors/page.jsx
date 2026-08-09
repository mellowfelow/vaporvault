import Link from 'next/link';
import { FLAVORS } from '@/config/site';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Shop By Flavor',
  description: 'Browse disposable vapes by flavor profile.',
  alternates: { canonical: '/flavors/' },
};

export default function FlavorsIndexPage() {
  return (
    <>
      <PageHero title="Shop By Flavor" subtitle="Find your favorite flavor profile across every brand we carry." trail={[{ label: 'Flavors' }]} image="/images/hero-1.jpg" />
      <section className="section">
        <div className="container">
          <div className="brands-grid">
            {FLAVORS.map((f) => (
              <Link key={f.id} href={`/flavors/${f.id}/`} className="brand-tile">
                <span className="brand-emoji" aria-hidden="true">🍬</span>
                <span className="brand-name">{f.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
