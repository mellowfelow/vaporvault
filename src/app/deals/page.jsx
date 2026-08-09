import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ComplianceBanner from '@/components/ComplianceBanner';

export const metadata = {
  title: 'Deals & Bundle Discounts',
  description: 'Save more when you buy in bulk. Bundle deals on top brands.',
  alternates: { canonical: '/deals/' },
};

export default function DealsPage() {
  return (
    <>
      <PageHero title="Deals & Bundle Discounts" subtitle="Save more when you buy in bulk. Bundle deals on top brands including Geek Bar, RAZ, Lost Mary, and more." trail={[{ label: 'Shop', href: '/shop/' }, { label: 'Deals & Bundles' }]} image="/images/hero-1.jpg" />
      <section className="section">
        <div className="container">
          <ComplianceBanner />
          <div style={{ textAlign: 'center', padding: '64px 20px', background: 'var(--dark2)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 'var(--rxl)' }}>
            <div style={{ fontSize: 80, marginBottom: 20 }} aria-hidden="true">💰</div>
            <h2 style={{ fontFamily: 'var(--fd)', fontSize: 36, letterSpacing: '.04em', color: 'var(--white)', marginBottom: 12 }}>COMING SOON</h2>
            <p style={{ color: 'var(--silver)', maxWidth: 500, margin: '0 auto 28px', fontSize: 16, lineHeight: 1.7 }}>
              We are expanding our deals &amp; bundle discounts catalog. Check back soon or browse our full selection of disposable vapes now.
            </p>
            <Link href="/shop/disposable-vapes/" className="btn btn-primary btn-lg">Shop Disposable Vapes →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
