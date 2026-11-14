import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryItem } from '../data/gallery';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/80 transition-colors focus:outline-none"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 z-50 text-white/80 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/80 transition-colors focus:outline-none hidden sm:block"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 z-50 text-white/80 hover:text-white p-3 rounded-full bg-black/40 hover:bg-black/80 transition-colors focus:outline-none hidden sm:block"
        aria-label="Next image"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Content */}
      <div
        className="max-w-4xl max-h-[90vh] flex flex-col items-center bg-black/60 rounded-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[75vh] overflow-hidden flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto object-contain rounded-t-xl"
          />
        </div>
        <div className="w-full p-4 sm:p-5 bg-neutral-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10">
          <div>
            <h4 className="text-base font-bold font-heading text-[#E9A51A]">{item.title}</h4>
            <p className="text-xs text-neutral-300 mt-0.5">{item.caption}</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-neutral-400 shrink-0">
            <MapPin className="w-3.5 h-3.5 text-[#E9A51A]" />
            <span>{item.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
