'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/CartContext';
import { getBrand, getById, RULES, puffsLabel } from '@/config/site';

export default function CartDrawer() {
  const { items, remove, setQty, open, setOpen, totals } = useCart();
  const t = totals('');

  return (
    <>
      <div className={`cart-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`cart-drawer ${open ? 'open' : ''}`} role="dialog" aria-label="Shopping cart">
        <div className="cart-header">
          <h2 className="cart-title">YOUR CART</h2>
          <button type="button" className="cart-close" aria-label="Close cart" onClick={() => setOpen(false)}>×</button>
        </div>
        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div style={{ fontSize: 48, marginBottom: 12 }} aria-hidden="true">🛒</div>
              <p style={{ fontFamily: 'var(--fc)', fontSize: 15, fontWeight: 700, color: 'var(--silver)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Your Cart Is Empty</p>
              <Link href="/shop/disposable-vapes/" className="btn btn-outline btn-sm" style={{ marginTop: 16 }} onClick={() => setOpen(false)}>Browse Products</Link>
            </div>
          ) : items.map((item) => {
            const p = getById(item.id);
            if (!p) return null;
            const b = getBrand(p.brand);
            return (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-img" aria-hidden="true" style={p.image ? { background: '#fff', position: 'relative' } : undefined}>
                  {p.image ? <Image src={p.image} alt="" fill sizes="56px" style={{ objectFit: 'contain', padding: 4 }} /> : p.emoji}
                </div>
                <div>
                  <p className="cart-item-brand">{b?.label}</p>
                  <p className="cart-item-name">{p.name}</p>
                  <p style={{ fontSize: 11, color: 'var(--silver)', marginBottom: 6 }}>⚡ {puffsLabel(p.puffs)}</p>
                  <div className="qty-control">
                    <button type="button" className="qty-btn" aria-label="Decrease quantity" onClick={() => setQty(p.id, item.qty - 1)}>−</button>
                    <span className="qty-num">{item.qty}</span>
                    <button type="button" className="qty-btn" aria-label="Increase quantity" onClick={() => setQty(p.id, item.qty + 1)}>+</button>
                  </div>
                </div>
                <div className="cart-item-right">
                  <span className="cart-item-price">${(p.price * item.qty).toFixed(2)}</span>
                  <button type="button" className="cart-item-remove" aria-label={`Remove ${p.name}`} onClick={() => remove(p.id)}>×</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-footer">
          {items.length > 0 && !t.minOk && (
            <div className="cart-min-warn">⚠️ Min. order ${RULES.minOrder}. Add <strong>${(RULES.minOrder - t.subtotal).toFixed(2)}</strong> more.</div>
          )}
          <div className="cart-total-row"><span>Subtotal</span><span>${t.subtotal.toFixed(2)}</span></div>
          <div className="cart-total-row"><span>Shipping</span><span>{t.ship === 0 ? <span className="free-ship">FREE</span> : `$${t.ship.toFixed(2)}`}</span></div>
          {items.length > 0 && t.subtotal < RULES.freeShipping && (
            <p className="cart-ship-tip">Add <strong>${(RULES.freeShipping - t.subtotal).toFixed(2)}</strong> for FREE shipping</p>
          )}
          <div className="cart-total-row total"><span>Total</span><span>${t.total.toFixed(2)}</span></div>
          {items.length > 0 && (
            <>
              <Link
                href="/checkout/" className="btn btn-primary btn-block" style={{ marginTop: 16, ...(!t.minOk ? { opacity: .5, pointerEvents: 'none' } : {}) }}
                onClick={() => setOpen(false)}
              >Checkout →</Link>
              <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost btn-sm btn-block" style={{ marginTop: 10 }}>Continue Shopping</button>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
