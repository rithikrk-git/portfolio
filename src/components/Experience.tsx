import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>05 / TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            PROJECT EXPERIENCE
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-cyan to-transparent mt-4" />
        </div>

        {/* Experience Timeline Item */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-brand-cyan/30 space-y-12">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Pin Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-dark-950 border-2 border-brand-cyan flex items-center justify-center group-hover:scale-125 transition-transform shadow-glow-cyan">
                <div className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-brand-cyan/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-brand-cyan font-sans mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 bg-dark-900/90 px-3 py-1.5 rounded-lg border border-white/10 text-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-dark-900/90 px-3 py-1.5 rounded-lg border border-white/10 text-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-brand-emerald" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed font-sans">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
