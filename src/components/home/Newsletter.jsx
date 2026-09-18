import React, { useState } from 'react';
import { useModals } from '../../context/ModalContext';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useModals();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed to Selection Handloom Gazette');
  };

  return (
    <section className="py-14 sm:py-20 bg-[#243528] text-[#FAF7F2] border-t border-[#3D503F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3D503F] border border-[#8DA98F]/40 text-[#AEC4B0] text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-[#AEC4B0]" />
          Heirloom Gazette
        </div>

        <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light text-white">
          Bring something <span className="italic font-normal text-[#AEC4B0]">beautiful home.</span>
        </h2>

        <p className="text-xs sm:text-sm text-[#FAF7F2]/80 max-w-md mx-auto leading-relaxed">
          Receive seasonal textile chronicles, interior styling lookbooks, and private previews of limited masterhouse weaves.
        </p>

        {subscribed ? (
          <div className="p-4 sm:p-5 rounded-2xl bg-[#3D503F] border border-[#739376]/50 max-w-md mx-auto flex items-center justify-center gap-3 text-white">
            <CheckCircle2 className="w-5 h-5 text-[#AEC4B0] shrink-0" />
            <span className="text-xs font-bold tracking-wide">
              Welcome to the Gazette. Enjoy 15% off with code <strong className="text-[#AEC4B0]">HERITAGE75</strong>.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-3 sm:py-3.5 min-h-[44px] rounded-xl border border-[#739376]/50 bg-[#1E2A21] text-xs text-white placeholder:text-[#FAF7F2]/50 focus:border-[#AEC4B0] outline-none shadow-xs"
            />
            <button
              type="submit"
              className="px-6 py-3 sm:py-3.5 min-h-[44px] bg-[#FAF7F2] text-[#1E2A21] rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#E6EDE6] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-[10px] text-[#FAF7F2]/60">
          We respect your privacy. No spam — only quiet textile reflections.
        </p>

      </div>
    </section>
  );
};
