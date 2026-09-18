import React, { useState } from 'react';
import { useModals } from '../context/ModalContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Clock } from 'lucide-react';

export const ContactPage = () => {
  const { showToast } = useModals();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Bespoke Curtains & Drapery Consultation',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast('Please provide your name and phone number');
      return;
    }
    setSubmitted(true);
    showToast('Your message has been sent to our concierge');
  };

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block">
            ESTD. 1950 • MEERUT
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-light text-[#1E2A21]">
            Contact Our Concierge
          </h1>
          <p className="text-xs sm:text-sm text-[#555C56]">
            We are here to assist with custom window measurements, fabric swatches, or bulk interior inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: CONTACT DIRECTORY */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#D0DDD1] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-brand-title text-xl font-bold text-[#1E2A21] border-b border-[#E6EDE6] pb-3">
                Atelier Directory
              </h3>

              <div className="space-y-4 text-xs text-[#3A403B]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#5B7A5E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#243528] text-sm mb-0.5">Meerut Showroom:</strong>
                    <p>Selection Handloom, Abu Lane Commercial Hub / Central Market, Meerut 250001, UP</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#5B7A5E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#243528] text-sm mb-0.5">Telephone Inquiries:</strong>
                    <p>+91 121 264 5075 (Showroom)</p>
                    <p>+91 98370 19500 (Mobile &amp; WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#5B7A5E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#243528] text-sm mb-0.5">Email Inquiries:</strong>
                    <p>concierge@selectionhandloom.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#5B7A5E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#243528] text-sm mb-0.5">Operating Hours:</strong>
                    <p>Monday – Sunday: 10:30 AM – 8:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E6EDE6]">
              <a
                href="https://wa.me/919837019500"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 98370 19500)</span>
              </a>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#D0DDD1] shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#E6EDE6] border-2 border-[#739376] flex items-center justify-center text-[#243528] mx-auto">
                  <CheckCircle2 className="w-9 h-9 text-[#49634C]" />
                </div>
                <h3 className="font-brand-title text-2xl font-bold text-[#1E2A21]">
                  Message Received
                </h3>
                <p className="text-xs sm:text-sm text-[#555C56] max-w-md mx-auto">
                  Thank you, {formData.name}. Our senior textile consultant will contact you via phone or email within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-wider font-semibold cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-brand-title text-xl font-bold text-[#1E2A21] mb-2">
                  Send a Bespoke Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Singhania"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-xs text-[#243528] focus:border-[#243528] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-xs text-[#243528] focus:border-[#243528] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-xs text-[#243528] focus:border-[#243528] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-xs text-[#243528] focus:border-[#243528] outline-none"
                    >
                      <option>Bespoke Curtains &amp; Drapery Consultation</option>
                      <option>Timber / Roman Blinds Installation</option>
                      <option>Home Linen &amp; Bulk Furnishings</option>
                      <option>Suiting Fabrics &amp; Tailoring</option>
                      <option>Other Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                    Your Requirements / Room Dimensions
                  </label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your room, window heights, or fabric preferences..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-xs text-[#243528] focus:border-[#243528] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Concierge Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
