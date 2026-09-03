import React from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const OurCompanyPage: React.FC = () => {
  return (
    <div className="bg-[#F8F4EC] text-[#111111] min-h-screen">
      {/* ========================================================================= */}
      {/* SECTION 1: BANNER (#F9D9A7)                                               */}
      {/* ========================================================================= */}
      <div className="bg-[#F9D9A7] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-[#111111]">
            Our Company
          </h1>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: ABOUT PRIGLOB EXIM                                             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-xs">
            <ImageWithFallback
              src="https://priglobexim.com/wp-content/uploads/2026/03/Untitled-design-20.png"
              alt="About PriGlob Exim"
              fallbackType="corporate"
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>

          {/* Right Column: Text */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
              <strong>About PriGlob Exim</strong>
            </h2>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
              At PriGlob Exim, we specialize in delivering high-quality products across diverse industries to global markets. With a strong foundation in manufacturing, supply chain efficiency, and international trade compliance, we bridge the gap between Indian craftsmanship and global demand.
            </p>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
              Our commitment to quality, transparent business practices, and customer-centric solutions make us a reliable partner for businesses worldwide looking for dependable export solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: MISSION & VISION (#F9D9A7)                                     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 bg-[#F9D9A7] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              Our Mission &amp; Vision
            </h2>
            <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
              To deliver reliable, high-quality, and technology-driven export-import solutions that help businesses grow globally.<br />
              To become a trusted global trade partner known for innovation, transparency, and long-term value creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">100%</h3>
              <h3 className="text-lg font-bold text-[#111111]">Quality Assurance</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Ensuring every product meets global standards and client expectations.
              </p>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">9+</h3>
              <h3 className="text-lg font-bold text-[#111111]">Industry Partners</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Collaborating with trusted manufacturers and suppliers.
              </p>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">5★</h3>
              <h3 className="text-lg font-bold text-[#111111]">Client Satisfaction</h3>
              <p className="text-sm text-[#444444] leading-relaxed">
                Building long-term relationships through trust and quality service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: MEET OUR FOUNDERS (#F8F4EC)                                   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
            Meet Our Founders
          </h2>
          <p className="text-sm sm:text-base text-[#555555]">
            The minds behind PriGlob Exim’s growth and global vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Founder 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-56 h-56 rounded-full overflow-hidden shadow-sm">
              <ImageWithFallback
                src="https://priglobexim.com/wp-content/uploads/2026/03/jay-tejani.d58b439e22342d1b433c-300x300.jpg"
                alt="Jay Tejani"
                className="w-full h-full object-cover rounded-full"
                fallbackType="corporate"
              />
            </div>
            <h3 className="text-xl font-bold text-[#111111]">
              <strong>Jay Tejani</strong>
            </h3>
            <p className="text-sm text-[#444444] leading-relaxed max-w-sm">
              Jay brings strategic thinking and a strong business mindset, playing a key role in driving growth and building global connections for PriGlob Exim.
            </p>
          </div>

          {/* Founder 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-56 h-56 rounded-full overflow-hidden shadow-sm">
              <ImageWithFallback
                src="https://priglobexim.com/wp-content/uploads/2026/03/arsh-kukadiya.bb94d916e19db2daabf9-300x300.jpg"
                alt="Arsh Kukadiya"
                className="w-full h-full object-cover rounded-full"
                fallbackType="corporate"
              />
            </div>
            <h3 className="text-xl font-bold text-[#111111]">
              <strong>Arsh Kukadiya</strong>
            </h3>
            <p className="text-sm text-[#444444] leading-relaxed max-w-sm">
              Arsh contributes with operational expertise and a forward-thinking approach, ensuring smooth execution and innovation in every aspect of the business.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
