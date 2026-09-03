import React from 'react';
import { COTTON_JUTE_CATEGORIES } from '../data/catalogData';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface CottonJutePageProps {
  onOpenQuoteModal: (product?: string) => void;
}

export const CottonJutePage: React.FC<CottonJutePageProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-[#F8F4EC] text-[#111111] min-h-screen">
      {/* ========================================================================= */}
      {/* SECTION 1: TITLE BANNER (has-tertiary-background-color #F9D9A7)           */}
      {/* ========================================================================= */}
      <div className="bg-[#F9D9A7] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-[#111111]">
            Cotton &amp; Jute Tote Bag
          </h1>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: ABOUT / INTRO                                                  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-xs">
            <ImageWithFallback
              src="https://priglobexim.com/wp-content/uploads/2026/03/Untitled-design-10-scaled.png"
              alt="Cotton & Jute Reusable Tote Bags"
              fallbackType="bag"
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>

          {/* Right Column: Text */}
          <div className="text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
              <strong>Cotton &amp; Jute Reusable Tote Bags</strong>
            </h2>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
              PriGlob Exim is a trusted manufacturer and exporter of high-quality fabric tote bags, offering a wide range of categories including..
            </p>
            <div className="text-xs sm:text-sm font-medium text-[#222222] leading-loose space-y-1">
              <div>Drawstring Bags</div>
              <div>Cotton Pouch Bags</div>
              <div>Cotton Canvas Tote Bags</div>
              <div>Wardrobe Organizer cover</div>
              <div>Jute Hamper Bags</div>
              <div>Kids Tote Bag</div>
              <div>Mini Tote Bags</div>
              <div>Medium Tote Bags</div>
              <div>Large Tote Bags</div>
              <div>Everyday Tote Bags</div>
              <div>Office &amp; Lunch Bags</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: PERFORMANCE HIGHLIGHTS (has-tertiary-background-color)         */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 bg-[#F9D9A7] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              Our Performance Highlights
            </h2>
            <p className="text-sm sm:text-base text-[#333333] mt-2">
              Customizable eco-friendly tote bags that combine sustainability with brand impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">1 M +</h3>
              <h3 className="text-lg font-bold text-[#111111]">Bags Produced Annually</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Manufacturing high-quality cotton, canvas, and jute tote bags at scale with consistent quality and precision.
              </p>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">200+</h3>
              <h3 className="text-lg font-bold text-[#111111]">Custom Design Products</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Helping brands create unique, customized tote bags for promotions, retail, and packaging needs.
              </p>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">95%</h3>
              <h3 className="text-lg font-bold text-[#111111]">Repeat Orders</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Our clients trust our quality, pricing, and timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4+: ALL PRODUCT CATEGORIES AND THEIR 54 CARDS                     */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {COTTON_JUTE_CATEGORIES.map((cat, catIdx) => (
          <section key={catIdx} className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#111111]">
              {cat.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cat.products.map((product, pIdx) => (
                <ProductCard
                  key={pIdx}
                  product={product}
                  fallbackType="bag"
                  onInquire={(title) => onOpenQuoteModal(title)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
