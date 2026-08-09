import Image from 'next/image';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'About Us',
  description: 'The trusted adult expert for premium disposable vapes and pod systems in the United States.',
  alternates: { canonical: '/about/' },
};

const BLOCKS = [
  { h: 'Our Product Selection', p: 'We stock only brands that appear in legitimate US sales data. Our primary reference is the CDC Foundation Tobacco Monitoring report using Circana retail POS data — the most authoritative public dataset on US e-cigarette sales. We supplement this with strong online-market brands verified by major vape editorial sites.' },
  { h: 'Compliance First', p: 'We disclose PMTA status on every brand page. We do not ship to states with flavor bans or PMTA directory requirements that would prohibit our products. We do not carry Elf Bar/EB Create products due to their lack of FDA authorization.' },
  { h: 'Editorial Independence', p: 'Our blog and product descriptions are written by our editorial team and are not paid placements. We disclose when brand information comes from manufacturer sources. Our goal is to help adult vapers make informed decisions, not to maximize sales at the expense of accuracy.' },
  { h: 'Privacy & Security', p: 'We take customer privacy seriously. We do not sell customer data. Your age verification information is processed by a compliant third-party provider and not stored on our servers. Payment information is handled through secure, encrypted processors.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About VaporVault USA" subtitle="The trusted adult expert for premium disposable vapes and pod systems in the United States." trail={[{ label: 'About' }]} image="/images/hero-3.jpg" />
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 56 }}>
            <div>
              <h2 style={{ fontFamily: 'var(--fd)', fontSize: 38, letterSpacing: '.02em', color: 'var(--white)', marginBottom: 20 }}>OUR <em style={{ color: 'var(--gold-a)', fontStyle: 'normal' }}>MISSION</em></h2>
              <p style={{ fontSize: 16, color: 'var(--off)', lineHeight: 1.8, marginBottom: 16 }}>VaporVault was built with a single purpose: to be the most trustworthy, compliant, and knowledgeable online vape store for adult vapers in the United States.</p>
              <p style={{ fontSize: 15, color: 'var(--silver)', lineHeight: 1.75, marginBottom: 16 }}>We believe adult smokers deserve accurate information, authentic products, and a shopping experience that respects the seriousness of the regulatory landscape. We are not here to glamorize vaping — we are here to serve adults who have chosen vaping as an alternative to combustible cigarettes.</p>
              <p style={{ fontSize: 15, color: 'var(--silver)', lineHeight: 1.75 }}>Every product we stock is verified authentic. Every brand page discloses PMTA status. Every order ships with PACT Act-compliant carriers and adult signature confirmation.</p>
            </div>
            <div style={{ position: 'relative', borderRadius: 'var(--rl)', overflow: 'hidden', minHeight: 280 }}>
              <Image src="/images/hero-3.jpg" alt="Premium vape device quality" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }}>
            {BLOCKS.map((b) => (
              <div key={b.h} className="why-card">
                <h3>{b.h}</h3>
                <p>{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
