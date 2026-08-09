import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CATEGORIES, PRODUCTS } from '@/config/site';
import PageHero from '@/components/PageHero';
import ComplianceBanner from '@/components/ComplianceBanner';
import ProductCard from '@/components/ProductCard';
import DisposableShopClient from '@/components/DisposableShopClient';

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.id }));
}

export function generateMetadata({ params }) {
  const cat = CATEGORIES.find((c) => c.id === params.category);
  if (!cat) return {};
  return {
    title: `Shop ${cat.label}`,
    description: cat.desc,
    alternates: { canonical: `/shop/${cat.id}/` },
  };
}

export default function ShopCategoryPage({ params }) {
  const cat = CATEGORIES.find((c) => c.id === params.category);
  if (!cat) notFound();

  const podProducts = PRODUCTS.filter((p) => p.cat === 'pod-system');

  return (
    <>
      <PageHero title={`Shop ${cat.label}`} subtitle={cat.desc} trail={[{ label: 'Shop', href: '/shop/' }, { label: cat.label }]} image="/images/hero-1.jpg" />
      <section className="section">
        <div className="container">
          <ComplianceBanner />
          {cat.id === 'disposable-vapes' && <DisposableShopClient />}
          {cat.id === 'pod-systems' && (
            <div className="products-grid">
              {podProducts.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
          {cat.id !== 'disposable-vapes' && cat.id !== 'pod-systems' && (
            <div style={{ textAlign: 'center', padding: '64px 20px', background: 'var(--dark2)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 'var(--rxl)' }}>
              <div style={{ fontSize: 72, marginBottom: 20 }} aria-hidden="true">{cat.emoji}</div>
              <h2 style={{ fontFamily: 'var(--fd)', fontSize: 32, letterSpacing: '.04em', color: 'var(--white)', marginBottom: 12 }}>COMING SOON</h2>
              <p style={{ color: 'var(--silver)', maxWidth: 480, margin: '0 auto 28px', fontSize: 15, lineHeight: 1.7 }}>
                We&apos;re expanding our {cat.label.toLowerCase()} catalog. Check back soon, or browse our full selection of disposable vapes now.
              </p>
              <Link href="/shop/disposable-vapes/" className="btn btn-primary btn-lg">Shop Disposable Vapes →</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
