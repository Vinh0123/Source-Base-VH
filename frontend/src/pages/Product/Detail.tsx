import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getProductById } from '../../core/services/api';
import Header from '../../components/Header';
import type { Product } from '../../core/types';

export default function ProductDetail() {
  const { id } = useParams();
  const [item, setItem] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!id) return;
      setLoading(true);
      const r = await getProductById(id);
      setItem(r);
      setLoading(false);
    })();
  }, [id]);

  const remove = async () => {
    // delete is not supported by backend; navigate back instead
    alert('Delete not supported by backend');
    navigate('/products');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Header />
        <main className="mx-auto flex max-w-4xl items-center justify-center px-4 py-12 text-sm text-slate-400">
          Đang tải sản phẩm...
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
        {!item ? (
          <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900 px-4 py-10 text-center text-sm text-slate-400">
            Sản phẩm không tồn tại.
          </div>
        ) : (
          <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-slate-950 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] sm:p-6">
            <div>
              <div className="overflow-hidden rounded-xl bg-slate-900">
                <img
                  src={item.image || `https://picsum.photos/seed/${item.id}/900/600`}
                  alt={item.title}
                  className="h-full w-full max-h-[420px] object-cover"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-slate-50 sm:text-2xl">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {item.description || 'No description provided for this product.'}
              </p>
            </div>

            <aside className="flex flex-col justify-between rounded-xl bg-slate-900/80 p-4 sm:p-5 border border-slate-800">
              <div>
                <div className="text-2xl font-semibold text-cyan-300">
                  ${item.price.toFixed(2)}
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  Added:{' '}
                  <span className="font-medium text-slate-100">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <button className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:from-violet-400 hover:to-cyan-300">
                  Add to cart
                </button>
                <div className="flex gap-2">
                  <Link
                    to={`/products/${item.id}/edit`}
                    className="inline-flex flex-1 items-center justify-center rounded-md border border-slate-600 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 shadow-sm hover:bg-slate-800"
                  >
                    Edit
                  </Link>
                  <button
                    className="inline-flex flex-1 items-center justify-center rounded-md border border-rose-400/60 bg-rose-900/50 px-4 py-2 text-sm font-semibold text-rose-200 hover:bg-rose-900/70"
                    onClick={remove}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}
