import React from 'react';
import { INDIAN_SPICES_CATEGORIES } from '../data/catalogData';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface IndianSpicesPageProps {
  onOpenQuoteModal: (product?: string) => void;
}

export const IndianSpicesPage: React.FC<IndianSpicesPageProps> = ({
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
            Indian Spices
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
              src="https://priglobexim.com/wp-content/uploads/2026/03/Untitled-design-17.png"
              alt="Authentic Indian Spices for Worldwide Export and Supply"
              fallbackType="spices"
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>

          {/* Right Column: Text */}
          <div className="text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
              <strong>Authentic Indian Spices for Worldwide Export and Supply</strong>
            </h2>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
              Our spices are selected for their purity, freshness, and suitability for worldwide export requirements.
            </p>
            <div className="text-xs sm:text-sm font-medium text-[#222222] leading-loose space-y-1">
              <div>Turmeric</div>
              <div>Cumin Seeds</div>
              <div>Coriander Seeds</div>
              <div>Red Chilli</div>
              <div>Black Pepper</div>
              <div>Cardamom</div>
              <div>Cloves</div>
              <div>Fenugreek Seeds</div>
              <div>Mustard Seeds</div>
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
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">34+ Tons</h3>
              <h3 className="text-lg font-bold text-[#111111]">Spices Supplied Annually</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Delivering high-quality Indian spices in bulk quantities with consistent supply and export standards.
              </p>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">23+</h3>
              <h3 className="text-lg font-bold text-[#111111]">Spice Varieties Offered</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Providing a diverse range of authentic spices sourced from trusted farms across India.
              </p>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">92%</h3>
              <h3 className="text-lg font-bold text-[#111111]">Repeat Orders</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Trusted by global buyers for purity, rich aroma, and reliable delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4+: PRODUCT CATEGORIES (9 Authentic Indian Spices)                */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {INDIAN_SPICES_CATEGORIES.map((cat, catIdx) => (
          <section key={catIdx} className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#111111]">
              {cat.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cat.products.map((product, pIdx) => (
                <ProductCard
                  key={pIdx}
                  product={product}
                  fallbackType="spices"
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
