import Link from 'next/link';
import { RULES } from '@/config/site';
import PageHero from '@/components/PageHero';
import ComplianceBanner from '@/components/ComplianceBanner';

export const metadata = {
  title: 'How To Order',
  description: 'Step-by-step guide to placing your first order at VaporVault USA.',
  alternates: { canonical: '/how-to-order/' },
};

const STEPS = [
  { n: 1, h: 'Browse & Add to Cart', p: `Browse our disposable vapes or brand pages. Select your quantity and click "Add to Cart." Your cart is visible in the top-right corner. Minimum order is $${RULES.minOrder}. Free shipping on orders $${RULES.freeShipping}+.` },
  { n: 2, h: 'Age Verification', p: `Federal law requires us to verify that all customers are ${RULES.ageMinimum} years of age or older. You will be asked to confirm your age before we can process any order.` },
  { n: 3, h: 'Choose Payment Method', p: 'We accept: Cryptocurrency (Bitcoin, Ethereum, Litecoin — receive 10% off your order), Cash App, Apple Pay, and Chime. Payment instructions are sent to your email after your order is confirmed.' },
  { n: 4, h: 'Receive Shipping Confirmation', p: 'Once payment is confirmed, we process and ship your order. You will receive a tracking number via email. Please allow 1–2 business days for processing. Delivery typically takes 3–7 business days via our PACT Act-compliant private carrier.' },
  { n: 5, h: 'Sign For Your Delivery', p: 'Per the PACT Act, adult signature is required on every delivery. The carrier will attempt delivery and leave a notice if no one is available. Make sure someone 21 or older is home to sign. A valid government ID may be required to confirm age.' },
];

export default function HowToOrderPage() {
  return (
    <>
      <PageHero title="How To Order" subtitle="Step-by-step guide to placing your first order at VaporVault USA. Simple, secure, and PACT Act compliant." trail={[{ label: 'How To Order' }]} image="/images/hero-3.jpg" />
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <ComplianceBanner />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {STEPS.map((s) => (
              <div className="step-card" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div><h3>{s.h}</h3><p>{s.p}</p></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link href="/shop/disposable-vapes/" className="btn btn-primary btn-lg">Start Shopping →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
