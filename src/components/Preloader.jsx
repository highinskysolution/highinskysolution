import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Begin the fade at 1.2s, then unmount once the transition finishes
    const fadeTimer = setTimeout(() => setFading(true), 1200);
    const hideTimer = setTimeout(() => setHidden(true), 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-paper flex items-center justify-center transition-all duration-[600ms] ease-premium ${
        fading ? 'opacity-0 pointer-events-none scale-[1.04]' : 'opacity-100'
      }`}
    >
      {/* Ambient depth glows */}
      <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-brand/12 animate-glow-pulse"></div>
      <div className="glow-orb bottom-[15%] right-[18%] w-[300px] h-[300px] bg-accent/10"></div>

      {/* Faint animated grid */}
      <div className="grid-overlay opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center">

        {/* Logo with layered glow */}
        <div className="relative mb-8">
          <div className="absolute inset-0 -m-4 bg-brand/25 blur-2xl rounded-full animate-glow-pulse"></div>
          <img
            src="/assets/img/mark.png"
            alt="HIGH IN SKY SOLUTIONS logo"
            className="w-16 h-16 object-contain relative z-10 animate-float"
          />
        </div>

        {/* Brand Name */}
        <div className="text-gradient font-extrabold tracking-[0.22em] uppercase text-sm mb-7 text-center px-6">
          HIGH IN SKY SOLUTIONS
        </div>

        {/* Loading Line */}
        <div className="w-56 h-[3px] rounded-full overflow-hidden bg-white/[0.07]">
          <div className="h-full w-full origin-left rounded-full bg-gradient-brand shadow-glow animate-[loadLine_1.2s_cubic-bezier(0.22,1,0.36,1)_forwards]"></div>
        </div>

        <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-subtle">
          Initializing
        </div>

      </div>
    </div>
  );
};

export default Preloader;
