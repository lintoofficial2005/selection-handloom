import React from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../shop/ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';

export const NewArrivals = ({ onNavigate }) => {
  const newProducts = products.filter(p => p.isNew).slice(0, 4);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2] border-t border-[#E6EDE6] relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBEBE6] border border-[#E07A5F]/30 text-[#C86D51] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D99B26]" />
              New In Showroom
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light text-[#1E2A21]">
              New Arrivals
            </h2>
            <p className="text-xs sm:text-sm text-[#555C56] mt-1.5 max-w-lg">
              Fresh textiles for spaces that evolve. Discover our latest weaves across Bedding, Curtains, Bath, Soft Furnishings, and Ladies' Suits.
            </p>
          </div>

          <button
            onClick={() => onNavigate('new-arrivals')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#C86D51] hover:text-[#9E4A32] transition-colors cursor-pointer self-start md:self-end pb-1 border-b border-[#C86D51]"
          >
            <span>View All New Arrivals ({products.filter(p => p.isNew).length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* PRODUCT GRID: 2-COLUMN MOBILE, 4-COLUMN DESKTOP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {newProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onNavigate={onNavigate}
              layout="grid"
            />
          ))}
        </div>

      </div>
    </section>
  );
};
