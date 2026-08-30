import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'IoT' | 'EMBEDDED' | 'AUTOMATION' | 'ELECTRONICS'>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['ALL', 'IoT', 'EMBEDDED', 'AUTOMATION', 'ELECTRONICS'] as const;

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (activeCategory === 'ALL') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-mono text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 / FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              SELECTED PROJECTS
            </h2>
            <p className="text-slate-400 font-mono text-xs sm:text-sm mt-2">
              Ideas. Experiments. Real-World Solutions.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-cyan to-transparent mt-4" />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-dark-900/80 p-1.5 rounded-2xl border border-white/10 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-cursor="hover"
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-cyan text-dark-950 font-bold shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor="project"
              data-cursor-text="VIEW PROJECT"
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-brand-cyan/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-cyan flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-dark-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                
                {/* Gradient Shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                {/* Top Number & Category Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="font-display font-black text-xl text-white/40 group-hover:text-brand-cyan transition-colors">
                    #{project.number}
                  </span>

                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider bg-dark-950/80 backdrop-blur-md text-brand-cyan border border-brand-cyan/30 uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Floating "View Project" prompt on hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-cyan text-dark-950 font-mono text-xs font-bold shadow-lg">
                  <span>CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies Pills */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
