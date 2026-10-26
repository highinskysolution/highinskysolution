import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, Phone, Mail, LogOut, UserCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 left-0 w-full h-20 z-50 backdrop-blur-xl border-b transition-colors duration-200 ${
        scrolled
          ? 'bg-[#07090E]/92 border-white/[0.1] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.75)]'
          : 'bg-[#07090E]/80 border-white/[0.07]'
      }`}
    >
      <nav className="mx-auto max-w-7xl h-full px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Left: Brand Identity */}
        <Link
          to="/"
          className="group flex items-center gap-3 relative z-50 shrink-0 focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
        >
          <span className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#0D111A] border border-white/[0.1] group-hover:border-sky-400/40 transition-colors">
            <img
              src="/assets/img/mark.png"
              alt="HIGH IN SKY SOLUTIONS"
              className="w-5 h-5 object-contain"
              referrerPolicy="no-referrer"
            />
          </span>
          <div className="flex items-baseline gap-1.5 whitespace-nowrap">
            <span className="text-sm font-bold tracking-wider text-[#F8FAFC] group-hover:text-white transition-colors">
              HIGH IN SKY
            </span>
            <span className="text-sky-400 font-mono text-xs font-medium tracking-widest uppercase">
              SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Center: Navigation Pill */}
        <div className="hidden lg:flex items-center bg-white/[0.03] border border-white/[0.06] rounded-full px-6 py-2 gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-sky-400 rounded px-1 py-0.5 ${
                  isActive
                    ? 'text-sky-400 font-semibold'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right: Streamlined Action Cluster */}
        <div className="hidden lg:flex items-center gap-3 relative z-50 shrink-0">
          {currentUser ? (
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#F8FAFC] max-w-[140px] truncate">
                <UserCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="truncate">{currentUser.name}</span>
              </span>
              <button
                onClick={logout}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#94A3B8] hover:text-sky-400 px-2.5 py-2 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="text-sm text-slate-300 hover:text-white px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              Sign In
            </NavLink>
          )}
          <Link
            to="/contact"
            className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-sm px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(56,189,248,0.25)] inline-flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="lg:hidden relative z-50 p-2.5 rounded-lg border border-white/[0.08] bg-[#0D111A]/80 text-[#F8FAFC] hover:border-sky-400/40 hover:text-sky-400 transition-colors focus-visible:ring-2 focus-visible:ring-sky-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Responsive Mobile Drawer */}
        <div
          className={`lg:hidden fixed inset-x-0 top-20 bottom-0 h-[calc(100vh-5rem)] bg-[#07090E]/95 backdrop-blur-2xl border-t border-white/[0.08] transition-all duration-200 z-40 ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="flex flex-col justify-between h-full px-6 py-8 overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3.5 px-3 rounded-lg text-base font-semibold border-b border-white/[0.06] transition-colors ${
                      isActive
                        ? 'text-sky-400 bg-sky-400/5'
                        : 'text-[#F8FAFC] hover:text-sky-300 hover:bg-white/[0.02]'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </NavLink>
              ))}
            </div>

            <div className="pt-6 space-y-4 border-t border-white/[0.08]">
              {currentUser ? (
                <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#0D111A] border border-white/[0.08]">
                  <span className="text-sm font-medium text-[#F8FAFC] truncate">
                    {currentUser.name}
                  </span>
                  <button
                    onClick={logout}
                    className="text-xs font-mono uppercase tracking-wider text-sky-400 hover:text-sky-300"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/login"
                    className="btn btn-secondary w-full justify-center py-3 text-sm"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="btn btn-secondary w-full justify-center py-3 text-sm"
                  >
                    Create Account
                  </Link>
                </div>
              )}

              <Link
                to="/contact"
                className="btn btn-brand w-full justify-center py-3.5 text-sm"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#64748B]">
                <a
                  href="tel:+918080273949"
                  className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  +91 8080273949
                </a>
                <a
                  href="mailto:highinskysolution@gmail.com"
                  className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  Email Engineering
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
