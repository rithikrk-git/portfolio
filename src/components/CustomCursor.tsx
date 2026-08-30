import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailerPos, setTrailerPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'link' | 'image'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is touch / mobile
    const checkMobile = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(hasTouch || isSmallScreen);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Find closest interactive element data attributes
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('[data-cursor]') as HTMLElement | null;

      if (interactiveEl) {
        const type = interactiveEl.getAttribute('data-cursor');
        const text = interactiveEl.getAttribute('data-cursor-text') || '';
        setCursorText(text);

        if (type === 'project') setCursorVariant('project');
        else if (type === 'image') setCursorVariant('image');
        else if (type === 'link') setCursorVariant('link');
        else setCursorVariant('hover');
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth trailer animation loop
    let animationFrameId: number;
    const animateTrailer = () => {
      setTrailerPos((prev) => {
        const ease = 0.18;
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      animationFrameId = requestAnimationFrame(animateTrailer);
    };
    animationFrameId = requestAnimationFrame(animateTrailer);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y, isVisible]);

  if (isMobile || !isVisible) return null;

  const isProject = cursorVariant === 'project';
  const isImage = cursorVariant === 'image';
  const isLink = cursorVariant === 'link';
  const isHover = cursorVariant === 'hover';

  return (
    <>
      {/* Precision Center Dot */}
      <div
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan transition-transform duration-75 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isProject || isImage ? '0px' : '6px',
          height: isProject || isImage ? '0px' : '6px',
        }}
      />

      {/* Smooth Trailing Circle / Interactive Badge */}
      <div
        className={`pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-display text-[10px] font-bold tracking-widest transition-all duration-200 ${
          isProject
            ? 'w-24 h-24 bg-brand-cyan text-dark-950 shadow-glow-cyan border-2 border-white'
            : isImage
            ? 'w-20 h-20 bg-brand-blue text-white shadow-glow-blue border-2 border-brand-cyan/50'
            : isLink
            ? 'w-14 h-14 bg-brand-cyan/20 border border-brand-cyan text-brand-cyan backdrop-blur-sm'
            : isHover
            ? 'w-12 h-12 bg-white/10 border border-brand-cyan/60 backdrop-blur-sm'
            : 'w-8 h-8 border border-brand-cyan/40'
        }`}
        style={{
          left: `${trailerPos.x}px`,
          top: `${trailerPos.y}px`,
        }}
      >
        {cursorText || (isProject ? 'VIEW PROJECT' : isImage ? 'VIEW' : isLink ? 'OPEN ↗' : '')}
      </div>
    </>
  );
};
