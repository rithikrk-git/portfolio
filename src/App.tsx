import React, { useState, useEffect } from 'react';
import { PageLoader } from './components/PageLoader';
import { CustomCursor } from './components/CustomCursor';
import { CircuitCanvas } from './components/CircuitCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BrandStatement } from './components/BrandStatement';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { HardwareGallery } from './components/HardwareGallery';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-80px 0px -40% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Initial High-Tech Page Loader */}
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}

      {/* Dynamic Cursor for Desktop */}
      <CustomCursor />

      {/* Interactive Circuit & Trace Background Canvas */}
      <CircuitCanvas />

      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Assembly */}
      <main className="relative z-10">
        <Hero />
        <About />
        <BrandStatement />
        <Skills />
        <Projects />
        <HardwareGallery />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Engineering Footer */}
      <Footer />
    </div>
  );
};

export default App;
