import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-paper">
      
      {/* Minimal Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-line bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5 pointer-events-none mix-blend-screen animate-blob"></div>
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10" data-aos="fade-up">
          <h1 className="mb-6">The Engineering Philosophy</h1>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            We are a highly technical engineering agency focused strictly on performance, security, and absolute precision in everything we build.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 lg:py-32 border-b border-line bg-paper">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div data-aos="fade-right">
              <div className="rounded-2xl overflow-hidden border border-brand/30 shadow-glow bg-surface aspect-square lg:aspect-auto lg:h-[500px] relative">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80" alt="Server room" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div data-aos="fade-left">
              <h2 className="mb-6 text-brand drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">No templates.<br/>No compromises.</h2>
              <div className="text-muted text-lg space-y-6 mb-10">
                <p>
                  Most agencies focus purely on surface-level design. We focus on the entire stack. True digital success requires a combination of precise UI design, impenetrable backend security, and scalable cloud architecture.
                </p>
                <p>
                  When you partner with us, you receive a complete, robust digital ecosystem engineered to accelerate your operations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-line">
                <div>
                  <div className="text-sm font-semibold text-ink mb-1 flex items-center gap-2">
                    <i className="bi bi-code-slash text-brand shadow-glow rounded-full"></i> Clean Code
                  </div>
                  <p className="text-sm text-muted">Audited & optimized.</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink mb-1 flex items-center gap-2">
                    <i className="bi bi-speedometer2 text-brand shadow-glow rounded-full"></i> Fast Load Times
                  </div>
                  <p className="text-sm text-muted">99+ Core Web Vitals.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Founder Section - Clean Grid */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            
            <div className="lg:col-span-4" data-aos="fade-right">
              <div className="rounded-2xl overflow-hidden border border-line shadow-sm bg-paper aspect-[3/4] relative group">
                <img src="/assets/img/gagan.png" alt="Gagan Ganesh Moolya" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="lg:col-span-8" data-aos="fade-left">
              <h2 className="mb-8">Built by engineers, for modern businesses.</h2>
              
              <div className="bg-paper p-8 lg:p-12 rounded-2xl border border-brand/20 shadow-glow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-[50px] pointer-events-none"></div>
                <p className="text-lg text-ink font-medium leading-relaxed italic mb-8 relative z-10">
                  "I started HIGH IN SKY SOLUTIONS because I saw too many businesses struggling with slow, insecure, and outdated digital systems. 
                  My goal was to create an engineering agency that doesn't just deliver code, but delivers measurable business value through high-performance technology."
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-brand text-paper flex items-center justify-center font-bold text-sm shadow-glow">
                    GM
                  </div>
                  <div>
                    <div className="font-bold text-ink text-sm mb-0.5">Gagan Ganesh Moolya</div>
                    <div className="text-brand text-xs font-semibold">Founder & Lead Engineer</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="py-24 bg-paper text-center border-t border-line">
        <div className="container mx-auto px-6 max-w-3xl" data-aos="fade-up">
          <h2 className="text-ink mb-6">Upgrade your technology.</h2>
          <p className="text-lg text-muted mb-10">
            Let's discuss how we can engineer a custom solution to scale your business operations securely.
          </p>
          <Link className="btn btn-brand btn-lg" to="/contact">
            Schedule a Technical Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
