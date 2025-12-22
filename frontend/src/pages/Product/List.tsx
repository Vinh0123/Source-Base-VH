import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6">
        <div className="flex flex-col gap-4 border-b border-slate-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              Products
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Danh sách sản phẩm được lấy từ API backend `/api/products`.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <input
              placeholder="Tìm sản phẩm..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="h-9 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-100 placeholder:text-slate-500 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-9 rounded-md border border-slate-700 bg-slate-900 px-2 text-sm text-slate-100 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
            >
              <option value="newest">Mới nhất</option>
              <option value="price_asc">Giá tăng dần</option>
              <option value="price_desc">Giá giảm dần</option>
            </select>
            <Link
              to="/products/new"
              className="inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-violet-500 to-cyan-400 px-3 text-sm font-semibold text-slate-950 shadow-sm hover:from-violet-400 hover:to-cyan-300"
            >
              + New Product
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-10 text-sm text-slate-400">
            Đang tải dữ liệu...
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-10 text-sm text-slate-400">Không tìm thấy sản phẩm nào.</div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
