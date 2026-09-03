import React from 'react';
import { ActivePage } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { HeroSlider } from '../components/HeroSlider';
import { ExportTrustBar } from '../components/ExportTrustBar';

interface HomePageProps {
  onNavigate: (page: ActivePage) => void;
  onOpenQuoteModal: (product?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-[#F8F4EC] text-[#111111] overflow-hidden">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO SHOWCASE (Clean, Simple & Spacious)                       */}
      {/* ========================================================================= */}
      <HeroSlider
        onNavigate={onNavigate}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* ========================================================================= */}
      {/* SECTION 2: EXPORT TRUST & LOGISTICS STRIP (Borderless, Simple)             */}
      {/* ========================================================================= */}
      <ExportTrustBar />

      {/* ========================================================================= */}
      {/* SECTION 3: MANUFACTURING UNITS (Clean, Simple Editorial Style)            */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F9D9A7] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#734A12] block mb-2">
              Direct Sourcing &amp; Manufacturing
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
              Our Infrastructure for Global Supply
            </h2>
            <p className="text-sm sm:text-base text-[#444444] mt-2 leading-relaxed">
              Industrial facilities engineered for high-volume custom production, strict batch inspection, and containerized export.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Unit 1: Fabric Bags */}
            <div
              onClick={() => onNavigate('cotton-jute-tote-bag')}
              className="cursor-pointer group flex flex-col text-left space-y-3"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-white">
                <ImageWithFallback
                  src="/images/Fabric-Bag-Mfg.webp"
                  alt="Fabric Bags Manufacturing Unit"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackType="bag"
                />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#734A12] uppercase tracking-wider block">
                  OEM / ODM Facility • 50,000+ Units/Mo
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#8A5B20] transition">
                  Fabric Bags Manufacturing Unit
                </h3>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Automated cutting, custom silk-screen printing, and precision stitching for high-volume international retail orders.
                </p>
              </div>
            </div>

            {/* Unit 2: Jewellery */}
            <div
              onClick={() => onNavigate('gems-jewellery')}
              className="cursor-pointer group flex flex-col text-left space-y-3"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-white">
                <ImageWithFallback
                  src="/images/Jewellery-Mfg-1024x683.webp"
                  alt="Jewellery Design & Manufacturing Unit"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackType="jewellery"
                />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#734A12] uppercase tracking-wider block">
                  Artisan Lapidary • Hallmarked &amp; Insured
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#8A5B20] transition">
                  Jewellery Design &amp; Manufacturing Unit
                </h3>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Master gemstone cutting, diamond micro-setting, and 925 Silver / Gold casting certified for luxury global markets.
                </p>
              </div>
            </div>

