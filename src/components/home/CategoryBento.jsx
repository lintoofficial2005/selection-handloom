import React from 'react';
import { categories } from '../../data/categories';
import { SafeImage } from '../ui/SafeImage';
import { ArrowRight } from 'lucide-react';

export const CategoryBento = ({ onNavigate }) => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
              CURATED COLLECTIONS
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light text-[#1E2A21]">
              Shop by Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#555C56] max-w-md">
            Four fundamental textile departments designed to harmonize your living environments with quiet distinction.
          </p>
        </div>

        {/* 4 EDITORIAL CATEGORY CARDS — TOUCH-FRIENDLY DELIBERATE MOBILE STACK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onNavigate(`category-${category.id}`)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#D0DDD1] shadow-xs active:shadow-md hover:shadow-xl hover:border-[#8DA98F] transition-all duration-300 flex flex-col justify-between h-[280px] sm:h-[380px] lg:h-[420px] cursor-pointer"
            >
              {/* IMAGE */}
              <div className="absolute inset-0 z-0 bg-[#F5EFE6]">
                <SafeImage
                  src={category.heroImage}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A21]/95 via-[#1E2A21]/45 to-[#1E2A21]/15" />
              </div>

              {/* TOP PILL */}
              <div className="relative z-10 p-3.5 sm:p-5 flex justify-between items-start">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/95 text-[#1E2A21] backdrop-blur-xs shadow-xs">
                  {category.count}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-[#243528]/90 text-[#FAF7F2] backdrop-blur-xs font-sans">
                  From {category.startingPrice}
                </span>
              </div>

              {/* BOTTOM DETAILS */}
              <div className="relative z-10 p-4 sm:p-6 space-y-1 sm:space-y-2 text-white">
                <h3 className="font-brand-title text-lg sm:text-xl font-bold tracking-wider">
                  {category.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#FAF7F2]/85 line-clamp-2 leading-relaxed">
                  {category.description}
                </p>
                <div className="pt-1.5 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#AEC4B0] group-hover:text-white transition-colors">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

