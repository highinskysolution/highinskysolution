import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-paper">
      
      {/* Enterprise Minimal Hero (Dark) */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-paper">
        
        {/* 3D Coding Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-[0.25] mix-blend-screen scale-105"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-abstract-digital-data-background-32694-large.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay Gradient to blend video smoothly into the next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-paper/50 via-paper/80 to-paper"></div>
        </div>

        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-blob z-0"></div>
        <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-blob z-0" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            <div data-aos="fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface border border-line mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-glow animate-pulse"></span>
                <span className="text-ink text-xs font-bold tracking-wide uppercase">Enterprise Engineering</span>
              </div>
              <h1 className="mb-6">
                Scalable infrastructure for modern business.
              </h1>
              <p className="text-lg lg:text-xl text-muted leading-relaxed mb-10 max-w-[540px]">
                We construct highly reliable digital infrastructure, secure software solutions, and intelligent automation built to scale with your operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link className="btn btn-brand btn-lg" to="/projects">
                  View Our Work
                </Link>
                <Link className="btn btn-secondary btn-lg" to="/services">
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="100" className="relative animate-float">
              {/* Clean Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 rounded-2xl overflow-hidden border border-line shadow-sm h-[240px] lg:h-[300px]">
                  <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1000&q=80" alt="Code" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-line shadow-sm h-[180px] lg:h-[220px]">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Dashboard" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-brand/30 shadow-glow bg-surface flex items-center justify-center p-8 h-[180px] lg:h-[220px] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-center relative z-10">
                    <div className="text-brand font-bold text-lg mb-1 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">99.9%</div>
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
      <section className="py-24 lg:py-32 bg-paper border-b border-line">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 md:flex md:justify-between md:items-end gap-8" data-aos="fade-up">
            <div className="max-w-2xl">
              <h2 className="mb-4">Core Capabilities</h2>
              <p className="text-lg">We focus strictly on robust backend logic, precise front-end interfaces, and high-availability cloud infrastructure.</p>
            </div>
            <div className="mt-6 md:mt-0">
               <Link className="btn btn-secondary" to="/services">View All Capabilities</Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Link to="/services?filter=dev" className="block h-full group" data-aos="fade-up" data-aos-delay="0">
              <div className="enterprise-card h-full flex flex-col p-0 bg-surface overflow-hidden">
                <div className="h-[140px] w-full border-b border-line overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80" alt="Web Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-grow relative">
                  <div className="w-10 h-10 rounded-lg bg-paper border border-line text-brand flex items-center justify-center text-lg mb-4 -mt-11 relative z-10 transition-all duration-300 group-hover:bg-brand group-hover:text-paper group-hover:border-brand group-hover:shadow-glow">
                    <i className="bi bi-window-sidebar"></i>
                  </div>
                  <h3 className="text-lg mb-2">Web Design</h3>
                  <p className="text-xs leading-relaxed mb-4 flex-grow">Responsive interfaces and high-performance React applications.</p>
                  <div className="font-semibold text-xs text-brand flex items-center">
                    Explore <i className="bi bi-arrow-right-short text-base ml-1 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/services?filter=dev" className="block h-full group" data-aos="fade-up" data-aos-delay="100">
              <div className="enterprise-card h-full flex flex-col p-0 bg-surface overflow-hidden">
                <div className="h-[140px] w-full border-b border-line overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80" alt="Software Dev" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-grow relative">
                  <div className="w-10 h-10 rounded-lg bg-paper border border-line text-brand flex items-center justify-center text-lg mb-4 -mt-11 relative z-10 transition-all duration-300 group-hover:bg-brand group-hover:text-paper group-hover:border-brand group-hover:shadow-glow">
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <h3 className="text-lg mb-2">Software Dev</h3>
                  <p className="text-xs leading-relaxed mb-4 flex-grow">Scalable backend APIs and secure database schemas.</p>
                  <div className="font-semibold text-xs text-brand flex items-center">
                    Explore <i className="bi bi-arrow-right-short text-base ml-1 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/services?filter=dev" className="block h-full group" data-aos="fade-up" data-aos-delay="200">
              <div className="enterprise-card h-full flex flex-col p-0 bg-surface overflow-hidden">
                <div className="h-[140px] w-full border-b border-line overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" alt="Mobile Apps" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-grow relative">
                  <div className="w-10 h-10 rounded-lg bg-paper border border-line text-brand flex items-center justify-center text-lg mb-4 -mt-11 relative z-10 transition-all duration-300 group-hover:bg-brand group-hover:text-paper group-hover:border-brand group-hover:shadow-glow">
                    <i className="bi bi-phone"></i>
                  </div>
                  <h3 className="text-lg mb-2">Mobile Apps</h3>
                  <p className="text-xs leading-relaxed mb-4 flex-grow">Cross-platform mobile applications with offline sync.</p>
                  <div className="font-semibold text-xs text-brand flex items-center">
                    Explore <i className="bi bi-arrow-right-short text-base ml-1 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/services?filter=business" className="block h-full group" data-aos="fade-up" data-aos-delay="300">
              <div className="enterprise-card h-full flex flex-col p-0 bg-surface overflow-hidden">
                <div className="h-[140px] w-full border-b border-line overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Business Apps" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-grow relative">
                  <div className="w-10 h-10 rounded-lg bg-paper border border-line text-brand flex items-center justify-center text-lg mb-4 -mt-11 relative z-10 transition-all duration-300 group-hover:bg-brand group-hover:text-paper group-hover:border-brand group-hover:shadow-glow">
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <h3 className="text-lg mb-2">Business Apps</h3>
                  <p className="text-xs leading-relaxed mb-4 flex-grow">Bespoke user portals and secure internal operating systems.</p>
                  <div className="font-semibold text-xs text-brand flex items-center">
                    Explore <i className="bi bi-arrow-right-short text-base ml-1 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Structured Text Section */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5" data-aos="fade-right">
              <h2 className="mb-6">Disciplined Engineering.</h2>
              <p className="text-lg leading-relaxed mb-8">We write clean code, audit every detail, and construct highly reliable digital infrastructure. No shortcuts.</p>
              <ul className="flex flex-col gap-5 mb-10">
                <li className="flex items-start gap-4 text-ink font-semibold">
                  <i className="bi bi-shield-lock text-brand text-xl mt-0.5 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]"></i> 
                  <div>
                    <div className="mb-1">Secure By Default</div>
                    <div className="text-sm text-muted font-normal">Rigorous data validation and protected API endpoints.</div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-ink font-semibold">
                  <i className="bi bi-lightning-charge text-brand text-xl mt-0.5 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]"></i> 
                  <div>
                    <div className="mb-1">High Performance</div>
                    <div className="text-sm text-muted font-normal">Optimized assets, code splitting, and edge caching.</div>
                  </div>
                </li>
              </ul>
              <Link className="btn btn-brand" to="/about">Our Process</Link>
            </div>
            
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="rounded-2xl overflow-hidden border border-line shadow-sm bg-paper aspect-video relative group">
                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Engineering" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="py-24 bg-paper text-center border-t border-line relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10" data-aos="fade-up">
          <h2 className="text-ink mb-6">Start your project.</h2>
          <p className="text-lg text-muted mb-10">
            Partner with HIGH IN SKY SOLUTIONS for robust software architecture and clean web deployments.
          </p>
          <Link className="btn btn-brand btn-lg" to="/contact">
            Contact Engineering Team
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
