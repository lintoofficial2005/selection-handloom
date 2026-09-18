import React, { useState } from 'react';

export const SafeImage = ({
  src,
  alt = 'Selection Handloom Textile',
  className = '',
  fallbackSrc = 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  // If initial URL is known broken or empty
  const cleanSrc = src && !src.includes('photo-1540518614846') ? src : fallbackSrc;

  if (hasError) {
    return (
      <div
        className={`bg-[#E6EDE6] flex flex-col items-center justify-center p-4 text-center border border-[#D0DDD1] ${className}`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#739376" strokeWidth="1.5" className="opacity-80 mb-1">
          <path d="M12 2C8 6 4 10 4 15a8 8 0 0 0 16 0c0-5-4-9-8-13z" />
          <path d="M12 2v20" />
        </svg>
        <span className="text-[10px] uppercase tracking-widest text-[#49634C] font-semibold font-sans">
          SELECTION HANDLOOM
        </span>
        <span className="text-[9px] text-[#5B7A5E] font-sans">Estd. 1950</span>
      </div>
    );
  }

  return (
    <img
      src={cleanSrc}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      {...props}
    />
  );
};
