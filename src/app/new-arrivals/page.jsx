import { getNewArrivals } from '@/config/site';
import PageHero from '@/components/PageHero';
import ComplianceBanner from '@/components/ComplianceBanner';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'New Arrivals',
  description: 'The newest disposable vapes added to the VaporVault catalog.',
  alternates: { canonical: '/new-arrivals/' },
};

export default function NewArrivalsPage() {
  const products = getNewArrivals();
  return (
    <>
      <PageHero title="New Arrivals" subtitle="The newest additions to our catalog." trail={[{ label: 'New Arrivals' }]} image="/images/hero-1.jpg" />
      <section className="section">
        <div className="container">
          <ComplianceBanner />
          <div className="products-grid">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
