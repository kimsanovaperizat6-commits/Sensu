import React, { useState } from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { Heart, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ReviewItem {
  id: string;
  image: string;
  alt: string;
  tag: string;
  caption: string;
}

export const ReviewsSection: React.FC = () => {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const reviews: ReviewItem[] = PRODUCT_DATA.reviews;

  const handleOpenModal = (index: number) => {
    setActiveModalIndex(index);
  };

  const handleCloseModal = () => {
    setActiveModalIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + reviews.length) % reviews.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % reviews.length);
    }
  };

  return (
    <section id="reviews" className="py-20 md:py-24 bg-[#FAF7F6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#7B162C] mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#7B162C]/20 text-[#7B162C]" />
            <span>Чыныгы натыйжалар</span>
            <Heart className="w-3.5 h-3.5 fill-[#7B162C]/20 text-[#7B162C]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4B0F1C] tracking-tight mb-4">
            «Кардарлар эмне дейт?»
          </h2>

          <p className="text-sm sm:text-base text-[#6A5158] font-light leading-relaxed">
            SENSU Collagen Tea колдонгон айымдардын өзгөрүүлөрү жана чын жүрөктөн чыккан билдирүүлөрү
          </p>
        </div>

        {/* Vertical Rectangular Screenshots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={rev.id}
              onClick={() => handleOpenModal(idx)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#EEDCE2] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Vertical Rectangular Screenshot Container */}
              <div className="relative aspect-[3/4] bg-[#F7F2F4] overflow-hidden flex items-center justify-center">
                <img
                  src={rev.image}
                  alt={rev.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle Hover Zoom Hint */}
                <div className="absolute inset-0 bg-[#4B0F1C]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
                  <div className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#7B162C] text-xs font-medium shadow-md flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Чоңойтуп көрүү</span>
                  </div>
                </div>

                {/* Tag Badge */}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-white/90 backdrop-blur-xs text-[#7B162C] border border-[#EEDCE2] shadow-2xs">
                    {rev.tag}
                  </span>
                </div>
              </div>

              {/* Caption Card Footer */}
              <div className="p-4 flex-1 flex flex-col justify-between border-t border-[#F2E5E9]">
                <p className="text-xs text-[#523A41] italic font-serif leading-snug line-clamp-2">
                  {rev.caption}
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#8C6D76]">
                  <span>Чыныгы скриншот</span>
                  <span className="text-[#7B162C] group-hover:underline font-medium">Толук көрүү →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution View */}
      {activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-lg w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-gentle-pulse"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-[#F0DFE4] flex items-center justify-between bg-[#FAF7F6]">
              <span className="text-xs font-semibold text-[#7B162C] tracking-wide">
                {reviews[activeModalIndex].tag}
              </span>
              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-full text-[#6E555D] hover:text-[#7B162C] hover:bg-[#F2E5E9] transition-colors"
                aria-label="Жабуу"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="p-2 sm:p-4 overflow-y-auto max-h-[75vh] flex items-center justify-center bg-[#1F191B]">
              <img
                src={reviews[activeModalIndex].image}
                alt={reviews[activeModalIndex].alt}
                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Navigation & Caption */}
            <div className="px-5 py-3 bg-white border-t border-[#F0DFE4] flex items-center justify-between text-xs">
              <button
                onClick={handlePrev}
                className="px-3 py-1.5 rounded-full bg-[#FAF5F6] hover:bg-[#F2E5E9] text-[#7B162C] font-medium flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Мурунку</span>
              </button>
              <span className="text-[#8C6D76] font-mono">
                {activeModalIndex + 1} / {reviews.length}
              </span>
              <button
                onClick={handleNext}
                className="px-3 py-1.5 rounded-full bg-[#FAF5F6] hover:bg-[#F2E5E9] text-[#7B162C] font-medium flex items-center gap-1 transition-colors"
              >
                <span>Кийинки</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
