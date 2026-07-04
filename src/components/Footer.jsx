import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface pt-[100px] pb-6 border-t border-line mt-auto relative overflow-hidden">
      {/* Subtle Glowing Background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-brand/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4">
            <div className="pr-0 lg:pr-8">
              <Link className="flex items-center gap-3 text-ink font-bold text-xl mb-5 hover:text-brand transition-colors group" to="/">
                <img src="/assets/img/mark.png" alt="HIGH IN SKY SOLUTIONS logo" className="w-[34px] h-[34px] group-hover:scale-110 transition-transform duration-300" />
                <span className="tracking-tight">HIGH IN SKY SOLUTIONS</span>
              </Link>
              <p className="text-muted text-sm leading-relaxed mb-8">Professional website designs, scalable cloud setups, secure software consulting, and customized workflow automation systems engineered for business operations.</p>
              <div className="flex items-center gap-3">
                <a href="tel:+918080273949" aria-label="Phone Call" className="w-10 h-10 flex items-center justify-center rounded-lg bg-paper border border-line text-ink hover:bg-brand hover:text-paper hover:border-brand hover:shadow-glow transition-all duration-300"><i className="bi bi-telephone"></i></a>
                <a href="mailto:highinskysolution@gmail.com" aria-label="Email" className="w-10 h-10 flex items-center justify-center rounded-lg bg-paper border border-line text-ink hover:bg-brand hover:text-paper hover:border-brand hover:shadow-glow transition-all duration-300"><i className="bi bi-envelope"></i></a>
                <a href="https://wa.me/918080273949" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 flex items-center justify-center rounded-lg bg-paper border border-line text-ink hover:bg-brand hover:text-paper hover:border-brand hover:shadow-glow transition-all duration-300"><i className="bi bi-whatsapp"></i></a>
                <Link to="/contact" aria-label="Inquiry" className="w-10 h-10 flex items-center justify-center rounded-lg bg-paper border border-line text-ink hover:bg-brand hover:text-paper hover:border-brand hover:shadow-glow transition-all duration-300"><i className="bi bi-chat-left-text"></i></Link>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="text-ink font-bold text-sm uppercase tracking-widest mb-6">Navigation</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-muted hover:text-brand transition-colors text-sm font-medium flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand opacity-0 -ml-4 transition-all"></i>Home</Link></li>
              <li><Link to="/about" className="text-muted hover:text-brand transition-colors text-sm font-medium flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand opacity-0 -ml-4 transition-all"></i>About Us</Link></li>
              <li><Link to="/services" className="text-muted hover:text-brand transition-colors text-sm font-medium flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand opacity-0 -ml-4 transition-all"></i>Services</Link></li>
              <li><Link to="/projects" className="text-muted hover:text-brand transition-colors text-sm font-medium flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand opacity-0 -ml-4 transition-all"></i>Projects</Link></li>
              <li><Link to="/contact" className="text-muted hover:text-brand transition-colors text-sm font-medium flex items-center gap-2"><i className="bi bi-arrow-right-short text-brand opacity-0 -ml-4 transition-all"></i>Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <h3 className="text-ink font-bold text-sm uppercase tracking-widest mb-6">Our Services</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/services?filter=dev" className="text-muted hover:text-brand transition-colors text-sm font-medium">Web Design &amp; UI</Link></li>
              <li><Link to="/services?filter=dev" className="text-muted hover:text-brand transition-colors text-sm font-medium">Software Development</Link></li>
              <li><Link to="/services?filter=cloud" className="text-muted hover:text-brand transition-colors text-sm font-medium">Cloud Architecture</Link></li>
              <li><Link to="/services?filter=business" className="text-muted hover:text-brand transition-colors text-sm font-medium">Business Automation</Link></li>
              <li><Link to="/services?filter=ai" className="text-muted hover:text-brand transition-colors text-sm font-medium">AI Integrations</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <h3 className="text-ink font-bold text-sm uppercase tracking-widest mb-6">Contact</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-muted text-sm group">
                <i className="bi bi-geo-alt text-brand mt-0.5 group-hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.5)] transition-all"></i>
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm group">
                <i className="bi bi-envelope text-brand mt-0.5 group-hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.5)] transition-all"></i>
                <a href="mailto:highinskysolution@gmail.com" className="hover:text-ink transition-colors">highinskysolution@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-muted text-sm group">
                <i className="bi bi-telephone text-brand mt-0.5 group-hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.5)] transition-all"></i>
                <a href="tel:+918080273949" className="hover:text-ink transition-colors">+91 80802 73949</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-muted uppercase tracking-widest">
          <span>&copy; 2026 HIGH IN SKY SOLUTIONS. All rights reserved.</span>
          <span>Engineered by GG DEVELOPERS.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
