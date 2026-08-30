import React from 'react';
import { Sparkles, CheckCircle2, Wrench, Cpu } from 'lucide-react';
import { PERSONAL_INFO, QUICK_STATS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            A LITTLE ABOUT ME
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-cyan to-transparent mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed">
              I am an <strong className="text-white font-semibold">Electronics & Communication Engineering</strong> student at Excel Engineering College, driven by a deep fascination with how microcontrollers, sensors, and communication protocols bridge the physical and digital domains.
            </p>

            <p className="text-base text-slate-400 leading-relaxed">
              My engineering journey centers around practical hands-on prototyping. Rather than staying confined to theory, I actively design, wire, and program embedded systems that solve real-life challenges—ranging from <span className="text-brand-cyan">automated collision detection & emergency dispatch</span> to <span className="text-brand-emerald">IoT-driven precision agriculture</span> and <span className="text-brand-blue">smart traffic management</span>.
            </p>

            {/* Core Competency Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                'Embedded Firmware & C/C++ Logic',
                'IoT Telemetry (ESP8266 / ESP32)',
                'Cellular & Geospatial (GSM / GPS)',
                'Analog & Digital Sensor Calibration',
                'Closed-Loop Automation Circuits',
                'Rapid Breadboarding & Troubleshooting'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Editorial Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {QUICK_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  data-cursor="hover"
                  className="glass-card glass-card-hover p-4 rounded-2xl border border-white/10 flex flex-col justify-between"
                >
                  <div className="text-[10px] font-mono tracking-wider text-brand-cyan uppercase">
                    {stat.label}
                  </div>
                  <div className="text-xl font-display font-extrabold text-white my-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-sans">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Electronics Workspace Image & Inspection Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card border border-white/15 p-3 group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-dark-900">
                <img
                  src={PERSONAL_INFO.aboutPhoto}
                  alt="Embedded Electronics Lab & Circuit Prototyping"
                  data-cursor="image"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent pointer-events-none" />

                {/* Overlaid Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <div className="flex items-center gap-2 bg-dark-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-brand-cyan/30">
                    <Wrench className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Hardware Lab & Prototyping</span>
                  </div>
                  <span className="text-brand-emerald font-bold bg-dark-900/90 px-2 py-1.5 rounded-lg border border-white/10">
                    ONLINE
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Ambient Tech Circuit Badge */}
            <div className="absolute -bottom-6 -left-6 bg-dark-900/95 border border-brand-cyan/40 p-4 rounded-2xl shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">PRACTICAL HARDWARE</div>
                <div className="text-sm font-display font-bold text-white">Sensor & MCU Synergy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
