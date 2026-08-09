import { SITE, RULES } from '@/config/site';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Privacy Policy',
  description: `${SITE.name} privacy policy — how we collect, use, and protect your information.`,
  alternates: { canonical: '/privacy-policy/' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="Last updated: 2026. How we collect, use, and protect your information." trail={[{ label: 'Privacy Policy' }]} image="/images/hero-1.jpg" />
      <section className="section">
        <div className="container legal-body" style={{ maxWidth: 800 }}>
          <h2>Information We Collect</h2>
          <p>When you place an order or contact us, we collect the information you provide directly: name, email address, shipping address, phone number, and date of birth (for age verification). We do not collect or store payment card information — all payments are handled through third-party payment channels outside our systems.</p>

          <h2>Age Verification</h2>
          <p>Because our products are restricted to adults {RULES.ageMinimum} and older, we use a third-party age verification service to confirm your age before processing an order. Age verification data is processed by that provider and is not stored on our servers.</p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To process and fulfill your order, including PACT Act-compliant shipping and adult signature confirmation</li>
            <li>To communicate with you about your order, including confirmations and shipping updates</li>
            <li>To respond to inquiries submitted through our contact or wholesale forms</li>
            <li>To comply with legal and regulatory reporting obligations under the PACT Act</li>
          </ul>

          <h2>We Do Not Sell Your Data</h2>
          <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

          <h2>Data Sharing</h2>
          <p>We share information only with service providers necessary to fulfill your order: our age verification provider, shipping carriers, and our form/email processor. These providers are contractually limited to using your information solely to provide services to us.</p>

          <h2>Data Retention</h2>
          <p>We retain order records as required for PACT Act compliance and tax reporting. You may request deletion of non-essential personal information by contacting us.</p>

          <h2>Your Rights</h2>
          <p>You may contact us at any time to request access to, correction of, or deletion of your personal information, subject to our legal recordkeeping obligations.</p>

          <h2>Contact</h2>
          <p>Questions about this policy can be sent to <a href={`mailto:${SITE.email}`} style={{ color: 'var(--gold-a)' }}>{SITE.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
