import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const HeroSection = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FAF7F2] pb-16 pt-8">
      
      {/* BACKGROUND EDITORIAL IMAGERY WITH WARM LINEN TONE */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85"
          alt="Selection Handloom Showroom Interior & Linen Drapery"
          className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
        />
        {/* Soft luxury multi-layer gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/80 to-[#FAF7F2]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-2xl space-y-6">
          
          {/* HERITAGE PILL BADGE */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E6EDE6]/90 border border-[#739376]/40 backdrop-blur-md shadow-xs animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="w-2 h-2 rounded-full bg-[#49634C] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#243528] font-sans">
              ESTD. 1950 • MEERUT
            </span>
            <span className="text-stone-400">|</span>
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#49634C] font-sans">
              75 YEARS OF TRUST &amp; QUALITY
            </span>
          </div>

          {/* MAIN HERO HEADLINE */}
          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100">
            <span className="font-brand-title text-sm sm:text-base tracking-[0.25em] uppercase text-[#49634C] font-semibold block">
              SELECTION HANDLOOM
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-[#1A1D1A] tracking-tight leading-[1.08]">
              Furnish Your <span className="italic font-normal text-[#243528]">Dreams</span>.
            </h1>
          </div>

          {/* EDITORIAL SUBTEXT */}
          <p className="font-sans text-sm sm:text-base text-[#3A403B] leading-relaxed max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Step into 75 years of timeless Indian textile craftsmanship. From hand-block printed flax curtains and architectural timber blinds to heirloom home linen and suiting weaves — tailored for spaces of quiet luxury.
          </p>

          {/* CALL TO ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
            <button
              onClick={() => onNavigate('shop')}
              className="px-8 py-4 rounded-xl bg-[#243528] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#3D503F] transition-all flex items-center gap-3 shadow-lg hover:shadow-xl hover:translate-y--0.5 cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 text-[#AEC4B0]" />
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="px-7 py-4 rounded-xl bg-white/90 border border-[#8DA98F]/60 text-[#243528] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E6EDE6] transition-all backdrop-blur-xs cursor-pointer shadow-xs"
            >
              Our 75-Year Story
            </button>
          </div>

          {/* VALUE HIGHLIGHTS */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#8DA98F]/30 max-w-lg text-[#243528]">
            <div>
              <span className="font-brand-title text-lg sm:text-xl font-bold block">75+</span>
              <span className="text-[10px] sm:text-xs text-[#555C56] uppercase tracking-wider">Years of Trust</span>
            </div>
            <div>
              <span className="font-brand-title text-lg sm:text-xl font-bold block">100%</span>
              <span className="text-[10px] sm:text-xs text-[#555C56] uppercase tracking-wider">Handloom Certified</span>
            </div>
            <div>
              <span className="font-brand-title text-lg sm:text-xl font-bold block">Bespoke</span>
              <span className="text-[10px] sm:text-xs text-[#555C56] uppercase tracking-wider">Custom Tailoring</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
