import React from 'react';
import { BotanicalDivider } from '../ui/BotanicalDivider';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '../ui/SocialIcons';
import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1E2A21] text-[#FAF7F2] pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-[#334335]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP BRAND EMBLEM & HERITAGE STATEMENT */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-block relative mb-3 sm:mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#8DA98F]/40 mx-auto shadow-lg bg-white">
              <img
                src="/assets/logo.jpg"
                alt="Selection Handloom Emblem"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3 className="font-brand-title text-xl sm:text-2xl tracking-[0.2em] font-medium text-[#FAF7F2] mb-1">
            SELECTION HANDLOOM
          </h3>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#AEC4B0] font-medium mb-2 sm:mb-3">
            FURNISHING STORE • ESTD. 1950
          </p>
          <p className="font-editorial text-base sm:text-lg italic text-[#FAF7F2]/80 leading-relaxed max-w-lg mx-auto">
            "75 Years of Trust &amp; Quality — Woven with artisanal integrity for the spaces you call home."
          </p>
        </div>

        <BotanicalDivider className="my-6 sm:my-10 opacity-30" />

        {/* 4-COLUMN FOOTER NAVIGATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 py-4 sm:py-6">
          
          {/* Col 1: Brand & Heritage */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#AEC4B0] font-semibold">
              The Heritage Atelier
            </h4>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/70 leading-relaxed font-sans pr-0 sm:pr-6">
              Founded in Meerut in 1950, Selection Handloom has dressed generations of North Indian homes with master-woven draperies, architectural blinds, pure linen bedcover sets, and heirloom suiting fabrics.
            </p>
            <div className="flex items-center gap-2.5 pt-1 text-[#AEC4B0]">
              <ShieldCheck className="w-5 h-5 text-[#8DA98F] shrink-0" />
              <span className="text-xs font-medium tracking-wide">
                Certified 100% Handloom &amp; Natural Fibres Guarantee
              </span>
            </div>
          </div>

          {/* Col 2: Shop Collections */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#AEC4B0] font-semibold">
              Collections
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-[#FAF7F2]/75">
              <li>
                <button onClick={() => onNavigate('category-curtains')} className="py-1 inline-block hover:text-[#AEC4B0] transition-colors cursor-pointer">
                  Curtains &amp; Drapes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category-blinds')} className="py-1 inline-block hover:text-[#AEC4B0] transition-colors cursor-pointer">
                  Timber &amp; Roman Blinds
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category-home-linen')} className="py-1 inline-block hover:text-[#AEC4B0] transition-colors cursor-pointer">
                  Pure Home Linen
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category-suits')} className="py-1 inline-block hover:text-[#AEC4B0] transition-colors cursor-pointer">
                  Suiting &amp; Raw Silk
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="py-1 inline-block hover:text-[#AEC4B0] transition-colors cursor-pointer">
                  All Products
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Care & Heritage */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#AEC4B0] font-semibold">
              Care &amp; Heritage
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-[#FAF7F2]/75">
              <li>
                <button onClick={() => onNavigate('about')} className="py-1 inline-block hover:text-[#AEC4B0] transition-colors cursor-pointer">
                  75-Year Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('store')} className="py-1 inline-block hover:text-[#AEC4B0] transition-colors cursor-pointer">
                  Meerut Showroom
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('account')} className="py-1 inline-block hover:text-[#AEC4B0] transition-colors cursor-pointer">
                  Track Your Order
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="py-1 inline-block hover:text-[#AEC4B0] transition-colors cursor-pointer">
                  Custom Drapery Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Meerut Showroom & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#AEC4B0] font-semibold">
              Meerut Showroom
            </h4>
            <div className="space-y-2 text-xs text-[#FAF7F2]/75">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8DA98F] shrink-0 mt-0.5" />
                <span>Abu Lane / Central Market, Meerut, UP 250001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8DA98F] shrink-0" />
                <span>+91 121 264 5075</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8DA98F] shrink-0" />
                <span>Open Daily: 10:30 AM – 8:30 PM</span>
              </p>
            </div>

            <div className="pt-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#AEC4B0] block mb-2 font-medium">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#29382C] flex items-center justify-center hover:bg-[#8DA98F] hover:text-[#1E2A21] transition-all cursor-pointer" title="Instagram">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#29382C] flex items-center justify-center hover:bg-[#8DA98F] hover:text-[#1E2A21] transition-all cursor-pointer" title="Facebook">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href="https://wa.me/919837019500" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#29382C] flex items-center justify-center hover:bg-[#8DA98F] hover:text-[#1E2A21] transition-all cursor-pointer" title="WhatsApp">
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-[#334335] mt-8 sm:mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/50 gap-4 text-center sm:text-left">
          <p>© 1950–2025 Selection Handloom. All rights reserved. 75 Years of Trust &amp; Quality.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Handloom Verification</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
