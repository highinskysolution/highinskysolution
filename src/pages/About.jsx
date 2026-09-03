import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-paper">
      
      {/* Minimal Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-white/[0.06] bg-surface/40 relative overflow-hidden">
        <div className="glow-orb top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-brand/[0.1] animate-blob"></div>
        <div className="glow-orb bottom-[-100px] right-[6%] w-[340px] h-[340px] bg-accent/[0.08] animate-blob-slow"></div>
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10" data-aos="fade-up">
          <div className="eyebrow mb-4">Who We Are</div>
          <h1 className="mb-6">The Engineering <span className="text-gradient">Philosophy</span></h1>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            We are a highly technical engineering agency focused strictly on performance, security, and absolute precision in everything we build.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 lg:py-32 border-b border-white/[0.06] bg-paper overflow-hidden relative">
        <div className="glow-orb top-[15%] right-[-8%] w-[400px] h-[400px] bg-accent/[0.06]"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div data-aos="fade-right">
              <div className="media-frame aspect-square lg:aspect-auto lg:h-[500px] border-brand/25 shadow-glow">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80" alt="Server room" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/15 via-transparent to-accent/10 pointer-events-none"></div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="eyebrow mb-4">Our Standard</div>
              <h2 className="mb-6">No templates.<br/><span className="text-gradient">No compromises.</span></h2>
              <div className="text-muted text-lg space-y-6 mb-10">
                <p>
                  Most agencies focus purely on surface-level design. We focus on the entire stack. True digital success requires a combination of precise UI design, impenetrable backend security, and scalable cloud architecture.
                </p>
                <p>
                  When you partner with us, you receive a complete, robust digital ecosystem engineered to accelerate your operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/[0.07]">
                <div className="group">
                  <div className="text-sm font-semibold text-ink mb-1 flex items-center gap-2">
                    <i className="bi bi-code-slash text-brand transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.7)]"></i> Clean Code
                  </div>
                  <p className="text-sm text-muted">Audited &amp; optimized.</p>
                </div>
                <div className="group">
                  <div className="text-sm font-semibold text-ink mb-1 flex items-center gap-2">
                    <i className="bi bi-speedometer2 text-brand transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.7)]"></i> Fast Load Times
                  </div>
                  <p className="text-sm text-muted">99+ Core Web Vitals.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founder Section - Clean Grid */}
      <section className="py-24 lg:py-32 bg-surface/40 overflow-hidden relative">
        <div className="glow-orb bottom-[10%] left-[-8%] w-[420px] h-[420px] bg-brand/[0.07]"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

            <div className="lg:col-span-4" data-aos="fade-right">
              <div className="media-frame aspect-[3/4] group">
                <img src="/assets/img/gagan.png" alt="Gagan Ganesh Moolya" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-paper/50 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            <div className="lg:col-span-8" data-aos="fade-left">
              <div className="eyebrow mb-4">Leadership</div>
              <h2 className="mb-8">Built by engineers, for <span className="text-gradient">modern businesses.</span></h2>

              <div className="glass-panel p-8 lg:p-12 overflow-hidden">
                <div className="glow-orb top-[-40px] right-[-40px] w-40 h-40 bg-brand/[0.1]"></div>
                <i className="bi bi-quote absolute top-6 right-8 text-6xl text-brand/15 pointer-events-none"></i>
                <p className="text-lg text-ink font-medium leading-relaxed italic mb-8 relative z-10">
                  "I started HIGH IN SKY SOLUTIONS because I saw too many businesses struggling with slow, insecure, and outdated digital systems.
                  My goal was to create an engineering agency that doesn't just deliver code, but delivers measurable business value through high-performance technology."
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-11 h-11 rounded-full bg-gradient-brand text-[#04141a] flex items-center justify-center font-bold text-sm shadow-glow-btn">
                    GM
                  </div>
                  <div>
                    <div className="font-bold text-ink text-sm mb-0.5">Gagan Ganesh Moolya</div>
                    <div className="text-brand text-xs font-semibold">Founder &amp; Lead Engineer</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="py-24 lg:py-32 bg-paper text-center border-t border-white/[0.06] relative overflow-hidden">
        <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-brand/[0.08] animate-glow-pulse"></div>
        <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] bg-accent/[0.06]"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10" data-aos="fade-up">
          <h2 className="text-ink mb-6">Upgrade your <span className="text-gradient">technology.</span></h2>
          <p className="text-lg text-muted mb-10">
            Let's discuss how we can engineer a custom solution to scale your business operations securely.
          </p>
          <Link className="btn btn-brand btn-lg group" to="/contact">
            Schedule a Technical Consultation
            <i className="bi bi-arrow-right transition-transform duration-300 ease-premium group-hover:translate-x-1"></i>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
