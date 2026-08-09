import Image from 'next/image';
import Link from 'next/link';
import { RULES, PUFF_RANGES, BRANDS, POSTS, getFeatured } from '@/config/site';
import ProductCard from '@/components/ProductCard';
import BrandTile from '@/components/BrandTile';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata = {
  title: 'Buy Disposable Vapes Online — Premium Vape Store',
  description: `Shop authentic disposable vapes online. Top brands, ${RULES.ageMinimum}+ age verified, PACT Act compliant. Free shipping $${RULES.freeShipping}+.`,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  const featured = getFeatured();

  return (
    <>
      <section className="hero">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/hero-2.jpg" alt="" role="presentation" fill sizes="100vw" priority fetchPriority="high" style={{ objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(.45) saturate(.8)' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(8,11,15,.85) 0%,rgba(8,11,15,.4) 60%,transparent 100%)', zIndex: 1 }} />
        <div className="hero-inner">
          <div>
            <div className="hero-kicker">🔐 America&apos;s Trusted Adult Vape Vault</div>
            <h1 className="hero-h1">BUY DISPOSABLE<br /><em>VAPES ONLINE</em></h1>
            <p className="hero-sub">Top brands. Authentic products. {RULES.ageMinimum}+ age verified, PACT Act compliant. Free shipping on orders ${RULES.freeShipping}+. {RULES.cryptoDiscount * 100}% off with crypto.</p>
            <div className="hero-ctas">
              <Link href="/shop/disposable-vapes/" className="btn btn-primary btn-lg">Shop All Disposables →</Link>
              <Link href="/brands/" className="btn btn-outline btn-lg">Browse Brands</Link>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-item"><span>✅</span><span>100% Authentic</span></div>
              <div className="hero-trust-item"><span>🔒</span><span>{RULES.ageMinimum}+ Verified</span></div>
              <div className="hero-trust-item"><span>📋</span><span>PACT Compliant</span></div>
              <div className="hero-trust-item"><span>🚚</span><span>Free Ship ${RULES.freeShipping}+</span></div>
            </div>
          </div>
          <div className="hero-card-stack">
            <Link href="/brands/geek-bar/" className="hero-mini-card">
              <div className="hmc-emoji">⚡</div><div className="hmc-brand">Geek Bar</div><div className="hmc-name">Pulse X 25000</div><div className="hmc-puffs">25,000 puffs</div><div className="hmc-price">$24.99</div>
            </Link>
            <Link href="/brands/raz-vape/" className="hero-mini-card">
              <div className="hmc-emoji">🔷</div><div className="hmc-brand">RAZ Vape</div><div className="hmc-name">DC25000</div><div className="hmc-puffs">25,000 puffs</div><div className="hmc-price">$26.99</div>
            </Link>
            <Link href="/brands/fifty-bar/" className="hero-mini-card">
              <div className="hmc-emoji">🇺🇸</div><div className="hmc-brand">Fifty Bar</div><div className="hmc-name">20K — USA Made</div><div className="hmc-puffs">20,000 puffs</div><div className="hmc-price">$24.99</div>
            </Link>
            <Link href="/brands/lost-mary/" className="hero-mini-card">
              <div className="hmc-emoji">🌸</div><div className="hmc-brand">Lost Mary</div><div className="hmc-name">MO5000</div><div className="hmc-puffs">5,000 puffs</div><div className="hmc-price">$14.99</div>
            </Link>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item"><div className="trust-icon">🔒</div>{RULES.ageMinimum}+ Age Gate</div>
          <div className="trust-item"><div className="trust-icon">📋</div>PACT Act Compliant</div>
          <div className="trust-item"><div className="trust-icon">🚚</div>Free Shipping ${RULES.freeShipping}+</div>
          <div className="trust-item"><div className="trust-icon">₿</div>{RULES.cryptoDiscount * 100}% Crypto Discount</div>
          <div className="trust-item"><div className="trust-icon">✅</div>100% Authentic</div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">Best Sellers</p><h2>FEATURED <em style={{ color: 'var(--gold-a)', fontStyle: 'normal' }}>PRODUCTS</em></h2></div>
            <Link href="/shop/disposable-vapes/" className="btn btn-outline btn-sm">View All →</Link>
          </div>
          <div className="products-grid">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <div style={{ position: 'relative', height: 300, overflow: 'hidden' }}>
        <Image src="/images/section-devices.jpg" alt="Premium vape devices" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 40%', filter: 'brightness(.45) saturate(.85)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10 }}>
          <p style={{ fontFamily: 'var(--fc)', fontSize: 11, fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold-a)' }}>PREMIUM SELECTION</p>
          <h2 style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(32px,5vw,60px)', letterSpacing: '.04em', color: '#fff', textAlign: 'center' }}>AUTHENTIC. VERIFIED. TRUSTED.</h2>
          <Link href="/shop/disposable-vapes/" className="btn btn-outline" style={{ marginTop: 4 }}>Shop Now →</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head centered">
            <p className="eyebrow">By Category</p>
            <h2>SHOP BY <em style={{ color: 'var(--gold-a)', fontStyle: 'normal' }}>PUFF COUNT</em></h2>
          </div>
          <div className="puff-grid">
            {PUFF_RANGES.map((r) => (
              <Link key={r.id} href={`/shop/disposable-vapes/?puffs=${r.id}`} className="puff-tile">
                <div className="puff-icon">{r.icon}</div>
                <div className="puff-label">{r.label} Puffs</div>
                <div className="puff-sub">{r.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">By Brand</p><h2>TOP <em style={{ color: 'var(--gold-a)', fontStyle: 'normal' }}>BRANDS</em></h2></div>
            <Link href="/brands/" className="btn btn-outline btn-sm">All Brands →</Link>
          </div>
          <div className="brands-grid">
            {BRANDS.map((b) => <BrandTile key={b.id} brand={b} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Why VaporVault</p>
            <h2 style={{ margin: '14px 0 20px', fontFamily: 'var(--fd)', fontSize: 'clamp(28px,4vw,42px)', letterSpacing: '.02em', color: 'var(--white)' }}>THE TRUSTED<br /><em style={{ color: 'var(--gold-a)', fontStyle: 'normal' }}>ADULT VAULT</em></h2>
            <p style={{ fontSize: 15, color: 'var(--off)', lineHeight: 1.75, marginBottom: 14 }}>VaporVault stocks only authentic products from the top US brands — ranked by real Circana retail sales data published by the CDC Foundation. No counterfeits. No gray-market products.</p>
            <p style={{ fontSize: 15, color: 'var(--off)', lineHeight: 1.75, marginBottom: 24 }}>We operate as a fully PACT Act-compliant, adult-only retailer. Every order includes age verification, adult signature on delivery, and compliant private carrier shipping.</p>
            <Link href="/about/" className="btn btn-outline">Learn More About Us</Link>
          </div>
          <div style={{ position: 'relative', borderRadius: 'var(--rxl)', overflow: 'hidden', minHeight: 420 }}>
            <Image src="/images/hero-3.jpg" alt="Premium vape device" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(8,11,15,.95) 0%,rgba(8,11,15,.3) 55%,transparent 100%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['✅ 100% Authentic Products', '📋 Full PACT Act Compliance', `🔒 ${RULES.ageMinimum}+ Age Verified Every Order`, `🚚 Free Shipping $${RULES.freeShipping}+`].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontFamily: 'var(--fc)', fontSize: 13, fontWeight: 700, letterSpacing: '.06em', color: 'var(--white)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><p className="eyebrow">Expert Guides</p><h2>VAULT <em style={{ color: 'var(--gold-a)', fontStyle: 'normal' }}>BLOG</em></h2></div>
            <Link href="/blog/" className="btn btn-outline btn-sm">All Articles →</Link>
          </div>
          <div className="blog-grid">
            {POSTS.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}/`} className="blog-card">
                <div className="bc-img">{p.emoji}</div>
                <div className="bc-body"><p className="bc-cat">{p.category}</p><h3 className="bc-title">{p.title}</h3><p className="bc-meta">{p.dateLabel} · {p.readTime}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="nl-section">
        <div className="nl-inner">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Stay In The Loop</p>
          <h2 style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(28px,5vw,44px)', letterSpacing: '.04em', color: 'var(--white)', margin: '12px 0 8px' }}>GET THE VAULT <em style={{ color: 'var(--gold-a)', fontStyle: 'normal' }}>NEWSLETTER</em></h2>
          <p style={{ color: 'var(--silver)' }}>New brands, exclusive deals, vape law updates, and flavor guides — delivered to your inbox.</p>
          <NewsletterForm />
        </div>
      </div>
    </>
  );
}
