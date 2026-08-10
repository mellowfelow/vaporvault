import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { SITE, PRODUCTS, getById, getBrand, getByBrand, puffsLabel } from '@/config/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import ComplianceBanner from '@/components/ComplianceBanner';
import ProductCard from '@/components/ProductCard';
import ProductDetailActions from '@/components/ProductDetailActions';

const RULES_NOTE = 'PACT Act compliant, with age verification at checkout and an adult signature required at delivery';

// product.series sometimes already starts with the brand label ("Lost Mary Nera Fullview
// Pods") and sometimes doesn't ("Original Series") — never double up the brand name.
const seriesLabel = (product, brand) => {
  if (!product.series) return brand.label;
  return product.series.startsWith(brand.label) ? product.series : `${brand.label} — ${product.series}`;
};
const seriesOnly = (product, brand) => (product.series && product.series !== brand.label ? product.series : brand.label);
// Title-cased variant of puffsLabel for headings/metadata ("15,000 Puffs" vs "15,000 per pod").
const puffsPhrase = (puffs) => puffsLabel(puffs).replace(/ puffs$/, ' Puffs');

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getById(slug);
  if (!product) return {};
  const brand = getBrand(product.brand);
  return {
    title: `${product.name} — ${puffsPhrase(product.puffs)}`,
    description: `Buy ${product.name} online at ${SITE.name}. ${product.desc} ${product.puffs} puffs, ${product.nic} nicotine. ${brand?.pmta === 'authorized' ? 'FDA PMTA authorized.' : 'PMTA pending.'}`,
    alternates: { canonical: `/product/${product.id}/` },
  };
}

const SPEC_ROWS = (p) => [
  ['Puff Count', p.puffs !== 'N/A' && p.puffs !== 'refillable' ? puffsPhrase(p.puffs) : p.puffs],
  ['Nicotine', p.nic],
  ['E-Liquid', p.ml],
  ['Battery', p.battery],
  ['Coil', p.coil],
  ['Boost Mode', p.boost],
  ['Airflow', p.airflow],
].filter(([, v]) => v);

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getById(slug);
  if (!product) notFound();
  const brand = getBrand(product.brand);
  if (!brand) notFound();

  const related = (product.series
    ? getByBrand(product.brand).filter((p) => p.series === product.series)
    : getByBrand(product.brand)
  ).filter((p) => p.id !== product.id).slice(0, 4);

  const specRows = SPEC_ROWS(product);

  return (
    <>
      <section className="section">
        <div className="container">
          <Breadcrumbs trail={[{ label: 'Brands', href: '/brands/' }, { label: brand.label, href: `/brands/${brand.id}/` }, { label: product.name }]} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 24, marginBottom: 56, alignItems: 'start' }}>
            <div className={`pc-img ${product.image ? 'pc-img-photo' : ''}`} style={{ minHeight: 360, borderRadius: 'var(--rl)', overflow: 'hidden' }}>
              {product.badge && <span className="pc-badge">{product.badge}</span>}
              {product.image ? (
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 900px) 100vw, 480px" style={{ objectFit: 'contain' }} priority />
              ) : (
                <span style={{ fontSize: 96 }} aria-hidden="true">{product.emoji}</span>
              )}
            </div>
            <div>
              <p className="pc-brand" style={{ fontSize: 13 }}>{seriesLabel(product, brand)}</p>
              <h1 style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(28px,4vw,42px)', letterSpacing: '.02em', color: 'var(--white)', margin: '6px 0 14px' }}>{product.name}</h1>
              <p style={{ color: 'var(--off)', lineHeight: 1.75, marginBottom: 20 }}>{product.desc}</p>
              <p className="pc-price" style={{ fontSize: 32, marginBottom: 24 }}>${product.price.toFixed(2)}</p>
              <ProductDetailActions product={product} />

              <div style={{ marginTop: 32, background: 'var(--dark2)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 'var(--rl)', padding: 20 }}>
                <p style={{ fontFamily: 'var(--fc)', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold-a)', marginBottom: 14 }}>Device Specifications</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {specRows.map(([label, value]) => (
                    <div key={label}>
                      <p style={{ fontSize: 11, color: 'var(--silver)', fontFamily: 'var(--fc)', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase' }}>{label}</p>
                      <p style={{ fontSize: 14, color: 'var(--white)', fontWeight: 600 }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ComplianceBanner />

          <div className="legal-body" style={{ maxWidth: 800, marginBottom: 48 }}>
            <h2>{product.name} — Buy Online at {SITE.name}</h2>
            <p>
              {product.name} is part of the {seriesOnly(product, brand)} lineup at {SITE.name}.
              {' '}{product.desc} Each device delivers {product.puffs !== 'N/A' && product.puffs !== 'refillable' ? `${product.puffs} puffs` : product.puffs}
              {product.nic ? ` at ${product.nic} nicotine` : ''}{product.ml ? `, with ${product.ml} of e-liquid` : ''}.
            </p>
            <p>
              {brand.label} discloses FDA PMTA status on every listing: this product is currently{' '}
              <strong>{brand.pmta === 'authorized' ? 'FDA PMTA authorized' : 'PMTA-pending'}</strong>, consistent with {brand.pmta === 'authorized' ? 'the small group of' : 'most'} disposable
              vape brands on the US market. {SITE.name} sources all {brand.label} stock directly to guarantee authenticity — every order ships {RULES_NOTE}.
            </p>
          </div>

          {related.length > 0 && (
            <>
              <h2 style={{ fontFamily: 'var(--fd)', fontSize: 28, letterSpacing: '.03em', color: 'var(--white)', marginBottom: 20 }}>
                More {seriesOnly(product, brand)} Flavors
              </h2>
              <div className="products-grid">
                {related.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </>
          )}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.desc,
            brand: { '@type': 'Brand', name: brand.label },
            image: product.image ? `https://${SITE.domain}${product.image}` : undefined,
            offers: {
              '@type': 'Offer',
              price: product.price,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: `https://${SITE.domain}/product/${product.id}/`,
            },
          }),
        }}
      />
    </>
  );
}
