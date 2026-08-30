import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { TechGraph } from './TechGraph';
import { 
  Cpu, Wifi, Radio, Layers, Activity, PhoneCall, 
  Navigation, Share2, Sliders, Lightbulb, SearchCheck, 
  Clock, Users, ShieldCheck, Sparkles 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 text-brand-cyan" />,
  Wifi: <Wifi className="w-5 h-5 text-brand-blue" />,
  CircuitBoard: <Cpu className="w-5 h-5 text-brand-cyan" />,
  Radio: <Radio className="w-5 h-5 text-pink-400" />,
  Layers: <Layers className="w-5 h-5 text-amber-400" />,
  Activity: <Activity className="w-5 h-5 text-brand-emerald" />,
  PhoneCall: <PhoneCall className="w-5 h-5 text-yellow-400" />,
  Navigation: <Navigation className="w-5 h-5 text-purple-400" />,
  Share2: <Share2 className="w-5 h-5 text-cyan-300" />,
  Sliders: <Sliders className="w-5 h-5 text-indigo-400" />,
  Lightbulb: <Lightbulb className="w-5 h-5 text-amber-300" />,
  SearchCheck: <SearchCheck className="w-5 h-5 text-teal-300" />,
  Clock: <Clock className="w-5 h-5 text-blue-300" />,
  Users: <Users className="w-5 h-5 text-emerald-300" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyan-400" />
};

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'technical' | 'soft'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (filter === 'all') return true;
    return skill.category === filter;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 / COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              SKILLS & EXPERTISE
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-cyan to-transparent mt-4" />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 bg-dark-900/80 p-1.5 rounded-2xl border border-white/10 w-fit">
            {[
              { id: 'all', label: 'ALL SKILLS' },
              { id: 'technical', label: 'TECHNICAL & HARDWARE' },
              { id: 'soft', label: 'PROFESSIONAL / SOFT' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                data-cursor="hover"
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                  filter === tab.id
                    ? 'bg-brand-cyan text-dark-950 font-bold shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Ecosystem Node Graph */}
        <div className="mb-16">
          <TechGraph />
        </div>

        {/* Interactive Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                data-cursor="hover"
                className={`glass-card p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                  isHovered
                    ? 'border-brand-cyan/60 bg-dark-900/90 shadow-glow-cyan -translate-y-1'
                    : 'border-white/10 hover:border-brand-cyan/30'
                }`}
              >
                {/* Corner highlight line */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-cyan/20 to-transparent rounded-bl-full pointer-events-none transition-opacity ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-950 border border-white/10 flex items-center justify-center group-hover:border-brand-cyan/50 group-hover:scale-110 transition-all duration-300">
                    {iconMap[skill.iconName] || <Cpu className="w-5 h-5 text-brand-cyan" />}
                  </div>

                  <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5 group-hover:text-brand-cyan group-hover:border-brand-cyan/30 transition-colors">
                    {skill.level}
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {skill.name}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {skill.description}
                </p>

                {/* Subtle telemetry bar at bottom */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="uppercase">{skill.category}</span>
                  <span className="text-brand-cyan group-hover:translate-x-1 transition-transform">
                    ACTIVE ⚡
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
