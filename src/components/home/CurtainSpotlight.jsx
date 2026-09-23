import React, { useState } from 'react';
import { SafeImage } from '../ui/SafeImage';
import { useModals } from '../../context/ModalContext';
import { Scissors, Check, Sparkles, ArrowRight, Layers, Ruler } from 'lucide-react';

export const CurtainSpotlight = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('stitched');
  const { openConsultation } = useModals();

  return (
    <section className="py-12 sm:py-20 bg-[#EDF3ED] border-t border-[#D0DDD1]/60">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#243528] text-[#FAF7F2] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
            <Scissors className="w-3.5 h-3.5 text-[#8DA98F]" />
            Drapery Masterhouse
          </div>
          <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light text-[#1E2A21]">
            Architectural Curtains
          </h2>
          <p className="text-xs sm:text-sm text-[#555C56] max-w-xl mx-auto">
            Experience our twin drapery offerings: Ready-to-hang <strong>Stitched Drapes</strong> and premium <strong>Unstitched Running Fabric</strong> by the metre.
          </p>

          {/* TOGGLE PILLS: STITCHED VS UNSTITCHED */}
          <div className="pt-4 flex justify-center">
            <div className="bg-white p-1 rounded-2xl border border-[#D0DDD1] shadow-xs inline-flex gap-1">
              <button
                onClick={() => setActiveTab('stitched')}
                className={`px-5 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  activeTab === 'stitched'
                    ? 'bg-[#243528] text-white shadow-xs'
                    : 'text-[#555C56] hover:text-[#243528]'
                }`}
              >
                Stitched Curtains
              </button>
              <button
                onClick={() => setActiveTab('unstitched')}
                className={`px-5 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                  activeTab === 'unstitched'
                    ? 'bg-[#243528] text-white shadow-xs'
                    : 'text-[#555C56] hover:text-[#243528]'
                }`}
              >
                Unstitched / Fabric
              </button>
            </div>
          </div>
        </div>

        {/* 3-STEP VISUAL TAILORING GUIDE */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 mb-8 border border-[#D0DDD1] shadow-xs max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center p-3 rounded-xl bg-[#FAF7F2]">
              <div className="w-8 h-8 rounded-full bg-[#5B7A5E] text-white flex items-center justify-center text-xs font-bold mb-2">
                1
              </div>
              <strong className="text-xs text-[#243528] uppercase tracking-wider">Choose Your Fabric</strong>
              <p className="text-[11px] text-[#555C56] mt-0.5">Belgian flax, raw silk, jacquard, or sheer voile.</p>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-[#FAF7F2]">
              <div className="w-8 h-8 rounded-full bg-[#5B7A5E] text-white flex items-center justify-center text-xs font-bold mb-2">
                2
              </div>
              <strong className="text-xs text-[#243528] uppercase tracking-wider">Choose Your Finish</strong>
              <p className="text-[11px] text-[#555C56] mt-0.5">Eyelets, pinch pleats, pencil pleats, or raw bolt length.</p>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-[#FAF7F2]">
              <div className="w-8 h-8 rounded-full bg-[#5B7A5E] text-white flex items-center justify-center text-xs font-bold mb-2">
                3
              </div>
              <strong className="text-xs text-[#243528] uppercase tracking-wider">Tailored for Your Space</strong>
              <p className="text-[11px] text-[#555C56] mt-0.5">Precision room drop, blind-hemmed with corner weights.</p>
            </div>
          </div>
        </div>

        {/* ACTIVE SHOWCASE CARD */}
        <div className="bg-white rounded-3xl border border-[#D0DDD1] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          
          {/* IMAGE HALF */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[420px] bg-[#F5EFE6]">
            <SafeImage
              src={
                activeTab === 'stitched'
                  ? "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85"
                  : "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85"
              }
              alt={activeTab === 'stitched' ? "Ready Stitched Curtains" : "Unstitched Fabric Swatches"}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#243528]/90 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full backdrop-blur-xs">
              {activeTab === 'stitched' ? 'Finished Room Installation' : '54-Inch Width Running Rolls'}
            </div>
          </div>

          {/* CONTENT HALF */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#739376] font-bold block">
                {activeTab === 'stitched' ? 'READY-TO-HANG CRAFTSMANSHIP' : 'RUNNING FABRIC BY THE METRE'}
              </span>

              <h3 className="font-editorial text-2xl sm:text-4xl font-light text-[#1E2A21] leading-tight">
                {activeTab === 'stitched' ? (
                  <>Hand-Finished <br /><span className="italic font-normal text-[#5B7A5E]">Stitched Draperies.</span></>
                ) : (
                  <>Pure Artisanal <br /><span className="italic font-normal text-[#C86D51]">Unstitched Fabric Lengths.</span></>
                )}
              </h3>

              <p className="text-xs sm:text-sm text-[#3A403B] leading-relaxed">
                {activeTab === 'stitched'
                  ? 'Expertly tailored with double-turn hems, lead corner weights for clean hanging folds, and choice of vintage bronze grommets or triple pinch pleats.'
                  : 'Order continuous meterage from full rolls in pure Normandy slub linen, raw silk, and gossamer voiles for custom curtains, roman blinds, or upholstery projects.'}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6EDE6]">
                  <span className="text-[10px] uppercase tracking-wider text-[#5B7A5E] font-bold block mb-0.5">
                    {activeTab === 'stitched' ? 'Drop Heights' : 'Bolt Width'}
                  </span>
                  <span className="text-xs font-bold text-[#1E2A21]">
                    {activeTab === 'stitched' ? '5ft / 7ft / 9ft / Custom' : '54 Inches (137 cm)'}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6EDE6]">
                  <span className="text-[10px] uppercase tracking-wider text-[#5B7A5E] font-bold block mb-0.5">
                    {activeTab === 'stitched' ? 'Header Finish' : 'Minimum Order'}
                  </span>
                  <span className="text-xs font-bold text-[#1E2A21]">
                    {activeTab === 'stitched' ? 'Pinch Pleat & Eyelet' : '1.0 Metre Onwards'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate(activeTab === 'stitched' ? 'category-curtains' : 'category-curtains?sub=Unstitched')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>{activeTab === 'stitched' ? 'Shop Stitched Curtains' : 'Shop Unstitched Fabric'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={openConsultation}
                className="w-full sm:w-auto px-6 py-3.5 bg-white border border-[#D0DDD1] text-[#243528] rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#E6EDE6] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Measurement</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
