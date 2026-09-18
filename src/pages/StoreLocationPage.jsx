import React from 'react';
import { useModals } from '../context/ModalContext';
import { MapPin, Phone, Clock, Mail, Calendar, Compass, ShieldCheck } from 'lucide-react';

export const StoreLocationPage = ({ onNavigate }) => {
  const { openConsultation } = useModals();

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block">
            FLAGSHIP SHOWROOM &amp; ATELIER
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-light text-[#1E2A21]">
            Experience Selection Handloom, Meerut
          </h1>
          <p className="font-editorial text-lg italic text-[#555C56]">
            "Step inside seventy-five years of tactile textile curation."
          </p>
        </div>

        {/* SHOWROOM DETAILS & INTERACTIVE MAP MOCKUP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* LEFT: STORE INFO & APPOINTMENT */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#D0DDD1] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <h3 className="font-brand-title text-xl font-bold text-[#1E2A21] border-b border-[#E6EDE6] pb-3">
                Showroom Information
              </h3>

              <div className="space-y-4 text-xs text-[#3A403B]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#5B7A5E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#243528] text-sm mb-0.5">Address:</strong>
                    <p>Selection Handloom Flagship Showroom</p>
                    <p>Abu Lane Commercial Corridor / Central Market</p>
                    <p>Meerut, Uttar Pradesh 250001, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#5B7A5E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#243528] text-sm mb-0.5">Visiting Hours:</strong>
                    <p>Monday – Sunday: 10:30 AM – 8:30 PM</p>
                    <p className="text-[11px] text-[#739376]">Open all 7 days with valet parking</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#5B7A5E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#243528] text-sm mb-0.5">Direct Concierge:</strong>
                    <p>+91 121 264 5075</p>
                    <p>+91 98370 19500 (WhatsApp Consultations)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#5B7A5E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#243528] text-sm mb-0.5">Email Inquiries:</strong>
                    <p>concierge@selectionhandloom.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6EDE6]">
              <button
                onClick={openConsultation}
                className="w-full py-4 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book In-Store VIP Appointment</span>
              </button>
            </div>
          </div>

          {/* RIGHT: SHOWROOM GALLERY & MAP PLACEHOLDER */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* SHOWROOM PHOTO */}
            <div className="aspect-16/9 rounded-3xl overflow-hidden bg-[#F5EFE6] border border-[#D0DDD1] relative shadow-md">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                alt="Selection Handloom Meerut Showroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#243528]/90 text-[#FAF7F2] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-semibold">
                Meerut Flagship Atelier
              </div>
            </div>

            {/* MOCK MAP VIEW */}
            <div className="bg-white p-6 rounded-3xl border border-[#D0DDD1] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#5B7A5E]" />
                  <span className="text-xs font-bold text-[#243528] uppercase tracking-wider">
                    Interactive Navigation Map
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Meerut+Abu+Lane"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#5B7A5E] hover:underline font-semibold"
                >
                  Open in Google Maps →
                </a>
              </div>

              <div className="h-48 rounded-2xl bg-[#E6EDE6] border border-[#D0DDD1] flex flex-col items-center justify-center text-center p-4 text-xs text-[#3A403B] relative overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-[#243528] text-white flex items-center justify-center mb-2 shadow-lg animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <strong className="text-[#1E2A21] font-brand-title text-sm">SELECTION HANDLOOM</strong>
                <p className="text-[11px] text-[#555C56]">Abu Lane / Central Market, Meerut (250001)</p>
                <span className="text-[10px] text-[#739376] mt-1">45 mins from Delhi-Meerut Expressway exit</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
