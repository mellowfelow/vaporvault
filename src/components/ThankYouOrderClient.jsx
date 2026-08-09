'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ThankYouOrderClient() {
  const [orderNum, setOrderNum] = useState('');
  useEffect(() => { setOrderNum(sessionStorage.getItem('vv_last_order') || ''); }, []);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 560, textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: 80, marginBottom: 20 }} aria-hidden="true">✅</div>
        <h1 style={{ fontFamily: 'var(--fd)', fontSize: 44, letterSpacing: '.04em', color: 'var(--white)', marginBottom: 12 }}>ORDER PLACED!</h1>
        {orderNum && <p style={{ color: 'var(--silver)', fontSize: 17, marginBottom: 8 }}>Order Number: <strong style={{ color: 'var(--gold-a)', fontFamily: 'var(--fc)', fontSize: 20 }}>{orderNum}</strong></p>}
        <p style={{ color: 'var(--silver)', lineHeight: 1.7, marginBottom: 32 }}>Thank you for your order! We&apos;ll send payment instructions to your email shortly. Please complete payment within 24 hours to secure your order.</p>
        <Link href="/shop/disposable-vapes/" className="btn btn-outline">Continue Shopping</Link>
      </div>
    </section>
  );
}
