import PageHero from '@/components/PageHero';
import WholesaleForm from '@/components/WholesaleForm';

export const metadata = {
  title: 'Wholesale Program',
  description: "Licensed retailers: apply for wholesale pricing on VaporVault's full product catalog.",
  alternates: { canonical: '/wholesale/' },
};

const BENEFITS = [
  { h: 'Volume Pricing', p: 'Significant discounts on bulk orders. Tiered pricing based on order volume.' },
  { h: 'Authentic Products', p: 'Same authentic, brand-sourced products available to retail customers.' },
  { h: 'Fast Fulfillment', p: 'Priority order processing and business-to-business shipping options.' },
  { h: 'Compliance Support', p: 'We provide documentation on brand PMTA status to assist your compliance needs.' },
];

export default function WholesalePage() {
  return (
    <>
      <PageHero title="Wholesale Program" subtitle="Licensed retailers: apply for wholesale pricing on VaporVault's full product catalog." trail={[{ label: 'Wholesale' }]} image="/images/hero-1.jpg" />
      <section className="section">
        <div className="container checkout-layout" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--fd)', fontSize: 32, letterSpacing: '.02em', color: 'var(--white)', marginBottom: 20 }}>WHOLESALE <em style={{ color: 'var(--gold-a)', fontStyle: 'normal' }}>BENEFITS</em></h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {BENEFITS.map((b) => (
                <div key={b.h} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--green)', fontSize: 18, flexShrink: 0, marginTop: 2 }} aria-hidden="true">✓</span>
                  <div><strong style={{ color: 'var(--white)' }}>{b.h}</strong><p style={{ fontSize: 14, color: 'var(--silver)', marginTop: 2 }}>{b.p}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="co-panel">
            <h2 style={{ fontSize: 20 }}>Wholesale Inquiry</h2>
            <p style={{ color: 'var(--silver)', fontSize: 14, marginBottom: 20 }}>Submit your business details and we will contact you with pricing information within 1–2 business days.</p>
            <WholesaleForm />
          </div>
        </div>
      </section>
    </>
  );
}
