import React, { useState, useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { 
  X, Cpu, Layers, Zap, 
  Sparkles, Compass, Eye 
} from 'lucide-react';
import { LightboxModal } from './LightboxModal';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeLightboxImg, setActiveLightboxImg] = useState<{ url: string; caption: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !activeLightboxImg) onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, activeLightboxImg, onClose]);

  if (!project) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[1000] bg-dark-950/90 backdrop-blur-2xl overflow-y-auto p-4 sm:p-6 lg:p-10 flex justify-center items-start animate-fadeIn"
      >
        {/* Modal Container */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-dark-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-8"
        >
          {/* Header Bar with Close Button */}
          <div className="sticky top-0 z-30 bg-dark-950/90 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase">
                {project.category} CASE STUDY
              </span>
            </div>

            <button
              onClick={onClose}
              data-cursor="hover"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors text-xs font-mono"
            >
              <span>CLOSE PROJECT</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 sm:p-10 space-y-10">
            {/* Title & Tagline */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white mb-3">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg font-light text-slate-300">
                {project.tagline}
              </p>
            </div>

            {/* Main Featured Image with Click-to-Zoom */}
            <div
              onClick={() => setActiveLightboxImg({ url: project.image, caption: project.title })}
              data-cursor="image"
              className="relative aspect-video rounded-2xl overflow-hidden bg-dark-950 border border-white/10 group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 right-4 bg-dark-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-xs font-mono text-white flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Click to Expand Visual</span>
              </div>
            </div>

            {/* Overview & Objective */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-950/70 p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-brand-cyan text-xs font-mono mb-2">
                  <Compass className="w-4 h-4" />
                  <span>SYSTEM OVERVIEW</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="bg-dark-950/70 p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-brand-emerald text-xs font-mono mb-2">
                    <Zap className="w-4 h-4" />
                    <span>PROJECT OBJECTIVE</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.objective}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="text-[11px] font-mono text-slate-400">DEVELOPMENT FOCUS:</div>
                  <div className="text-xs font-mono text-brand-cyan mt-1">{project.developmentFocus}</div>
                </div>
              </div>
            </div>

            {/* Hardware Components & Technologies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-950/70 p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-brand-blue text-xs font-mono mb-3">
                  <Cpu className="w-4 h-4" />
                  <span>KEY HARDWARE COMPONENTS</span>
                </div>
                <ul className="space-y-2">
                  {project.keyComponents.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-mono text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark-950/70 p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-mono mb-3">
                  <Layers className="w-4 h-4" />
                  <span>TECHNOLOGIES & PROTOCOLS</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contribution & Project Outcome */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-brand-cyan/10 to-transparent p-6 rounded-2xl border border-brand-cyan/20">
                <div className="text-xs font-mono text-brand-cyan font-bold mb-2">
                  MY SPECIFIC CONTRIBUTION
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {project.myContribution}
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-emerald/10 to-transparent p-6 rounded-2xl border border-brand-emerald/20">
                <div className="text-xs font-mono text-brand-emerald font-bold mb-2">
                  VERIFIED PROJECT OUTCOME
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {project.projectOutcome}
                </p>
              </div>
            </div>

            {/* Project Multi-image Gallery */}
            {project.gallery.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
                  <Sparkles className="w-4 h-4 text-brand-cyan" />
                  <span>PROJECT IMAGE GALLERY & SCHEMATIC VISUALS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveLightboxImg(img)}
                      data-cursor="image"
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-dark-950 border border-white/10 cursor-pointer"
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-dark-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-[11px] font-mono text-white line-clamp-2">
                          {img.caption}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="bg-dark-950 px-6 sm:px-10 py-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              Excel Engineering College • Electronics & Communication Engineering
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-brand-cyan text-dark-950 font-mono text-xs font-bold hover:bg-cyan-300 transition-colors shadow-glow-cyan"
            >
              BACK TO PROJECTS
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox for Gallery Images */}
      {activeLightboxImg && (
        <LightboxModal
          isOpen={true}
          onClose={() => setActiveLightboxImg(null)}
          imageUrl={activeLightboxImg.url}
          caption={activeLightboxImg.caption}
        />
      )}
    </>
  );
};
