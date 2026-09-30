import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { StatsSection } from './components/StatsSection';
import { IngredientsSection } from './components/IngredientsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { PreparationSection } from './components/PreparationSection';
import { Course40Section } from './components/Course40Section';
import { OrderSection } from './components/OrderSection';
import { DeliverySection } from './components/DeliverySection';
import { FaqSection } from './components/FaqSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { MobileStickyBar } from './components/MobileStickyBar';
import { OrderModal } from './components/OrderModal';
import { FloatingLeaves } from './components/FloatingLeaves';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOpenOrder = () => {
    setIsOrderModalOpen(true);
  };

  const handleCloseOrder = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F6] text-[#2C1D21] selection:bg-[#E8AEB8] selection:text-[#5B1324] relative">
      {/* Subtle Floating Botanical Leaves Animation */}
      <FloatingLeaves />

      {/* Top Navigation Bar */}
      <Navbar onOrderClick={handleOpenOrder} />

      {/* Main Content strictly matching requested hierarchy */}
      <main className="flex-1">
        {/* 1. ГЕРОЙ (Hero) */}
        <HeroSection onOrderClick={handleOpenOrder} />

        {/* 2. SENSU ЖӨНҮНДӨ (About) */}
        <AboutSection />

        {/* 3. ӨЗГӨЧӨЛҮКТӨРҮ (Features) */}
        <FeaturesSection />

        {/* Статистика: 3 000+ кардар SENSUну тандады */}
        <StatsSection />

        {/* 4. КУРАМЫ (Ingredients) */}
        <IngredientsSection />

        {/* 5. КҮНҮМДҮК РАЦИОНГО КОШУУ (Daily Routine / Benefits) */}
        <BenefitsSection onOrderClick={handleOpenOrder} />

        {/* 6. КАНТИП ДАЯРДАЛАТ (How to Prepare) */}
        <PreparationSection />

        {/* 7. 40 КҮНДҮК КУРС (40-Day Course) */}
        <Course40Section onOrderClick={handleOpenOrder} />

        {/* 8. БАА + САТЫП АЛУУ (Price + Purchase) */}
        <OrderSection />

        {/* 9. ЖЕТКИРҮҮ (Delivery) */}
        <DeliverySection />

        {/* 10. КӨП БЕРИЛГЕН СУРООЛОР (FAQ) */}
        <FaqSection />

        {/* 11. КАРДАРЛАР ЭМНЕ ДЕЙТ? (Customer Testimonials & Reviews) */}
        <ReviewsSection />

        {/* 12. ЗАКЛЮЧИТЕЛЬНЫЙ CTA (Final CTA) */}
        <FinalCtaSection onOrderClick={handleOpenOrder} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Exactly 3 Floating Contact Buttons on the Right Side (Phone, Instagram, WhatsApp) */}
      <FloatingButtons />

      {/* Compact Mobile Sticky Purchase Bar */}
      <MobileStickyBar onOrderClick={handleOpenOrder} />

      {/* Clean Quick Order Dialog */}
      <OrderModal isOpen={isOrderModalOpen} onClose={handleCloseOrder} />
    </div>
  );
}
