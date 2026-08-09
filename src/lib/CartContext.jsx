'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { RULES, getById } from '@/config/site';

const CartContext = createContext(null);
const STORAGE_KEY = 'vv_cart';

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch { /* ignore */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const add = useCallback((id, qty = 1) => {
    const product = getById(id);
    if (!product) return;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) return prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + qty) } : i));
      return [...prev, { id, qty: Math.max(1, qty) }];
    });
    setOpen(true);
  }, []);

  const remove = useCallback((id) => setItems((prev) => prev.filter((i) => i.id !== id)), []);
  const setQty = useCallback((id, qty) => {
    if (qty < 1) { remove(id); return; }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  }, [remove]);
  const clear = useCallback(() => setItems([]), []);

  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((s, i) => { const p = getById(i.id); return s + (p ? p.price * i.qty : 0); }, 0),
    [items]
  );

  const totals = useCallback((payMethod) => {
    const disc = payMethod === 'crypto' ? subtotal * RULES.cryptoDiscount : 0;
    const discounted = subtotal - disc;
    const ship = items.length && discounted >= RULES.freeShipping ? 0 : (items.length ? RULES.shippingCost : 0);
    return { subtotal, disc, discounted, ship, total: discounted + ship, minOk: subtotal >= RULES.minOrder };
  }, [subtotal, items.length]);

  const value = { items, add, remove, setQty, clear, count, subtotal, totals, open, setOpen, hydrated };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
