import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, createProduct } from '../../core/services/api';
import Header from '../../components/Header';
import type { Product } from '../../core/types';

export default function ProductEdit() {
  const { id } = useParams();
  const isNew = !id || id === 'new';
  const [form, setForm] = useState<Partial<Product>>({
    title: '',
    description: '',
    price: 0,
    image: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!isNew && id) {
        setLoading(true);
        const r = await getProductById(id);
        if (r) setForm(r);
        setLoading(false);
      }
    })();
  }, [id, isNew]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.title || form.title.trim() === '') {
      setError('Title is required');
      return;
    }
    if (form.price == null || Number.isNaN(Number(form.price))) {
      setError('Price must be a number');
      return;
    }
    setLoading(true);
    try {
      if (isNew) {
        // Build a strongly-typed payload (validated above)
        const payload: { title: string; description?: string; price: number; image?: string } = {
          title: form.title as string,
          description: form.description,
          price: Number(form.price) as number,
          image: form.image,
        };

        const created = await createProduct(payload);
        navigate(`/products/${created.id}`);
      } else {
        // backend does not support updating products
        alert('Update not supported by backend');
        navigate('/products');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-8 sm:px-6">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-50">
              {isNew ? 'Create Product' : 'Edit Product'}
            </h3>
            {!isNew && (
              <p className="mt-1 text-xs text-amber-400">
                Editing existing products is not supported by the backend; bạn chỉ có thể xem hoặc
                tạo mới.
              </p>
            )}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-slate-950 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] sm:p-6"
        >
          <div className="space-y-4">
            <div className="space-y-1 text-sm">
              <label className="block text-sm font-medium text-slate-200">
                Title <span className="text-rose-500">*</span>
              </label>
              <input
                value={form.title || ''}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 shadow-sm placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label className="block text-sm font-medium text-slate-200">Description</label>
              <textarea
                value={form.description || ''}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="min-h-[120px] w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 shadow-sm placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label className="block text-sm font-medium text-slate-200">
                Price <span className="text-rose-500">*</span>
              </label>
              <input
                type="number"
                value={form.price as any}
                onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 shadow-sm placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
              />
            </div>
          </div>

          <aside className="space-y-4">
            <div className="space-y-1 text-sm">
              <label className="block text-sm font-medium text-slate-200">Image URL</label>
              <input
                value={form.image || ''}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 shadow-sm placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
              />
            </div>

            <div className="flex items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900 p-4 text-center text-xs text-slate-400">
              {form.image ? (
                <img
                  src={form.image}
                  alt="preview"
                  className="max-h-56 w-full rounded-lg object-cover"
                />
              ) : (
                <span>Image preview</span>
              )}
            </div>
          </aside>

          <div className="col-span-full space-y-2">
            {error && <div className="text-sm text-rose-400">{error}</div>}

            <button
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:from-violet-400 hover:to-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              type="submit"
              disabled={loading || !isNew}
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
