import { notFound } from 'next/navigation';
import { FLAVORS, getByFlavor } from '@/config/site';
import PageHero from '@/components/PageHero';
import ComplianceBanner from '@/components/ComplianceBanner';
import ProductCard from '@/components/ProductCard';

export function generateStaticParams() {
  return FLAVORS.map((f) => ({ flavor: f.id }));
}

export async function generateMetadata({ params }) {
  const { flavor: flavorId } = await params;
  const flavor = FLAVORS.find((f) => f.id === flavorId);
  if (!flavor) return {};
  return {
    title: `${flavor.label} Disposable Vapes`,
    description: `Shop disposable vapes in ${flavor.label} flavor from top brands.`,
    alternates: { canonical: `/flavors/${flavor.id}/` },
  };
}

export default async function FlavorPage({ params }) {
  const { flavor: flavorId } = await params;
  const flavor = FLAVORS.find((f) => f.id === flavorId);
  if (!flavor) notFound();
  const products = getByFlavor(flavor.keyword);

  return (
    <>
      <PageHero
        title={`${flavor.label} Disposable Vapes`}
        subtitle={`Shop ${flavor.label} flavor across every brand we carry.`}
        trail={[{ label: 'Flavors', href: '/flavors/' }, { label: flavor.label }]}
        image="/images/hero-1.jpg"
      />
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
