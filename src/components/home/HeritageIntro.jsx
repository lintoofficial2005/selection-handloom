import React from 'react';
import { SafeImage } from '../ui/SafeImage';

export const HeritageIntro = ({ onNavigate }) => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#EAF0EA] border-y border-[#D0DDD1]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: EDITORIAL COPY WITH EMBLEM TOUCH */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 sm:w-8 bg-[#5B7A5E]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold">
                ESTD. 1950 — MEERUT, INDIA
              </span>
            </div>

            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light text-[#1E2A21] leading-tight text-balance">
              Rooted in tradition. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#49634C]">Chosen for today.</span>
            </h2>

            <p className="font-sans text-xs sm:text-base text-[#3A403B] leading-relaxed">
              For seventy-five years, Selection Handloom has stood as an enduring sanctuary for authentic Indian weaving traditions and bespoke interior furnishings. Founded in Meerut in 1950, our atelier bridges the timeless tactile beauty of master-loom textiles with the clean, sophisticated sensibilities of modern architecture.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 pt-2 sm:pt-4">
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#D0DDD1] shadow-xs">
                <span className="text-xs uppercase tracking-wider text-[#739376] font-bold block mb-1">
                  Artisan Warp &amp; Weft
                </span>
                <p className="text-[11px] sm:text-xs text-[#555C56]">
                  Every fabric is spun from pure natural flax, mulberry silk, and Himalayan wool.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#D0DDD1] shadow-xs">
                <span className="text-xs uppercase tracking-wider text-[#739376] font-bold block mb-1">
                  Architectural Precision
                </span>
                <p className="text-[11px] sm:text-xs text-[#555C56]">
                  Custom-tailored draperies and blinds crafted to exact millimeter dimensions.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="text-xs uppercase tracking-[0.2em] font-semibold text-[#243528] hover:text-[#5B7A5E] transition-colors border-b-2 border-[#5B7A5E] pb-1 cursor-pointer"
              >
                Read Our 75-Year Heritage Chronicle →
              </button>
            </div>
          </div>

          {/* RIGHT: ASYMMETRIC IMAGE COLLAGE WITH VERIFIED IMAGE */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/5 bg-[#FAF7F2]">
              <SafeImage
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
                alt="Selection Handloom Master Loom Weaving"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A21]/70 via-transparent to-transparent" />
              
              {/* JUBILEE BADGE OVERLAY */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#D0DDD1] shadow-lg flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#243528] text-[#FAF7F2] flex items-center justify-center shrink-0 font-brand-title font-bold text-sm sm:text-base">
                  75
                </div>
                <div>
                  <span className="font-brand-title text-xs uppercase tracking-wider font-bold text-[#1E2A21] block">
                    Years of Trust &amp; Quality
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#555C56]">
                    Serving 3 generations of homes since 1950
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

