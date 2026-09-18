import React from 'react';
import { useModals } from '../../context/ModalContext';
import { Sparkles } from 'lucide-react';

export const Toast = () => {
  const { toastMessage } = useModals();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#243528] text-[#FAF7F2] border border-[#8DA98F]/40 px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3.5 max-w-md backdrop-blur-md">
        <div className="w-8 h-8 rounded-full bg-[#3D503F] flex items-center justify-center text-[#AEC4B0] shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <p className="text-sm font-medium tracking-wide">
          {toastMessage.message}
        </p>
      </div>
    </div>
  );
};
