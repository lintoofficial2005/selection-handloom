import React, { useState } from 'react';
import { useModals } from '../../context/ModalContext';
import { X, Calendar, MapPin, Sparkles, CheckCircle2, Phone, Clock, User } from 'lucide-react';

export const ConsultationModal = () => {
  const { isConsultationOpen, closeConsultation, showToast } = useModals();
  const [consultationType, setConsultationType] = useState('at-home'); // 'at-home' | 'in-store'
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Meerut',
    address: '',
    preferredDate: '',
    preferredTime: '11:00 AM - 01:00 PM',
    roomInterests: ['Living Room Drapery', 'Timber Venetian Blinds'],
    notes: ''
  });

  if (!isConsultationOpen) return null;

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      roomInterests: prev.roomInterests.includes(interest)
        ? prev.roomInterests.filter(i => i !== interest)
        : [...prev.roomInterests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast('Please provide your name and phone number');
      return;
    }
    setIsSubmitted(true);
    showToast('Consultation appointment successfully booked!');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    closeConsultation();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E2A21]/75 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-[#FAF7F2] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#D0DDD1] overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 border border-[#D0DDD1] flex items-center justify-center text-[#243528] hover:bg-[#243528] hover:text-white transition-all cursor-pointer shadow-sm"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="p-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#E6EDE6] border-2 border-[#739376] flex items-center justify-center text-[#243528] mx-auto">
              <CheckCircle2 className="w-9 h-9 text-[#49634C]" />
            </div>
            <h3 className="font-brand-title text-2xl sm:text-3xl font-semibold text-[#1E2A21]">
              Consultation Scheduled
            </h3>
            <p className="font-editorial text-lg italic text-[#555C56] max-w-md mx-auto">
              "Thank you, {formData.name}. Our master textile advisor will connect with you at {formData.phone} to confirm your {consultationType === 'at-home' ? 'doorstep measurement' : 'in-store showroom'} appointment."
            </p>
            <div className="bg-white p-5 rounded-xl border border-[#D0DDD1] max-w-md mx-auto text-left text-xs space-y-2 text-[#3A403B]">
              <div className="flex justify-between">
                <span className="text-[#739376] uppercase tracking-wider font-semibold">Service:</span>
                <span className="font-bold text-[#243528]">{consultationType === 'at-home' ? 'Complimentary Home Measurement' : 'Meerut Flagship Showroom Tour'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#739376] uppercase tracking-wider font-semibold">Location:</span>
                <span>{formData.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#739376] uppercase tracking-wider font-semibold">Slot:</span>
                <span>{formData.preferredTime}</span>
              </div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="py-3 px-8 bg-[#243528] text-white rounded-lg text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            
            {/* MODAL HEADER */}
            <div className="text-center max-w-lg mx-auto mb-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
                SELECTION HANDLOOM ATELIER
              </span>
              <h3 className="font-brand-title text-xl sm:text-2xl font-bold text-[#1E2A21]">
                Book Bespoke Textile Consultation
              </h3>
              <p className="text-xs text-[#555C56] mt-1">
                Experience fabric drapes, measure custom drops, and coordinate textures with our 75-year heritage advisors.
              </p>
            </div>

            {/* CONSULTATION TYPE SELECTOR */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setConsultationType('at-home')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  consultationType === 'at-home'
                    ? 'border-[#243528] bg-[#E6EDE6] ring-1 ring-[#243528]'
                    : 'border-[#D0DDD1] bg-white hover:border-[#739376]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#5B7A5E]" />
                  <span className="text-xs font-bold text-[#243528] uppercase tracking-wider">
                    At-Home Service
                  </span>
                </div>
                <p className="text-[11px] text-[#555C56]">
                  Doorstep swatches &amp; laser window measurement in Meerut &amp; NCR.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setConsultationType('in-store')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  consultationType === 'in-store'
                    ? 'border-[#243528] bg-[#E6EDE6] ring-1 ring-[#243528]'
                    : 'border-[#D0DDD1] bg-white hover:border-[#739376]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-[#5B7A5E]" />
                  <span className="text-xs font-bold text-[#243528] uppercase tracking-wider">
                    Meerut Showroom
                  </span>
                </div>
                <p className="text-[11px] text-[#555C56]">
                  Walk through full-size drapery installations &amp; master bolts.
                </p>
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D0DDD1] bg-white text-xs text-[#243528] focus:border-[#243528] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D0DDD1] bg-white text-xs text-[#243528] focus:border-[#243528] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                    City / Region
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D0DDD1] bg-white text-xs text-[#243528] focus:border-[#243528] outline-none"
                  >
                    <option value="Meerut">Meerut &amp; Cantt</option>
                    <option value="Delhi NCR">Delhi NCR &amp; Noida</option>
                    <option value="Ghaziabad">Ghaziabad &amp; Modinagar</option>
                    <option value="Other">Other (Virtual Video Call)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D0DDD1] bg-white text-xs text-[#243528] focus:border-[#243528] outline-none"
                  >
                    <option value="11:00 AM - 01:00 PM">Morning (11:00 AM – 01:00 PM)</option>
                    <option value="02:00 PM - 04:00 PM">Afternoon (02:00 PM – 04:00 PM)</option>
                    <option value="05:00 PM - 07:30 PM">Evening (05:00 PM – 07:30 PM)</option>
                  </select>
                </div>
              </div>

              {consultationType === 'at-home' && (
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                    Street Address / Sector / Landmark
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. House 42, Civil Lines, Near Circuit House, Meerut"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D0DDD1] bg-white text-xs text-[#243528] focus:border-[#243528] outline-none"
                  />
                </div>
              )}

              {/* INTERESTS */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#3A403B] font-semibold mb-1.5">
                  Textiles of Interest (Select All Applicable):
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Living Room Curtains',
                    'Sheer Drapes',
                    'Blackout Bedroom Linings',
                    'Timber Venetian Blinds',
                    'Natural Jute Romans',
                    'Heirloom Bedcover Sets',
                    'Cashmere Suiting Fabrics'
                  ].map((interest) => (
                    <button
                      type="button"
                      key={interest}
                      onClick={() => handleInterestToggle(interest)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                        formData.roomInterests.includes(interest)
                          ? 'bg-[#243528] text-white border-[#243528]'
                          : 'bg-white text-[#3A403B] border-[#D0DDD1] hover:border-[#739376]'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#243528] text-white rounded-lg text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  Confirm Consultation Request
                </button>
              </div>
            </form>

          </div>
        )}

      </div>
    </div>
  );
};
