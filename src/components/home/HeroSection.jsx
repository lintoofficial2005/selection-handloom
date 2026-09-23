import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Award } from 'lucide-react';

export const HeroSection = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[84vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FAF7F2] pb-12 sm:pb-16 pt-4 sm:pt-8 linen-texture">
      
      {/* ATMOSPHERIC EDITORIAL BACKGROUND WITH BALANCED CONTRAST & DEPTH */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85"
          alt="Selection Handloom Showroom Interior & Linen Drapery"
          className="w-full h-full object-cover object-[center_30%] sm:object-center hero-bg-zoom scale-102 transition-transform duration-1000 ease-out"
        />
        {/* Layered tonal gradients preserving image clarity while ensuring crisp typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/96 via-[#FAF7F2]/80 to-[#FAF7F2]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-12">
        <div className="max-w-2xl space-y-4 sm:space-y-6">
          
          {/* HERITAGE PILL BADGE WITH VIBRANT GOLD SPARKLE & REFINED GLASS BORDER */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#E6EDE6]/95 border border-[#739376]/45 backdrop-blur-md shadow-xs transition-transform duration-500 hover:scale-[1.01]">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D99B26] animate-pulse shrink-0" />
            <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.20em] sm:tracking-[0.25em] font-semibold text-[#243528] font-sans">
              ESTD. 1950 • MEERUT
            </span>
            <span className="text-[#8DA98F]">|</span>
            <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.18em] font-medium text-[#49634C] font-sans truncate">
              75 YEARS OF TRUST &amp; QUALITY
            </span>
          </div>

          {/* MAIN HERO HEADLINE */}
          <div className="space-y-1.5 sm:space-y-2">
            <span className="font-brand-title text-xs sm:text-base tracking-[0.22em] sm:tracking-[0.26em] uppercase text-[#49634C] font-semibold block">
              SELECTION HANDLOOM
            </span>
            <h1 className="font-editorial text-3.5xl sm:text-6xl lg:text-7xl font-light text-[#1A1D1A] tracking-tight leading-[1.10] sm:leading-[1.06] text-balance">
              Furnish Your <span className="italic font-normal text-[#243528]">Dreams</span>.
            </h1>
          </div>

          {/* EDITORIAL SUBTEXT */}
          <p className="font-sans text-xs sm:text-base text-[#3A403B] leading-relaxed max-w-lg">
            Step into 75 years of timeless Indian textile craftsmanship. From heirloom bedding and architectural drapery to fine unstitched silks — tailored for spaces of quiet luxury.
          </p>

          {/* CALL TO ACTION BUTTONS — TACTILE INTERACTION WITH LUXURY TRANSITIONS */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-2 sm:pt-4">
            <button
              onClick={() => onNavigate('shop')}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#243528] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#334335] active:bg-[#1E2A21] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4 text-[#AEC4B0] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('new-arrivals')}
              className="group w-full sm:w-auto px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white/95 border border-[#D96C4A]/50 text-[#C86D51] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FBEBE6] hover:border-[#D96C4A] active:bg-[#FBEBE6] transition-all duration-300 backdrop-blur-xs text-center cursor-pointer shadow-xs hover:shadow-sm active:scale-98 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D99B26] transition-transform duration-300 group-hover:rotate-12" />
              <span>New Arrivals</span>
            </button>
          </div>

          {/* VALUE HIGHLIGHTS */}
          <div className="pt-4 sm:pt-6 grid grid-cols-3 gap-2 sm:gap-4 border-t border-[#8DA98F]/30 max-w-lg text-[#243528]">
            <div className="transition-transform duration-300 hover:-translate-y-0.5">
              <span className="font-brand-title text-base sm:text-xl font-bold block">75+</span>
              <span className="text-[9px] sm:text-xs text-[#555C56] uppercase tracking-wider block">Years of Trust</span>
            </div>
            <div className="transition-transform duration-300 hover:-translate-y-0.5">
              <span className="font-brand-title text-base sm:text-xl font-bold block text-[#D96C4A]">100%</span>
              <span className="text-[9px] sm:text-xs text-[#555C56] uppercase tracking-wider block">Handloom Pure</span>
            </div>
            <div className="transition-transform duration-300 hover:-translate-y-0.5">
              <span className="font-brand-title text-base sm:text-xl font-bold block">Bespoke</span>
              <span className="text-[9px] sm:text-xs text-[#555C56] uppercase tracking-wider block">Custom Sizing</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
