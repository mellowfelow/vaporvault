'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getBrand, puffsLabel } from '@/config/site';
import { useCart } from '@/lib/CartContext';
import { showToast } from '@/lib/toast';

const badgeClass = (badge) => {
  if (badge === 'New' || badge === 'USA Made') return 'new';
  if (badge === 'Hot') return 'hot';
  if (badge === 'FDA Auth') return 'fda';
  return '';
};

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(1);
  const { add } = useCart();
  const brand = getBrand(product.brand);

  const handleAdd = () => {
    add(product.id, qty);
    showToast(`✅ ${product.name} added to cart`, 'success');
  };

  const href = `/product/${product.id}/`;

  return (
    <article className="product-card">
      <Link href={href} style={{ display: 'block', textDecoration: 'none' }}>
        <div className={`pc-img ${product.image ? 'pc-img-photo' : ''}`}>
          {product.badge && <span className={`pc-badge ${badgeClass(product.badge)}`}>{product.badge}</span>}
          {product.image ? (
            <Image src={product.image} alt={product.name} fill sizes="(max-width: 600px) 50vw, 260px" style={{ objectFit: 'contain' }} />
          ) : (
            <span style={{ fontSize: 64 }} aria-hidden="true">{product.emoji}</span>
          )}
        </div>
      </Link>
      <div className="pc-body">
        <p className="pc-brand">{brand?.label}</p>
        <Link href={href} style={{ textDecoration: 'none' }}>
          <h3 className="pc-name">{product.name}</h3>
        </Link>
        <div className="pc-puffs">⚡ {puffsLabel(product.puffs)}</div>
        <p className="pc-desc">{product.desc.slice(0, 90)}…</p>
        <div className="pc-qty-row">
          <button type="button" className="qty-btn" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
          <span className="pc-qty-num">{qty}</span>
          <button type="button" className="qty-btn" aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)}>+</button>
        </div>
        <div className="pc-footer">
          <div>
            <p className="pc-price-label">FROM</p>
            <p className="pc-price">${product.price.toFixed(2)}</p>
          </div>
          <button type="button" className="btn-atc" onClick={handleAdd}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>
            Add
          </button>
        </div>
        <div className="pc-stock">● In Stock</div>
      </div>
    </article>
  );
}
