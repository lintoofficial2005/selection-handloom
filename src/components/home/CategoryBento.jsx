import React from 'react';
import { categories } from '../../data/categories';
import { SafeImage } from '../ui/SafeImage';
import { ArrowRight } from 'lucide-react';

export const CategoryBento = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
              CURATED COLLECTIONS
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-light text-[#1E2A21]">
              Shop by Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#555C56] max-w-md">
            Four fundamental textile departments designed to harmonize your living environments with quiet distinction.
          </p>
        </div>

        {/* 4 EDITORIAL CATEGORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onNavigate(`category-${category.id}`)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#D0DDD1] shadow-xs hover:shadow-xl hover:border-[#8DA98F] transition-all duration-500 flex flex-col justify-between h-[420px] cursor-pointer"
            >
              {/* IMAGE */}
              <div className="absolute inset-0 z-0 bg-[#F5EFE6]">
                <SafeImage
                  src={category.heroImage}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A21]/90 via-[#1E2A21]/40 to-transparent" />
              </div>

              {/* TOP PILL */}
              <div className="relative z-10 p-5 flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-white/90 text-[#1E2A21] backdrop-blur-xs">
                  {category.count}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#243528]/80 text-[#FAF7F2] backdrop-blur-xs font-sans">
                  From {category.startingPrice}
                </span>
              </div>

              {/* BOTTOM DETAILS */}
              <div className="relative z-10 p-6 space-y-2 text-white">
                <h3 className="font-brand-title text-xl font-bold tracking-wider">
                  {category.name}
                </h3>
                <p className="text-xs text-[#FAF7F2]/80 line-clamp-2 leading-relaxed">
                  {category.description}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#AEC4B0] group-hover:text-white transition-colors">
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
