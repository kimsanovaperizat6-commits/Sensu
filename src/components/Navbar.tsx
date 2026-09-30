import React, { useState, useEffect } from 'react';
import { SensuLogo } from './SensuLogo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SENSU жөнүндө', href: '#about' },
    { label: 'Өзгөчөлүктөрү', href: '#features' },
    { label: 'Курамы', href: '#ingredients' },
    { label: 'Күнүмдүк рацион', href: '#routine' },
    { label: 'Даярдоо', href: '#prepare' },
    { label: '40 күндүк курс', href: '#course' },
    { label: 'Суроо-жооп', href: '#faq' },
    { label: 'Пикирлер', href: '#reviews' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F6]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#EEDDE2]/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B162C]/40 rounded-sm"
          aria-label="SENSU Collagen Tea Башкы бет"
        >
          <SensuLogo size="sm" variant="burgundy" />
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-[#593E46]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#7B162C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#7B162C] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Strategic CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOrderClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider text-white bg-[#7B162C] hover:bg-[#600E20] transition-colors shadow-xs active:scale-95"
          >
            <span>🛍 Заказать / Сатып алуу</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#593E46] hover:text-[#7B162C] rounded-lg transition-colors focus:outline-none"
            aria-label="Навигация менюсу"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F6] border-b border-[#EEDDE2] px-6 py-5 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3.5 text-sm font-medium text-[#593E46]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-1 hover:text-[#7B162C] transition-colors border-b border-[#F2E5E8]/60"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOrderClick();
              }}
              className="mt-2 w-full py-3 rounded-full text-xs font-semibold tracking-wider text-white bg-[#7B162C] active:bg-[#5E0F20]"
            >
              🛍 Заказать / Сатып алуу
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
