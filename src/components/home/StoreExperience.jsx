import React from 'react';
import { useModals } from '../../context/ModalContext';
import { SafeImage } from '../ui/SafeImage';
import { MapPin, Clock, Phone, Calendar, ArrowRight } from 'lucide-react';

export const StoreExperience = ({ onNavigate }) => {
  const { openConsultation } = useModals();

  return (
    <section className="py-20 bg-[#EDF3ED] border-y border-[#D0DDD1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-[#D0DDD1] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT: STORE SHOWROOM IMAGE */}
          <div className="lg:col-span-6 relative min-h-[380px] bg-[#F5EFE6]">
            <SafeImage
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
              alt="Selection Handloom Flagship Showroom in Meerut"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A21]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#D0DDD1] shadow-lg">
              <span className="text-[10px] uppercase tracking-widest text-[#739376] font-bold block">
                Flagship Destination
              </span>
              <span className="font-brand-title text-sm sm:text-base font-bold text-[#1E2A21]">
                Meerut Heritage Showroom
              </span>
              <p className="text-[11px] text-[#555C56]">
                Abu Lane Commercial Hub / Central Market, Meerut
              </p>
            </div>
          </div>

          {/* RIGHT: VISIT & APPOINTMENT */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block">
                PHYSICAL ATELIER
              </span>
              
              <h3 className="font-editorial text-3xl sm:text-4xl font-light text-[#1E2A21] leading-tight">
                Come experience <br />
                <span className="italic font-normal text-[#49634C]">the collection in person.</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#3A403B] leading-relaxed">
                Step inside our flagship showroom to touch full bolts of slub linen, test motorized timber blinds, and browse hundreds of hand-block print cushions with our senior textile curators.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#243528]">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#E6EDE6]">
                  <Clock className="w-4 h-4 text-[#5B7A5E] shrink-0" />
                  <div>
                    <strong>Visiting Hours:</strong> Monday – Sunday (10:30 AM – 8:30 PM)
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#E6EDE6]">
                  <Phone className="w-4 h-4 text-[#5B7A5E] shrink-0" />
                  <div>
                    <strong>Direct Concierge:</strong> +91 121 264 5075 / +91 98370 19500
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={openConsultation}
                className="px-6 py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Showroom Appointment</span>
              </button>

              <button
                onClick={() => onNavigate('store')}
                className="px-6 py-3.5 bg-[#FAF7F2] border border-[#D0DDD1] text-[#243528] rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#E6EDE6] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Store Details &amp; Map</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
