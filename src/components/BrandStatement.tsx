import React from 'react';
import { BRAND_STATEMENT } from '../data/portfolioData';
import { Terminal } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-dark-900/40 border-y border-white/5">
      {/* Background Subtle Gradient Lines */}
      <div className="absolute inset-0 circuit-dots opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 font-mono text-xs mb-6">
          <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
          <span>ENGINEERING PHILOSOPHY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight sm:leading-tight mb-6">
          "{BRAND_STATEMENT.quote}"
        </h2>

        <p className="text-base sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
          {BRAND_STATEMENT.supportText}
        </p>

        {/* Minimal hardware signature bar */}
        <div className="mt-10 inline-flex items-center gap-6 px-6 py-2.5 rounded-full bg-dark-950/80 border border-white/10 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-brand-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" /> EMBEDDED
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-brand-blue">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" /> WIRELESS IoT
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-brand-emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" /> AUTOMATION
          </span>
        </div>
      </div>
    </section>
  );
};
