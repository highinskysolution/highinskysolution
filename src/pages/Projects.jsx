import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="bg-paper">
      
      {/* Minimal Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-white/[0.06] bg-surface/40 relative overflow-hidden">
        <div className="glow-orb top-[-120px] left-[-60px] w-[440px] h-[440px] bg-brand/[0.11] animate-blob"></div>
        <div className="glow-orb bottom-[-120px] right-[-60px] w-[360px] h-[360px] bg-accent/[0.08] animate-blob-slow"></div>
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10" data-aos="fade-up">
          <div className="eyebrow mb-4">Our Work</div>
          <h1 className="mb-6">Portfolio & <span className="text-gradient">Process</span></h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A showcase of our structured engineering process and recent deployments.
          </p>
        </div>
      </section>

      {/* Case Studies Empty State - Clean Card */}
      <section className="py-24 border-b border-white/[0.06] bg-paper relative overflow-hidden">
        <div className="glow-orb top-0 right-[10%] w-[360px] h-[360px] bg-accent/[0.06]"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="enterprise-card text-center p-12 bg-surface/50" data-aos="zoom-in">
            <div className="glow-orb top-[-40px] right-[-40px] w-52 h-52 bg-brand/[0.12]"></div>
            <div className="icon-tile w-16 h-16 text-2xl mx-auto mb-6 border-brand/30 shadow-glow relative z-10">
              <i className="bi bi-rocket-takeoff"></i>
            </div>
            <h2 className="text-2xl mb-4 relative z-10">Case Studies <span className="text-gradient">Curating</span></h2>
            <p className="text-muted mb-8 max-w-[500px] mx-auto text-sm relative z-10">
              We are currently documenting detailed technical reviews of our latest scalable web deployments. Check back shortly.
            </p>
            <div className="flex justify-center relative z-10">
              <Link to="/services" className="btn btn-brand group">
                Explore Capabilities
                <i className="bi bi-arrow-right transition-transform duration-300 ease-premium group-hover:translate-x-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Structured List */}
      <section className="py-24 lg:py-32 bg-surface/40 relative overflow-hidden">
        <div className="glow-orb bottom-[10%] left-[-8%] w-[420px] h-[420px] bg-brand/[0.07]"></div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="eyebrow mb-4">How We Build</div>
            <h2 className="mb-4">Engineering <span className="text-gradient">Methodology</span></h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">A strict, four-phase building process designed to eliminate technical debt.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="enterprise-card p-8 bg-paper/50" data-aos="fade-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-brand text-[#04141a] flex items-center justify-center font-bold font-mono text-sm shadow-glow-btn shrink-0">01</div>
                <h3 className="text-xl mb-0">Architecture & Scope</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">We map out the database schema, user flows, server architecture, and complete technical scope before writing a single line of code.</p>
              <ul className="flex flex-col gap-2 border-t border-white/[0.07] pt-4">
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> Data Modeling</li>
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> API Specifications</li>
              </ul>
            </div>

            <div className="enterprise-card p-8 bg-paper/50" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-brand text-[#04141a] flex items-center justify-center font-bold font-mono text-sm shadow-glow-btn shrink-0">02</div>
                <h3 className="text-xl mb-0">UI Prototyping</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">Creating pixel-perfect, responsive Figma prototypes to lock in the visual aesthetics and structural layouts.</p>
              <ul className="flex flex-col gap-2 border-t border-white/[0.07] pt-4">
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> Wireframing</li>
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> Component Design</li>
              </ul>
            </div>

            <div className="enterprise-card p-8 bg-paper/50" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-brand text-[#04141a] flex items-center justify-center font-bold font-mono text-sm shadow-glow-btn shrink-0">03</div>
                <h3 className="text-xl mb-0">Secure Development</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">We write clean, modular front-end and back-end code with a high focus on speed, Core Web Vitals, and security.</p>
              <ul className="flex flex-col gap-2 border-t border-white/[0.07] pt-4">
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> Clean Code</li>
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> Performance Optimization</li>
              </ul>
            </div>

            <div className="enterprise-card p-8 bg-paper/50" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-brand text-[#04141a] flex items-center justify-center font-bold font-mono text-sm shadow-glow-btn shrink-0">04</div>
                <h3 className="text-xl mb-0">Deployment</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">Rigorous device testing, bug squashing, server configuration, and final handover of a robust digital product.</p>
              <ul className="flex flex-col gap-2 border-t border-white/[0.07] pt-4">
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> QA Auditing</li>
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> CI/CD Setup</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Layer */}
      <section className="bg-paper py-24 lg:py-32 text-center border-t border-white/[0.06] relative overflow-hidden">
        <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-brand/[0.08] animate-glow-pulse"></div>
        <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] bg-accent/[0.06]"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10" data-aos="zoom-in">
          <h2 className="text-ink mb-6">Have an <span className="text-gradient">ambitious project?</span></h2>
          <p className="text-lg text-muted mb-10">
            Submit your technical requirements and our engineering team will evaluate the scope.
          </p>
          <Link className="btn btn-brand btn-lg group" to="/contact">
            Submit Requirements
            <i className="bi bi-arrow-right transition-transform duration-300 ease-premium group-hover:translate-x-1"></i>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Projects;
