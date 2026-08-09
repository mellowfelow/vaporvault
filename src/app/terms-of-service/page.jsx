import { SITE, RULES } from '@/config/site';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Terms of Service',
  description: `${SITE.name} terms of service.`,
  alternates: { canonical: '/terms-of-service/' },
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" subtitle="Last updated: 2026. Please read these terms carefully before placing an order." trail={[{ label: 'Terms of Service' }]} image="/images/hero-1.jpg" />
      <section className="section">
        <div className="container legal-body" style={{ maxWidth: 800 }}>
          <h2>Eligibility</h2>
          <p>You must be at least {RULES.ageMinimum} years of age to purchase from {SITE.name}. By placing an order, you confirm that you are {RULES.ageMinimum} or older and that vaping products are legal to purchase and possess in your jurisdiction.</p>

          <h2>Product Information</h2>
          <p>We make reasonable efforts to ensure product descriptions, images, and PMTA/FDA authorization status are accurate at the time of publication. Regulatory status can change; always verify current FDA authorization status independently before relying on it. Nicotine is an addictive chemical — our products are intended for adult smokers as an alternative to combustible cigarettes, not for non-smokers.</p>

          <h2>Orders &amp; Payment</h2>
          <p>Minimum order is ${RULES.minOrder}. We accept cryptocurrency (with a {RULES.cryptoDiscount * 100}% discount), Cash App, Apple Pay, and Chime. We do not accept credit or debit cards due to payment processor restrictions on vape products. Payment instructions are sent by email after order confirmation; orders are not final until payment is received.</p>

          <h2>Shipping &amp; Age Verification</h2>
          <p>All orders are shipped via PACT Act-compliant private carrier and require an adult signature ({RULES.ageMinimum}+) at delivery. Age verification is required at checkout. We do not ship to {RULES.restrictedStates.join(' or ')}, or other states where sale of our products is restricted.</p>

          <h2>Returns</h2>
          <p>Due to the nature of nicotine products and applicable health regulations, we do not accept returns on opened vaping products. Defective products may be reported within 7 days of delivery for resolution.</p>

          <h2>Prohibited Use</h2>
          <p>You may not purchase from {SITE.name} if you are under {RULES.ageMinimum}, if vaping products are illegal in your jurisdiction, or for resale without a valid wholesale agreement.</p>

          <h2>Limitation of Liability</h2>
          <p>{SITE.name} is not liable for any indirect, incidental, or consequential damages arising from the use of products purchased through this site. Products are sold as-is and are not intended to diagnose, treat, cure, or prevent any disease.</p>

          <h2>Changes to These Terms</h2>
          <p>We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the revised terms.</p>

          <h2>Contact</h2>
          <p>Questions about these terms can be sent to <a href={`mailto:${SITE.email}`} style={{ color: 'var(--gold-a)' }}>{SITE.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
