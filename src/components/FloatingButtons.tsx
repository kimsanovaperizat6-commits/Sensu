import React from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { Phone, Instagram, MessageCircle } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PRODUCT_DATA.whatsappRaw}?text=${encodeURIComponent(
    PRODUCT_DATA.defaultWhatsAppMessage
  )}`;

  const contacts = [
    {
      id: 'phone',
      label: 'Телефон / Чалуу',
      sub: PRODUCT_DATA.phoneDisplay,
      href: `tel:${PRODUCT_DATA.phoneRaw}`,
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
      bgClass: 'bg-[#7B162C] hover:bg-[#600F21] text-white',
      borderClass: 'border-[#A3354C]/40',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      sub: PRODUCT_DATA.instagramHandle,
      href: PRODUCT_DATA.instagramUrl,
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      bgClass: 'bg-gradient-to-tr from-[#941A35] via-[#C84562] to-[#E3798F] text-white hover:opacity-95',
      borderClass: 'border-[#F0B8C5]/50',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      sub: 'Тез байланыш',
      href: whatsappUrl,
      icon: <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />,
      bgClass: 'bg-[#25D366] hover:bg-[#1EBE5D] text-white',
      borderClass: 'border-[#55E88B]/40',
    },
  ];

  return (
    <aside
      aria-label="Байланыш баскычтары"
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5 sm:gap-3 items-end select-none pointer-events-auto"
    >
      {contacts.map((c, index) => (
        <a
          key={c.id}
          href={c.href}
          target={c.id === 'phone' ? '_self' : '_blank'}
          rel="noopener noreferrer"
          aria-label={c.label}
          style={{ animationDelay: `${index * 0.35}s` }}
          className={`group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md transition-all duration-300 transform hover:scale-110 active:scale-95 border ${c.bgClass} ${c.borderClass} animate-contact-float`}
        >
          {/* Icon */}
          <span className="transition-transform duration-300 group-hover:rotate-6">
            {c.icon}
          </span>

          {/* Elegant Tooltip Popout on Desktop */}
          <span className="hidden sm:flex pointer-events-none opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 absolute right-14 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[#3A1F26] text-xs font-medium shadow-md border border-[#EEDCE2] whitespace-nowrap">
            <span className="font-semibold text-[#7B162C]">{c.label}</span>
            <span className="text-[#8C6D75] text-[11px]">({c.sub})</span>
          </span>
        </a>
      ))}
    </aside>
  );
};
