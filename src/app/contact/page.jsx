import { SITE } from '@/config/site';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: `Contact ${SITE.name} for order questions, product inquiries, and wholesale. Typical reply within a few hours.`,
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact VaporVault" subtitle="Questions about your order, product availability, or wholesale inquiries? We typically reply within a few hours." trail={[{ label: 'Contact' }]} image="/images/hero-1.jpg" />
      <section className="section">
        <div className="container checkout-layout">
          <div className="co-panel">
            <h2>Send a Message</h2>
            <ContactForm />
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--fd)', fontSize: 24, color: 'var(--white)', marginBottom: 20, letterSpacing: '.03em' }}>Contact Information</h3>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 20 }} aria-hidden="true">✉️</span>
              <div>
                <strong style={{ color: 'var(--white)', display: 'block', marginBottom: 2 }}>Email</strong>
                <a href={`mailto:${SITE.email}`} style={{ color: 'var(--gold-a)' }}>{SITE.email}</a>
                <br /><span style={{ fontSize: 13, color: 'var(--muted)' }}>Typical reply: within a few hours</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 20 }} aria-hidden="true">🕐</span>
              <div>
                <strong style={{ color: 'var(--white)', display: 'block', marginBottom: 2 }}>Business Hours</strong>
                <span>Mon–Fri: 9am–6pm EST</span><br /><span style={{ fontSize: 13, color: 'var(--muted)' }}>Sat–Sun: Limited support</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
              <span style={{ fontSize: 20 }} aria-hidden="true">📋</span>
              <div>
                <strong style={{ color: 'var(--white)', display: 'block', marginBottom: 2 }}>Order Inquiries</strong>
                <span style={{ fontSize: 14, color: 'var(--silver)' }}>Include your order number (VV-XXXXX format) in your message for fastest service.</span>
              </div>
            </div>
            <div style={{ background: 'var(--dark2)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 'var(--rl)', padding: 20 }}>
              <p style={{ fontFamily: 'var(--fc)', fontSize: 13, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--silver)', marginBottom: 12 }}>Quick Links</p>
              <div className="footer-links">
                <a href="/faq/">FAQ — Common Questions</a>
                <a href="/how-to-order/">How To Order</a>
                <a href="/shipping-info/">Shipping Information</a>
                <a href="/vape-laws/">Vape Laws by State</a>
                <a href="/wholesale/">Wholesale Inquiries</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
