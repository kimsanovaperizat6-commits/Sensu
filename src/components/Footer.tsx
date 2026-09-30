import React from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { SensuLogo } from './SensuLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF4F5] text-[#553E45] border-t border-[#EEDCE2] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center text-center gap-3 mb-6">
          {/* Brand Info */}
          <div>
            <div className="mb-2 flex justify-center">
              <SensuLogo size="sm" variant="burgundy" />
            </div>
            <p className="text-xs text-[#7A5F67] italic">
              «{PRODUCT_DATA.slogan}»
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#EBD6DC] text-center text-xs text-[#8A7078]">
          © {new Date().getFullYear()} SENSU Collagen Tea. Бардык укуктар корголгон.
        </div>
      </div>
    </footer>
  );
};
