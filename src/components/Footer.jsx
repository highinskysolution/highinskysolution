import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageSquare, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#05070B] pt-16 pb-12 mt-auto relative overflow-hidden">
      {/* Subtle Top Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-4 lg:pr-6">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 mb-5 focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0D111A] border border-white/[0.1] group-hover:border-sky-400/40 transition-colors">
                <img
                  src="/assets/img/mark.png"
                  alt="HIGH IN SKY SOLUTIONS logo"
                  className="w-5 h-5 object-contain"
                  referrerPolicy="no-referrer"
                />
              </span>
              <span className="font-bold text-base tracking-tight text-[#F8FAFC] group-hover:text-sky-400 transition-colors">
                HIGH IN SKY SOLUTIONS
              </span>
            </Link>

            <p className="text-[#94A3B8] text-sm leading-relaxed mb-7">
              Professional website designs, scalable cloud setups, secure software consulting, and customized workflow automation systems engineered for business operations.
            </p>

            {/* Quick Contact Action Buttons */}
            <div className="flex items-center gap-2.5">
              <a
                href="tel:+918080273949"
                aria-label="Phone Call +91 8080273949"
                className="w-10 h-10 rounded-lg border border-white/[0.08] bg-[#0D111A]/80 flex items-center justify-center text-[#94A3B8] hover:text-sky-400 hover:border-sky-400/40 hover:shadow-[0_0_16px_rgba(56,189,248,0.2)] transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:highinskysolution@gmail.com"
                aria-label="Email highinskysolution@gmail.com"
                className="w-10 h-10 rounded-lg border border-white/[0.08] bg-[#0D111A]/80 flex items-center justify-center text-[#94A3B8] hover:text-sky-400 hover:border-sky-400/40 hover:shadow-[0_0_16px_rgba(56,189,248,0.2)] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918080273949"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direct"
                className="w-10 h-10 rounded-lg border border-white/[0.08] bg-[#0D111A]/80 flex items-center justify-center text-[#94A3B8] hover:text-sky-400 hover:border-sky-400/40 hover:shadow-[0_0_16px_rgba(56,189,248,0.2)] transition-all"
              >
                <i className="bi bi-whatsapp text-sm" />
              </a>
              <Link
                to="/contact"
                aria-label="Direct Engineering Inquiry"
                className="w-10 h-10 rounded-lg border border-white/[0.08] bg-[#0D111A]/80 flex items-center justify-center text-[#94A3B8] hover:text-sky-400 hover:border-sky-400/40 hover:shadow-[0_0_16px_rgba(56,189,248,0.2)] transition-all"
              >
                <MessageSquare className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-[#64748B] font-mono uppercase tracking-widest text-xs font-semibold mb-5">
              Navigation
            </h3>
            <ul className="space-y-3.5">
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
                    className="text-sm text-[#94A3B8] hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all text-sky-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3">
            <h3 className="text-[#64748B] font-mono uppercase tracking-widest text-xs font-semibold mb-5">
              Our Services
            </h3>
            <ul className="space-y-3.5">
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
                    className="text-sm text-[#94A3B8] hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all text-sky-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Headquarters */}
          <div className="lg:col-span-3">
            <h3 className="text-[#64748B] font-mono uppercase tracking-widest text-xs font-semibold mb-5">
              Contact &amp; Headquarters
            </h3>
            <ul className="space-y-4 text-sm text-[#94A3B8]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:highinskysolution@gmail.com"
                  className="hover:text-[#F8FAFC] transition-colors break-all"
                >
                  highinskysolution@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <a
                  href="tel:+918080273949"
                  className="font-mono tabular-nums hover:text-[#F8FAFC] transition-colors"
                >
                  +91 8080273949
                </a>
              </li>
            </ul>

            {/* Live System Status Indicator */}
            <div className="mt-6 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg border border-white/[0.08] bg-[#0D111A]/90">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-xs text-[#F8FAFC] tracking-wide">
                All Systems Operational
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <span>&copy; 2026 HIGH IN SKY SOLUTIONS. ALL RIGHTS RESERVED.</span>
          <span>
            Designed &amp; Developed by{' '}
            <span className="text-[#F8FAFC] font-medium">HIGH IN SKY SOLUTIONS</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
