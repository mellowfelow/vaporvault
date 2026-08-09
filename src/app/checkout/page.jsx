'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FORMS, PAYMENT_METHODS, RULES, SITE, getBrand, getById } from '@/config/site';
import { useCart } from '@/lib/CartContext';
import { submitWeb3Form } from '@/lib/forms';
import { showToast } from '@/lib/toast';

const US_STATES = ['AL','AK','AZ','AR','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

function generateOrderNumber() {
  return `VV-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totals, clear } = useCart();
  const [payMethod, setPayMethod] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const t = totals(payMethod);

  const orderLines = useMemo(() => items.map((item) => {
    const p = getById(item.id);
    if (!p) return '';
    const b = getBrand(p.brand);
    return `- ${item.qty}x ${p.name} (${b?.label || ''}) = $${(p.price * item.qty).toFixed(2)}`;
  }).join('\n'), [items]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const form = e.target;
    const fname = form.fname.value.trim();
    const lname = form.lname.value.trim();
    const email = form.email.value.trim();
    const address = form.address.value.trim();
    const city = form.city.value.trim();
    const state = form.state.value;
    const zip = form.zip.value.trim();
    const notes = form.notes.value.trim();

    if (!fname || !lname) { setError('Please enter your name.'); return; }
    if (!email.includes('@')) { setError('Please enter a valid email.'); return; }
    if (!address || !city || !state || !zip) { setError('Please complete your shipping address.'); return; }
    if (!payMethod) { setError('Please select a payment method.'); return; }
    if (!items.length) { setError('Your cart is empty.'); return; }
    if (!t.minOk) { setError(`Minimum order is $${RULES.minOrder}.`); return; }

    setSending(true);
    const orderNum = generateOrderNumber();
    const payLabel = PAYMENT_METHODS.find((m) => m.id === payMethod)?.label || payMethod;
    const message = [
      `Order ${orderNum}`,
      '',
      `${fname} ${lname}`,
      email,
      form.phone.value.trim() || 'No phone',
      `${address}, ${city}, ${state} ${zip}`,
      payLabel,
      '',
      orderLines,
      '',
      `Subtotal $${t.subtotal.toFixed(2)}`,
      t.disc > 0 ? `Crypto Discount: -$${t.disc.toFixed(2)}` : '',
      `Shipping ${t.ship === 0 ? 'FREE' : `$${t.ship.toFixed(2)}`}`,
      `Total $${t.total.toFixed(2)}`,
      notes ? `Notes: ${notes}` : '',
    ].filter(Boolean).join('\n');

    const hiddenForm = document.createElement('form');
    const fields = {
      access_key: FORMS.web3formsKey,
      subject: `VaporVault Order ${orderNum} — ${fname} ${lname} — $${t.total.toFixed(2)}`,
      from_name: SITE.name,
      email,
      message,
    };
    Object.entries(fields).forEach(([k, v]) => {
      const input = document.createElement('input');
      input.name = k; input.value = v;
      hiddenForm.appendChild(input);
    });

    const result = await submitWeb3Form(hiddenForm);
    setSending(false);
    if (result.ok) {
      clear();
      sessionStorage.setItem('vv_last_order', orderNum);
      router.push('/thank-you-order/');
    } else {
      setError(`${result.message}. Please email ${SITE.email} to complete your order.`);
      showToast('Error placing order', '');
    }
  };

  if (items.length === 0) {
    return (
      <section className="section">
        <div className="container" style={{ maxWidth: 600, textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--fd)', fontSize: 40, color: 'var(--white)', marginBottom: 16 }}>Your Cart Is Empty</h1>
          <p style={{ color: 'var(--silver)', marginBottom: 24 }}>Add some products before checking out.</p>
          <Link href="/shop/disposable-vapes/" className="btn btn-primary btn-lg">Shop Disposables →</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="page-hero" style={{ minHeight: 180 }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/hero-3.jpg" alt="" role="presentation" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 35%', filter: 'brightness(.15) saturate(.5)' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg,rgba(8,11,15,1) 0%,rgba(8,11,15,.2) 100%)', zIndex: 1 }} />
        <div className="page-hero-inner" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(28px,4vw,44px)' }}>Secure Checkout</h1>
          <p>{RULES.ageMinimum}+ verified · PACT Act compliant · Adult signature delivery</p>
        </div>
      </div>
      <section className="section">
        <div className="container checkout-layout">
          <div>
            <div className="co-panel" style={{ marginBottom: 24 }}>
              <h2>Shipping Information</h2>
              <form id="checkout-form" onSubmit={onSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="co-fname">First Name *</label><input type="text" id="co-fname" name="fname" required autoComplete="given-name" /></div>
                  <div className="form-group"><label htmlFor="co-lname">Last Name *</label><input type="text" id="co-lname" name="lname" required autoComplete="family-name" /></div>
                </div>
                <div className="form-group"><label htmlFor="co-email">Email Address *</label><input type="email" id="co-email" name="email" required autoComplete="email" /></div>
                <div className="form-group"><label htmlFor="co-phone">Phone Number</label><input type="tel" id="co-phone" name="phone" autoComplete="tel" /></div>
                <div className="form-group"><label htmlFor="co-addr">Street Address *</label><input type="text" id="co-addr" name="address" required autoComplete="street-address" /></div>
                <div className="form-row">
                  <div className="form-group"><label htmlFor="co-city">City *</label><input type="text" id="co-city" name="city" required autoComplete="address-level2" /></div>
                  <div className="form-group"><label htmlFor="co-zip">ZIP Code *</label><input type="text" id="co-zip" name="zip" required autoComplete="postal-code" maxLength={10} /></div>
                </div>
                <div className="form-group">
                  <label htmlFor="co-state">State *</label>
                  <select id="co-state" name="state" required defaultValue="">
                    <option value="">Select State...</option>
                    {US_STATES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group"><label htmlFor="co-notes">Order Notes (optional)</label><textarea id="co-notes" name="notes" rows={3} /></div>

                <h2 style={{ marginTop: 8 }}>Payment Method</h2>
                <p style={{ color: 'var(--silver)', fontSize: 14, marginBottom: 16 }}>Select your payment method. Payment instructions will be sent to your email after order confirmation.</p>
                <div className="pay-opts">
                  {PAYMENT_METHODS.map((m) => (
                    <div className="pay-opt" key={m.id}>
                      <input type="radio" name="pay_method" id={`pay-${m.id}`} value={m.id} checked={payMethod === m.id} onChange={() => setPayMethod(m.id)} />
                      <label htmlFor={`pay-${m.id}`}>
                        <span className="pay-opt-icon" aria-hidden="true">{m.icon}</span>
                        <span className="pay-opt-name">{m.label}</span>
                        {m.discount && <span style={{ color: 'var(--green)', fontSize: 11, fontWeight: 700 }}>{RULES.cryptoDiscount * 100}% OFF</span>}
                      </label>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'rgba(16,185,129,.08)', border: '1px solid rgba(16,185,129,.2)', borderRadius: 'var(--r)', padding: 12, marginBottom: 20 }}>
                  <p style={{ fontFamily: 'var(--fc)', fontSize: 12, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--green)' }}>🔒 Secure &amp; PACT Act Compliant</p>
                  <p style={{ fontSize: 13, color: 'var(--silver)', marginTop: 4 }}>All orders include age-verified checkout and adult signature on delivery per federal PACT Act requirements.</p>
                </div>
                {error && <p style={{ color: 'var(--red)', fontSize: 13, marginBottom: 12 }}>{error}</p>}
                <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={sending}>{sending ? 'Placing Order…' : 'Place Order →'}</button>
                <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', marginTop: 12 }}>
                  By placing your order you confirm you are {RULES.ageMinimum}+ years of age and agree to our <Link href="/terms-of-service/" style={{ color: 'var(--silver)' }}>Terms of Service</Link>.
                </p>
              </form>
            </div>
          </div>
          <div>
            <div className="co-panel" style={{ position: 'sticky', top: 88 }}>
              <h2>Order Summary</h2>
              <div style={{ marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map((item) => {
                  const p = getById(item.id);
                  if (!p) return null;
                  const b = getBrand(p.brand);
                  return (
                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
                      <div style={{ width: 52, height: 52, background: 'var(--dark3)', borderRadius: 'var(--r)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }} aria-hidden="true">{p.emoji}</div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: 'var(--fc)', fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold-a)' }}>{b?.label}</p>
                        <p style={{ fontFamily: 'var(--fc)', fontSize: 13, fontWeight: 700, color: 'var(--white)' }}>{p.name}</p>
                        <p style={{ fontSize: 11, color: 'var(--silver)' }}>{p.puffs} puffs · Qty: {item.qty}</p>
                      </div>
                      <span style={{ fontFamily: 'var(--fc)', fontSize: 15, fontWeight: 700, color: 'var(--white)' }}>${(p.price * item.qty).toFixed(2)}</span>
                    </div>
                  );
                })}
              </div>
              {!t.minOk && <div className="cart-min-warn">⚠️ Min. order ${RULES.minOrder}.</div>}
              <div className="cart-total-row"><span>Subtotal</span><span>${t.subtotal.toFixed(2)}</span></div>
              {t.disc > 0 && <div className="cart-total-row discount"><span>🔐 Crypto {RULES.cryptoDiscount * 100}% Off</span><span>−${t.disc.toFixed(2)}</span></div>}
              <div className="cart-total-row"><span>Shipping</span><span>{t.ship === 0 ? <span className="free-ship">FREE</span> : `$${t.ship.toFixed(2)}`}</span></div>
              <div className="cart-total-row total"><span>ORDER TOTAL</span><span>${t.total.toFixed(2)}</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
