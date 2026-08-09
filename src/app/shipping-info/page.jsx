import Link from 'next/link';
import { SITE, RULES } from '@/config/site';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Shipping Information',
  description: 'How VaporVault ships your order, delivery times, and carrier policies.',
  alternates: { canonical: '/shipping-info/' },
};

const WHY = [
  { icon: '📋', h: 'PACT Act Compliance', p: 'All vape shipments comply with the Prevent All Cigarette Trafficking (PACT) Act. This means adult signature at delivery, age verification at checkout, and compliant carrier use.' },
  { icon: '🚚', h: 'Private Carrier Shipping', p: 'USPS, FedEx, and UPS ban or severely restrict direct-to-consumer nicotine product shipments. We use PACT Act-compliant private carriers to ensure legal delivery.' },
  { icon: '✏️', h: 'Adult Signature Required', p: `Every delivery requires an adult signature. Federal law mandates this for all tobacco and nicotine product shipments. Someone ${RULES.ageMinimum}+ must be available at your address to receive the package.` },
];

export default function ShippingInfoPage() {
  return (
    <>
      <PageHero title="Shipping Information" subtitle="Everything you need to know about how VaporVault ships your order, delivery times, and carrier policies." trail={[{ label: 'Shipping Info' }]} image="/images/hero-1.jpg" />
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="why-grid" style={{ marginBottom: 48 }}>
            {WHY.map((w) => (
              <div className="why-card" key={w.h}><div className="why-icon" aria-hidden="true">{w.icon}</div><h3>{w.h}</h3><p>{w.p}</p></div>
            ))}
          </div>
          <h2 style={{ fontFamily: 'var(--fd)', fontSize: 32, letterSpacing: '.04em', color: 'var(--white)', marginBottom: 24 }}>Shipping Rates &amp; Timelines</h2>
          <div style={{ background: 'var(--dark2)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 'var(--rl)', overflow: 'auto', marginBottom: 32 }}>
            <table className="state-table" style={{ width: '100%' }}>
              <thead><tr><th>Order Total</th><th>Shipping Cost</th><th>Estimated Delivery</th></tr></thead>
              <tbody>
                <tr><td>Under ${RULES.freeShipping}</td><td>${RULES.shippingCost} flat rate</td><td>3–7 business days</td></tr>
                <tr><td>${RULES.freeShipping} or more</td><td><span className="badge-green">FREE</span></td><td>3–7 business days</td></tr>
              </tbody>
            </table>
          </div>
          <div className="compliance-box">
            <h3>🚫 States We Cannot Ship To</h3>
            <p>Due to state law restrictions, we cannot currently ship to: <strong>California</strong> (Proposition 31 — full flavor ban), <strong>Massachusetts</strong> (strict sales restrictions). For all other states, PACT Act-compliant shipping is available. Check our <Link href="/vape-laws/" style={{ color: 'var(--gold-a)' }}>Vape Laws by State</Link> guide for your state.</p>
          </div>
          <h2 style={{ fontFamily: 'var(--fd)', fontSize: 32, letterSpacing: '.04em', color: 'var(--white)', margin: '40px 0 20px' }}>Order Processing</h2>
          <p style={{ color: 'var(--silver)', lineHeight: 1.75, marginBottom: 16 }}>Orders are typically processed within 1–2 business days after payment confirmation. You will receive an email with your order number (VV-XXXXX format) immediately after placing your order, and a shipping confirmation with tracking details once dispatched.</p>
          <p style={{ color: 'var(--silver)', lineHeight: 1.75 }}>Questions about your shipment? Email <a href={`mailto:${SITE.email}`} style={{ color: 'var(--gold-a)' }}>{SITE.email}</a> with your order number.</p>
        </div>
      </section>
    </>
  );
}
