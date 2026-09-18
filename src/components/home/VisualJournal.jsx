import React from 'react';
import { InstagramIcon } from '../ui/SocialIcons';
import { SafeImage } from '../ui/SafeImage';

export const VisualJournal = () => {
  const moments = [
    {
      title: 'Morning Light & Slub Voile',
      category: 'Curtains',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Hand-Carved Teak Block Motif',
      category: 'Artisan Process',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Timber Slats & Shadow Play',
      category: 'Blinds',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'European Flax Honeycomb',
      category: 'Home Linen',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Himalayan Merino Wool Cut',
      category: 'Suiting Weaves',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-3">
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
              ATMOSPHERE &amp; WEAVES
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl font-light text-[#1E2A21]">
              The Visual Journal
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#243528] hover:text-[#5B7A5E] font-semibold transition-colors cursor-pointer py-1"
          >
            <InstagramIcon className="w-4 h-4 text-[#739376]" />
            <span>Follow Our Journey @selectionhandloom</span>
          </a>
        </div>

        {/* 5-COLUMN GALLERY STRIP */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {moments.map((m, idx) => (
            <div
              key={idx}
              className="group relative aspect-4/5 rounded-2xl overflow-hidden bg-[#F5EFE6] border border-[#D0DDD1] shadow-xs cursor-pointer"
            >
              <SafeImage
                src={m.image}
                alt={m.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              {/* Subtle permanent gradient on mobile, darker on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A21]/80 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#AEC4B0] font-semibold block truncate">
                  {m.category}
                </span>
                <span className="font-brand-title text-[11px] sm:text-xs font-bold leading-tight block line-clamp-2">
                  {m.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
