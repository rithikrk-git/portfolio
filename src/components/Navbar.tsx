import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedinIcon } from './Icons';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/10 shadow-glass py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          data-cursor="hover"
          className="group flex items-center gap-3 text-white focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-xl bg-dark-900 border border-brand-cyan/40 flex items-center justify-center group-hover:border-brand-cyan group-hover:shadow-glow-cyan transition-all duration-300">
            <Cpu className="w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand-emerald animate-ping" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand-emerald" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base tracking-wider text-white group-hover:text-brand-cyan transition-colors">
              RITHIK R
            </span>
            <span className="text-[10px] font-mono text-slate-400 -mt-1 tracking-widest uppercase">
              ECE • IoT Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                data-cursor="hover"
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-brand-cyan font-semibold bg-brand-cyan/10 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA and Socials */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            data-cursor-text="LINKEDIN ↗"
            title="LinkedIn Profile"
            className="w-9 h-9 rounded-xl bg-dark-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/50 hover:bg-dark-850 transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            data-cursor="hover"
            className="relative group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold tracking-wider text-dark-950 bg-gradient-to-r from-brand-cyan to-brand-blue hover:brightness-110 shadow-glow-cyan transition-all transform active:scale-95"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden w-10 h-10 rounded-xl bg-dark-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5 text-brand-cyan" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-dark-950/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col justify-between z-40 animate-fadeIn">
          <div className="flex flex-col gap-2 pt-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-mono tracking-wider transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-brand-cyan/15 text-brand-cyan font-bold border border-brand-cyan/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
            <a
              href={PERSONAL_INFO.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-dark-900 border border-slate-800 text-slate-200 text-sm font-mono hover:text-brand-cyan transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-brand-cyan" />
              <span>Connect on LinkedIn ↗</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-dark-950 font-bold font-mono text-sm shadow-glow-cyan"
            >
              <span>LET'S BUILD SOMETHING</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
