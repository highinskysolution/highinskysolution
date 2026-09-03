import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 enterprise-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <nav className="mx-auto max-w-7xl h-full px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <Link className="group flex items-center gap-2 sm:gap-3 relative z-50 max-w-[70%]" to="/">
          <span className="relative shrink-0">
            <span className="absolute inset-0 rounded-full bg-brand/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <img src="/assets/img/mark.png" alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8 object-contain relative z-10 transition-transform duration-500 ease-premium group-hover:scale-110 group-hover:rotate-3" />
          </span>
          <span className="font-bold text-xs sm:text-[1.1rem] text-ink tracking-[-0.02em] truncate transition-colors duration-300 group-hover:text-brand-light">HIGH IN SKY SOLUTIONS</span>
        </Link>
        
        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden relative z-50 p-2.5 -mr-2 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md text-ink hover:text-brand hover:border-brand/40 transition-all duration-300 ease-premium active:scale-95 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <div className="w-5 h-4 relative flex flex-col justify-between overflow-hidden">
            <span className={`w-full h-[2px] bg-current rounded-full transition-transform duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-px' : ''}`}></span>
            <span className={`w-full h-[2px] bg-current rounded-full transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-[2px] bg-current rounded-full transition-transform duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-px' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name}
              to={link.path}
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* CTA & Auth Button Section (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 relative z-50">
          {currentUser ? (
            <>
              <div className="badge-pill normal-case">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-70 animate-ping"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand shadow-glow"></span>
                </span>
                <span className="text-ink text-xs font-semibold max-w-[100px] truncate tracking-normal">
                  {currentUser.name}
                </span>
              </div>
              <button
                onClick={logout}
                className="text-xs font-semibold uppercase tracking-wider text-muted hover:text-brand transition-all duration-300 ease-premium hover:-translate-y-0.5 cursor-pointer focus:outline-none"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="nav-link text-sm font-semibold">
                Sign In
              </NavLink>
              <Link to="/signup" className="btn btn-secondary py-2 text-xs">
                Sign Up
              </Link>
            </>
          )}
          <Link to="/contact" className="btn btn-brand py-2 text-xs">
            Get Quote
          </Link>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 transition-transform duration-500 ease-premium ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{
            backgroundColor: 'rgba(10, 10, 10, 0.92)',
            backdropFilter: 'blur(28px) saturate(180%)',
            WebkitBackdropFilter: 'blur(28px) saturate(180%)',
          }}
        >
          {/* Ambient glows for depth */}
          <div className="glow-orb top-[-80px] right-[-80px] w-[320px] h-[320px] bg-brand/20"></div>
          <div className="glow-orb bottom-[-60px] left-[-80px] w-[280px] h-[280px] bg-accent/15"></div>

          <div className="relative z-10 flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
            <div className="flex flex-col gap-2 mb-8">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={{ transitionDelay: isMobileMenuOpen ? `${120 + i * 60}ms` : '0ms' }}
                  className={({isActive}) => `
                    group flex items-center justify-between text-xl font-bold py-3.5
                    border-b border-white/[0.07]
                    transition-all duration-500 ease-premium
                    ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}
                    ${isActive ? 'text-brand' : 'text-ink hover:text-brand-light hover:pl-1.5'}
                  `}
                >
                  {link.name}
                  <i className="bi bi-arrow-right-short text-brand text-2xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-premium"></i>
                </NavLink>
              ))}
            </div>
            
            <div className="mt-auto pt-8 flex flex-col gap-4">
              {currentUser ? (
                <div className="glass-panel flex items-center justify-between p-4 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand animate-pulse shadow-glow"></span>
                    <span className="text-ink font-semibold text-sm truncate max-w-[180px]">
                      {currentUser.name}
                    </span>
                  </div>
                  <button 
                    onClick={logout} 
                    className="text-xs font-bold text-brand uppercase tracking-wider cursor-pointer focus:outline-none"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/login" className="btn btn-secondary py-3 text-center">
                    Sign In
                  </Link>
                  <Link to="/signup" className="btn btn-brand py-3 text-center">
                    Sign Up
                  </Link>
                </div>
              )}
              <Link to="/contact" className="btn btn-brand w-full py-4 text-center">
                Discuss a Project
              </Link>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Header;
