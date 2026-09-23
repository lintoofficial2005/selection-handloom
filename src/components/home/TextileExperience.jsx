import React, { useState } from 'react';
import { Feather, Sparkles } from 'lucide-react';

export const TextileExperience = () => {
  const [activeTexture, setActiveTexture] = useState(0);

  const textures = [
    {
      name: 'Artisanal Slub Linen',
      title: 'The Organic Breathe of Natural Flax',
      desc: 'Sourced from long-staple Normandy flax and woven on low-speed wooden pit looms in Meerut. The irregular yarn slubs create rich tactile depths that diffuse sunlight into gentle golden-hour warmth.',
      origin: 'Normandy Flax & Meerut Looms',
      gsm: '240 GSM',
      accentColor: '#C86D51', // Terracotta
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85'
    },
    {
      name: 'Double-Warp Brocade Jacquard',
      title: 'Regal Dimension & Heavy Acoustic Drape',
      desc: 'High-density organic cotton wefts interlocked with raw filament silk. Raised paisley motifs cast tactile micro-shadows that block drafts and exterior noise while commanding grand aesthetic presence.',
      origin: 'Varanasi Master Guild & Selection Workshop',
      gsm: '380 GSM',
      accentColor: '#163638', // Deep Teal
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'
    },
    {
      name: 'Raw Matka Silk & Khadi',
      title: 'Noble Matte Luster & All-Season Comfort',
      desc: 'Hand-reeled mulberry cocoons blended with organic handspun khadi yarn. The natural sericin coating gives this fabric exceptional thermal stability and timeless lived-in elegance.',
      origin: 'Bengal Artisan Cluster & Meerut',
      gsm: '220 GSM',
      accentColor: '#D99B26', // Mustard Gold
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85'
    }
  ];

  const current = textures[activeTexture];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#1E2A21] text-[#FAF7F2] relative overflow-hidden">
      
      {/* BACKGROUND TEXTURE ACCENT */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8DA98F_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#29382C] border border-[#8DA98F]/30 text-[#AEC4B0] text-xs font-semibold uppercase tracking-widest mb-3">
            <Feather className="w-3.5 h-3.5" />
            Tactile Materiality
          </div>
          <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light leading-tight">
            Crafted for the spaces <br />
            <span className="italic font-normal text-[#AEC4B0]">you call home.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF7F2]/70 mt-2 sm:mt-3 max-w-lg mx-auto">
            Fabrics selected for weight, drape, and enduring hand-feel. Touch the craftsmanship through your screen.
          </p>
        </div>

        {/* INTERACTIVE TEXTURE EXPLORER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* LEFT: MACRO FABRIC VIEWER */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#3D503F] aspect-4/3 sm:aspect-16/10 bg-[#29382C] group">
              <img
                key={current.name}
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141C16]/80 via-transparent to-transparent" />
              
              {/* INTERACTIVE MACRO BADGE */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl bg-[#1E2A21]/90 backdrop-blur-md border border-[#8DA98F]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#AEC4B0] font-semibold block">
                    Macro Weave Inspection
                  </span>
                  <span className="font-brand-title text-sm sm:text-base font-bold text-white">
                    {current.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#FAF7F2]/80">
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#29382C] rounded-lg border border-[#3D503F]">
                    {current.gsm}
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#29382C] rounded-lg border border-[#3D503F] truncate">
                    {current.origin.split('&')[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: WEAVE SELECTOR & STORY */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="space-y-2.5 sm:space-y-3">
              {textures.map((tex, idx) => (
                <button
                  key={tex.name}
                  onClick={() => setActiveTexture(idx)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                    activeTexture === idx
                      ? 'bg-[#29382C] border-[#8DA98F] ring-1 ring-[#8DA98F]/40 shadow-lg'
                      : 'bg-[#141C16]/60 border-[#334335] hover:border-[#8DA98F]/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#AEC4B0] font-semibold">
                      0{idx + 1} • {tex.name}
                    </span>
                    {activeTexture === idx && (
                      <span className="w-2 h-2 rounded-full bg-[#8DA98F] animate-pulse" />
                    )}
                  </div>
                  <h4 className="font-brand-title text-xs sm:text-base font-bold text-white">
                    {tex.title}
                  </h4>
                  {activeTexture === idx && (
                    <p className="text-xs text-[#FAF7F2]/75 leading-relaxed mt-2 animate-in fade-in duration-300">
                      {tex.desc}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
