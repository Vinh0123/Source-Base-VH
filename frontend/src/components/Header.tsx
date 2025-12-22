import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="border-b border-pink-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-400 text-white text-lg shadow-[0_10px_25px_rgba(244,114,182,0.55)]">
            ✿
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-rose-700">
              VH Flowers
            </span>
            <span className="text-xs text-rose-400">Hoa tươi & câu chuyện</span>
          </div>
        </Link>

        <nav className="flex items-center gap-3 text-sm font-medium text-rose-600">
          <Link
            to="/"
            className="rounded-full px-3 py-1.5 text-rose-600 hover:bg-rose-50 hover:text-rose-700 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="rounded-full px-3 py-1.5 text-rose-600 hover:bg-rose-50 hover:text-rose-700 transition-colors"
          >
            Products
          </Link>
          <Link
            to="/blogs"
            className="rounded-full px-3 py-1.5 text-rose-600 hover:bg-rose-50 hover:text-rose-700 transition-colors"
          >
            Blogs
          </Link>
        </nav>
      </div>
    </header>
  );
}
