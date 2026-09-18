import React from 'react';
import { SafeImage } from '../ui/SafeImage';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const CurtainSpotlight = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-[#D0DDD1] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT: LIFESTYLE CURTAIN INTERIOR IMAGE */}
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[550px] bg-[#F5EFE6]">
            <SafeImage
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85"
              alt="Handwoven Linen Curtains in Sunlit Living Room"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 bg-[#243528]/90 text-[#FAF7F2] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-xs font-semibold">
              Curtain Masterhouse
            </div>
          </div>

          {/* RIGHT: CURTAIN STORY & SPECS */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block">
                WINDOW ARCHITECTURE
              </span>
              
              <h3 className="font-editorial text-3xl sm:text-4xl font-light text-[#1E2A21] leading-tight">
                Curtains that Frame <br />
                <span className="italic font-normal text-[#49634C]">the Light of Day.</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#3A403B] leading-relaxed">
                Whether diffusing morning glare through sheer slub voile or enveloping your evening in heavyweight thermal blackout velvet, our custom draperies are tailored with double blind-stitched hems and weighted corners.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-[#243528]">
                {[
                  'Hand-sewn American Triple Pinch & Double Pleat styles',
                  'Sheer, Semi-Sheer, Dimout, and 100% Blackout linings',
                  'Brass eyelet grommets and motorized Somfy track compatibility',
                  'Doorstep laser measurement across Meerut & NCR'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5B7A5E] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate('category-curtains')}
                className="px-7 py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Explore Curtains</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
