'use client';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        {/* Hero Section - Asymmetric Layout */}
        <section className="mb-24 grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-sage">
                Premium Floral Design
              </p>
              <h1 className="font-serif text-5xl font-light leading-tight text-charcoal lg:text-6xl">
                Flowers that speak volumes
              </h1>
              <p className="max-w-lg text-base leading-relaxed text-gray-600">
                Curated botanical arrangements for life's most meaningful moments. Each piece is
                thoughtfully designed and hand-crafted with intention.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-none bg-charcoal px-6 py-3 text-sm font-medium text-stone hover:bg-charcoal/90 transition"
              >
                Explore Collection
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-none border border-charcoal bg-transparent px-6 py-3 text-sm font-medium text-charcoal hover:bg-charcoal/5 transition"
              >
                View Details
              </Link>
            </div>

            <div className="space-y-3 pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Why choose us
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-sage">✓</span>
                  <span>Fresh flowers sourced from local gardens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage">✓</span>
                  <span>Same-day delivery throughout the city</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage">✓</span>
                  <span>Complimentary handwritten cards</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="bg-stone-100 aspect-[3/4] rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-6xl">🌿</div>
          </div>
        </section>

        {/* Featured Products - Grid */}
        <section className="mb-24">
          <div className="mb-12 space-y-2">
            <h2 className="font-serif text-4xl font-light text-charcoal">Signature Collections</h2>
            <p className="text-sm text-gray-600">Hand-selected arrangements for every occasion</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Product Card 1 */}
            <div className="group">
              <div className="mb-4 bg-stone-100 aspect-square rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-5xl">🌹</div>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-lg text-charcoal">Blush Romance</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Soft pink roses and garden florals arranged in a romantic composition.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-semibold text-charcoal">From $65</span>
                  <button className="text-xs font-medium uppercase tracking-wide text-sage hover:text-sage/80 transition">
                    View →
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group">
              <div className="mb-4 bg-stone-100 aspect-square rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-5xl">🌻</div>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-lg text-charcoal">Golden Hour</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Warmth in every petal. Sunflowers and golden tones for celebrations.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-semibold text-charcoal">From $55</span>
                  <button className="text-xs font-medium uppercase tracking-wide text-sage hover:text-sage/80 transition">
                    View →
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group">
              <div className="mb-4 bg-stone-100 aspect-square rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-5xl">💐</div>
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-lg text-charcoal">Emerald Dreams</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lush greenery and deep jewel tones for sophisticated elegance.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-semibold text-charcoal">From $85</span>
                  <button className="text-xs font-medium uppercase tracking-wide text-sage hover:text-sage/80 transition">
                    View →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-24 border-t border-b border-gray-200 py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <div className="text-3xl">🚚</div>
              <h3 className="font-serif text-lg text-charcoal">Careful Delivery</h3>
              <p className="text-sm text-gray-600">
                Hand-delivered with attention to detail within 24 hours.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">✨</div>
              <h3 className="font-serif text-lg text-charcoal">Premium Quality</h3>
              <p className="text-sm text-gray-600">
                Only the freshest blooms from trusted local sources.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">💌</div>
              <h3 className="font-serif text-lg text-charcoal">Personal Touch</h3>
              <p className="text-sm text-gray-600">
                Handwritten messages and custom arrangements available.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl">🎁</div>
              <h3 className="font-serif text-lg text-charcoal">Gift Wrapping</h3>
              <p className="text-sm text-gray-600">
                Beautiful eco-friendly wrapping for every occasion.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 bg-sage/10 px-8 py-16 rounded-lg sm:px-12 text-center">
          <h2 className="font-serif text-3xl font-light text-charcoal mb-4">
            Ready to send flowers?
          </h2>
          <p className="mx-auto max-w-lg text-gray-600 mb-6">
            Browse our collection or customize your own arrangement. We're here to help make every
            moment special.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center bg-charcoal px-6 py-3 text-sm font-medium text-stone hover:bg-charcoal/90 transition"
          >
            Start Shopping
          </Link>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-12 pb-8">
          <div className="grid gap-8 sm:grid-cols-3 mb-8">
            <div>
              <h3 className="font-serif text-charcoal mb-3">VH Flowers</h3>
              <p className="text-sm text-gray-600">
                Thoughtfully designed floral arrangements for every moment.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                Links
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/products" className="hover:text-charcoal transition">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="hover:text-charcoal transition">
                    Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                Contact
              </p>
              <p className="text-sm text-gray-600">info@vhflowers.com</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} VH Flowers. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
