import React from 'react';
import { GEMS_JEWELLERY_CATEGORIES } from '../data/catalogData';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface GemsJewelleryPageProps {
  onOpenQuoteModal: (product?: string) => void;
}

export const GemsJewelleryPage: React.FC<GemsJewelleryPageProps> = ({
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
            Gems &amp; Jewellery
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
              src="https://priglobexim.com/wp-content/uploads/2026/03/Untitled-design-16-scaled.png"
              alt="Discover Luxury Gems & Jewellery Crafted with Precision"
              fallbackType="jewellery"
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>

          {/* Right Column: Text */}
          <div className="text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
              <strong>Discover Luxury Gems &amp; Jewellery Crafted with Precision</strong>
            </h2>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
              A premium range of finely crafted designs reflecting elegance, quality, and timeless beauty.
            </p>
            <div className="text-xs sm:text-sm font-medium text-[#222222] leading-loose space-y-1">
              <div>Rings</div>
              <div>Bracelets</div>
              <div>Necklace</div>
              <div>Earrings</div>
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
              Exporting premium gems and jewellery worldwide with superior quality and trusted craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">1709+</h3>
              <h3 className="text-lg font-bold text-[#111111]">Jewellery Pieces Crafted</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Delivering finely designed and high-quality jewellery pieces with expert craftsmanship and attention to detail.
              </p>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">150+</h3>
              <h3 className="text-lg font-bold text-[#111111]">Unique Jewellery Designs</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Creating unique and customized jewellery designs tailored to global trends and client requirements.
              </p>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">96%</h3>
              <h3 className="text-lg font-bold text-[#111111]">Repeat Orders</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Trusted by international buyers for superior quality, elegant designs, and reliable delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4+: PRODUCT CATEGORIES (Rings, Bracelets, Necklace, Earrings)     */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {GEMS_JEWELLERY_CATEGORIES.map((cat, catIdx) => (
          <section key={catIdx} className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#111111]">
              {cat.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cat.products.map((product, pIdx) => (
                <ProductCard
                  key={pIdx}
                  product={product}
                  fallbackType="jewellery"
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
