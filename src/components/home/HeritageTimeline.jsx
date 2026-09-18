import React, { useState } from 'react';
import { timelineMilestones } from '../../data/timeline';
import { SafeImage } from '../ui/SafeImage';
import { ArrowRight } from 'lucide-react';

export const HeritageTimeline = ({ onNavigate }) => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);
  const active = timelineMilestones[selectedMilestone];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#EAF0EA] border-y border-[#D0DDD1]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
            ESTABLISHED 1950
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light text-[#1E2A21]">
            75 Years of Trust &amp; Quality
          </h2>
          <p className="text-xs sm:text-sm text-[#555C56] mt-2 max-w-md mx-auto">
            Explore the enduring milestones of our journey from traditional Meerut handlooms to modern interior sanctuaries.
          </p>
        </div>

        {/* TIMELINE INTERACTIVE SELECTOR */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-12 overflow-x-auto no-scrollbar py-2">
          <div className="flex justify-between items-center min-w-[320px] relative px-3 sm:px-6">
            <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-[#D0DDD1] -translate-y-1/2 z-0" />
            
            {timelineMilestones.map((m, idx) => (
              <button
                key={m.year}
                onClick={() => setSelectedMilestone(idx)}
                className={`relative z-10 flex flex-col items-center group cursor-pointer transition-all ${
                  selectedMilestone === idx ? 'scale-105 sm:scale-110' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-brand-title font-bold text-[11px] sm:text-xs transition-all shadow-sm ${
                  selectedMilestone === idx
                    ? 'bg-[#243528] text-white ring-3 sm:ring-4 ring-[#8DA98F]/40'
                    : 'bg-white text-[#243528] border border-[#D0DDD1] group-hover:border-[#5B7A5E]'
                }`}>
                  {m.year}
                </div>
                <span className={`text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold mt-1.5 font-sans whitespace-nowrap ${
                  selectedMilestone === idx ? 'text-[#243528]' : 'text-[#555C56]'
                }`}>
                  {m.highlight}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* MILESTONE CARD */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#D0DDD1] overflow-hidden shadow-md max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 animate-in fade-in zoom-in-98 duration-300">
          <div className="md:col-span-5 relative aspect-16/10 md:aspect-auto bg-[#F5EFE6] min-h-[200px]">
            <SafeImage
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#243528]/90 text-[#FAF7F2] text-[10px] sm:text-xs font-bold font-brand-title px-2.5 py-1 rounded-full backdrop-blur-xs">
              Year {active.year}
            </div>
          </div>

          <div className="md:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#739376] font-bold">
                {active.subtitle}
              </span>
              <h3 className="font-brand-title text-lg sm:text-2xl font-bold text-[#1E2A21]">
                {active.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#3A403B] leading-relaxed pt-1 sm:pt-2">
                {active.description}
              </p>
            </div>

            <div className="pt-3 sm:pt-4 flex items-center justify-between border-t border-[#E6EDE6] text-xs">
              <span className="text-[#555C56] text-[11px] sm:text-xs">
                Milestone 0{selectedMilestone + 1} of 0{timelineMilestones.length}
              </span>
              <button
                onClick={() => onNavigate('about')}
                className="text-[11px] sm:text-xs text-[#5B7A5E] hover:underline font-semibold flex items-center gap-1 cursor-pointer py-1"
              >
                Read Full Archive <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
