import React from 'react';
import { GEMS_JEWELLERY_CATEGORIES } from '../data/catalogData';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Sparkles, Award, CheckCircle2, Shield } from 'lucide-react';

interface GemsJewelleryPageProps {
  onOpenQuoteModal: (product?: string) => void;
}

export const GemsJewelleryPage: React.FC<GemsJewelleryPageProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-[#f5f1e8] text-[#2f3437] min-h-screen">
      {/* Naturetote Header Banner */}
      <div className="bg-[#0e5a46] text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#6bcb5b] block mb-1">
              Surat Artisan Lapidary &amp; Fine Jewelry
            </span>
            <h1 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold">
              Gems &amp; Fine Jewellery
            </h1>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Gems & Jewellery')}
            className="bg-white hover:bg-[#f5f1e8] text-[#0e5a46] font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer flex-shrink-0"
          >
            Request Custom Jewelry RFQ
          </button>
        </div>
      </div>

      {/* Intro Spotlight */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-md border border-[#e6dec9] bg-white p-2">
            <ImageWithFallback
              src="/images/Untitled-design-16-scaled.webp"
              alt="Discover Luxury Gems & Jewellery Crafted with Precision"
              fallbackType="jewellery"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right Column: Text */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#0e5a46]/10 text-[#0e5a46] px-3.5 py-1 rounded-full text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Surat Master Craftsmanship &amp; Certified Stones</span>
            </div>
            <h2 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0e5a46]">
              Luxury Gems &amp; Fine Jewellery Crafted with Precision
            </h2>
            <p className="text-sm sm:text-base text-[#2f3437]/75 leading-relaxed font-light">
              Crafted in Surat, the world capital of diamond cutting and polishing, PriGlob Exim exports certified natural and CVD lab-grown diamonds, Colombian/Zambian emeralds, Ceylon sapphires, and hallmarked 14k/18k gold and 925 sterling silver jewelry.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              {[
                'Solitaire Diamond Rings',
                'Emerald Cut Rings',
                'Tennis Bracelets',
                'Gemstone Bangles',
                'Marquise Necklaces',
                'Stud & Drop Earrings',
                'Custom CAD Designs',
                '925 Sterling Silver',
                '14k & 18k BIS Gold',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-[#2f3437]/85 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0e5a46] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenQuoteModal('Gems & Jewellery')}
                className="bg-[#0e5a46] hover:bg-[#197a60] text-white font-bold px-7 py-3 rounded-xl text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
              >
                Inquire for Wholesale Lots &amp; Custom Setting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Export Specifications Bar */}
      <div className="border-y border-[#e6dec9] bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="font-serif-nature font-bold text-[#0e5a46] text-xs uppercase tracking-wider block">Certification</span>
            <p className="text-xs sm:text-sm text-[#2f3437]/75">IGI, GIA, SGL &amp; BIS Hallmarked</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif-nature font-bold text-[#0e5a46] text-xs uppercase tracking-wider block">Export Freight</span>
            <p className="text-xs sm:text-sm text-[#2f3437]/75">Insured Malca-Amit &amp; Brinks Air Vaults</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif-nature font-bold text-[#0e5a46] text-xs uppercase tracking-wider block">Customization</span>
            <p className="text-xs sm:text-sm text-[#2f3437]/75">3D CAD Modeling &amp; Laser Engraving</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif-nature font-bold text-[#0e5a46] text-xs uppercase tracking-wider block">Clearance</span>
            <p className="text-xs sm:text-sm text-[#2f3437]/75">Air Cargo Complex (BOM &amp; AMD)</p>
          </div>
        </div>
      </div>

      {/* Product Categories & Product Cards */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {GEMS_JEWELLERY_CATEGORIES.map((cat, catIdx) => (
          <section key={catIdx} className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#e6dec9] pb-3 gap-2">
              <h2 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46]">
                {cat.name}
              </h2>
              <span className="text-xs font-semibold text-[#478a3f]">
                {cat.products.length} Masterpiece Designs
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
                    fallbackType="jewellery"
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
