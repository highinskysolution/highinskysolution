import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1400);
    const hideTimer = setTimeout(() => setHidden(true), 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#07090E] flex items-center justify-center transition-all duration-500 ${
        fading ? 'opacity-0 pointer-events-none scale-[1.03]' : 'opacity-100'
      }`}
    >
      {/* Architectural Grid & Top Spotlight */}
      <div className="absolute inset-0 arch-grid-bg opacity-80 pointer-events-none" />
      <div className="absolute inset-0 top-spotlight pointer-events-none" />

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-sky-400/15 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with Layered Glow */}
        <div className="relative mb-7">
          <div className="absolute inset-0 -m-4 bg-sky-400/25 blur-2xl rounded-full animate-pulse" />
          <div className="w-16 h-16 rounded-2xl bg-[#0D111A] border border-sky-400/30 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(56,189,248,0.25)]">
            <img
              src="/assets/img/mark.png"
              alt="HIGH IN SKY SOLUTIONS logo"
              className="w-10 h-10 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Brand Name */}
        <div className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent font-extrabold tracking-[0.22em] uppercase text-sm mb-6 text-center px-6">
          HIGH IN SKY SOLUTIONS
        </div>

        {/* Loading Progress Bar */}
        <div className="w-56 h-[3px] rounded-full overflow-hidden bg-white/[0.08]">
          <div className="h-full w-full origin-left rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 shadow-[0_0_16px_rgba(56,189,248,0.8)] animate-[loadLine_1.35s_cubic-bezier(0.22,1,0.36,1)_forwards]" />
        </div>

        <div className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-400/80">
          Initializing
        </div>
      </div>
    </div>
  );
};

export default Preloader;
