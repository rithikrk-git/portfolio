import React, { useState } from 'react';
import { HARDWARE_GALLERY, HardwareItem } from '../data/portfolioData';
import { LightboxModal } from './LightboxModal';
import { Eye, Wrench } from 'lucide-react';

export const HardwareGallery: React.FC = () => {
  const [selectedHardware, setSelectedHardware] = useState<HardwareItem | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-dark-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>04 / HARDWARE ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            ENGINEERING WORKBENCH
          </h2>
          <p className="text-slate-400 font-mono text-xs sm:text-sm mt-2">
            The Physical Components, Sensors & Microcontrollers Powering Every Build.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-cyan to-transparent mt-4" />
        </div>

        {/* Hardware Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HARDWARE_GALLERY.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedHardware(item)}
              data-cursor="image"
              className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] bg-dark-950 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Category */}
                <div className="absolute top-3 left-3 bg-dark-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-brand-cyan border border-brand-cyan/30">
                  {item.category}
                </div>

                {/* Expand Indicator */}
                <div className="absolute bottom-3 right-3 bg-dark-900/90 p-1.5 rounded-lg border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-brand-cyan" />
                </div>
              </div>

              {/* Specs & Description */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-cyan transition-colors mb-1">
                    {item.name}
                  </h3>
                  <div className="text-[11px] font-mono text-brand-emerald mb-2">
                    {item.spec}
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  <span className="text-brand-cyan">Applied in:</span> {item.usage}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for Selected Hardware */}
      {selectedHardware && (
        <LightboxModal
          isOpen={true}
          onClose={() => setSelectedHardware(null)}
          imageUrl={selectedHardware.image}
          caption={`${selectedHardware.name} — ${selectedHardware.spec}`}
        />
      )}
    </section>
  );
};
