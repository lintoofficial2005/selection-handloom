import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export const NotFoundPage = ({ onNavigate }) => {
  return (
    <div className="py-24 bg-[#FAF7F2] min-h-[70vh] flex items-center justify-center animate-in fade-in duration-300">
      <div className="text-center max-w-md px-4 space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#E6EDE6] text-[#5B7A5E] flex items-center justify-center mx-auto">
          <Compass className="w-10 h-10" />
        </div>
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block">
          ERROR 404
        </span>
        <h1 className="font-editorial text-4xl font-light text-[#1E2A21]">
          Weave Not Found
        </h1>
        <p className="text-xs sm:text-sm text-[#555C56] leading-relaxed">
          The requested textile archive or page does not exist or has been relocated.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-3 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] cursor-pointer shadow-sm"
          >
            Return Home
          </button>
          <button
            onClick={() => onNavigate('shop')}
            className="px-6 py-3 bg-white border border-[#D0DDD1] text-[#243528] rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#FAF7F2] cursor-pointer"
          >
            Explore Catalogue
          </button>
        </div>
      </div>
    </div>
  );
};
