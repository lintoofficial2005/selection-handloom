import React from 'react';
import { SafeImage } from '../ui/SafeImage';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HomeLinenShowcase = ({ onNavigate }) => {
  return (
    <section className="py-12 sm:py-20 bg-[#FAF7F2] border-t border-[#E6EDE6]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
            BED &amp; LIVING SANCTUARIES
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light text-[#1E2A21]">
            Heirloom Bedding &amp; Soft Furnishings
          </h2>
          <p className="text-xs sm:text-sm text-[#555C56] mt-2 max-w-md mx-auto">
            Textiles that invite pause. Hand-block printed dohars, deep waffle bedcovers, diwan ensembles, and plush cushion sets.
          </p>
        </div>

        {/* 3 EDITORIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          
          {/* Card 1: Waffle Linen Bedcovers */}
          <div
            onClick={() => onNavigate('category-bedding')}
            className="bg-white rounded-2xl overflow-hidden border border-[#D0DDD1] shadow-xs group cursor-pointer"
          >
            <div className="aspect-4/3 overflow-hidden bg-[#F5EFE6]">
              <SafeImage
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"
                alt="Flax Linen Honeycomb Bedcover"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5 sm:p-6 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#C86D51] font-bold">
                Thermoregulating Flax
              </span>
              <h4 className="font-brand-title text-base sm:text-lg font-bold text-[#243528]">
                Waffle Linen Bedcovers
              </h4>
              <p className="text-xs text-[#555C56] leading-relaxed">
                Pre-washed European flax woven in deep honeycomb pockets for year-round restful sleep.
              </p>
              <div className="pt-2 text-xs font-bold text-[#C86D51] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Bedding</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card 2: Hand-Block Dohars */}
          <div
            onClick={() => onNavigate('category-bedding')}
            className="bg-white rounded-2xl overflow-hidden border border-[#D0DDD1] shadow-xs group cursor-pointer"
          >
            <div className="aspect-4/3 overflow-hidden bg-[#F5EFE6]">
              <SafeImage
                src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80"
                alt="Jaipuri Hand-Block Cotton Dohar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5 sm:p-6 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#D99B26] font-bold">
                Triple-Layer Mulmul
              </span>
              <h4 className="font-brand-title text-base sm:text-lg font-bold text-[#243528]">
                Jaipuri Block Dohars
              </h4>
              <p className="text-xs text-[#555C56] leading-relaxed">
                Hand-stamped with carved teak blocks using natural herbal dyes on ultra-fine cotton voile.
              </p>
              <div className="pt-2 text-xs font-bold text-[#5B7A5E] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Shop Dohars</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card 3: Royal Diwan Sets & Soft Furnishings */}
          <div
            onClick={() => onNavigate('category-soft-furnishings')}
            className="bg-white rounded-2xl overflow-hidden border border-[#D0DDD1] shadow-xs group cursor-pointer"
          >
            <div className="aspect-4/3 overflow-hidden bg-[#F5EFE6]">
              <SafeImage
                src="https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80"
                alt="Royal Diwan & Soft Furnishings"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5 sm:p-6 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#739376] font-bold">
                Zari &amp; Cotton Ensembles
              </span>
              <h4 className="font-brand-title text-base sm:text-lg font-bold text-[#243528]">
                Diwan Sets &amp; Cushions
              </h4>
              <p className="text-xs text-[#555C56] leading-relaxed">
                Complete living room sets with coordinated bolster covers, sofa protectors, and cushion shams.
              </p>
              <div className="pt-2 text-xs font-bold text-[#739376] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Shop Soft Furnishings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <button
            onClick={() => onNavigate('category-home-furnishings')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all cursor-pointer shadow-sm"
          >
            <span>Explore All Home Furnishings</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
