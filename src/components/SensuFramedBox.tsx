import React, { useState } from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { SensuLogo } from './SensuLogo';

interface SensuFramedBoxProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const SensuFramedBox: React.FC<SensuFramedBoxProps> = ({
  className = '',
  size = 'lg',
  showSubtitle = true,
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'w-56 aspect-[3/4]',
    md: 'w-64 sm:w-72 aspect-[3/4]',
    lg: 'w-72 sm:w-80 md:w-[350px] aspect-[3/4]',
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Outer ambient glow */}
      <div
        className="absolute -inset-2 bg-gradient-to-tr from-[#9B233D]/20 via-[#EAA8B7]/25 to-transparent rounded-3xl blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Signature Vertical Rectangular Frame ("Вертикал тик бурчтук каркасы") */}
      <div
        className={`relative ${sizeClasses[size]} rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-[#8C1E34] via-[#A8324C] to-[#681123] shadow-2xl transition-transform duration-500 hover:scale-[1.01] flex items-center justify-center`}
      >
        {/* Inner thin rose-gold/white border */}
        <div className="w-full h-full rounded-xl sm:rounded-2xl p-0.5 bg-[#FAF5F7] shadow-inner overflow-hidden relative">
          {!imgError ? (
            <img
              src={PRODUCT_DATA.images.hero}
              alt="SENSU Collagen Tea оригиналдуу каробкасы жана даярдалган чай"
              className="w-full h-full object-cover object-center rounded-xl sm:rounded-2xl transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FFF5F7] to-[#FCE8ED] flex flex-col items-center justify-center p-6 text-center">
              <SensuLogo size="md" variant="burgundy" />
              <span className="text-xs text-[#7B162C] font-serif font-semibold mt-2">
                SENSU Collagen Tea
              </span>
            </div>
          )}

          {/* Bottom subtle caption badge */}
          {showSubtitle && (
            <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center justify-center px-4 pointer-events-none">
              <div className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#EEDCE2] shadow-sm text-center">
                <span className="text-[10px] sm:text-xs font-serif font-bold text-[#7B162C] tracking-wide block leading-tight">
                  SENSU Collagen Tea
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#553C43] italic font-serif">
                  бир чыныда! ♡
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
