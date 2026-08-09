'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE, CATEGORIES, PRODUCTS, getBrand } from '@/config/site';
import { useCart } from '@/lib/CartContext';
import CartDrawer from './CartDrawer';

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => { setMobileOpen(false); setSearchOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? 'hidden' : '';
  }, [mobileOpen, searchOpen]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

  const results = query.trim().length >= 2
    ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || getBrand(p.brand)?.label.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : [];

  return (
    <>
      <header className="site-header">
        <Link href="/" className="header-logo" aria-label={`${SITE.name} home`}>
          <div className="logo-icon" aria-hidden="true">🔐</div>
          <div className="logo-text">
            <span className="logo-wm">VAPOR<em>VAULT</em></span>
            <span className="logo-tag">{SITE.tagline}</span>
          </div>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/" className={isActive('/') && pathname === '/' ? 'active' : ''}>Home</Link>
          <div className="nav-item">
            <Link href="/shop/" className={isActive('/shop') ? 'active' : ''}>Shop</Link>
            <div className="nav-dropdown">
              <Link href="/brands/">🏷️ Brands</Link>
              {CATEGORIES.map((c) => (
                <Link key={c.id} href={`/shop/${c.id}/`}>{c.emoji} {c.label}</Link>
              ))}
              <Link href="/deals/">💰 Deals &amp; Bundles</Link>
            </div>
          </div>
          <Link href="/about/" className={isActive('/about') ? 'active' : ''}>About</Link>
          <Link href="/blog/" className={isActive('/blog') ? 'active' : ''}>Blog</Link>
          <Link href="/faq/" className={isActive('/faq') ? 'active' : ''}>FAQ</Link>
          <Link href="/contact/" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
        </nav>
        <div className="header-icons">
          <button type="button" className="header-icon-btn" aria-label="Search" onClick={() => setSearchOpen(true)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
          </button>
          <button type="button" className="header-icon-btn" aria-label={`Cart, ${count} items`} onClick={() => setCartOpen(true)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>
            <span className={`cart-badge ${count > 0 ? 'show' : ''}`}>{count}</span>
          </button>
        </div>
        <button type="button" className={`hamburger ${mobileOpen ? 'open' : ''}`} aria-label="Toggle menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </header>

      <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <Link href="/">Home</Link>
        <div className="mob-divider">Shop</div>
        <Link href="/brands/">All Brands</Link>
        {CATEGORIES.map((c) => <Link key={c.id} href={`/shop/${c.id}/`}>{c.label}</Link>)}
        <Link href="/deals/">Deals &amp; Bundles</Link>
        <div className="mob-divider">Info</div>
        <Link href="/about/">About</Link>
        <Link href="/blog/">Blog &amp; Guides</Link>
        <Link href="/faq/">FAQ</Link>
        <Link href="/contact/">Contact Us</Link>
        <Link href="/wholesale/">Wholesale</Link>
      </nav>
      <div className={`mob-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />

      <div className={`search-overlay ${searchOpen ? 'open' : ''}`} role="dialog" aria-label="Search">
        <div className="search-input-wrap">
          <input
            type="search" className="search-input" placeholder="Search brands, products, flavors..."
            autoComplete="off" value={query} onChange={(e) => setQuery(e.target.value)} autoFocus={searchOpen}
          />
          <button type="button" className="search-close" aria-label="Close search" onClick={() => { setSearchOpen(false); setQuery(''); }}>×</button>
        </div>
        {results.length > 0 && (
          <div className="search-results">
            {results.map((p) => {
              const b = getBrand(p.brand);
              return (
                <Link key={p.id} href={`/brands/${p.brand}/`} className="sr-item" onClick={() => setSearchOpen(false)}>
                  <div className="sr-img">{p.emoji}</div>
                  <div className="sr-info"><h4>{p.name}</h4><p>{b?.label} · {p.puffs} puffs</p></div>
                  <span className="sr-price">${p.price.toFixed(2)}</span>
                </Link>
              );
            })}
          </div>
        )}
        {query.trim().length >= 2 && results.length === 0 && (
          <div className="search-results"><div style={{ padding: 20, textAlign: 'center', color: 'var(--silver)' }}>No results for &quot;{query}&quot;</div></div>
        )}
      </div>

      <CartDrawer />
    </>
  );
}
