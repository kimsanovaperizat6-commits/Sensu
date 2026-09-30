import React from 'react';
import { PRODUCT_DATA } from '../data/productData';

interface MobileStickyBarProps {
  onOrderClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOrderClick }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#EEDCE2] px-4 py-2.5 shadow-lg">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-base font-bold font-mono text-[#7B162C] tabular-nums">
              {PRODUCT_DATA.price} {PRODUCT_DATA.currency}
            </span>
            <span className="text-[10px] text-[#7A6068]">/ 40 күн</span>
          </div>
          <span className="text-[10px] text-[#2C6E3B] font-medium leading-none">
            Акысыз жеткирүү
          </span>
        </div>

        <button
          onClick={onOrderClick}
          className="flex-1 max-w-[190px] py-2.5 px-4 rounded-full text-xs font-semibold tracking-wider text-white bg-[#7B162C] active:bg-[#5E0F20] shadow-xs flex items-center justify-center gap-1.5"
        >
          <span>🛍 Сатып алуу</span>
        </button>
      </div>
    </div>
  );
};
