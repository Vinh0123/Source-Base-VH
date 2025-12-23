import { Link } from 'react-router-dom';
import type { Product } from '../core/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`} className="block">
      <div className="group flex cursor-pointer flex-col gap-4">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-stone-100">
          <div className="flex h-full w-full items-center justify-center text-5xl transition-transform duration-300 group-hover:scale-105">
            🌹
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-lg font-light text-charcoal">{product.title}</h3>

          <p className="text-sm leading-relaxed text-gray-600">{product.description}</p>

          <div className="flex items-center justify-between border-t border-gray-200 pt-2">
            <span className="text-sm font-semibold text-charcoal">${product.price}</span>

            <span className="text-xs font-medium uppercase tracking-wide text-sage transition hover:text-sage/70">
              View →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
