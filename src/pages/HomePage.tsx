import React from 'react';
import { ActivePage } from '../types';
import { HeroSlider } from '../components/HeroSlider';
import { CategorySlider } from '../components/CategorySlider';
import { ProductCard } from '../components/ProductCard';
import {
  COTTON_JUTE_CATEGORIES,
  GEMS_JEWELLERY_CATEGORIES,
  INDIAN_SPICES_CATEGORIES,
} from '../data/catalogData';
import {
  ChevronRight,
  Leaf,
  Award,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Users2,
  ArrowRight,
  Globe2,
  Ship,
  FileCheck,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: ActivePage) => void;
  onOpenQuoteModal: (product?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  // Grab top 4 products for each category showcase matching Naturetote 4-column layout
  const toteProducts = COTTON_JUTE_CATEGORIES.flatMap((c) => c.products).slice(0, 8);
  const jewelleryProducts = GEMS_JEWELLERY_CATEGORIES.flatMap((c) => c.products).slice(0, 4);
  const spiceProducts = INDIAN_SPICES_CATEGORIES.flatMap((c) => c.products).slice(0, 4);

  return (
    <div className="w-full flex flex-col bg-[#f5f1e8] text-[#2f3437]">
      {/* 1. Naturetote Full-Width Hero Slider with Bottom Linear Progress Indicators */}
      <HeroSlider
        onNavigate={onNavigate}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* 2. Naturetote Circular Category Rail */}
      <CategorySlider
        onSelectCategory={(page) => {
          onNavigate(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 3. Showcase 1: Cotton & Jute Bags (Naturetote ditto layout) */}
      <section className="w-full py-8 sm:py-12 border-t border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46]">
                Cotton &amp; Jute Bags
              </h2>
              <p className="text-xs sm:text-sm text-[#2f3437]/65 font-light">
                GOTS certified organic cotton totes &amp; heavy-duty 350 GSM natural golden jute hampers
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('cotton-jute-tote-bag');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs sm:text-sm font-bold text-[#0e5a46] hover:text-[#197a60] flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>View All ({COTTON_JUTE_CATEGORIES.flatMap(c => c.products).length})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {toteProducts.slice(0, 4).map((product, idx) => (
              <ProductCard
                key={idx}
                product={product}
                fallbackType="bag"
                onInquire={(title) => onOpenQuoteModal(title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Showcase 2: Gems & Fine Jewellery (Naturetote ditto layout) */}
      <section className="w-full py-8 sm:py-12 bg-white/40 border-t border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46]">
                Gems &amp; Fine Jewellery
              </h2>
              <p className="text-xs sm:text-sm text-[#2f3437]/65 font-light">
                IGI &amp; GIA certified Surat lab-grown &amp; natural diamonds, precious emeralds, and 925 fine silver
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('gems-jewellery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs sm:text-sm font-bold text-[#0e5a46] hover:text-[#197a60] flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>View All ({GEMS_JEWELLERY_CATEGORIES.flatMap(c => c.products).length})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {jewelleryProducts.map((product, idx) => (
              <ProductCard
                key={idx}
                product={product}
                fallbackType="jewellery"
                onInquire={(title) => onOpenQuoteModal(title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Showcase 3: Authentic Indian Spices (Naturetote ditto layout) */}
      <section className="w-full py-8 sm:py-12 border-t border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46]">
                Authentic Indian Spices
              </h2>
              <p className="text-xs sm:text-sm text-[#2f3437]/65 font-light">
                Direct farm-origin Salem turmeric, Unjha cumin seeds, green cardamom &amp; AGMARK certified spices
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('indian-spices');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs sm:text-sm font-bold text-[#0e5a46] hover:text-[#197a60] flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>View All ({INDIAN_SPICES_CATEGORIES.flatMap(c => c.products).length})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {spiceProducts.map((product, idx) => (
              <ProductCard
                key={idx}
                product={product}
                fallbackType="spices"
                onInquire={(title) => onOpenQuoteModal(title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Naturetote 4-Column Features / USP Banner */}
      <section className="w-full py-12 bg-white border-y border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-[#e6dec9] p-6 rounded-2xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0e5a46]/10 rounded-2xl flex items-center justify-center text-[#0e5a46]">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif-nature text-[#0e5a46] text-base sm:text-lg font-bold">
                100% Biodegradable &amp; Pure
              </h3>
              <p className="text-[#2f3437]/65 text-xs sm:text-sm font-light leading-relaxed">
                Natural unbleached organic jute, zero-plastic cotton fibres, and unadulterated agrarian whole spices.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#e6dec9] p-6 rounded-2xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0e5a46]/10 rounded-2xl flex items-center justify-center text-[#0e5a46]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif-nature text-[#0e5a46] text-base sm:text-lg font-bold">
                Custom OEM Branding
              </h3>
              <p className="text-[#2f3437]/65 text-xs sm:text-sm font-light leading-relaxed">
                Corporate logos, screen-printed hangtags, custom jewelry engraving, and bespoke retail packaging.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#e6dec9] p-6 rounded-2xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0e5a46]/10 rounded-2xl flex items-center justify-center text-[#0e5a46]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif-nature text-[#0e5a46] text-base sm:text-lg font-bold">
                Made in India Direct
              </h3>
              <p className="text-[#2f3437]/65 text-xs sm:text-sm font-light leading-relaxed">
                Manufactured by master Gujarat artisans and native growers with zero third-party agent markups.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#e6dec9] p-6 rounded-2xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0e5a46]/10 rounded-2xl flex items-center justify-center text-[#0e5a46]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-nature text-[#0e5a46] text-base sm:text-lg font-bold">
                Secure Global Shipping
              </h3>
              <p className="text-[#2f3437]/65 text-xs sm:text-sm font-light leading-relaxed">
                Full container FCL &amp; LCL cargo from Mundra &amp; Pipavav ports with marine insurance and LC terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Naturetote "Why Choose Us" Editorial Section */}
      <section className="w-full py-16 bg-[#f5f1e8] border-b border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col gap-3">
              <h2 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e5a46] leading-tight">
                Why Choose Export Products <br />from PriGlob Exim?
              </h2>
              <div className="w-16 h-1 bg-[#478a3f]/60 rounded-full" />
              <p className="text-[#2f3437]/70 text-sm font-light leading-relaxed mt-2">
                We bridge the gap between India&apos;s rich manufacturing heritage and international trade requirements. Every shipment is batch-tested, certified by statutory export promotion councils, and delivered on strict FOB/CIF schedules.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0e5a46] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#2f3437]/85 font-medium leading-normal">
                  Reinforced double-stitched fabric handles capable of supporting up to 15-20 kg export loads.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0e5a46] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#2f3437]/85 font-medium leading-normal">
                  Certified unbleached raw organic cotton fibers compliant with EU REACH standards.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0e5a46] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#2f3437]/85 font-medium leading-normal">
                  Surat precision lab-grown &amp; natural diamond cuts with laser-engraved certification.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0e5a46] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#2f3437]/85 font-medium leading-normal">
                  Steam-sterilized Indian whole spices with verified moisture, oil content &amp; curcumin tests.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0e5a46] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#2f3437]/85 font-medium leading-normal">
                  Government of India IEC registered with Port of Loading Mundra, Pipavav &amp; Ahmedabad Air Cargo.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0e5a46] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#2f3437]/85 font-medium leading-normal">
                  Transparent trade pricing under Incoterms 2020: FOB, CIF, CFR, and Door-to-Door DDP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Dedicated "Our Company & Executive Team" Spotlight */}
      {/* (User prompt: "paste same to same, but it reference site dont have thong like our team our company then add it") */}
      <section className="w-full py-14 sm:py-18 bg-white border-b border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#478a3f] block mb-2">
              Corporate Overview &amp; Leadership
            </span>
            <h2 className="font-serif-nature text-2xl sm:text-3xl font-bold text-[#0e5a46]">
              About PriGlob Exim &amp; Our Team
            </h2>
            <p className="text-xs sm:text-sm text-[#2f3437]/65 mt-2 font-light">
              Rooted in Surat, Gujarat — India&apos;s trade capital — we connect global buyers directly with certified manufacturing facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Card */}
            <div className="bg-[#f5f1e8] border border-[#e6dec9] rounded-2xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#0e5a46] text-white rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif-nature text-xl font-bold text-[#0e5a46]">
                  Our Company Infrastructure
                </h3>
                <p className="text-xs sm:text-sm text-[#2f3437]/75 font-light leading-relaxed">
                  PriGlob Exim operates dedicated manufacturing units for cotton &amp; jute bags, gemstone lapidary workshops in Surat, and agrarian spice aggregation hubs in Gujarat. Fully compliant with international customs and environmental protocols.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-[#0e5a46]">
                  <span className="bg-white px-2.5 py-1 rounded-md border border-[#e6dec9]">Govt. IEC Registration</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-[#e6dec9]">Mundra Port Loading</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-[#e6dec9]">25+ Export Destinations</span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    onNavigate('our-company');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#0e5a46] hover:bg-[#197a60] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Explore Our Company</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Team Card */}
            <div className="bg-[#f5f1e8] border border-[#e6dec9] rounded-2xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#0e5a46] text-white rounded-xl flex items-center justify-center">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif-nature text-xl font-bold text-[#0e5a46]">
                  Executive Leadership Team
                </h3>
                <p className="text-xs sm:text-sm text-[#2f3437]/75 font-light leading-relaxed">
                  Led by experienced international trade specialists and export logistics directors. Our dedicated regional desks serve Asia, Africa, Europe, Oceania, and the Americas with seamless communication in multiple languages.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-[#0e5a46]">
                  <span className="bg-white px-2.5 py-1 rounded-md border border-[#e6dec9]">Asia &amp; Africa Desk</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-[#e6dec9]">EU &amp; Americas Desk</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-[#e6dec9]">24/7 RFQ Turnaround</span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    onNavigate('our-team');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#0e5a46] hover:bg-[#197a60] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Meet Our Leadership Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
