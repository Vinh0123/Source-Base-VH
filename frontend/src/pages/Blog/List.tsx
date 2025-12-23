'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import BlogCard from '../../components/BlogCard';
import type { Blog } from '../../core/types';
import { getBlogs } from '../../core/services/api';

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
    <div className="min-h-screen bg-stone">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 border-b border-gray-200 pb-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage">
              Flower Stories
            </p>
            <h1 className="font-serif text-4xl font-light leading-tight text-charcoal">Our Blog</h1>
            <p className="max-w-lg text-sm text-gray-600">
              Discover floral inspiration, care tips, and stories from our garden.
            </p>
          </div>

          <Link
            to="/blogs/new"
            className="inline-flex h-10 items-center justify-center bg-charcoal px-5 text-sm font-medium text-stone hover:bg-charcoal/90 transition whitespace-nowrap"
          >
            + New Post
          </Link>
        </div>

        {/* Loading state */}
        {loading ? (
          <div className="flex items-center justify-center py-16 text-sm text-gray-500">
            Loading stories...
          </div>
        ) : items.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm text-gray-500">No stories yet.</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
