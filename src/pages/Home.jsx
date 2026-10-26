import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Layout,
  Code2,
  Smartphone,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Zap,
  HeartHandshake,
  ChevronDown,
  PhoneCall,
} from 'lucide-react';
import SmartImage from '../components/SmartImage';
import HackerBackground from '../components/HackerBackground';
import {
  MARQUEE_ITEMS,
  CORE_SERVICES,
  FEATURED_PROJECTS,
  DELIVERY_STEPS,
  CUSTOMER_FAQS,
} from '../data/engineeringData';

const SERVICE_ICONS = {
  'web-design': Layout,
  'software-dev': Code2,
  'mobile-apps': Smartphone,
  'business-apps': Briefcase,
};

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-[#07090E] text-[#F8FAFC] relative overflow-hidden">
      {/* ============================================================
          HERO SECTION (Clean Business Message + Attractive Photo Collage)
         ============================================================ */}
      <section className="relative pt-14 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        {/* Never-Ending Fast Coding Screen Background (Top Hero Only, Clearly Visible) */}
        <HackerBackground />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07090E] to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
            {/* Left Column: Customer-Focused Value Proposition inside Clean Glass Panel */}
            <div className="lg:col-span-6 p-7 sm:p-9 rounded-2xl bg-[#07090E]/88 backdrop-blur-md border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.75)]">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-sky-400 bg-sky-500/10 border border-sky-400/20 rounded-full px-3.5 py-1.5 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>DIGITAL SOLUTIONS PARTNER</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-semibold tracking-tight text-white leading-[1.08] mb-5">
                Modern websites &amp; software for{' '}
                <span className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
                  growing businesses.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed mb-8">
                We design attractive websites, custom mobile apps, and smart business tools that help you attract more customers and run your operations smoothly.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  to="/services"
                  className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold px-6 py-3.5 rounded-lg inline-flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all whitespace-nowrap"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.1] hover:border-sky-400/30 px-6 py-3.5 rounded-lg font-medium transition-all whitespace-nowrap"
                >
                  Get a Free Quote
                </Link>
              </div>

              {/* Clean Customer Trust Highlights */}
              <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-white/[0.08]">
                <div className="sm:pr-5">
                  <div className="text-sm font-semibold text-[#F8FAFC] mb-0.5">
                    100% Custom Design
                  </div>
                  <div className="text-xs text-[#94A3B8]">
                    Tailored to your brand
                  </div>
                </div>
                <div className="sm:px-5">
                  <div className="text-sm font-semibold text-[#F8FAFC] mb-0.5">
                    Mobile &amp; SEO Ready
                  </div>
                  <div className="text-xs text-[#94A3B8]">
                    Looks great on every screen
                  </div>
                </div>
                <div className="sm:pl-5">
                  <div className="text-sm font-semibold text-[#F8FAFC] mb-0.5">
                    Dedicated Support
                  </div>
                  <div className="text-xs text-[#94A3B8]">
                    Direct guidance &amp; care
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Attractive Visual Photo Collage */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {/* Main Wide Showcase Photo */}
                <div className="col-span-2 relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0D111A] h-[250px] sm:h-[310px] group shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  <SmartImage
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
                    alt="Modern Website & Digital Product Showcase"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/90 via-[#07090E]/25 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <div className="px-3.5 py-2 rounded-xl bg-[#07090E]/85 backdrop-blur-md border border-white/[0.1]">
                      <div className="text-xs font-semibold text-[#F8FAFC]">
                        Professional Websites &amp; Web Apps
                      </div>
                      <div className="text-[11px] text-sky-400">
                        Designed to attract &amp; convert customers
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Visual Card */}
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0D111A] h-[190px] sm:h-[220px] group shadow-lg">
                  <SmartImage
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85"
                    alt="Business Dashboards & Portals"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5">
                    <span className="text-xs font-semibold text-[#F8FAFC] bg-[#07090E]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/[0.08] inline-block">
                      Smart Business Portals
                    </span>
                  </div>
                </div>

                {/* Clean Highlight Card */}
                <div className="rounded-2xl border border-sky-400/25 bg-gradient-to-br from-[#0E172A] to-[#0D111A] p-6 h-[190px] sm:h-[220px] flex flex-col justify-center items-center text-center relative overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-sky-400/15 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-3">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent mb-1">
                    99.9%
                  </div>
                  <div className="text-sm font-semibold text-[#F8FAFC]">
                    Reliable &amp; Fast
                  </div>
                  <div className="text-xs text-[#94A3B8] mt-1">
                    Built for business growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES MARQUEE BAND
         ============================================================ */}
      <section className="border-y border-white/[0.07] bg-[#0A0D14] py-4 overflow-hidden">
        <div className="ticker-wrap marquee-mask flex overflow-hidden w-full">
          <div className="ticker-track">
            {[1, 2].map((group) => (
              <div
                key={group}
                className="flex items-center gap-8 pr-8 font-mono text-xs tracking-widest uppercase text-slate-300"
              >
                {MARQUEE_ITEMS.map((item) => (
                  <React.Fragment key={`${group}-${item}`}>
                    <span className="whitespace-nowrap">{item}</span>
                    <span className="text-sky-400 select-none" aria-hidden="true">
                      ◆
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CORE SERVICES WE PROVIDE (With Attractive Photos)
         ============================================================ */}
      <section className="py-24 lg:py-28 border-b border-white/[0.06] relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-3">
                SERVICES WE PROVIDE
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Everything Your Business Needs Online
              </h2>
              <p className="text-base sm:text-lg text-[#94A3B8]">
                Whether you need a brand-new website, a mobile app for your customers, or custom software to manage your business, we build it from start to finish.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-white/10 hover:border-sky-400/40 bg-white/[0.03] hover:bg-white/[0.06] text-sm px-5 py-2.5 rounded-lg text-slate-200 transition-colors whitespace-nowrap"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </Link>
            </div>
          </div>

          {/* 4-Card Services Grid with Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_SERVICES.map((service) => {
              const IconComponent = SERVICE_ICONS[service.id] || Layout;
              return (
                <Link
                  key={service.id}
                  to={service.to}
                  className="group enterprise-card overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Photo Header */}
                    <div className="relative h-48 w-full overflow-hidden border-b border-white/[0.07]">
                      <SmartImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-[#0D111A]/25 to-transparent" />
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#07090E]/85 backdrop-blur-md border border-white/[0.1] text-[11px] font-medium text-sky-300">
                        {service.badge}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-sky-400 mb-4 -mt-11 relative z-10 shadow-md backdrop-blur-md">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2 group-hover:text-sky-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                        {service.desc}
                      </p>

                      <ul className="space-y-2 border-t border-white/[0.07] pt-4">
                        {service.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 group-hover:text-sky-300">
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE US (Clean Business Benefits + Studio Photograph)
         ============================================================ */}
      <section className="py-24 lg:py-28 border-b border-white/[0.06] bg-[#0A0D14]/60 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Customer Benefits */}
            <div className="lg:col-span-6">
              <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-3">
                WHY CHOOSE US
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-5">
                Built to make your{' '}
                <span className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
                  business stand out.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-8">
                We combine eye-catching design with dependable technology so your business looks professional, attracts more customers, and works effortlessly every day.
              </p>

              <div className="space-y-4 mb-9">
                <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0D111A]/80 hover:border-sky-400/30 transition-colors flex items-start gap-4">
                  <span className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#F8FAFC] mb-1">
                      Attractive, Custom Design
                    </h3>
                    <p className="text-sm text-[#94A3B8]">
                      Every website and app is uniquely designed around your brand identity to leave a lasting impression on your customers.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0D111A]/80 hover:border-sky-400/30 transition-colors flex items-start gap-4">
                  <span className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Zap className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#F8FAFC] mb-1">
                      Fast &amp; Mobile-Friendly Everywhere
                    </h3>
                    <p className="text-sm text-[#94A3B8]">
                      Your customers get a smooth, fast experience whether they visit from an iPhone, Android phone, tablet, or laptop.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0D111A]/80 hover:border-sky-400/30 transition-colors flex items-start gap-4">
                  <span className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/25 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#F8FAFC] mb-1">
                      Personal Support &amp; Hassle-Free Launch
                    </h3>
                    <p className="text-sm text-[#94A3B8]">
                      We handle all the setup, hosting, and technical details for you—and stay available whenever you need updates or help.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold px-6 py-3.5 rounded-lg inline-flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all"
              >
                <span>More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column: Large Attractive Studio Showcase Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0D111A] shadow-[0_24px_60px_rgba(0,0,0,0.65)] group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <SmartImage
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
                    alt="HIGH IN SKY SOLUTIONS Design & Development Studio"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/90 via-[#07090E]/20 to-transparent pointer-events-none" />

                {/* Clean Floating Glass Badges on Photo */}
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-[#07090E]/85 backdrop-blur-md border border-white/[0.1]">
                    <div className="text-lg font-bold text-sky-400">100% Custom</div>
                    <div className="text-xs text-[#F8FAFC]">
                      Built specifically for your business goals
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#07090E]/85 backdrop-blur-md border border-white/[0.1]">
                    <div className="text-lg font-bold text-emerald-400">Free Support</div>
                    <div className="text-xs text-[#F8FAFC]">
                      30 days post-launch care included
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FEATURED SOLUTIONS (Visual Cards With Photos)
         ============================================================ */}
      <section className="py-24 lg:py-28 border-b border-white/[0.06] relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-3">
                OUR WORK &amp; SOLUTIONS
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Solutions That Help Businesses Grow
              </h2>
              <p className="text-base sm:text-lg text-[#94A3B8]">
                Explore the types of websites, business portals, and mobile apps we craft for our clients.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-white/10 hover:border-sky-400/40 bg-white/[0.03] hover:bg-white/[0.06] text-sm px-5 py-2.5 rounded-lg text-slate-200 transition-colors whitespace-nowrap shrink-0"
            >
              <span>View Portfolio &amp; Process</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {FEATURED_PROJECTS.map((project) => (
              <Link
                key={project.id}
                to="/projects"
                className="group enterprise-card overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden border-b border-white/[0.07]">
                    <SmartImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-[#07090E]/85 backdrop-blur-md border border-sky-400/30 text-xs font-semibold text-sky-400">
                      {project.highlight}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#64748B]">
                  <div className="truncate">
                    {project.tags.join(' · ')}
                  </div>
                  <ArrowRight className="w-4 h-4 text-sky-400 shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SIMPLE 4-STEP PROCESS (How We Work)
         ============================================================ */}
      <section className="py-24 lg:py-28 border-b border-white/[0.06] bg-[#0A0D14]/50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-3">
              HOW WE WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Simple 4-Step Process From Idea to Launch.
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8]">
              We make getting your website or software built easy, transparent, and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_STEPS.map((step) => (
              <div
                key={step.number}
                className="enterprise-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-sky-400/10 border border-sky-400/30 font-mono text-xs font-bold text-sky-400">
                      STEP {step.number}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-sky-400/30 to-transparent ml-3" />
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

      {/* ============================================================
          CUSTOMER FAQ ACCORDION
         ============================================================ */}
      <section className="py-24 lg:py-28 border-b border-white/[0.06] relative">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-3">
              COMMON QUESTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#94A3B8]">
              Quick answers about timelines, pricing, and how we work with you.
            </p>
          </div>

          <div className="space-y-3.5">
            {CUSTOMER_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className={`rounded-xl border transition-colors duration-200 ${
                    isOpen
                      ? 'border-sky-400/40 bg-[#0D111A]'
                      : 'border-white/[0.08] bg-[#0D111A]/60 hover:border-white/[0.15]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-[#F8FAFC]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-sky-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-[#94A3B8] leading-relaxed border-t border-white/[0.06] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          START YOUR PROJECT CTA BANNER
         ============================================================ */}
      <section className="py-20 lg:py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-sky-400/20 bg-gradient-to-b from-[#0E1525] to-[#090C15] p-10 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 arch-grid-bg opacity-60 pointer-events-none" />
            <div className="absolute inset-0 top-spotlight pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-4">
                LET&apos;S BUILD TOGETHER
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold text-white mb-5">
                Start your{' '}
                <span className="bg-gradient-to-r from-white via-slate-200 to-sky-400 bg-clip-text text-transparent">
                  project today.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#94A3B8] mb-9 max-w-2xl mx-auto">
                Ready for a modern website, mobile app, or custom software for your business? Contact HIGH IN SKY SOLUTIONS for a free consultation and quote.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold px-7 py-4 rounded-lg inline-flex items-center gap-2 shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/918080273949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/[0.04] hover:bg-white/[0.08] text-[#F8FAFC] border border-white/[0.12] hover:border-sky-400/40 px-6 py-4 rounded-lg inline-flex items-center gap-2 text-sm font-medium transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-sky-400" />
                  <span>Chat on WhatsApp · +91 8080273949</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