            {/* Unit 3: Spices */}
            <div
              onClick={() => onNavigate('indian-spices')}
              className="cursor-pointer group flex flex-col text-left space-y-3"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-white">
                <ImageWithFallback
                  src="/images/Indian-Spices-Photo-1024x683.webp"
                  alt="Spice Sourcing & Processing Division"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackType="spices"
                />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#734A12] uppercase tracking-wider block">
                  Direct Farm Source • FSSAI &amp; Spices Board
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#8A5B20] transition">
                  Spice Sourcing &amp; Processing Division
                </h3>
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  Cold-milling, sortex cleaning, and vacuum packaging preserving essential aromatic oils, color, and culinary potency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: OUR CORE PRODUCT LINES (Simple & Clean)                        */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A7555] block mb-2">
            Export Product Catalogs
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
            Our Core Product Lines
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-2 leading-relaxed">
            Standardized manufacturing, rigorous batch testing, and sea-worthy export palletization across 3 primary trade divisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Card 1: Cotton & Jute Bags */}
          <div
            onClick={() => onNavigate('cotton-jute-tote-bag')}
            className="cursor-pointer group flex flex-col space-y-3"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F0EBE1] shadow-sm">
              <ImageWithFallback
                src="/images/Bag-1-638x1024.webp"
                alt="Cotton & Jute Bags"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                fallbackType="bag"
              />
            </div>
            <div className="space-y-1.5 text-left">
              <div className="text-xs font-semibold text-[#8A5B20] uppercase tracking-wider">
                Mundra Port • Sea FCL / LCL
              </div>
              <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#8A5B20] transition">
                Cotton &amp; Jute Bags
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Certified canvas, juco, and organic cotton bags for international retail, supermarkets, and promotional brands.
              </p>
              <div className="pt-2 flex items-center text-xs font-bold text-[#111111] group-hover:text-[#8A5B20] transition">
                <span>View Bag Styles &amp; Specs →</span>
              </div>
            </div>
          </div>

          {/* Card 2: Gems & Jewellery */}
          <div
            onClick={() => onNavigate('gems-jewellery')}
            className="cursor-pointer group flex flex-col space-y-3"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F0EBE1] shadow-sm">
              <ImageWithFallback
                src="/images/Diamond-Jewellery-683x1024.webp"
                alt="Gems & Jewellery"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                fallbackType="jewellery"
              />
            </div>
            <div className="space-y-1.5 text-left">
              <div className="text-xs font-semibold text-[#8A5B20] uppercase tracking-wider">
                Insured Air Cargo • Hallmarked Purity
              </div>
              <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#8A5B20] transition">
                Gems &amp; Fine Jewellery
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Lab-grown &amp; natural diamonds, precious gemstones, and custom 925 sterling silver/gold fine jewellery collections.
              </p>
              <div className="pt-2 flex items-center text-xs font-bold text-[#111111] group-hover:text-[#8A5B20] transition">
                <span>View Jewellery Collection →</span>
              </div>
            </div>
          </div>

          {/* Card 3: Authentic Indian Spices */}
          <div
            onClick={() => onNavigate('indian-spices')}
            className="cursor-pointer group flex flex-col space-y-3"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F0EBE1] shadow-sm">
              <ImageWithFallback
                src="/images/Indian-Spices-683x1024.webp"
                alt="Authentic Indian Spices"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                fallbackType="spices"
              />
            </div>
            <div className="space-y-1.5 text-left">
              <div className="text-xs font-semibold text-[#8A5B20] uppercase tracking-wider">
                20ft/40ft Ocean FCL • Phytosanitary
              </div>
              <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#8A5B20] transition">
                Authentic Indian Spices
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Whole and ground turmeric, cumin, cardamom, red chili, and ginger sourced directly from certified agrarian zones.
              </p>
              <div className="pt-2 flex items-center text-xs font-bold text-[#111111] group-hover:text-[#8A5B20] transition">
                <span>View Spice Specifications →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: GLOBAL TRADE OPERATIONS & LOGISTICS NETWORK (Import/Export Core) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#181614] text-[#EDE8DF] px-4 sm:px-6 lg:px-8 border-y border-[#2D2924]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#F9D9A7] bg-[#2C2824] px-3.5 py-1 rounded-full border border-[#3E3831]">
              Global Trade Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-3">
              End-to-End Export Logistics &amp; Port Connectivity
            </h2>
            <p className="text-xs sm:text-sm text-[#B5ABA0] mt-2 leading-relaxed">
              Seamlessly bridging Indian manufacturing hubs with international maritime trade corridors across Europe, the Americas, GCC, and the Asia-Pacific.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1: Sea Ports */}
            <div className="bg-[#24211D] p-5 rounded-2xl border border-[#36322C] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F9D9A7]/10 flex items-center justify-center text-[#F9D9A7]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white">Strategic Port Network</h3>
              <ul className="space-y-2 text-xs text-[#B5ABA0]">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#F9D9A7]">•</span>
                  <span><strong>Mundra Port (INMUN1):</strong> India's largest commercial deep-sea gateway</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#F9D9A7]">•</span>
                  <span><strong>Pipavav Port (INPAV1):</strong> Fast rail-linked container terminal</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#F9D9A7]">•</span>
                  <span><strong>JNPT Nhava Sheva (INNSA1):</strong> High-frequency global liner services</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Container Loads */}
            <div className="bg-[#24211D] p-5 rounded-2xl border border-[#36322C] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F9D9A7]/10 flex items-center justify-center text-[#F9D9A7]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white">Container Shipping Modes</h3>
              <ul className="space-y-2 text-xs text-[#B5ABA0]">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#F9D9A7]">•</span>
                  <span><strong>FCL (Full Container):</strong> 20ft Standard (33 CBM) &amp; 40ft High Cube (76 CBM)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#F9D9A7]">•</span>
                  <span><strong>LCL (Consolidated):</strong> Cost-effective palletized cargo consolidation</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#F9D9A7]">•</span>
                  <span><strong>Air Freight Terminals:</strong> Ahmedabad (AMD) &amp; Mumbai (BOM)</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Export Documentation */}
            <div className="bg-[#24211D] p-5 rounded-2xl border border-[#36322C] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F9D9A7]/10 flex items-center justify-center text-[#F9D9A7]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white">Customs &amp; Compliance</h3>
              <ul className="space-y-2 text-xs text-[#B5ABA0]">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#F9D9A7]">•</span>
                  <span><strong>Certificate of Origin (COO):</strong> Legalized via Chamber of Commerce</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#F9D9A7]">•</span>
                  <span><strong>Phytosanitary &amp; Fumigation:</strong> ISPM-15 export quarantine standard</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#F9D9A7]">•</span>
                  <span><strong>Testing &amp; Inspection:</strong> SGS, Intertek, or Bureau Veritas on request</span>
                </li>
              </ul>
            </div>

            {/* Box 4: Commercial Incoterms */}
            <div className="bg-[#24211D] p-5 rounded-2xl border border-[#36322C] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F9D9A7]/10 flex items-center justify-center text-[#F9D9A7]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white">Commercial Trade Terms</h3>
              <ul className="space-y-2 text-xs text-[#B5ABA0]">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#F9D9A7]">•</span>
                  <span><strong>FOB:</strong> Free On Board (Vessel dispatch at Indian port)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#F9D9A7]">•</span>
                  <span><strong>CIF &amp; CFR:</strong> Cost, Insurance &amp; Freight to destination port</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#F9D9A7]">•</span>
                  <span><strong>Flexible Payment:</strong> Irrevocable L/C at sight, T/T wire transfer</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Fast Track Quote Banner */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-[#221F1B] border border-[#3E3831] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-white">Need Container Rates or Freight Estimation?</h4>
              <p className="text-xs text-[#A89F90] mt-1">Our international export desk provides CIF/FOB quotes within 24 hours.</p>
            </div>
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-2.5 rounded-full bg-[#F9D9A7] text-[#111111] font-bold text-xs sm:text-sm hover:bg-white transition whitespace-nowrap shadow-sm"
            >
              Request Container Quote
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: OUR CORE STRENGTHS (has-tertiary-background-color #F9D9A7)     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F9D9A7] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
              Our Core Strengths
            </h2>
            <p className="text-sm sm:text-base text-[#333333] mt-2">
              Strong manufacturing capabilities, global supply expertise, and competitive business solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Strength 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-[#111111]" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M172,76a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,76Zm-44,28a28,28,0,1,1,28-28A28,28,0,0,1,128,104Zm60,24a44,44,0,1,0,44,44A44.05,44.05,0,0,0,188,128Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,188,200ZM68,128a44,44,0,1,0,44,44A44.05,44.05,0,0,0,68,128Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,68,200Z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#111111]">
                  Quality Product Manufacturing
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed">
                  Our manufacturing process ensures your products meet the highest standards.
                </p>
              </div>
            </div>

            {/* Strength 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-[#111111]" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M80,40a40,40,0,1,0,40,40A40,40,0,0,0,80,40Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,104Zm96,16a40,40,0,1,0-40-40A40,40,0,0,0,176,120Zm0-64a24,24,0,1,1-24,24A24,24,0,0,1,176,56ZM80,136a40,40,0,1,0,40,40A40,40,0,0,0,80,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,200Zm96-64a40,40,0,1,0,40,40A40,40,0,0,0,176,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,176,200Z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#111111]">
                  Efficient Global Logistics
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed">
                  We manage worldwide supply chains for timely and reliable delivery.
                </p>
              </div>
            </div>

            {/* Strength 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-[#111111]" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M80,40a40,40,0,1,0,40,40A40,40,0,0,0,80,40Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,104Zm96,16a40,40,0,1,0-40-40A40,40,0,0,0,176,120Zm0-64a24,24,0,1,1-24,24A24,24,0,0,1,176,56ZM80,136a40,40,0,1,0,40,40A40,40,0,0,0,80,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,200Zm136-24a8,8,0,0,1-8,8H184v24a8,8,0,0,1-16,0V184H144a8,8,0,0,1,0-16h24V144a8,8,0,0,1,16,0v24h24A8,8,0,0,1,216,176Z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#111111]">
                  Competitive Pricing Strategies
                </h3>
                <p className="text-sm text-[#444444] leading-relaxed">
                  Offering cost-effective options tailored to your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: OUR JOURNEY IN GLOBAL TRADE (#F8F4EC)                         */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
            Our Journey in Global Trade
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-3">
            Providing dedicated support, custom manufacturing, and global trade expertise to help your business expand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24">
              <img
                src="/images/sea-shipment.png"
                alt="Cargo Consignments"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111]">
                228  Consignment Done
              </h2>
              <p className="text-sm text-[#555555] leading-relaxed">
                Successfully delivered 228 consignments to international markets.
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24">
              <img
                src="/images/deal.png"
                alt="Happy Buyers"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111]">
                63  Happy Buyers
              </h2>
              <p className="text-sm text-[#555555] leading-relaxed">
                63 trusted buyers worldwide building long-term partnerships with us.
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24">
              <img
                src="/images/reputation.png"
                alt="Years Experience"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111]">
                4  Years Experience
              </h2>
              <p className="text-sm text-[#555555] leading-relaxed">
                4 years of trusted experience in global export and international trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: LOGOS / CERTIFICATIONS (#F9D9A7)                              */}
      {/* ========================================================================= */}
      <section className="py-12 bg-[#F9D9A7] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-around gap-8 sm:gap-12">
          <img
            src="/images/ChatGPT-Image-Mar-12-2026-05_53_35-PM.webp"
            alt="Certification 1"
            className="h-16 sm:h-20 w-auto object-contain"
          />
          <img
            src="/images/QYEvIxI_400x400-removebg-preview-1.png"
            alt="Certification 2"
            className="h-16 sm:h-20 w-auto object-contain"
          />
          <img
            src="/images/ChatGPT-Image-Mar-12-2026-05_38_48-PM-2.webp"
            alt="Certification 3"
            className="h-16 sm:h-20 w-auto object-contain"
          />
          <img
            src="/images/logo.png"
            alt="Certification 4"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
};
