'use client';
import { useState } from 'react';
import { useCart } from '@/lib/CartContext';
import { showToast } from '@/lib/toast';

export default function ProductDetailActions({ product }) {
  const [qty, setQty] = useState(1);
  const { add } = useCart();

  const handleAdd = () => {
    add(product.id, qty);
    showToast(`✅ ${product.name} added to cart`, 'success');
  };

  return (
    <div>
      <div className="pc-qty-row" style={{ marginBottom: 16 }}>
        <button type="button" className="qty-btn" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
        <span className="pc-qty-num">{qty}</span>
        <button type="button" className="qty-btn" aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)}>+</button>
      </div>
      <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleAdd}>Add to Cart — ${(product.price * qty).toFixed(2)}</button>
    </div>
  );
}
