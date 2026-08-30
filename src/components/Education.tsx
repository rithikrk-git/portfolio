import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06 / ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            EDUCATION TIMELINE
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-cyan to-transparent mt-4" />
        </div>

        {/* Vertical Education Cards */}
        <div className="space-y-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              data-cursor="hover"
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Corner Badge */}
              {edu.badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-cyan/20 to-transparent px-4 py-1.5 rounded-bl-2xl text-[10px] font-mono text-brand-cyan border-l border-b border-brand-cyan/20 uppercase font-bold">
                  {edu.badge}
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-brand-cyan font-bold tracking-wider">
                    {edu.period}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-sans text-slate-300 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <div className="bg-dark-900/90 border border-brand-cyan/30 px-4 py-2.5 rounded-2xl flex flex-col items-start md:items-end w-fit">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">SCORE / MERIT</span>
                  <span className="text-lg font-display font-black text-brand-cyan">
                    {edu.score}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-3 border-t border-white/5">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
