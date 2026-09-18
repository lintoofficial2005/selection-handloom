import React from 'react';
import { SafeImage } from '../ui/SafeImage';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const BlindsShowcase = ({ onNavigate }) => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#EDF3ED] border-y border-[#D0DDD1]/60">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#D0DDD1] overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12">
          
          {/* IMAGE FIRST ON MOBILE FOR EDITORIAL FLOW */}
          <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[400px] lg:min-h-[550px] bg-[#F5EFE6] order-1 lg:order-2">
            <SafeImage
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
              alt="Timber Venetian Blinds & Architectural Living Room"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#243528]/90 text-[#FAF7F2] text-[9px] sm:text-[10px] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-xs font-semibold">
              Timber &amp; Jute Engineering
            </div>
          </div>

          {/* SPECS & STORY */}
          <div className="lg:col-span-5 p-5 sm:p-8 lg:p-12 flex flex-col justify-between space-y-5 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block">
                PRECISION &amp; PRIVACY
              </span>
              
              <h3 className="font-editorial text-2xl sm:text-4xl font-light text-[#1E2A21] leading-tight text-balance">
                Architectural Blinds <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#49634C]">for Modern Living.</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#3A403B] leading-relaxed">
                Clean lines, organic warmth, and intuitive light moderation. Our timber venetian blinds are cut from sustainably seasoned teak, while our roman blinds weave raw river grass and natural jute reeds into bespoke folding screens.
              </p>

              <div className="space-y-2 sm:space-y-2.5 pt-1 sm:pt-2 text-xs text-[#243528]">
                {[
                  '50mm Kiln-Dried Solid Teak & Walnut slats',
                  'Handwoven Jute & Wild Bamboo River Grass Romans',
                  'Precision Dual-Phase Zebra Roller Cassettes',
                  'Smart motorized app & remote control options'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5B7A5E] shrink-0" />
                    <span className="text-[11px] sm:text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <button
                onClick={() => onNavigate('category-blinds')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] active:bg-[#3D503F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Explore Blinds</span>
                <ArrowRight className="w-4 h-4 text-[#AEC4B0]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

