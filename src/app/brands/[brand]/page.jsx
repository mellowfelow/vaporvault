import { notFound } from 'next/navigation';
import Image from 'next/image';
import { BRANDS, getByBrand } from '@/config/site';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComplianceBanner from '@/components/ComplianceBanner';
import ProductCard from '@/components/ProductCard';
import FaqAccordion from '@/components/FaqAccordion';

export function generateStaticParams() {
  return BRANDS.map((b) => ({ brand: b.id }));
}

export function generateMetadata({ params }) {
  const brand = BRANDS.find((b) => b.id === params.brand);
  if (!brand) return {};
  return {
    title: `${brand.label} Vapes`,
    description: `Shop authentic ${brand.label} vapes at VaporVault. PMTA status: ${brand.pmta === 'authorized' ? 'FDA authorized' : 'pending'}.`,
    alternates: { canonical: `/brands/${brand.id}/` },
  };
}

export default function BrandPage({ params }) {
  const brand = BRANDS.find((b) => b.id === params.brand);
  if (!brand) notFound();
  const products = getByBrand(brand.id);

  const brandFaqs = [
    { q: `What is the PMTA status of ${brand.label} products?`, a: brand.pmta === 'authorized' ? `${brand.label} has full FDA Pre-Market Tobacco Product Application (PMTA) marketing authorization, making it legal to sell in all US states.` : `${brand.label} products are sold under PMTA-pending status. The majority of disposable vape products on the US market are in this category. Always verify current regulatory status on the FDA website.` },
    { q: `Are ${brand.label} products authentic on VaporVault?`, a: `Yes. VaporVault sources all ${brand.label} products directly to ensure authenticity. Counterfeit disposable vapes are a real risk in the market — we only carry genuine products.` },
    { q: `Can you ship ${brand.label} vapes to my state?`, a: 'We ship to most US states via PACT Act-compliant private carrier. We cannot ship to California or Massachusetts. Check our Vape Laws by State guide for details on your state.' },
  ];

  return (
    <>
      <div className="page-hero">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src={brand.heroImg} alt={`${brand.label} vapes`} fill sizes="100vw" style={{ objectFit: 'cover', filter: 'brightness(.22) saturate(.7)' }} priority />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(8,11,15,1) 0%,rgba(8,11,15,.2) 100%)', zIndex: 1 }} />
        <div className="page-hero-inner" style={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumbs trail={[{ label: 'Brands', href: '/brands/' }, { label: brand.label }]} />
          <div className="brand-hub-header" style={{ marginTop: 16 }}>
            <div className="brand-hub-icon">
              <Image src={brand.heroImg} alt={`${brand.label} vapes`} width={120} height={120} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <h1 style={{ marginBottom: 4 }}>{brand.label} Vapes</h1>
              {brand.rank && <p style={{ color: 'var(--silver)', fontSize: 15 }}>#{brand.rank} US Retail (Circana 2025)</p>}
              <div className="brand-hub-badges">
                {brand.badge && <span className={`brand-badge ${brand.pmta === 'authorized' ? 'bb-auth' : 'bb-circana'}`}>{brand.badge}</span>}
                <span className={`brand-badge ${brand.pmta === 'authorized' ? 'bb-auth' : 'bb-pending'}`}>{brand.pmta === 'authorized' ? '✅ FDA Authorized' : 'PMTA Pending'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <ComplianceBanner />
          <div className="brand-about">
            <h2>About {brand.label}</h2>
            <p>{brand.about}</p>
          </div>
          <h2 style={{ fontFamily: 'var(--fd)', fontSize: 32, letterSpacing: '.04em', color: 'var(--white)', marginBottom: 24 }}>{brand.label} Products</h2>
          {products.length ? (
            <div className="products-grid">
              {products.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <p style={{ color: 'var(--silver)' }}>No products currently listed for this brand.</p>
          )}
        </div>
      </section>
      <section className="section" style={{ background: 'var(--dark2)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontFamily: 'var(--fd)', fontSize: 32, letterSpacing: '.04em', color: 'var(--white)', marginBottom: 24 }}>Frequently Asked Questions</h2>
          <FaqAccordion items={brandFaqs} />
        </div>
      </section>
    </>
  );
}
