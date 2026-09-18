import React from 'react';
import { timelineMilestones, brandValues } from '../data/timeline';
import { BotanicalDivider } from '../components/ui/BotanicalDivider';
import { SafeImage } from '../components/ui/SafeImage';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const AboutHeritagePage = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO BANNER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block mb-3">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#739376]/40 mx-auto shadow-md bg-white">
              <img
                src="/assets/logo.jpg"
                alt="Selection Handloom Emblem"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block">
            ESTABLISHED 1950 • MEERUT, UTTAR PRADESH
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl font-light text-[#1E2A21] leading-tight">
            75 Years of Trust &amp; Quality
          </h1>
          <p className="font-editorial text-xl italic text-[#555C56]">
            "Rooted in tradition. Chosen for today."
          </p>
        </div>

        <BotanicalDivider className="my-12 opacity-40" />

        {/* STORY OVERVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 bg-[#EAF0EA] p-8 sm:p-12 rounded-3xl border border-[#D0DDD1]/60">
          <div className="lg:col-span-6 space-y-5 text-sm text-[#3A403B] leading-relaxed">
            <h2 className="font-editorial text-3xl font-light text-[#1E2A21]">
              The Loom That Built a Legacy
            </h2>
            <p>
              In 1950, amidst the historic lanes of Meerut, Selection Handloom was founded with a singular conviction: that handloom textiles possess a soul, breath, and tactile warmth that mechanized factory production can never replicate.
            </p>
            <p>
              Over seven and a half decades, we have evolved from traditional pit looms into one of North India’s premier furnishing houses. We partner with multi-generational weaver clusters across Meerut, Varanasi, Maheshwar, and the Kashmir Valley to preserve rare weaving techniques.
            </p>
            <p>
              Today, Selection Handloom represents the pinnacle of <strong>quiet luxury</strong> — where architectural window draperies, timber blinds, organic flax bedding, and bespoke suiting cuts harmoniously furnish modern residences.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-4/3 relative bg-[#FAF7F2]">
              <SafeImage
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                alt="Selection Handloom Heritage Weavers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 75-YEAR MILESTONE TIMELINE */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
              CHRONICLE (1950 – 2025)
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-light text-[#1E2A21]">
              Milestones of Excellence
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {timelineMilestones.map((m) => (
              <div
                key={m.year}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D0DDD1] shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-3">
                  <span className="font-brand-title text-3xl sm:text-4xl font-bold text-[#243528] block">
                    {m.year}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#739376] font-semibold">
                    {m.highlight}
                  </span>
                </div>
                <div className="md:col-span-9 space-y-1.5 border-t md:border-t-0 md:border-l border-[#E6EDE6] pt-4 md:pt-0 md:pl-6">
                  <h3 className="font-brand-title text-base sm:text-lg font-bold text-[#1E2A21]">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555C56] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="bg-[#EDF3ED] p-8 sm:p-12 rounded-3xl border border-[#D0DDD1] mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
              THE PILLARS
            </span>
            <h2 className="font-editorial text-3xl font-light text-[#1E2A21]">
              Our Guiding Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandValues.map((v, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-[#E6EDE6] space-y-2 shadow-xs">
                <ShieldCheck className="w-6 h-6 text-[#5B7A5E]" />
                <h4 className="font-brand-title text-sm font-bold text-[#1E2A21]">
                  {v.title}
                </h4>
                <p className="text-xs text-[#555C56] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA TO SHOWROOM */}
        <div className="text-center bg-[#1E2A21] text-[#FAF7F2] p-10 sm:p-14 rounded-3xl border border-[#334335] space-y-4">
          <h2 className="font-editorial text-3xl sm:text-4xl font-light">
            Visit Our Meerut Showroom
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF7F2]/75 max-w-lg mx-auto leading-relaxed">
            Experience our full 2025 textile archives in person with our senior drapery and fabric consultants.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('store')}
              className="px-8 py-3.5 bg-[#FAF7F2] text-[#1E2A21] rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#E6EDE6] transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <span>Explore Meerut Showroom</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
