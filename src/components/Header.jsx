import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
        <Link className="flex items-center gap-2 sm:gap-3 relative z-50 max-w-[70%]" to="/">
          <img src="/assets/img/mark.png" alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8 object-contain shrink-0" />
          <span className="font-bold text-xs sm:text-[1.1rem] text-ink tracking-tight truncate">HIGH IN SKY SOLUTIONS</span>
        </Link>
        
        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden relative z-50 p-2 -mr-2 text-ink hover:text-brand transition-colors focus:outline-none"
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
              className={({isActive}) => `nav-link ${isActive ? 'active drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block relative z-50">
          <Link to="/contact" className="btn btn-brand">
            Get Quote
          </Link>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 bg-paper transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
            <div className="flex flex-col gap-2 mb-8">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name}
                  to={link.path}
                  className={({isActive}) => `
                    text-xl font-bold py-3 transition-colors duration-200 border-b border-line/40
                    ${isActive ? 'text-brand drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]' : 'text-ink'}
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="mt-auto pt-8">
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
