'use client';
import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PRODUCTS, getBrand } from '@/config/site';
import PageHero from '@/components/PageHero';
import ProductCard from '@/components/ProductCard';

function SearchResults() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return PRODUCTS.filter((p) => p.name.toLowerCase().includes(q) || getBrand(p.brand)?.label.toLowerCase().includes(q) || p.flavors?.some((f) => f.toLowerCase().includes(q)));
  }, [query]);

  return (
    <section className="section">
      <div className="container">
        <div className="form-group" style={{ maxWidth: 480, marginBottom: 32 }}>
          <label htmlFor="site-search" className="sr-only">Search products</label>
          <input id="site-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search brands, products, flavors..." />
        </div>
        {query.trim().length >= 2 && (
          results.length ? (
            <div className="products-grid">{results.map((p) => <ProductCard key={p.id} product={p} />)}</div>
          ) : (
            <p style={{ color: 'var(--silver)' }}>No results for &quot;{query}&quot;.</p>
          )
        )}
      </div>
    </section>
  );
}

export default function SearchPage() {
  return (
    <>
      <PageHero title="Search" subtitle="Find products, brands, and flavors." trail={[{ label: 'Search' }]} image="/images/hero-1.jpg" />
      <Suspense fallback={null}>
        <SearchResults />
      </Suspense>
    </>
  );
}
