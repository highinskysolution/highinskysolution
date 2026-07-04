import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Show a fast 1.2s preloader on initial app mount
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-paper flex items-center justify-center transition-opacity duration-500 ease-out">
      <div className="flex flex-col items-center">
        
        {/* Logo */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-brand/30 blur-xl rounded-full"></div>
          <img src="/assets/img/mark.png" alt="HIGH IN SKY SOLUTIONS logo" className="w-16 h-16 object-contain relative z-10 animate-pulse" />
        </div>
        
        {/* Brand Name */}
        <div className="text-white font-black tracking-widest uppercase text-sm mb-6 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
          HIGH IN SKY SOLUTIONS
        </div>
        
        {/* Loading Line */}
        <div className="w-48 h-[2px] bg-line overflow-hidden rounded-full">
          <div className="h-full bg-brand shadow-glow w-full origin-left animate-[loadLine_1.2s_ease-in-out_forwards]"></div>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
