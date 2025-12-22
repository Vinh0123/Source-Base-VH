import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../core/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex w-full max-w-xs flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(59,130,246,0.55)]">
      <div className="h-40 w-full overflow-hidden bg-slate-900">
        <img
          src={product.image || `https://picsum.photos/seed/${product.id}/400/300`}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h4 className="line-clamp-1 text-sm font-semibold text-slate-50">{product.title}</h4>
        <p className="line-clamp-2 min-h-[2.5rem] text-xs text-slate-400">
          {product.description || 'No description provided.'}
        </p>
        <div className="mt-1 text-lg font-semibold text-cyan-300">
          ${product.price.toFixed(2)}
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 text-xs font-medium">
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-sm hover:from-violet-400 hover:to-cyan-300"
          >
            View
          </Link>
          <div className="flex items-center gap-2 text-slate-400">
            <Link
              to={`/products/${product.id}/edit`}
              className="hover:text-violet-300 hover:underline"
            >
              Edit
            </Link>
            <span className="text-slate-600">•</span>
            <Link to={`/products/${product.id}`} className="hover:text-cyan-300 hover:underline">
              Buy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
