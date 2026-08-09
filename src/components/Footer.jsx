import Link from 'next/link';
import { SITE, BRANDS, RULES } from '@/config/site';

export default function Footer() {
  const topBrands = BRANDS.slice(0, 8);
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div className="logo-icon" aria-hidden="true">🔐</div>
            <span className="logo-wm">VAPOR<em>VAULT</em></span>
          </div>
          <p className="footer-desc">Your trusted adult source for premium disposable vapes, e-liquids, and pod systems. All products authentic. All customers {RULES.ageMinimum}+. All orders PACT Act compliant.</p>
          <p style={{ fontSize: 13 }}><a href={`mailto:${SITE.email}`} style={{ color: 'var(--gold-a)' }}>✉️ {SITE.email}</a></p>
        </div>
        <div>
          <p className="footer-heading">Quick Links</p>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/about/">About Us</Link>
            <Link href="/blog/">Blog &amp; Guides</Link>
            <Link href="/faq/">FAQ</Link>
            <Link href="/contact/">Contact Us</Link>
            <Link href="/wholesale/">Wholesale</Link>
            <Link href="/vape-laws/">Vape Laws by State</Link>
          </div>
        </div>
        <div>
          <p className="footer-heading">Brands</p>
          <div className="footer-links">
            {topBrands.map((b) => (
              <Link key={b.id} href={`/brands/${b.id}/`}>{b.label}{b.pmta === 'authorized' ? ' ✅' : ''}</Link>
            ))}
            <Link href="/brands/">All Brands →</Link>
          </div>
        </div>
        <div>
          <p className="footer-heading">Legal</p>
          <div className="footer-links">
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms-of-service/">Terms of Service</Link>
            <Link href="/shipping-info/">Shipping Info</Link>
            <Link href="/how-to-order/">How To Order</Link>
          </div>
          <p className="footer-heading" style={{ marginTop: 24 }}>Payment</p>
          <p style={{ fontSize: 13, color: 'var(--silver)', lineHeight: 1.7 }}>Crypto ₿ · Cash App · Apple Pay · Chime<br /><span style={{ color: 'var(--gold-a)', fontWeight: 700 }}>{RULES.cryptoDiscount * 100}% off with crypto</span></p>
        </div>
      </div>
      <div className="footer-bottom container">
        <div className="footer-legal">
          <p className="footer-warn">⚠️ FDA WARNING</p>
          This product contains nicotine. Nicotine is an addictive chemical. For adult use only. Must be {RULES.ageMinimum}+ to purchase. PACT Act compliance on all shipments. Adult signature at delivery. VaporVault does not ship to California (Prop 31 flavor ban), Massachusetts, or other restricted states. Not a smoking cessation product. © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div className="footer-age">{RULES.ageMinimum}+ ONLY</div>
          <div style={{ display: 'flex', gap: 16, marginTop: 12, justifyContent: 'flex-end' }}>
            <Link href="/privacy-policy/" style={{ fontSize: 12, color: 'var(--muted)' }}>Privacy</Link>
            <Link href="/terms-of-service/" style={{ fontSize: 12, color: 'var(--muted)' }}>Terms</Link>
            <Link href="/contact/" style={{ fontSize: 12, color: 'var(--muted)' }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
