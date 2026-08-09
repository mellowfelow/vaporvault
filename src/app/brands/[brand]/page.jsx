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

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function BrandPage({ params }) {
  const brand = BRANDS.find((b) => b.id === params.brand);
  if (!brand) notFound();
  const products = getByBrand(brand.id);

  const groups = [];
  const groupIndex = new Map();
  for (const p of products) {
    const key = p.series || brand.label;
    if (!groupIndex.has(key)) { groupIndex.set(key, groups.length); groups.push({ label: key, products: [] }); }
    groups[groupIndex.get(key)].products.push(p);
  }
  const isGrouped = groups.length > 1;

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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12, marginBottom: isGrouped ? 20 : 24 }}>
            <h2 style={{ fontFamily: 'var(--fd)', fontSize: 32, letterSpacing: '.04em', color: 'var(--white)' }}>{brand.label} Products</h2>
            {products.length > 0 && <p style={{ color: 'var(--silver)', fontSize: 14 }}>{products.length} product{products.length === 1 ? '' : 's'}{isGrouped ? ` across ${groups.length} collections` : ''}</p>}
          </div>

          {isGrouped && (
            <nav className="filter-bar" aria-label="Jump to collection">
              {groups.map((g) => (
                <a key={g.label} href={`#${slugify(g.label)}`} className="filter-btn">{g.label} <span style={{ color: 'var(--silver)', marginLeft: 4 }}>({g.products.length})</span></a>
              ))}
            </nav>
          )}

          {products.length ? (
            groups.map((g) => (
              <div key={g.label} id={slugify(g.label)} style={{ marginBottom: isGrouped ? 48 : 0, scrollMarginTop: 88 }}>
                {isGrouped && (
                  <h3 style={{ fontFamily: 'var(--fc)', fontSize: 19, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--gold-a)', marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                    {g.label} <span style={{ color: 'var(--silver)', fontWeight: 400, textTransform: 'none', fontFamily: 'var(--fb)', fontSize: 14 }}>— {g.products.length} flavor{g.products.length === 1 ? '' : 's'}</span>
                  </h3>
                )}
                <div className="products-grid">
                  {g.products.map((p) => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            ))
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
