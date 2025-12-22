import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBlogById, createBlog } from '../../core/services/api';
import Header from '../../components/Header';
import type { Blog } from '../../core/types';

export default function BlogEdit() {
  const { id } = useParams();
  const isNew = !id || id === 'new';
  const [form, setForm] = useState<Partial<Blog>>({ title: '', excerpt: '', content: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!isNew && id) {
        setLoading(true);
        const r = await getBlogById(id);
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
    if (!form.content || form.content.trim() === '') {
      setError('Content is required');
      return;
    }
    setLoading(true);
    try {
      if (isNew) {
        // Build a strongly-typed payload (validated above)
        const payload: { title: string; content: string } = {
          title: form.title as string,
          content: form.content as string,
        };

        const created = await createBlog(payload);
        navigate(`/blogs/${created.id}`);
      } else {
        // backend does not support updating posts
        alert('Update not supported by backend');
        navigate('/blogs');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-4xl px-4 pb-12 pt-8 sm:px-6">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              {isNew ? 'New Post' : 'Edit Post'}
            </h3>
            {!isNew && (
              <p className="mt-1 text-xs text-amber-600">
                Editing existing posts is not supported by the backend; hãy tạo bài viết mới thay
                vì chỉnh sửa.
              </p>
            )}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
        >
          <div className="space-y-1 text-sm">
            <label className="block text-sm font-medium text-slate-700">
              Title <span className="text-rose-500">*</span>
            </label>
            <input
              value={form.title || ''}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block text-sm font-medium text-slate-700">Excerpt</label>
            <input
              value={form.excerpt || ''}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block text-sm font-medium text-slate-700">
              Content <span className="text-rose-500">*</span>
            </label>
            <textarea
              value={form.content || ''}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="min-h-[200px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>

          {error && <div className="text-sm text-rose-600">{error}</div>}

          <div className="pt-2">
            <button
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
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
