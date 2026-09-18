import React, { useState } from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../shop/ProductCard';
import { ArrowRight } from 'lucide-react';

export const FeaturedGrid = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? products.filter(p => p.isFeatured).slice(0, 8)
    : products.filter(p => p.category === activeTab).slice(0, 8);

  return (
    <section className="py-20 bg-[#EDF3ED] border-y border-[#D0DDD1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER & TABS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
              HERITAGE SELECTION
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#1E2A21]">
              Featured Masterpieces
            </h2>
          </div>

          {/* FILTER TABS */}
          <div className="flex flex-wrap gap-2 border-b border-[#D0DDD1] pb-2">
            {[
              { id: 'all', label: 'All Curations' },
              { id: 'curtains', label: 'Curtains' },
              { id: 'blinds', label: 'Blinds' },
              { id: 'home-linen', label: 'Home Linen' },
              { id: 'suits', label: 'Suits & Fabrics' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#243528] text-white shadow-xs'
                    : 'text-[#555C56] hover:text-[#243528] hover:bg-[#E6EDE6]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onNavigate={onNavigate}
              layout="grid"
            />
          ))}
        </div>

        {/* VIEW FULL SHOP BUTTON */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onNavigate('shop')}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-white border border-[#243528] text-[#243528] hover:bg-[#243528] hover:text-white transition-all text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer shadow-xs"
          >
            <span>View Complete 2025 Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
