import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogs } from '../../core/services/api';
import BlogCard from '../../components/BlogCard';
import Header from '../../components/Header';
import type { Blog } from '../../core/types';

export default function BlogList() {
  const [items, setItems] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const r = await getBlogs();
      setItems(r);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6">
        <div className="mb-4 flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">Blogs</h3>
            <p className="mt-1 text-sm text-slate-500">
              Các bài viết được load từ API backend `/api/blogs`.
            </p>
          </div>
          <Link
            to="/blogs/new"
            className="inline-flex h-9 items-center justify-center rounded-md bg-indigo-600 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            + New Post
          </Link>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-10 text-sm text-slate-500">
            Đang tải bài viết...
          </div>
        ) : items.length === 0 ? (
          <div className="py-10 text-sm text-slate-500">Chưa có bài viết nào.</div>
        ) : (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {items.map((b) => (
              <BlogCard key={b.id} blog={b} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
