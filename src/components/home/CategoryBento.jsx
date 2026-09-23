import React from 'react';
import { exploreCategories } from '../../data/categories';
import { SafeImage } from '../ui/SafeImage';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CategoryBento = ({ onNavigate }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2] border-t border-[#E6EDE6] relative linen-texture">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1.5">
            SHOP BY DEPARTMENT
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light text-[#1E2A21] tracking-tight">
            Explore Our Collections
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#555C56] mt-2.5 max-w-md mx-auto leading-relaxed">
            From heirloom bedding and architectural drapery to fine unstitched silks, discover curated textiles crafted for enduring comfort.
          </p>
        </div>

        {/* 5-CARD CATEGORY GRID: 2 COLUMNS ON MOBILE, 3 + 2 COMPOSITION ON DESKTOP */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3.5 sm:gap-6">
          
          {/* BEDDING (3 cols on desktop) */}
          <div
            onClick={() => onNavigate('category-bedding')}
            className="md:col-span-3 group relative rounded-2xl overflow-hidden border border-[#D0DDD1]/80 shadow-xs hover:shadow-md cursor-pointer h-[240px] sm:h-[320px] lg:h-[360px] transition-all duration-500"
          >
            <SafeImage
              src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80"
              alt="Bedding Collection"
              className="w-full h-full object-cover group-hover:scale-[1.035] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141C16]/90 via-[#141C16]/40 to-transparent" />
            <div className="absolute top-3.5 left-3.5">
              <span className="text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold bg-[#D96C4A] text-white shadow-xs">
                Bedding Sanctuary
              </span>
            </div>
            <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-6 sm:left-6 sm:right-6 text-white transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="font-brand-title text-base sm:text-2xl font-bold mb-0.5 tracking-wide">
                Bedding
              </h3>
              <p className="text-[11px] sm:text-xs text-[#FAF7F2]/85 line-clamp-1 mb-2 font-light">
                Bedsheets, Bed Covers, Dohars, Quilts &amp; Diwan Sets
              </p>
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D96C4A] transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>
          </div>

          {/* CURTAINS (3 cols on desktop) */}
          <div
            onClick={() => onNavigate('category-curtains')}
            className="md:col-span-3 group relative rounded-2xl overflow-hidden border border-[#D0DDD1]/80 shadow-xs hover:shadow-md cursor-pointer h-[240px] sm:h-[320px] lg:h-[360px] transition-all duration-500"
          >
            <SafeImage
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
              alt="Curtains Collection"
              className="w-full h-full object-cover group-hover:scale-[1.035] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141C16]/90 via-[#141C16]/40 to-transparent" />
            <div className="absolute top-3.5 left-3.5">
              <span className="text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold bg-[#5B7A5E] text-white shadow-xs">
                Custom Drapery
              </span>
            </div>
            <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-6 sm:left-6 sm:right-6 text-white transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="font-brand-title text-base sm:text-2xl font-bold mb-0.5 tracking-wide">
                Curtains
              </h3>
              <p className="text-[11px] sm:text-xs text-[#FAF7F2]/85 line-clamp-1 mb-2 font-light">
                Stitched Drapes &amp; Unstitched Fabric Lengths
              </p>
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8DA98F] transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>
          </div>

          {/* BATH & LINEN (2 cols on desktop) */}
          <div
            onClick={() => onNavigate('category-bath-linen')}
            className="md:col-span-2 group relative rounded-2xl overflow-hidden border border-[#D0DDD1]/80 shadow-xs hover:shadow-md cursor-pointer h-[210px] sm:h-[280px] transition-all duration-500"
          >
            <SafeImage
              src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80"
              alt="Bath & Linen Collection"
              className="w-full h-full object-cover group-hover:scale-[1.035] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141C16]/90 via-[#141C16]/40 to-transparent" />
            <div className="absolute top-3.5 left-3.5">
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold bg-[#345A78] text-white shadow-xs">
                Pure Comfort
              </span>
            </div>
            <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="font-brand-title text-sm sm:text-xl font-bold mb-0.5 tracking-wide">
                Bath &amp; Linen
              </h3>
              <p className="text-[10px] sm:text-xs text-[#FAF7F2]/85 line-clamp-1 mb-1.5 font-light">
                Towels &amp; Flax Bathrobes
              </p>
              <div className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#FAF7F2]">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 text-[#7FA4B8] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* SOFT FURNISHINGS (2 cols on desktop) */}
          <div
            onClick={() => onNavigate('category-soft-furnishings')}
            className="md:col-span-2 group relative rounded-2xl overflow-hidden border border-[#D0DDD1]/80 shadow-xs hover:shadow-md cursor-pointer h-[210px] sm:h-[280px] transition-all duration-500"
          >
            <SafeImage
              src="https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80"
              alt="Soft Furnishings Collection"
              className="w-full h-full object-cover group-hover:scale-[1.035] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141C16]/90 via-[#141C16]/40 to-transparent" />
            <div className="absolute top-3.5 left-3.5">
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold bg-[#D5A52C] text-[#1E2A21] shadow-xs">
                Hand-Block &amp; Zari
              </span>
            </div>
            <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="font-brand-title text-sm sm:text-xl font-bold mb-0.5 tracking-wide">
                Soft Furnishings
              </h3>
              <p className="text-[10px] sm:text-xs text-[#FAF7F2]/85 line-clamp-1 mb-1.5 font-light">
                Sofa Covers, Cushions &amp; Bolsters
              </p>
              <div className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#FAF7F2]">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 text-[#E3A82B] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* LADIES' SUITS (2 cols on desktop) */}
          <div
            onClick={() => onNavigate('category-suits')}
            className="col-span-2 md:col-span-2 group relative rounded-2xl overflow-hidden border border-[#D0DDD1]/80 shadow-xs hover:shadow-md cursor-pointer h-[210px] sm:h-[280px] transition-all duration-500"
          >
            <SafeImage
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
              alt="Ladies' Suits Collection"
              className="w-full h-full object-cover group-hover:scale-[1.035] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141C16]/90 via-[#141C16]/40 to-transparent" />
            <div className="absolute top-3.5 left-3.5">
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold bg-[#D97763] text-white shadow-xs">
                Unstitched Cuts
              </span>
            </div>
            <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="font-brand-title text-sm sm:text-xl font-bold mb-0.5 tracking-wide">
                Ladies' Suits
              </h3>
              <p className="text-[10px] sm:text-xs text-[#FAF7F2]/85 line-clamp-1 mb-1.5 font-light">
                Matka Raw Silk, Chanderi &amp; Merino
              </p>
              <div className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#FAF7F2]">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 text-[#D97763] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
