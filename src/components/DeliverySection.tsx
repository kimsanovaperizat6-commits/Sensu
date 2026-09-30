import React from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { Truck } from 'lucide-react';

export const DeliverySection: React.FC = () => {
  return (
    <section id="delivery" className="py-20 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-12 h-12 rounded-full bg-[#FAF0F3] text-[#7B162C] flex items-center justify-center mx-auto mb-4">
          <Truck className="w-6 h-6" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4B0F1C] tracking-tight mb-2">
          {PRODUCT_DATA.delivery.title}
        </h2>
        <p className="text-sm text-[#70565F] mb-10">
          {PRODUCT_DATA.delivery.subtitle}
        </p>

        {/* 3 Clean Minimal Delivery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PRODUCT_DATA.delivery.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F6] rounded-2xl p-5 border border-[#EEDCE2] text-center"
            >
              <h3 className="text-base font-serif font-bold text-[#48101E] mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-[#5C454D]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
