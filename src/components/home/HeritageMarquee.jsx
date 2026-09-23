import React from 'react';

export const HeritageMarquee = () => {
  const marqueeItems = [
    'SELECTION HANDLOOM',
    'ESTD. 1950',
    'MEERUT SHOWROOM',
    '75 YEARS OF TRUST & QUALITY',
    'ARCHITECTURAL DRAPERY & BLINDS',
    'HEIRLOOM BEDDING & LINEN',
    'UNSTITCHED SILKS & FABRICS',
    'BESPOKE CUSTOM TAILORING',
    'HERITAGE WEAVES',
  ];

  return (
    <div className="relative overflow-hidden py-3 sm:py-3.5 bg-[#F4F7F4] stitch-border-t stitch-border-b select-none">
      <div className="animate-marquee flex items-center gap-6 sm:gap-10">
        {/* First repetition */}
        {marqueeItems.map((item, idx) => (
          <div key={`m1-${idx}`} className="flex items-center gap-6 sm:gap-10 shrink-0">
            <span className="font-brand-title text-[10px] sm:text-[11px] uppercase tracking-[0.24em] sm:tracking-[0.28em] font-semibold text-[#243528]">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#D99B26] shrink-0 opacity-70" />
          </div>
        ))}
        {/* Duplicate for seamless infinite loop */}
        {marqueeItems.map((item, idx) => (
          <div key={`m2-${idx}`} className="flex items-center gap-6 sm:gap-10 shrink-0">
            <span className="font-brand-title text-[10px] sm:text-[11px] uppercase tracking-[0.24em] sm:tracking-[0.28em] font-semibold text-[#243528]">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#D99B26] shrink-0 opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
};
