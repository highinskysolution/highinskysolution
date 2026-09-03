import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HackerBackground from '../components/HackerBackground';

const capabilities = [
  {
    title: 'Web Design',
    icon: 'bi-window-sidebar',
    to: '/services?filter=dev',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    desc: 'Responsive interfaces and high-performance React applications.',
  },
  {
    title: 'Software Dev',
    icon: 'bi-code-slash',
    to: '/services?filter=dev',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80',
    desc: 'Scalable backend APIs and secure database schemas.',
  },
  {
    title: 'Mobile Apps',
    icon: 'bi-phone',
    to: '/services?filter=dev',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    desc: 'Cross-platform mobile applications with offline sync.',
  },
  {
    title: 'Business Apps',
    icon: 'bi-briefcase',
    to: '/services?filter=business',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    desc: 'Bespoke user portals and secure internal operating systems.',
  },
];

const Home = () => {
  return (
    <div className="bg-paper">
      
      {/* Enterprise Minimal Hero (Dark) */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-paper">
        
        {/* Ambient Video & Hacker Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => {});
            }}
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen pointer-events-none"
          >
            <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          </video>
          <HackerBackground />
          {/* Subtle overlay so text remains readable, fading into the section below */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-paper/50 to-paper"></div>
        </div>

        {/* Ambient Glows — layered cyan + indigo for depth */}
        <div className="glow-orb top-[-60px] right-[-40px] w-[520px] h-[520px] bg-brand/20 animate-blob z-0"></div>
        <div className="glow-orb bottom-0 left-[-120px] w-[420px] h-[420px] bg-accent/[0.14] animate-blob-slow z-0" style={{ animationDelay: '2s' }}></div>
        <div className="glow-orb top-1/3 left-1/2 w-[300px] h-[300px] bg-brand/[0.07] animate-glow-pulse z-0"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center">

            <div data-aos="fade-up">
              <div className="badge-pill mb-7">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand shadow-glow"></span>
                </span>
                Enterprise Engineering
              </div>
              <h1 className="mb-7">
                Scalable infrastructure for{' '}
                <span className="text-gradient">modern business.</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted leading-relaxed mb-11 max-w-[540px]">
                We construct highly reliable digital infrastructure, secure software solutions, and intelligent automation built to scale with your operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link className="btn btn-brand btn-lg group" to="/projects">
                  View Our Work
                  <i className="bi bi-arrow-right transition-transform duration-300 ease-premium group-hover:translate-x-1"></i>
                </Link>
                <Link className="btn btn-secondary btn-lg" to="/services">
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="100" className="relative animate-float">
              {/* Clean Image Grid */}
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 media-frame h-[240px] lg:h-[300px] group hover:border-brand/30 hover:shadow-card-hover">
                  <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1000&q=80" alt="Code" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-paper/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
                <div className="media-frame h-[180px] lg:h-[220px] group hover:border-brand/30 hover:shadow-card-hover">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Dashboard" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-paper/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
                <div className="enterprise-card border-brand/25 shadow-glow flex items-center justify-center p-8 h-[180px] lg:h-[220px] group">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-[0.07] group-hover:opacity-[0.16] transition-opacity duration-500 pointer-events-none"></div>
                  <div className="text-center relative z-10">
                    <div className="text-gradient font-extrabold text-3xl lg:text-4xl mb-1.5 tracking-[-0.03em]">99.9%</div>
                    <div className="text-muted text-sm font-medium">Uptime Engineered</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clean Ticker */}
      <section className="brand-band">
        <div className="ticker-wrap">
          <div className="ticker-track">
            {[1, 2].map((group) => (
              <div key={group} className="ticker-content">
                <span className="ticker-item">Systems Architecture</span>
                <span className="ticker-item">Secure Cloud Deployments</span>
                <span className="ticker-item">Enterprise Web Apps</span>
                <span className="ticker-item">Workflow Automation</span>
                <span className="ticker-item">Performance Auditing</span>
                <span className="ticker-item">Data Pipelines</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Services Grid WITH PHOTOS */}
      <section className="py-28 lg:py-40 bg-paper border-b border-white/[0.06] relative overflow-hidden">
        <div className="glow-orb top-[10%] right-[-10%] w-[440px] h-[440px] bg-accent/[0.07]"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-16 lg:mb-20 md:flex md:justify-between md:items-end gap-10" data-aos="fade-up">
            <div className="max-w-2xl">
              <div className="eyebrow mb-4">What We Build</div>
              <h2 className="mb-5">Core Capabilities</h2>
              <p className="text-lg">We focus strictly on robust backend logic, precise front-end interfaces, and high-availability cloud infrastructure.</p>
            </div>
            <div className="mt-8 md:mt-0 shrink-0">
               <Link className="btn btn-secondary" to="/services">View All Capabilities</Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {capabilities.map((cap, i) => (
              <Link
                key={cap.title}
                to={cap.to}
                className="block h-full group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="enterprise-card h-full flex flex-col p-0 overflow-hidden">
                  <div className="h-[150px] w-full border-b border-white/[0.07] overflow-hidden relative">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/25 to-transparent"></div>
                  </div>
                  <div className="p-7 flex flex-col flex-grow relative">
                    <div className="icon-tile w-11 h-11 text-lg mb-5 -mt-12 relative z-10 bg-paper/90 group-hover:bg-gradient-brand group-hover:text-[#04141a] group-hover:border-brand group-hover:shadow-glow">
                      <i className={`bi ${cap.icon}`}></i>
                    </div>
                    <h3 className="text-lg mb-2.5">{cap.title}</h3>
                    <p className="text-xs leading-relaxed mb-5 flex-grow">{cap.desc}</p>
                    <div className="link-arrow text-xs">
                      Explore <i className="bi bi-arrow-right-short text-base"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Text Section */}
      <section className="py-28 lg:py-40 bg-surface/40 overflow-hidden relative">
        <div className="glow-orb top-[-10%] left-[-8%] w-[420px] h-[420px] bg-brand/[0.08]"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5" data-aos="fade-right">
              <div className="eyebrow mb-4">Our Standard</div>
              <h2 className="mb-6">Disciplined <span className="text-gradient">Engineering.</span></h2>
              <p className="text-lg leading-relaxed mb-9">We write clean code, audit every detail, and construct highly reliable digital infrastructure. No shortcuts.</p>
              <ul className="flex flex-col gap-5 mb-11">
                <li className="group flex items-start gap-4 text-ink font-semibold">
                  <span className="icon-tile w-11 h-11 text-xl shrink-0"><i className="bi bi-shield-lock"></i></span>
                  <div>
                    <div className="mb-1">Secure By Default</div>
                    <div className="text-sm text-muted font-normal">Rigorous data validation and protected API endpoints.</div>
                  </div>
                </li>
                <li className="group flex items-start gap-4 text-ink font-semibold">
                  <span className="icon-tile w-11 h-11 text-xl shrink-0"><i className="bi bi-lightning-charge"></i></span>
                  <div>
                    <div className="mb-1">High Performance</div>
                    <div className="text-sm text-muted font-normal">Optimized assets, code splitting, and edge caching.</div>
                  </div>
                </li>
              </ul>
              <Link className="btn btn-brand" to="/about">Our Process</Link>
            </div>

            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="media-frame aspect-video">
                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Engineering" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 via-transparent to-accent/10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="py-28 lg:py-32 bg-paper text-center border-t border-white/[0.06] relative overflow-hidden">
        <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] bg-brand/[0.08] animate-glow-pulse"></div>
        <div className="glow-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-accent/[0.06]"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10" data-aos="fade-up">
          <h2 className="text-ink mb-6">Start your <span className="text-gradient">project.</span></h2>
          <p className="text-lg text-muted mb-11">
            Partner with HIGH IN SKY SOLUTIONS for robust software architecture and clean web deployments.
          </p>
          <Link className="btn btn-brand btn-lg group" to="/contact">
            Contact Engineering Team
            <i className="bi bi-arrow-right transition-transform duration-300 ease-premium group-hover:translate-x-1"></i>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
