import React from 'react';
import { ActivePage } from '../types';
import { ImageWithFallback } from '../components/ImageWithFallback';

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
      {/* SECTION 1: HERO (WP wp-container-core-group-is-layout-a48a956d)           */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (58.3%) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] leading-[1.25]">
              Delivering Quality Products to International Markets for Global Brands
            </h3>
            <p className="text-base sm:text-lg font-medium text-[#111111]">
              Quality Products Exports for Global Markets
            </p>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed max-w-xl mx-auto lg:mx-0">
              PriGlob Exim delivers superior products with global reach, combining quality craftsmanship and competitive pricing to meet your business demands effectively.
            </p>
            <div className="pt-2 flex justify-center lg:justify-start">
              <button
                id="hero-quote-btn"
                onClick={() => onOpenQuoteModal()}
                className="px-8 py-3.5 rounded-full bg-[#111111] text-white font-bold text-sm sm:text-base hover:bg-black transition shadow-sm active:scale-95"
              >
                Request a Quote
              </button>
            </div>
          </div>

          {/* Right Column (41.7%) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6 items-start">
            {/* Subcolumn 1 */}
            <div className="space-y-4">
              <div className="rounded-[32px] overflow-hidden shadow-xs">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1670121180530-cfcba4438038?ixid=M3w0MzUxNjF8MHwxfHNlYXJjaHw1fHxnbG9iYWwlMjB0cmFkZXxlbnwwfHx8fDE3NzMxOTExMzJ8MA&ixlib=rb-4.1.0&orientation=portrait&fit=crop&crop=entropy%2Cfaces&auto=format%2Ccompress&w=1280"
                  alt="Global Trade & Logistics"
                  className="w-full aspect-[3/4] object-cover rounded-[32px]"
                  fallbackType="corporate"
                />
              </div>
              <div className="text-center pt-2">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] tracking-tight">228</h2>
                <p className="text-sm font-medium text-[#444444] mt-1">Global Supply Excellence</p>
              </div>
            </div>

            {/* Subcolumn 2 */}
            <div className="space-y-4">
              {/* Top empty spacer card in tertiary #F9D9A7 */}
              <div className="h-32 sm:h-40 rounded-[32px] bg-[#F9D9A7]" />
              {/* Overlapping Airplane Cargo Image */}
              <div className="rounded-[32px] overflow-hidden shadow-xs -mt-16 sm:-mt-20">
                <ImageWithFallback
                  src="https://priglobexim.com/wp-content/uploads/2026/03/airlines-cta-image-1024x768.png"
                  alt="Airlines Cargo Worldwide Freight"
                  className="w-full aspect-[3/4] object-cover rounded-[32px]"
                  fallbackType="general"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: MANUFACTURING UNITS (has-tertiary-background-color #F9D9A7)   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F9D9A7] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
              Premium Manufacturing Units for Worldwide Supply
            </h2>
            <p className="text-sm sm:text-base text-[#333333] mt-3 leading-relaxed">
              Discover our expertly crafted products and unbeatable offers designed to optimize your global procurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Unit 1: Fabric Bags */}
            <div
              onClick={() => onNavigate('cotton-jute-tote-bag')}
              className="cursor-pointer group flex flex-col items-center text-center"
            >
              <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                <ImageWithFallback
                  src="https://priglobexim.com/wp-content/uploads/2026/03/Fabric-Bag-Mfg.png"
                  alt="Fabric Bags Manufacturing Unit"
                  className="w-full h-full object-cover rounded-[32px]"
                  fallbackType="bag"
                />
              </div>
              <figcaption className="mt-4 text-base sm:text-lg font-medium text-[#111111] group-hover:font-semibold transition">
                Fabric Bags Manufacturing Unit
              </figcaption>
            </div>

            {/* Unit 2: Jewellery */}
            <div
              onClick={() => onNavigate('gems-jewellery')}
              className="cursor-pointer group flex flex-col items-center text-center"
            >
              <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                <ImageWithFallback
                  src="https://priglobexim.com/wp-content/uploads/2026/03/Jewellery-Mfg-1024x683.png"
                  alt="Jewellery Design & Manufacturing Unit"
                  className="w-full h-full object-cover rounded-[32px]"
                  fallbackType="jewellery"
                />
              </div>
              <figcaption className="mt-4 text-base sm:text-lg font-medium text-[#111111] group-hover:font-semibold transition">
                Jewellery Design &amp; Manufacturing Unit
              </figcaption>
            </div>

            {/* Unit 3: Spices */}
            <div
              onClick={() => onNavigate('indian-spices')}
              className="cursor-pointer group flex flex-col items-center text-center"
            >
              <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                <ImageWithFallback
                  src="https://priglobexim.com/wp-content/uploads/2026/03/Indian-Spices-Photo-1024x683.png"
                  alt="Spice Sourcing & Processing Division"
                  className="w-full h-full object-cover rounded-[32px]"
                  fallbackType="spices"
                />
              </div>
              <figcaption className="mt-4 text-base sm:text-lg font-medium text-[#111111] group-hover:font-semibold transition">
                Spice Sourcing &amp; Processing Division
              </figcaption>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: OUR QUALITY PRODUCTS (Product Block matching source)           */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
            Our Quality Products for Worldwide Brands
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-3 leading-relaxed">
            PriGlob Exim is committed to manufacturing superior products and facilitating smooth global supply chains. Our mission is to provide efficient, cost-effective solutions that support our customers’ growth and success worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Cotton & Jute Bags */}
          <div
            onClick={() => onNavigate('cotton-jute-tote-bag')}
            className="bg-[#F9D9A7] rounded-[32px] overflow-hidden cursor-pointer flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="w-full aspect-square overflow-hidden">
              <ImageWithFallback
                src="https://priglobexim.com/wp-content/uploads/2026/03/Bag-1-638x1024.png"
                alt="Cotton & Jute Bags"
                className="w-full h-full object-cover"
                fallbackType="bag"
              />
            </div>
            <div className="p-6 sm:p-7 text-center space-y-2 flex-1 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111]">
                <strong>Cotton &amp; Jute Bags</strong>
              </h2>
              <p className="text-sm text-[#444444] leading-relaxed">
                Eco-friendly cotton and jute bags designed for sustainable packaging, daily use, and global markets.
              </p>
            </div>
          </div>

          {/* Card 2: Gems & Jewellery */}
          <div
            onClick={() => onNavigate('gems-jewellery')}
            className="bg-[#F9D9A7] rounded-[32px] overflow-hidden cursor-pointer flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="w-full aspect-square overflow-hidden">
              <ImageWithFallback
                src="https://priglobexim.com/wp-content/uploads/2026/03/Diamond-Jewellery-683x1024.png"
                alt="Gems & Jewellery"
                className="w-full h-full object-cover"
                fallbackType="jewellery"
              />
            </div>
            <div className="p-6 sm:p-7 text-center space-y-2 flex-1 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111]">
                <strong>Gems &amp; Jewellery</strong>
              </h2>
              <p className="text-sm text-[#444444] leading-relaxed">
                High-quality diamonds and colored gemstones crafted for fine jewellery and international luxury markets.
              </p>
            </div>
          </div>

          {/* Card 3: Authentic Indian Spices */}
          <div
            onClick={() => onNavigate('indian-spices')}
            className="bg-[#F9D9A7] rounded-[32px] overflow-hidden cursor-pointer flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="w-full aspect-square overflow-hidden">
              <ImageWithFallback
                src="https://priglobexim.com/wp-content/uploads/2026/03/Indian-Spices-683x1024.png"
                alt="Authentic Indian Spices"
                className="w-full h-full object-cover"
                fallbackType="spices"
              />
            </div>
            <div className="p-6 sm:p-7 text-center space-y-2 flex-1 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111]">
                <strong>Authentic Indian Spices</strong>
              </h2>
              <p className="text-sm text-[#444444] leading-relaxed">
                Fresh, aromatic spices sourced from trusted farms and processed for global culinary brands.
              </p>
            </div>
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
                src="http://priglobexim.com/wp-content/uploads/2026/03/cargo.png"
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
                src="http://priglobexim.com/wp-content/uploads/2026/03/deal.png"
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
                src="http://priglobexim.com/wp-content/uploads/2026/03/reputation.png"
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
            src="http://priglobexim.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-12-2026-05_53_35-PM.png"
            alt="Certification 1"
            className="h-16 sm:h-20 w-auto object-contain"
          />
          <img
            src="https://priglobexim.com/wp-content/uploads/2026/03/QYEvIxI_400x400-removebg-preview-1.png"
            alt="Certification 2"
            className="h-16 sm:h-20 w-auto object-contain"
          />
          <img
            src="https://priglobexim.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-12-2026-05_38_48-PM-2.png"
            alt="Certification 3"
            className="h-16 sm:h-20 w-auto object-contain"
          />
          <img
            src="https://priglobexim.com/wp-content/uploads/2026/03/logo.png"
            alt="Certification 4"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
};
