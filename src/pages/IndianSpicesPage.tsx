import React from 'react';
import { INDIAN_SPICES_CATEGORIES } from '../data/catalogData';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

interface IndianSpicesPageProps {
  onOpenQuoteModal: (product?: string) => void;
}

export const IndianSpicesPage: React.FC<IndianSpicesPageProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-[#f5f1e8] text-[#2f3437] min-h-screen">
      {/* Naturetote Header Banner */}
      <div className="bg-[#0e5a46] text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#6bcb5b] block mb-1">
              Phytosanitary &amp; AGMARK Certified Exports
            </span>
            <h1 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold">
              Authentic Indian Spices
            </h1>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Indian Spices')}
            className="bg-white hover:bg-[#f5f1e8] text-[#0e5a46] font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer flex-shrink-0"
          >
            Request FCL Container RFQ
          </button>
        </div>
      </div>

      {/* Intro Spotlight */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-md border border-[#e6dec9] bg-white p-2">
            <ImageWithFallback
              src="/images/Untitled-design-17.webp"
              alt="Authentic Indian Spices for Worldwide Export and Supply"
              fallbackType="spices"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right Column: Text */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#0e5a46]/10 text-[#0e5a46] px-3.5 py-1 rounded-full text-xs font-semibold">
              <Flame className="w-3.5 h-3.5" />
              <span>Direct Agrarian Origin &amp; High Essential Oils</span>
            </div>
            <h2 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0e5a46]">
              Authentic Indian Spices for Worldwide Export &amp; Supply
            </h2>
            <p className="text-sm sm:text-base text-[#2f3437]/75 leading-relaxed font-light">
              From unadulterated Gujarat cumin to Salem turmeric with guaranteed 3-5% curcumin levels, PriGlob Exim aggregates, cleans, steam-sterilizes, and containerizes export-grade whole and ground spices conforming to US FDA and European Commission import standards.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              {[
                'Turmeric Fingers (Curcumin 3%+)',
                'Unjha Cumin Seeds (99% Clean)',
                'Coriander Seeds Eagle Grade',
                'Guntur Red Chilli S4 & Teja',
                'Malabar Black Pepper',
                'Green Cardamom Bold 8mm',
                'Kerala Whole Cloves',
                'Fenugreek & Mustard Seeds',
                'Custom Blended Masalas',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-[#2f3437]/85 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0e5a46] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenQuoteModal('Indian Spices')}
                className="bg-[#0e5a46] hover:bg-[#197a60] text-white font-bold px-7 py-3 rounded-xl text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
              >
                Inquire for 20ft / 40ft Container Rates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Export Specifications Bar */}
      <div className="border-y border-[#e6dec9] bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="font-serif-nature font-bold text-[#0e5a46] text-xs uppercase tracking-wider block">Origin Verification</span>
            <p className="text-xs sm:text-sm text-[#2f3437]/75">Spices Board of India Registered</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif-nature font-bold text-[#0e5a46] text-xs uppercase tracking-wider block">Port of Loading</span>
            <p className="text-xs sm:text-sm text-[#2f3437]/75">Mundra Port &amp; Pipavav Port, Gujarat</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif-nature font-bold text-[#0e5a46] text-xs uppercase tracking-wider block">Export Packaging</span>
            <p className="text-xs sm:text-sm text-[#2f3437]/75">25kg / 50kg PP Bags, Jute Bags &amp; Vacuum</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif-nature font-bold text-[#0e5a46] text-xs uppercase tracking-wider block">Quality Testing</span>
            <p className="text-xs sm:text-sm text-[#2f3437]/75">SGS / Geo-Chem Inspection Available</p>
          </div>
        </div>
      </div>

      {/* Product Categories & Product Cards */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {INDIAN_SPICES_CATEGORIES.map((cat, catIdx) => (
          <section key={catIdx} className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#e6dec9] pb-3 gap-2">
              <h2 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46]">
                {cat.name}
              </h2>
              <span className="text-xs font-semibold text-[#478a3f]">
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
