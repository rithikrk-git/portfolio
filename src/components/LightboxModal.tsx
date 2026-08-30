import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  caption?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  caption,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[10001] bg-dark-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-dark-900 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-dark-950 transition-all z-20"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-dark-900">
          <img
            src={imageUrl}
            alt={caption || 'Preview image'}
            className="w-full h-auto max-h-[75vh] object-contain"
          />
        </div>

        {caption && (
          <p className="mt-4 text-sm font-mono text-slate-300 text-center bg-dark-900/90 px-4 py-2 rounded-xl border border-white/10">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};
