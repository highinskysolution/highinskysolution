import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-[120px] pb-8 border-t border-white/[0.06] mt-auto relative overflow-hidden bg-surface/40 backdrop-blur-xl">
      {/* Ambient glows for layered depth */}
      <div className="glow-orb bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[320px] bg-brand/[0.07]"></div>
      <div className="glow-orb top-0 right-[8%] w-[360px] h-[360px] bg-accent/[0.06]"></div>

      {/* Gradient hairline along the top edge */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-line"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16" data-aos="fade-up">

          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4">
            <div className="pr-0 lg:pr-8">
              <Link className="group flex items-center gap-3 text-ink font-bold text-xl mb-5 transition-colors duration-300 hover:text-brand-light" to="/">
                <span className="relative shrink-0">
                  <span className="absolute inset-0 rounded-full bg-brand/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <img src="/assets/img/mark.png" alt="HIGH IN SKY SOLUTIONS logo" className="w-[34px] h-[34px] relative z-10 transition-transform duration-500 ease-premium group-hover:scale-110 group-hover:rotate-3" />
                </span>
                <span className="tracking-[-0.02em]">HIGH IN SKY SOLUTIONS</span>
              </Link>
              <p className="text-muted text-sm leading-relaxed mb-8">Professional website designs, scalable cloud setups, secure software consulting, and customized workflow automation systems engineered for business operations.</p>
              <div className="flex items-center gap-3">
                <a href="tel:+918080273949" aria-label="Phone Call" className="icon-tile w-11 h-11 text-base"><i className="bi bi-telephone"></i></a>
                <a href="mailto:highinskysolution@gmail.com" aria-label="Email" className="icon-tile w-11 h-11 text-base"><i className="bi bi-envelope"></i></a>
                <a href="https://wa.me/918080273949" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="icon-tile w-11 h-11 text-base"><i className="bi bi-whatsapp"></i></a>
                <Link to="/contact" aria-label="Inquiry" className="icon-tile w-11 h-11 text-base"><i className="bi bi-chat-left-text"></i></Link>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="text-ink font-bold text-sm uppercase tracking-[0.16em] mb-6">Navigation</h3>
            <ul className="flex flex-col gap-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/projects', label: 'Projects' },
                { to: '/contact', label: 'Contact Us' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center text-muted hover:text-brand transition-all duration-300 ease-premium text-sm font-medium"
                  >
                    <i className="bi bi-arrow-right-short text-brand text-base w-0 opacity-0 -translate-x-1 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-premium"></i>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <h3 className="text-ink font-bold text-sm uppercase tracking-[0.16em] mb-6">Our Services</h3>
            <ul className="flex flex-col gap-4">
              {[
                { to: '/services?filter=dev', label: 'Web Design & UI' },
                { to: '/services?filter=dev', label: 'Software Development' },
                { to: '/services?filter=cloud', label: 'Cloud Architecture' },
                { to: '/services?filter=business', label: 'Business Automation' },
                { to: '/services?filter=ai', label: 'AI Integrations' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center text-muted hover:text-brand transition-all duration-300 ease-premium text-sm font-medium"
                  >
                    <i className="bi bi-arrow-right-short text-brand text-base w-0 opacity-0 -translate-x-1 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-premium"></i>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <h3 className="text-ink font-bold text-sm uppercase tracking-[0.16em] mb-6">Contact</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-muted text-sm group">
                <i className="bi bi-geo-alt text-brand mt-0.5 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.7)]"></i>
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm group">
                <i className="bi bi-envelope text-brand mt-0.5 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.7)]"></i>
                <a href="mailto:highinskysolution@gmail.com" className="hover:text-ink transition-colors duration-300 break-all">highinskysolution@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm group">
                <i className="bi bi-telephone text-brand mt-0.5 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.7)]"></i>
                <a href="tel:+918080273949" className="hover:text-ink transition-colors duration-300">+91 80802 73949</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-subtle tracking-[0.12em]">
          <span className="font-bold uppercase">&copy; 2026 HIGH IN SKY SOLUTIONS. All rights reserved.</span>
          <span className="text-center">
            Designed &amp; Developed by{' '}
            <span className="text-gradient-accent font-bold">HIGH IN SKY SOLUTIONS</span>
            {' '}· Powered by{' '}
            <span className="text-gradient-accent font-bold">Antigravity AI</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
