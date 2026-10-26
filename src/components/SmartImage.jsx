import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const SmartImage = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel = 'HIGH IN SKY SOLUTIONS',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#0E172A] via-[#0B1322] to-[#07090E] flex flex-col items-center justify-center p-6 text-center ${className}`}
      >
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
        <div className="w-12 h-12 rounded-2xl bg-sky-400/15 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-3 relative z-10">
          <Sparkles className="w-6 h-6" />
        </div>
        <span className="text-xs font-semibold tracking-wider uppercase text-sky-300 relative z-10">
          {alt || fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

export default SmartImage;
