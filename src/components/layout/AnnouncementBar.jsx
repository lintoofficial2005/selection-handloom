import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export const AnnouncementBar = ({ onNavigate }) => {
  return (
    <div className="bg-[#243528] text-[#E6EDE6] text-xs py-2 px-4 border-b border-[#3D503F]/60">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#AEC4B0] animate-pulse" />
          <span className="tracking-widest uppercase font-medium text-[11px] text-[#AEC4B0]">
            ESTD. 1950 — 75 YEARS OF TRUST &amp; QUALITY
          </span>
          <span className="hidden md:inline text-stone-500">|</span>
          <span className="hidden md:inline text-[#FAF7F2]/80">
            Complimentary Doorstep Fabric Consultation in Meerut &amp; Delhi NCR
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-[#FAF7F2]/80">
          <button 
            onClick={() => onNavigate('store')}
            className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <MapPin className="w-3 h-3 text-[#AEC4B0]" />
            <span>Meerut Showroom</span>
          </button>
          <a href="tel:+911212645075" className="hover:text-white flex items-center gap-1 transition-colors">
            <Phone className="w-3 h-3 text-[#AEC4B0]" />
            <span>+91 121 264 5075</span>
          </a>
        </div>
      </div>
    </div>
  );
};
