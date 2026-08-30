import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Cpu, ArrowUp, Mail, Phone, Zap } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400 overflow-hidden">
      {/* Animated Circuit Line on top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent animate-pulse" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-dark-900 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-display font-black text-xl text-white tracking-wider">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-sm">
              {PERSONAL_INFO.roleTitle} at Excel Engineering College. Dedicated to building practical hardware, embedded systems, and IoT innovations.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-white/10 text-[11px] font-mono text-brand-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
              <span>STATUS: OPEN FOR ENGINEERING COLLABORATION</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-2.5">
              <div className="text-white font-bold tracking-wider mb-2">QUICK NAV</div>
              {['home', 'about', 'skills', 'projects'].map((id) => (
                <div key={id}>
                  <a
                    href={`#${id}`}
                    className="hover:text-brand-cyan transition-colors uppercase"
                  >
                    // {id}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-2.5">
              <div className="text-white font-bold tracking-wider mb-2">MILESTONES</div>
              {['experience', 'education', 'contact'].map((id) => (
                <div key={id}>
                  <a
                    href={`#${id}`}
                    className="hover:text-brand-cyan transition-colors uppercase"
                  >
                    // {id}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Socials & Back to top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                data-cursor="hover"
                className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                data-cursor="hover"
                className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              data-cursor="hover"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all group"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright & Engineering Signature */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 {PERSONAL_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with precision for Embedded & IoT Innovation</span>
            <Zap className="w-3 h-3 text-brand-cyan" />
          </div>
        </div>
      </div>
    </footer>
  );
};
