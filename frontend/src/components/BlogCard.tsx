'use client';

import { Link } from 'react-router-dom';
import type { Blog } from '../core/types';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      to={`/blogs/${blog.id}`}
      className="group block h-full rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition"
    >
      <div className="h-full flex flex-col bg-white">
        {/* Image placeholder */}
        <div className="aspect-video bg-stone-100 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-3xl group-hover:scale-105 transition-transform duration-300">
            📖
          </div>
        </div>

        {/* Card content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Date */}
          {blog.createdAt && (
            <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide font-medium">
              {new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}

          {/* Title */}
          <h3 className="font-serif text-lg leading-tight text-charcoal mb-3 group-hover:text-sage transition">
            {blog.title}
          </h3>

          {/* Description
          {blog.description && (
            <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
              {blog.description.substring(0, 100)}
              {blog.description.length > 100 ? "..." : ""}
            </p>
          )} */}

          {/* Read more link */}
          <div className="text-xs font-medium uppercase tracking-widest text-sage group-hover:text-sage/80 transition">
            Read Story →
          </div>
        </div>
      </div>
    </Link>
  );
}
