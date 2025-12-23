'use client';

import { useEffect, useMemo, useState } from 'react';
import { getProducts } from '../../core/services/api';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import type { Product } from '../../core/types';

export default function ProductList() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    (async () => {
      setLoading(true);
      const r = await getProducts();
      setItems(r);
      setLoading(false);
    })();
  }, []);

  const filtered = useMemo(() => {
    let list = items.filter(
      (p) =>
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        (p.description || '').toLowerCase().includes(q.toLowerCase()),
    );
    if (sort === 'price_asc') list = list.sort((a, b) => a.price - b.price);
    else if (sort === 'price_desc') list = list.sort((a, b) => b.price - a.price);
    else
      list = list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return list;
  }, [items, q, sort]);

  return (
    <div className="min-h-screen bg-stone">
      <Header />
      <main className="mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-6 border-b border-gray-200 pb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage">
              Our Collection
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light text-charcoal lg:text-5xl">
              Curated Floral Arrangements
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
              Browse our selection of hand-crafted arrangements for every occasion. Each piece is
              uniquely designed with the finest blooms.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <input
              placeholder="Search arrangements..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="rounded-none border border-gray-300 bg-white px-4 py-2 text-sm text-charcoal placeholder:text-gray-400 focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-none border border-gray-300 bg-white px-4 py-2 text-sm text-charcoal focus:border-sage focus:outline-none focus:ring-1 focus:ring-sage"
            >
              <option value="newest">Newest</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12 text-sm text-gray-500">
            Loading arrangements...
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center text-sm text-gray-500">No arrangements found.</div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
