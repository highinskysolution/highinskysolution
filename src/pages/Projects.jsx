import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="bg-paper">
      
      {/* Minimal Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-line bg-surface">
        <div className="container mx-auto px-6 max-w-7xl text-center" data-aos="fade-up">
          <h1 className="mb-6">Portfolio & Process</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A showcase of our structured engineering process and recent deployments.
          </p>
        </div>
      </section>

      {/* Case Studies Empty State - Clean Card */}
      <section className="py-24 border-b border-line bg-paper">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center p-12 bg-surface border border-line rounded-2xl shadow-sm relative overflow-hidden" data-aos="zoom-in">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-3xl"></div>
            <div className="w-16 h-16 bg-paper rounded-xl flex items-center justify-center mx-auto mb-6 text-brand border border-brand/30 shadow-glow relative z-10">
              <i className="bi bi-rocket-takeoff text-2xl drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"></i>
            </div>
            <h2 className="text-2xl mb-4 relative z-10">Case Studies Curating</h2>
            <p className="text-muted mb-8 max-w-[500px] mx-auto text-sm relative z-10">
              We are currently documenting detailed technical reviews of our latest scalable web deployments. Check back shortly.
            </p>
            <div className="flex justify-center relative z-10">
              <Link to="/services" className="btn btn-brand">Explore Capabilities</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Structured List */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="mb-4 text-brand drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">Engineering Methodology</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">A strict, four-phase building process designed to eliminate technical debt.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="enterprise-card p-8 bg-paper" data-aos="fade-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-surface border border-line text-brand flex items-center justify-center font-bold font-mono text-sm shadow-glow">01</div>
                <h3 className="text-xl mb-0">Architecture & Scope</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">We map out the database schema, user flows, server architecture, and complete technical scope before writing a single line of code.</p>
              <ul className="flex flex-col gap-2 border-t border-line pt-4">
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> Data Modeling</li>
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> API Specifications</li>
              </ul>
            </div>

            <div className="enterprise-card p-8 bg-paper" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-surface border border-line text-brand flex items-center justify-center font-bold font-mono text-sm shadow-glow">02</div>
                <h3 className="text-xl mb-0">UI Prototyping</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">Creating pixel-perfect, responsive Figma prototypes to lock in the visual aesthetics and structural layouts.</p>
              <ul className="flex flex-col gap-2 border-t border-line pt-4">
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> Wireframing</li>
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> Component Design</li>
              </ul>
            </div>

            <div className="enterprise-card p-8 bg-paper" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-surface border border-line text-brand flex items-center justify-center font-bold font-mono text-sm shadow-glow">03</div>
                <h3 className="text-xl mb-0">Secure Development</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">We write clean, modular front-end and back-end code with a high focus on speed, Core Web Vitals, and security.</p>
              <ul className="flex flex-col gap-2 border-t border-line pt-4">
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> Clean Code</li>
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> Performance Optimization</li>
              </ul>
            </div>

            <div className="enterprise-card p-8 bg-paper" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-surface border border-line text-brand flex items-center justify-center font-bold font-mono text-sm shadow-glow">04</div>
                <h3 className="text-xl mb-0">Deployment</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">Rigorous device testing, bug squashing, server configuration, and final handover of a robust digital product.</p>
              <ul className="flex flex-col gap-2 border-t border-line pt-4">
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> QA Auditing</li>
                <li className="text-xs font-semibold text-ink flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand"></i> CI/CD Setup</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Layer */}
      <section className="bg-paper py-24 text-center border-t border-line">
        <div className="container mx-auto px-6 max-w-3xl" data-aos="zoom-in">
          <h2 className="text-ink mb-6">Have an ambitious project?</h2>
          <p className="text-lg text-muted mb-10">
            Submit your technical requirements and our engineering team will evaluate the scope.
          </p>
          <Link className="btn btn-brand btn-lg" to="/contact">
            Submit Requirements
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Projects;
