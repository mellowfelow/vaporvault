import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Vape Laws by State 2026',
  description: 'Complete US state-by-state guide to vaping regulations, flavor bans, PMTA requirements, excise taxes, and online shipping restrictions.',
  alternates: { canonical: '/vape-laws/' },
};

const STATES = [
  { state: 'California', flavor: 'red:Full Flavor Ban', pmta: 'red:Yes (2026)', tax: '12.5% wholesale', status: 'red:Restricted' },
  { state: 'Massachusetts', flavor: 'yellow:Partial', pmta: 'yellow:Pending', tax: '75% wholesale', status: 'red:Restricted' },
  { state: 'North Carolina', flavor: 'yellow:Enforced', pmta: 'red:Yes (July 2025)', tax: '5 cents/ml', status: 'yellow:PMTA only' },
  { state: 'Virginia', flavor: 'None', pmta: 'red:Yes (2026)', tax: '$0.066/ml', status: 'yellow:PMTA only' },
  { state: 'Tennessee', flavor: 'None', pmta: 'yellow:Effective 2027', tax: 'None', status: 'green:Compliant' },
  { state: 'Texas', flavor: 'None*', pmta: 'None', tax: 'None', status: 'green:Compliant' },
  { state: 'Florida', flavor: 'None', pmta: 'None', tax: 'None', status: 'green:Compliant' },
  { state: 'New York', flavor: 'None (state)', pmta: 'None', tax: '20% wholesale', status: 'green:Compliant' },
  { state: 'Illinois', flavor: 'None', pmta: 'None', tax: '45% wholesale', status: 'green:Compliant' },
  { state: 'Georgia', flavor: 'None', pmta: 'yellow:HB577 Pending', tax: '7% wholesale', status: 'green:Compliant' },
  { state: 'Arizona', flavor: 'None', pmta: 'yellow:SB1272 Pending', tax: 'None', status: 'green:Compliant' },
  { state: 'Colorado', flavor: 'None', pmta: 'None', tax: '50% wholesale', status: 'green:Compliant' },
  { state: 'Washington', flavor: 'None', pmta: 'None', tax: '$0.27/ml', status: 'green:Compliant' },
  { state: 'Oregon', flavor: 'None', pmta: 'None', tax: '65% wholesale', status: 'green:Compliant' },
];

function Cell({ value }) {
  if (!value.includes(':')) return value;
  const [color, label] = value.split(':');
  return <span className={`badge-${color}`}>{label}</span>;
}

export default function VapeLawsPage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance & Regulations"
        title="Vape Laws by State 2026"
        subtitle="Complete US state-by-state guide to vaping regulations, flavor bans, PMTA requirements, excise taxes, and online shipping restrictions. Updated April 2026."
        trail={[{ label: 'Vape Laws by State' }]}
        image="/images/hero-1.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="compliance-box">
            <h3>⚠️ Important Disclaimer</h3>
            <p>This guide is for informational purposes only and does not constitute legal advice. Vape regulations change frequently. Always verify current laws through your state official resources before purchasing. VaporVault will not process orders to states where sale is restricted.</p>
          </div>
          <h2 style={{ fontFamily: 'var(--fd)', fontSize: 34, letterSpacing: '.04em', color: 'var(--white)', marginBottom: 8 }}>Federal Baseline Regulations</h2>
          <p style={{ color: 'var(--silver)', marginBottom: 32 }}>These federal rules apply in all 50 states as of 2025–2026:</p>
          <div className="why-grid" style={{ marginBottom: 48 }}>
            <div className="why-card"><div className="why-icon" aria-hidden="true">🧑</div><h3>Minimum Age: 21</h3><p>Federal law requires all purchasers of tobacco products, including e-cigarettes, to be 21 years of age or older. All 50 states comply with this minimum age requirement.</p></div>
            <div className="why-card"><div className="why-icon" aria-hidden="true">📋</div><h3>PACT Act Compliance</h3><p>All online vape sales must include adult signature at delivery, age verification at checkout, and state tax reporting. USPS and major carriers restrict direct-to-consumer nicotine shipping.</p></div>
            <div className="why-card"><div className="why-icon" aria-hidden="true">🏛️</div><h3>FDA PMTA Requirements</h3><p>All new vaping products introduced after August 2016 require FDA pre-market authorization. Most flavored disposables are sold under PMTA-pending status. Only Vuse and NJOY have full FDA marketing authorization among major consumer brands.</p></div>
          </div>
          <h2 style={{ fontFamily: 'var(--fd)', fontSize: 34, letterSpacing: '.04em', color: 'var(--white)', marginBottom: 24 }}>State-by-State Overview</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="state-table">
              <thead><tr><th>State</th><th>Flavor Ban</th><th>PMTA Directory</th><th>Excise Tax</th><th>Online Status</th></tr></thead>
              <tbody>
                {STATES.map((s) => (
                  <tr key={s.state}>
                    <td><strong>{s.state}</strong></td>
                    <td><Cell value={s.flavor} /></td>
                    <td><Cell value={s.pmta} /></td>
                    <td>{s.tax}</td>
                    <td><Cell value={s.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 12 }}>*Texas banned devices with imagery designed to appeal to minors. Sources: FDA.gov, state regulatory agencies. Last reviewed April 2026.</p>
          <div style={{ marginTop: 48, background: 'var(--dark2)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 'var(--rl)', padding: 28 }}>
            <h2 style={{ fontFamily: 'var(--fd)', fontSize: 28, letterSpacing: '.04em', color: 'var(--white)', marginBottom: 12 }}>Can You Ship Vapes to My State?</h2>
            <p style={{ color: 'var(--silver)', marginBottom: 20 }}>VaporVault ships to most US states using PACT Act-compliant private carriers. We cannot ship to California or Massachusetts. For states with PMTA directory requirements, we only stock brands that meet applicable requirements. Questions about your state? <Link href="/contact/" style={{ color: 'var(--gold-a)' }}>Contact us</Link> before ordering.</p>
            <Link href="/shop/disposable-vapes/" className="btn btn-primary">Shop Now →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
