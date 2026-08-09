'use client';
import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BRANDS, PUFF_RANGES, PRODUCTS } from '@/config/site';
import ProductCard from '@/components/ProductCard';

const DISPOSABLE_BRAND_IDS = new Set(PRODUCTS.filter((p) => p.cat !== 'pod-system').map((p) => p.brand));
const disposableBrands = BRANDS.filter((b) => DISPOSABLE_BRAND_IDS.has(b.id));

function Filters() {
  const searchParams = useSearchParams();
  const [puffFilter, setPuffFilter] = useState(searchParams.get('puffs') || 'all');
  const [brandFilter, setBrandFilter] = useState('all');

  const products = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (p.cat === 'pod-system') return false;
      if (puffFilter !== 'all' && p.cat !== puffFilter) return false;
      if (brandFilter !== 'all' && p.brand !== brandFilter) return false;
      return true;
    });
  }, [puffFilter, brandFilter]);

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter by puff count">
        <button type="button" className={`filter-btn ${puffFilter === 'all' ? 'active' : ''}`} onClick={() => setPuffFilter('all')}>All Puff Counts</button>
        {PUFF_RANGES.map((r) => (
          <button key={r.id} type="button" className={`filter-btn ${puffFilter === r.id ? 'active' : ''}`} onClick={() => setPuffFilter(r.id)}>{r.label}</button>
        ))}
      </div>
      <div className="filter-bar" role="group" aria-label="Filter by brand">
        <button type="button" className={`filter-btn ${brandFilter === 'all' ? 'active' : ''}`} onClick={() => setBrandFilter('all')}>All Brands</button>
        {disposableBrands.map((b) => (
          <button key={b.id} type="button" className={`filter-btn ${brandFilter === b.id ? 'active' : ''}`} onClick={() => setBrandFilter(b.id)}>{b.label}</button>
        ))}
      </div>
      {products.length === 0 ? (
        <p style={{ color: 'var(--silver)', padding: '40px 0', textAlign: 'center' }}>No products match those filters.</p>
      ) : (
        <div className="products-grid">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </>
  );
}

export default function DisposableShopClient() {
  return (
    <Suspense fallback={<div className="products-grid">{PRODUCTS.filter((p) => p.cat !== 'pod-system').map((p) => <ProductCard key={p.id} product={p} />)}</div>}>
      <Filters />
    </Suspense>
  );
}
