import React from 'react';
import { ShieldCheck, Feather, Scissors, Sparkles, MapPin, Award } from 'lucide-react';

export const WhySelection = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '75+ Years of Trust',
      desc: 'Three generations of uninterrupted heritage, serving thousands of homes in Meerut and across India since 1950.'
    },
    {
      icon: Feather,
      title: 'Pure Natural Fibres',
      desc: 'Sustainably sourced European flax, Himalayan cashmere wool, and Indian mulberry silk with certified handloom integrity.'
    },
    {
      icon: Scissors,
      title: 'Bespoke Window Tailoring',
      desc: 'Every panel is hand-measured, blind-hemmed with corner weights, and inspected for flawless hanging symmetry.'
    },
    {
      icon: Sparkles,
      title: 'At-Home & In-Store Concierge',
      desc: 'Complimentary doorstep fabric swatches, laser measurement, and interior styling consultations.'
    }
  ];

  return (
    <section className="py-20 bg-[#F3EFE6]/60 border-t border-[#E6EDE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
            THE SELECTION ADVANTAGE
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-light text-[#1E2A21]">
            Why Selection Handloom
          </h2>
        </div>

        {/* 4 PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-6 bg-white rounded-2xl border border-[#D0DDD1] shadow-xs hover:border-[#8DA98F] transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E6EDE6] text-[#243528] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-brand-title text-base font-bold text-[#1E2A21]">
                  {p.title}
                </h4>
                <p className="text-xs text-[#555C56] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
