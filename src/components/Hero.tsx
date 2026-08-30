import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Cpu, Radio, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Glow Spheres in background */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: Editorial Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Engineering Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-brand-cyan/30 text-brand-cyan font-mono text-xs tracking-wider shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
            <span className="w-2 h-2 rounded-full bg-brand-cyan" />
            <span>ECE STUDENT • EMBEDDED SYSTEMS • IoT</span>
          </div>

          {/* Large Hero Title */}
          <div className="space-y-2 mb-6">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-none">
              RITHIK R
            </h1>
            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-display font-bold leading-tight gradient-text-cyan">
              Building Ideas Into <br className="hidden sm:inline" />
              Real-World Technology.
            </h2>
          </div>

          {/* Professional Narrative Statement */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed mb-8">
            Electronics & Communication Engineering student focused on{' '}
            <span className="text-white font-semibold">Embedded Systems</span>,{' '}
            <span className="text-brand-cyan font-semibold">IoT</span>, automation and practical project development. Transforming hardware and sensor circuitry into functional, intelligent solutions.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('#projects')}
              data-cursor="hover"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wider text-dark-950 bg-brand-cyan hover:bg-cyan-300 shadow-glow-cyan transition-all transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              data-cursor="hover"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold tracking-wider text-slate-200 bg-dark-900/80 border border-slate-700/80 hover:border-brand-cyan/60 hover:text-brand-cyan transition-all flex items-center justify-center gap-2"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Live Engineering Status Telemetry */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg">
            <div>
              <div className="text-xs font-mono text-slate-400">INSTITUTION</div>
              <div className="text-sm font-display font-bold text-white mt-0.5">Excel Engg College</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">ACADEMIC CGPA</div>
              <div className="text-sm font-display font-bold text-brand-cyan mt-0.5">7.50 / 10</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">HARDWARE CORE</div>
              <div className="text-sm font-display font-bold text-brand-emerald mt-0.5">Arduino & ESP</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive 3D Portrait Frame with Engineering Telemetry */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10">
          <div
            className="relative w-full max-w-sm sm:max-w-md transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateY(${mouseOffset.x * 0.7}deg) rotateX(${-mouseOffset.y * 0.7}deg)`,
            }}
          >
            {/* Outer Cyber Glow & Circuit Borders */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-cyan/40 via-brand-blue/20 to-brand-emerald/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Corner Decorative Tech Elements */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-brand-cyan z-20" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-brand-cyan z-20" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-brand-cyan z-20" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-brand-cyan z-20" />

            {/* Main Portrait Container */}
            <div className="relative rounded-2xl overflow-hidden bg-dark-900 border border-white/15 p-2 shadow-2xl">
              {/* Photo Box */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-dark-950 flex items-center justify-center">
                {isImageLoaded ? (
                  <img
                    src={PERSONAL_INFO.profilePhoto}
                    alt="Rithik R - Electronics and Communication Engineering"
                    onError={() => setIsImageLoaded(false)}
                    className="w-full h-full object-cover object-center filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  // Stylish Hardware/Engineering Themed Fallback Avatar Frame
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-dark-900 to-dark-950 p-6 text-center">
                    <div className="w-24 h-24 rounded-2xl bg-dark-850 border border-brand-cyan/40 flex items-center justify-center mb-4 shadow-glow-cyan">
                      <Cpu className="w-12 h-12 text-brand-cyan animate-pulse" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">RITHIK R</h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">ECE Project Developer</p>
                    <div className="mt-4 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-[11px] font-mono text-brand-cyan">
                      Ready to build
                    </div>
                  </div>
                )}

                {/* Subtle Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Floating Technical Badge 1: Top Left */}
              <div
                className="absolute -top-4 -left-4 bg-dark-900/90 border border-brand-cyan/40 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-mono text-white transition-transform duration-300"
                style={{
                  transform: `translate3d(${mouseOffset.x * -0.5}px, ${mouseOffset.y * -0.5}px, 20px)`,
                }}
              >
                <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
                <span className="text-[11px]">MCU: ATmega328P / ESP8266</span>
              </div>

              {/* Floating Technical Badge 2: Bottom Right */}
              <div
                className="absolute -bottom-4 -right-4 bg-dark-900/90 border border-brand-blue/40 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-mono text-white transition-transform duration-300"
                style={{
                  transform: `translate3d(${mouseOffset.x * 0.6}px, ${mouseOffset.y * 0.6}px, 25px)`,
                }}
              >
                <Radio className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
                <span className="text-[11px]">IoT & GPS/GSM Active</span>
              </div>

              {/* Floating Technical Badge 3: Middle Right */}
              <div
                className="hidden sm:flex absolute top-1/2 -right-6 bg-dark-900/95 border border-white/10 px-2.5 py-1 rounded-lg shadow-md backdrop-blur-md items-center gap-1.5 text-[10px] font-mono text-slate-300"
                style={{
                  transform: `translate3d(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px, 15px)`,
                }}
              >
                <Activity className="w-3 h-3 text-brand-cyan" />
                <span>7.50 CGPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL TO EXPLORE Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto">
        <button
          onClick={() => scrollToSection('#about')}
          data-cursor="hover"
          className="group flex flex-col items-center text-slate-400 hover:text-brand-cyan transition-colors focus:outline-none"
        >
          <span className="text-[11px] font-mono font-medium tracking-widest uppercase">
            SCROLL TO EXPLORE
          </span>
          <ArrowDown className="w-4 h-4 mt-1 animate-bounce text-brand-cyan" />
        </button>
      </div>
    </section>
  );
};
