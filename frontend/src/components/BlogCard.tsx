import React from 'react';
import { Link } from 'react-router-dom';
import type { Blog } from '../core/types';

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="flex w-full max-w-md flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.9)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(129,140,248,0.6)]">
      <div>
        <h4 className="mb-1 line-clamp-2 text-sm font-semibold text-slate-50">{blog.title}</h4>
        <p className="mb-2 line-clamp-3 text-xs text-slate-400">
          {blog.excerpt || blog.content.slice(0, 120)}
        </p>
        <div className="mb-3 text-[11px] font-medium uppercase tracking-wide text-slate-500">
          By {blog.author || 'Anonymous'}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between text-xs font-medium text-violet-300">
        <Link to={`/blogs/${blog.id}`} className="hover:underline hover:text-cyan-300">
          Read article
        </Link>
        <Link
          to={`/blogs/${blog.id}/edit`}
          className="text-slate-400 hover:text-violet-300 hover:underline"
        >
          Edit
        </Link>
      </div>
    </article>
  );
}
