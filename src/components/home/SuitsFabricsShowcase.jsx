import React from 'react';
import { ArrowRight, Scissors } from 'lucide-react';

export const SuitsFabricsShowcase = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-[#1E2A21] text-[#FAF7F2] border-t border-[#334335]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: EDITORIAL COPY */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#29382C] border border-[#8DA98F]/30 text-[#AEC4B0] text-xs font-semibold uppercase tracking-widest">
              <Scissors className="w-3.5 h-3.5" />
              Sartorial Masterhouse
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl font-light leading-tight">
              Fabrics of Noble Drape &amp; <br />
              <span className="italic font-normal text-[#AEC4B0]">Enduring Character.</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#FAF7F2]/75 leading-relaxed">
              Selection Handloom’s suiting legacy traces back to bespoke tailoring masters in 1950. We curate unstitched fabric lengths in Himalayan Merino cashmere wool, hand-reeled Matka raw silk, and Super 140s worsted weaves for wedding bandhgalas, tuxedos, and sherwanis.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#29382C]/80 border border-[#3D503F]">
                <span className="text-xs uppercase tracking-wider text-[#AEC4B0] font-bold block mb-1">
                  Merino Cashmere Twill
                </span>
                <p className="text-[11px] text-[#FAF7F2]/70">
                  320 GSM winter weight with natural elastane memory for structure.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#29382C]/80 border border-[#3D503F]">
                <span className="text-xs uppercase tracking-wider text-[#AEC4B0] font-bold block mb-1">
                  Raw Matka Khadi
                </span>
                <p className="text-[11px] text-[#FAF7F2]/70">
                  Matte slubbed luster for breathable summer bandhgalas and kurtas.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('category-suits')}
                className="px-7 py-3.5 bg-[#FAF7F2] text-[#1E2A21] rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#E6EDE6] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Explore Suiting Cuts</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT: FABRIC TEXTURE IMAGE */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#3D503F] aspect-4/3 relative group">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85"
                alt="Selection Handloom Suiting & Silk Weaves"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141C16]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#1E2A21]/90 backdrop-blur-md border border-[#8DA98F]/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AEC4B0] font-semibold block">
                    Unstitched Fabric Lengths
                  </span>
                  <span className="font-brand-title text-sm font-bold text-white">
                    3.0m to 4.5m Cuts Available
                  </span>
                </div>
                <span className="text-xs text-[#FAF7F2]/80 font-sans font-semibold">
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
