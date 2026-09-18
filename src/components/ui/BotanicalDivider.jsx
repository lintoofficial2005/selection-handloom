import React from 'react';

export const BotanicalDivider = ({ className = '', label = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-4 my-8 ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-[#8DA98F]/40 to-transparent flex-1 max-w-xs" />
      <div className="flex items-center gap-2 text-[#5B7A5E]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-80">
          <path d="M12 2C8 6 4 10 4 15a8 8 0 0 0 16 0c0-5-4-9-8-13z" />
          <path d="M12 2v20" />
          <path d="M12 9c2-1 4-1 6 0" />
          <path d="M12 14c-2-1-4-1-6 0" />
          <path d="M12 17c2-1 4-1 5 0" />
        </svg>
        {label && (
          <span className="text-xs uppercase tracking-[0.25em] text-[#49634C] font-medium font-sans">
            {label}
          </span>
        )}
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#8DA98F]/40 to-transparent flex-1 max-w-xs" />
    </div>
  );
};
