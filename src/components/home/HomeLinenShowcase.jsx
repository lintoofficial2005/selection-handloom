import React from 'react';
import { SafeImage } from '../ui/SafeImage';
import { ArrowRight } from 'lucide-react';

export const HomeLinenShowcase = ({ onNavigate }) => {
  return (
    <section className="py-12 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
            BED &amp; LIVING SANCTUARIES
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light text-[#1E2A21]">
            Heirloom Home Linen
          </h2>
          <p className="text-xs sm:text-sm text-[#555C56] mt-2 max-w-md mx-auto">
            Textiles that invite pause. Hand-block stamped cushion sets, deep waffle bedcovers, and pure cashmere throws.
          </p>
        </div>

        {/* 3 EDITORIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          
          <div className="bg-white rounded-2xl overflow-hidden border border-[#D0DDD1] shadow-xs group">
            <div className="aspect-4/3 overflow-hidden bg-[#F5EFE6]">
              <SafeImage
                src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80"
                alt="Hand-block Printed Cushions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5 sm:p-6 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#739376] font-bold">
                Hand-Stamped Minerals
              </span>
              <h4 className="font-brand-title text-base sm:text-lg font-bold text-[#243528]">
                Hand-Block Cushion Sets
              </h4>
              <p className="text-xs text-[#555C56] leading-relaxed">
                Staved with hand-carved teak wood blocks on organic cotton canvas with natural herbal dyes.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#D0DDD1] shadow-xs group">
            <div className="aspect-4/3 overflow-hidden bg-[#F5EFE6]">
              <SafeImage
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"
                alt="Flax Linen Honeycomb Bedcover"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5 sm:p-6 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#739376] font-bold">
                Thermoregulating Flax
              </span>
              <h4 className="font-brand-title text-base sm:text-lg font-bold text-[#243528]">
                Waffle Linen Bedcovers
              </h4>
              <p className="text-xs text-[#555C56] leading-relaxed">
                Pre-washed European flax woven in deep breathable honeycomb pockets for year-round restful sleep.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#D0DDD1] shadow-xs group">
            <div className="aspect-4/3 overflow-hidden bg-[#F5EFE6]">
              <SafeImage
                src="https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80"
                alt="Embroidered Zari Table Runner"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5 sm:p-6 space-y-1.5 sm:space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#739376] font-bold">
                Tussar Silk &amp; Zari
              </span>
              <h4 className="font-brand-title text-base sm:text-lg font-bold text-[#243528]">
                Artisanal Table Runners
              </h4>
              <p className="text-xs text-[#555C56] leading-relaxed">
                Elevate celebratory gatherings with antique gold zari threadwork embellished on raw tussar silk.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <button
            onClick={() => onNavigate('category-home-linen')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all cursor-pointer shadow-sm"
          >
            <span>Explore All Home Linen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
