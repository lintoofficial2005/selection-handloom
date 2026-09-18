import React from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../shop/ProductCard';

export const PairWithSection = ({ currentProductId, onNavigate }) => {
  const pairedProducts = products.filter(p => p.id !== currentProductId).slice(0, 3);

  return (
    <section className="mt-16 pt-12 border-t border-[#D0DDD1]">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
          SELECTION STYLING ATELIER
        </span>
        <h3 className="font-brand-title text-2xl font-semibold text-[#1E2A21]">
          Harmonious Pairings
        </h3>
        <p className="text-xs text-[#555C56] mt-1">
          Coordinate your room with complementing sheer underlays, artisan cushions, and textured throws.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pairedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onNavigate={onNavigate}
            layout="grid"
          />
        ))}
      </div>
    </section>
  );
};
