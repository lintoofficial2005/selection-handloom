import React from 'react';
import { ArrowRight, Scissors, Sparkles } from 'lucide-react';

export const SuitsFabricsShowcase = ({ onNavigate }) => {
  return (
    <section className="py-12 sm:py-20 bg-[#1E2A21] text-[#FAF7F2] border-t border-[#334335]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: EDITORIAL COPY */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#29382C] border border-[#B25353]/40 text-[#E07A5F] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Ladies' Suits • Unstitched Atelier
            </div>

            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light leading-tight">
              Unstitched Silks &amp; <br />
              <span className="italic font-normal text-[#E07A5F]">Heirloom Festive Cuts.</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#FAF7F2]/75 leading-relaxed">
              Selection Handloom curates noble unstitched fabric lengths in hand-reeled Matka raw silk, featherweight Chanderi tissue with gold tilla booti, and fine Himalayan Merino cashmere. Tailor your celebratory kurtas, bandhgalas, and festive suits with unmatched warp-and-weft integrity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#29382C]/80 border border-[#3D503F]">
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#D49B24] font-bold block mb-0.5 sm:mb-1">
                  Matka Raw Silk Cuts
                </span>
                <p className="text-[11px] text-[#FAF7F2]/70">
                  Slubbed matte luster with woven zari borders for structured festive drapes.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#29382C]/80 border border-[#3D503F]">
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#E07A5F] font-bold block mb-0.5 sm:mb-1">
                  Chanderi Tissue &amp; Zari
                </span>
                <p className="text-[11px] text-[#FAF7F2]/70">
                  Ultra-lightweight tissue silk with gold tilla motifs and coordinated dupattas.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('category-suits')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#FAF7F2] text-[#1E2A21] rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#E6EDE6] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Explore Ladies' Suits (Unstitched)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT: FABRIC TEXTURE IMAGE */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#3D503F] aspect-4/3 relative group">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85"
                alt="Selection Handloom Ladies' Suits & Silk Weaves"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141C16]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl bg-[#1E2A21]/90 backdrop-blur-md border border-[#8DA98F]/30 flex items-center justify-between">
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#E07A5F] font-semibold block">
                    Unstitched Suit Lengths
                  </span>
                  <span className="font-brand-title text-xs sm:text-sm font-bold text-white">
                    3.5m &amp; 4.5m Cuts Available
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#FAF7F2]/80 font-sans font-semibold">
                  From ₹5,200
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
