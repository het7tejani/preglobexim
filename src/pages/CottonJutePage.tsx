import React from 'react';
import { COTTON_JUTE_CATEGORIES } from '../data/catalogData';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Leaf, Award, CheckCircle2, PackageCheck } from 'lucide-react';

interface CottonJutePageProps {
  onOpenQuoteModal: (product?: string) => void;
}

export const CottonJutePage: React.FC<CottonJutePageProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-[#f5f1e8] text-[#2f3437] min-h-screen">
      {/* Naturetote Header Banner */}
      <div className="bg-[#0e5a46] text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#6bcb5b] block mb-1">
              Eco-Friendly Export Packaging
            </span>
            <h1 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold">
              Cotton &amp; Jute Tote Bags
            </h1>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Cotton & Jute Bags')}
            className="bg-white hover:bg-[#f5f1e8] text-[#0e5a46] font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer flex-shrink-0"
          >
            Request Bulk Catalog RFQ
          </button>
        </div>
      </div>

      {/* Intro Spotlight */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-md border border-[#e6dec9] bg-white p-2">
            <ImageWithFallback
              src="/images/Untitled-design-10-scaled.webp"
              alt="Cotton & Jute Reusable Tote Bags"
              fallbackType="bag"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right Column: Text */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#0e5a46]/10 text-[#0e5a46] px-3.5 py-1 rounded-full text-xs font-semibold">
              <Leaf className="w-3.5 h-3.5" />
              <span>100% Biodegradable &amp; Organic Packaging</span>
            </div>
            <h2 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0e5a46]">
              Cotton &amp; Jute Reusable Tote Bags
            </h2>
            <p className="text-sm sm:text-base text-[#2f3437]/75 leading-relaxed font-light">
              PriGlob Exim is a trusted merchant manufacturer and exporter of certified organic cotton and heavy golden jute bags. From small retail packaging pouches to heavy-duty grocery totes, our export variants are double-stitched and tested for international retail compliance.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              {[
                'Drawstring Pouches',
                'Cotton Pouch Bags',
                'Canvas Tote Bags',
                'Wardrobe Organizers',
                'Jute Hamper Bags',
                'Kids Tote Bags',
                'Mini & Wide Totes',
                'Everyday Shopper Bags',
                'Office & Lunch Bags',
                'Bottle Bags (Custom Inquiry)',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-[#2f3437]/85 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0e5a46] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenQuoteModal('Cotton & Jute Bags')}
                className="bg-[#0e5a46] hover:bg-[#197a60] text-white font-bold px-7 py-3 rounded-xl text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
              >
                Inquire for Custom Sizes &amp; Printing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Export Specifications Bar */}
      <div className="border-y border-[#e6dec9] bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="font-serif-nature font-bold text-[#0e5a46] text-xs uppercase tracking-wider block">Port of Loading</span>
            <p className="text-xs sm:text-sm text-[#2f3437]/75">Mundra &amp; Pipavav Port, Gujarat</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif-nature font-bold text-[#0e5a46] text-xs uppercase tracking-wider block">Incoterms Supported</span>
            <p className="text-xs sm:text-sm text-[#2f3437]/75">FOB, CIF, CFR, EXW, DDP</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif-nature font-bold text-[#0e5a46] text-xs uppercase tracking-wider block">Packaging &amp; OEM</span>
            <p className="text-xs sm:text-sm text-[#2f3437]/75">Export Cartons, Palletizing &amp; Silk Screen</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif-nature font-bold text-[#0e5a46] text-xs uppercase tracking-wider block">Sample Dispatch</span>
            <p className="text-xs sm:text-sm text-[#2f3437]/75">Custom Samples in 5-7 Days via DHL</p>
          </div>
        </div>
      </div>

      {/* Product Categories & Product Cards */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {COTTON_JUTE_CATEGORIES.map((cat, catIdx) => (
          <section key={catIdx} className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#e6dec9] pb-3 gap-2">
              <h2 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46]">
                {cat.name}
              </h2>
              <span className="text-xs font-semibold text-[#478a3f]">
                {cat.name.includes("Bottle Bags") ? "Custom inquiry - sample and availability to confirm" : `${cat.products.length} Export Variants Available`}
              </span>
            </div>

            {cat.name.includes('Bottle Bags') && (
              <p className="text-sm text-[#2f3437]/75">These are custom inquiries, not stocked bottle-bag products. Photos show existing jute and canvas totes as material examples only. Ask for an actual bottle-bag sample, size, capacity and quote.</p>
            )}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {cat.products.map((product, pIdx) => (
                <div
                  key={pIdx}
                  className="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] min-w-[260px] max-w-[310px] flex"
                >
                  <ProductCard
                    product={product}
                    fallbackType="bag"
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
