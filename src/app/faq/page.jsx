import Link from 'next/link';
import { FAQS } from '@/config/site';
import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Everything you need to know about ordering from VaporVault USA.',
  alternates: { canonical: '/faq/' },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about ordering from VaporVault USA. For additional help, contact us."
        trail={[{ label: 'FAQ' }]}
        image="/images/hero-1.jpg"
      />
      <section className="section">
        <div className="container">
          <FaqAccordion items={FAQS.map((f) => ({ q: f.q, a: f.a }))} />
          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <p style={{ color: 'var(--silver)', marginBottom: 20 }}>Still have questions? We reply within a few hours.</p>
            <Link href="/contact/" className="btn btn-primary">Contact Us →</Link>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
