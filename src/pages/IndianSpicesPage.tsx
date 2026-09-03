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
              src="/images/Untitled-design-17.webp"
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
      {/* SECTION 4: EXPORT SPECIFICATIONS STRIP (B2B Exim Capabilities)          */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-6 mt-10">
        <div className="bg-[#FAF2E4] border border-[#E3D6C1] rounded-2xl p-4 sm:p-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div className="space-y-1">
            <span className="font-bold text-[#111111] uppercase tracking-wider text-[11px] block">Shipping Ports</span>
            <p className="text-[#555555]">Mundra Port / JNPT Mumbai (Ocean Freight)</p>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-[#111111] uppercase tracking-wider text-[11px] block">Container Supply</span>
            <p className="text-[#555555]">20ft / 40ft FCL &amp; LCL Consolidated Cargo</p>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-[#111111] uppercase tracking-wider text-[11px] block">Export Packaging</span>
            <p className="text-[#555555]">Jute Bags, PP Bags, Vacuum Pouch, Master Cartons</p>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-[#111111] uppercase tracking-wider text-[11px] block">Certificates</span>
            <p className="text-[#555555]">Spices Board, Phytosanitary, Fumigation &amp; COO</p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 5+: PRODUCT CATEGORIES (Authentic Indian Spices)                  */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 sm:space-y-20">
        {INDIAN_SPICES_CATEGORIES.map((cat, catIdx) => (
          <section key={catIdx} className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E8DFC8] pb-3 gap-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111]">
                {cat.name}
              </h2>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8A7555]">
                {cat.products.length} Spice Varieties
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {cat.products.map((product, pIdx) => (
                <div
                  key={pIdx}
                  className="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] min-w-[260px] max-w-[310px] flex"
                >
                  <ProductCard
                    product={product}
                    fallbackType="spices"
                    onInquire={(title) => onOpenQuoteModal(title)}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
