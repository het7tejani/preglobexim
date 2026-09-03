import React from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const OurTeamPage: React.FC = () => {
  return (
    <div className="bg-[#F8F4EC] text-[#111111] min-h-screen">
      {/* ========================================================================= */}
      {/* SECTION 1: BANNER (#F9D9A7)                                               */}
      {/* ========================================================================= */}
      <div className="bg-[#F9D9A7] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-[#111111]">
            Our Team
          </h1>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: ABOUT OUR TEAM                                                 */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-xs">
            <ImageWithFallback
              src="https://priglobexim.com/wp-content/uploads/2026/03/Untitled-design-21-scaled.png"
              alt="About Our Team"
              fallbackType="corporate"
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>

          {/* Right Column: Text */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
              <strong>About Our Team</strong>
            </h2>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
              Our team is a passionate and dedicated group of professionals committed to delivering quality products and seamless supply chain solutions worldwide. From production and quality control to logistics, international marketing, and customer support, each member brings valuable expertise to the table.
            </p>
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
              At PriGlob Exim, every milestone we achieve is a result of strong teamwork, smart workflow management, and a shared commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: TEAM BEHIND GLOBAL TRADE SUCCESS (#F9D9A7)                     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 bg-[#F9D9A7] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              Team Behind Global Trade Success
            </h2>
            <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
              Dedicated professionals ensuring seamless production, operations, and global trade excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">19 Members</h3>
              <h3 className="text-lg font-bold text-[#111111]">Manufacturing Team</h3>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">13 Members</h3>
              <h3 className="text-lg font-bold text-[#111111]">Operational Team</h3>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">4 Members</h3>
              <h3 className="text-lg font-bold text-[#111111]">Trade Support Team</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: MEET OUR TRADE EXECUTIVE (#F8F4EC)                             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
            Meet Our Trade Executive
          </h2>
          <p className="text-sm sm:text-base text-[#555555]">
            Connect with our global trade executives who drive international growth and build strong market relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Executive 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-56 h-56 rounded-full overflow-hidden shadow-sm">
              <ImageWithFallback
                src="https://priglobexim.com/wp-content/uploads/2026/03/Untitled-design-23-300x300.png"
                alt="Sumit Isamaliya"
                className="w-full h-full object-cover rounded-full"
                fallbackType="corporate"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111]">
                <strong>Sumit Isamaliya</strong>
              </h3>
              <p className="text-sm font-semibold text-[#555555] mt-1">
                (Italy Trade Executive)
              </p>
            </div>
            <p className="text-sm text-[#444444] leading-relaxed max-w-sm">
              Sumit drives global outreach by connecting PriGlob Exim’s products to international markets with smart execution and strong network support.
            </p>
          </div>

          {/* Executive 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-56 h-56 rounded-full overflow-hidden shadow-sm">
              <ImageWithFallback
                src="https://priglobexim.com/wp-content/uploads/2026/03/Untitled-design-22-1-300x300.png"
                alt="Smit Moradiya"
                className="w-full h-full object-cover rounded-full"
                fallbackType="corporate"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111]">
                <strong>Smit Moradiya</strong>
              </h3>
              <p className="text-sm font-semibold text-[#555555] mt-1">
                (Germany Trade Executive)
              </p>
            </div>
            <p className="text-sm text-[#444444] leading-relaxed max-w-sm">
              Smit plays a key role in expanding PriGlob Exim’s global presence by building reliable trade connections and ensuring smooth market access.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
