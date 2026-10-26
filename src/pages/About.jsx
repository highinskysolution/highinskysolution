import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import SmartImage from '../components/SmartImage';

const About = () => {
  return (
    <div className="bg-[#07090E] text-[#F8FAFC]">
      {/* Hero */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-24 border-b border-white/[0.07] overflow-hidden">
        <div className="absolute inset-0 arch-grid-bg pointer-events-none" />
        <div className="absolute inset-0 top-spotlight pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-3">
            WHO WE ARE
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
              HIGH IN SKY SOLUTIONS.
            </span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            We help businesses succeed online with modern website design, custom software, mobile apps, and smart automation.
          </p>
        </div>
      </section>

      {/* Studio Photo + Our Story */}
      <section className="py-24 lg:py-28 border-b border-white/[0.06] relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Studio Photograph */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0D111A] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <SmartImage
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=85"
                    alt="HIGH IN SKY SOLUTIONS Modern Workspace"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Story Narrative */}
            <div className="lg:col-span-6">
              <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-3">
                OUR COMMITMENT
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Quality design.{' '}
                <span className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
                  Real business results.
                </span>
              </h2>
              <div className="space-y-5 text-base text-[#94A3B8] leading-relaxed mb-8">
                <p>
                  Your website and digital tools are often the very first impression a customer has of your business. We focus on making that impression count with clean, attractive designs and dependable performance.
                </p>
                <p>
                  When you work with HIGH IN SKY SOLUTIONS, you get a dedicated partner who listens to your needs, explains everything clearly, and delivers a complete solution ready to grow your business.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
                <div className="p-4 rounded-xl bg-[#0D111A]/80 border border-white/[0.07]">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-[#F8FAFC] mb-1">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span>Tailored to You</span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">
                    Custom designs built around your brand and customers.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#0D111A]/80 border border-white/[0.07]">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-[#F8FAFC] mb-1">
                    <Zap className="w-4 h-4 text-sky-400" />
                    <span>Fast &amp; Dependable</span>
                  </div>
                  <p className="text-xs text-[#94A3B8]">
                    Smooth performance across all phones and computers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 lg:py-28 border-b border-white/[0.06] bg-[#0A0D14]/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0D111A] aspect-[3/4] relative">
                <SmartImage
                  src="/assets/img/gagan.png"
                  alt="Gagan Ganesh Moolya — Founder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#07090E]/90 backdrop-blur-md border border-white/[0.08]">
                  <div className="text-sm font-semibold text-[#F8FAFC]">
                    Gagan Ganesh Moolya
                  </div>
                  <div className="text-xs text-sky-400">
                    Founder · HIGH IN SKY SOLUTIONS
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-3">
                LEADERSHIP
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-7">
                Dedicated to helping{' '}
                <span className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
                  your business grow.
                </span>
              </h2>

              <div className="rounded-2xl border border-white/[0.08] bg-[#0D111A]/90 p-8 sm:p-10 relative">
                <p className="text-lg text-[#F8FAFC] leading-relaxed mb-8">
                  &ldquo;I started HIGH IN SKY SOLUTIONS because I saw too many businesses struggling with slow, outdated websites and complicated software. My goal was to create a company that delivers clean, attractive, and reliable digital solutions that genuinely help business owners attract more clients and save time.&rdquo;
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.07]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-lg bg-sky-400 text-slate-950 font-bold text-sm flex items-center justify-center">
                      GM
                    </div>
                    <div>
                      <div className="font-semibold text-[#F8FAFC] text-sm">
                        Gagan Ganesh Moolya
                      </div>
                      <div className="text-xs text-sky-400">
                        Founder &amp; Lead Engineer · Mumbai, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Ready to upgrade your{' '}
            <span className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
              online presence?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mb-8">
            Let&apos;s talk about your project and build a solution your customers will love.
          </p>
          <Link
            to="/contact"
            className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
