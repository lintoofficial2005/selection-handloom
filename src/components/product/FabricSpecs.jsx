import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Feather, Sun, Droplets, Scissors } from 'lucide-react';

export const FabricSpecs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('specs');

  return (
    <div className="bg-white rounded-2xl border border-[#D0DDD1] p-6 sm:p-8 mt-12">
      
      {/* TABS HEADER */}
      <div className="flex border-b border-[#E6EDE6] gap-6 sm:gap-10 pb-3 overflow-x-auto">
        <button
          onClick={() => setActiveTab('specs')}
          className={`font-brand-title text-xs sm:text-sm uppercase tracking-wider font-semibold pb-3 -mb-3 transition-colors cursor-pointer shrink-0 ${
            activeTab === 'specs'
              ? 'border-b-2 border-[#243528] text-[#1E2A21]'
              : 'text-[#555C56] hover:text-[#243528]'
          }`}
        >
          Fabric Specifications
        </button>
        <button
          onClick={() => setActiveTab('drape')}
          className={`font-brand-title text-xs sm:text-sm uppercase tracking-wider font-semibold pb-3 -mb-3 transition-colors cursor-pointer shrink-0 ${
            activeTab === 'drape'
              ? 'border-b-2 border-[#243528] text-[#1E2A21]'
              : 'text-[#555C56] hover:text-[#243528]'
          }`}
        >
          Drape &amp; Light Filtration
        </button>
        <button
          onClick={() => setActiveTab('care')}
          className={`font-brand-title text-xs sm:text-sm uppercase tracking-wider font-semibold pb-3 -mb-3 transition-colors cursor-pointer shrink-0 ${
            activeTab === 'care'
              ? 'border-b-2 border-[#243528] text-[#1E2A21]'
              : 'text-[#555C56] hover:text-[#243528]'
          }`}
        >
          Care &amp; Longevity
        </button>
        <button
          onClick={() => setActiveTab('heritage')}
          className={`font-brand-title text-xs sm:text-sm uppercase tracking-wider font-semibold pb-3 -mb-3 transition-colors cursor-pointer shrink-0 ${
            activeTab === 'heritage'
              ? 'border-b-2 border-[#243528] text-[#1E2A21]'
              : 'text-[#555C56] hover:text-[#243528]'
          }`}
        >
          75-Year Weaving Guild
        </button>
      </div>

      {/* TABS CONTENT */}
      <div className="pt-6">
        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6EDE6]">
              <div className="flex items-center gap-2 text-[#739376] font-semibold mb-1">
                <Feather className="w-4 h-4" />
                <span>MATERIAL COMPOSITION</span>
              </div>
              <p className="font-bold text-[#243528] text-sm">{product.material}</p>
              <p className="text-[#555C56] mt-0.5">100% natural organic fibres</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6EDE6]">
              <div className="flex items-center gap-2 text-[#739376] font-semibold mb-1">
                <Scissors className="w-4 h-4" />
                <span>WEAVE STRUCTURE</span>
              </div>
              <p className="font-bold text-[#243528] text-sm">{product.weave}</p>
              <p className="text-[#555C56] mt-0.5">Loom calibrated tension</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6EDE6]">
              <div className="flex items-center gap-2 text-[#739376] font-semibold mb-1">
                <Sun className="w-4 h-4" />
                <span>WEIGHT / GSM</span>
              </div>
              <p className="font-bold text-[#243528] text-sm">{product.drapeWeight}</p>
              <p className="text-[#555C56] mt-0.5">Substantial natural drape</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6EDE6]">
              <div className="flex items-center gap-2 text-[#739376] font-semibold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>ORIGIN &amp; CLUSTER</span>
              </div>
              <p className="font-bold text-[#243528] text-sm">{product.origin}</p>
              <p className="text-[#555C56] mt-0.5">Selection Handloom Atelier</p>
            </div>
          </div>
        )}

        {activeTab === 'drape' && (
          <div className="space-y-4 text-xs text-[#3A403B] leading-relaxed max-w-3xl">
            <p>
              <strong>Light Moderation Level:</strong> {product.opacity}
            </p>
            <p>
              This weave is designed to fall in gentle columnar flutes when gathered. For curtains, we recommend ordering with a <strong>2.0x or 2.5x Fullness Multiplier</strong> to ensure graceful, deep folds that enhance both thermal buffering and acoustic softening in high-ceiling rooms.
            </p>
            <p>
              <strong>Recommended Spaces:</strong> {product.roomRecommendation}
            </p>
          </div>
        )}

        {activeTab === 'care' && (
          <div className="space-y-4 text-xs text-[#3A403B] leading-relaxed max-w-3xl">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#E6EDE6]">
              <Droplets className="w-5 h-5 text-[#5B7A5E] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#243528] mb-1">Washing &amp; Maintenance Instructions</strong>
                <p>{product.careInstructions}</p>
              </div>
            </div>
            <p className="text-[11px] text-[#555C56]">
              * Handloom textiles age with grace. Gentle natural washing safeguards the natural plant oils and yarn elasticity over decades of use.
            </p>
          </div>
        )}

        {activeTab === 'heritage' && (
          <div className="space-y-3 text-xs text-[#3A403B] leading-relaxed max-w-3xl">
            <p className="font-editorial text-base italic text-[#243528]">
              "Crafted under the master supervision of Selection Handloom (Estd. 1950, Meerut)."
            </p>
            <p>
              Our weaving clusters uphold seven and a half decades of artisanal discipline. Each panel is inspected for thread density, edge selvedge straightness, and hem weight before receiving our embroidered heirloom stamp.
            </p>
          </div>
        )}
      </div>

    </div>
  );
};
