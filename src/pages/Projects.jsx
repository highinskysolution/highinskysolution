import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SmartImage from '../components/SmartImage';
import { FEATURED_PROJECTS, DELIVERY_STEPS } from '../data/engineeringData';

const Projects = () => {
  return (
    <div className="bg-[#07090E] text-[#F8FAFC]">
      {/* Hero */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 arch-grid-bg pointer-events-none" />
        <div className="absolute inset-0 top-spotlight pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-3">
            OUR WORK &amp; PROCESS
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-6">
            Portfolio &amp;{' '}
            <span className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
              Solutions.
            </span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            See how we help businesses grow with modern websites, custom dashboards, and mobile applications.
          </p>
        </div>
      </section>

      {/* Featured Visual Projects */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-10">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="enterprise-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.07]">
                <SmartImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A]/80 via-transparent to-transparent lg:hidden" />
              </div>

              <div className="lg:col-span-7 p-7 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-sky-400 uppercase tracking-widest">
                    0{idx + 1}. {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-400/10 border border-sky-400/25 text-xs font-semibold text-sky-300">
                    {project.highlight}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                  {project.summary}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/[0.07]">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-slate-300 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
                  >
                    <span>Build Something Similar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Step Delivery Process */}
      <section className="py-20 lg:py-28 bg-[#0A0D14]/60 border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-3">
              HOW WE WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Our 4-Step Process
            </h2>
            <p className="text-base text-[#94A3B8]">
              A simple, transparent process from your first consultation to launch day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_STEPS.map((step) => (
              <div
                key={step.number}
                className="enterprise-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-sky-400 bg-sky-400/10 border border-sky-400/25 px-3 py-1 rounded inline-block mb-4">
                    STEP {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2.5">
                    {step.shortTitle}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.07] space-y-2">
                  {step.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 text-center px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Have a project{' '}
            <span className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
              in mind?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mb-8">
            Share your idea with us and we will help you turn it into a polished website or application.
          </p>
          <Link
            to="/contact"
            className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
