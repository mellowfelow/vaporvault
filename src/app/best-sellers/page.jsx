import { getBestSellers } from '@/config/site';
import PageHero from '@/components/PageHero';
import ComplianceBanner from '@/components/ComplianceBanner';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Best Sellers',
  description: 'Our most popular disposable vapes, ranked by sales.',
  alternates: { canonical: '/best-sellers/' },
};

export default function BestSellersPage() {
  const products = getBestSellers();
  return (
    <>
      <PageHero title="Best Sellers" subtitle="Our most popular disposable vapes." trail={[{ label: 'Best Sellers' }]} image="/images/hero-1.jpg" />
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
