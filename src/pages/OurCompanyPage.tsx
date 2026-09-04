import React from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Building2, Globe2, ShieldCheck, CheckCircle2, Factory, Compass } from 'lucide-react';

export const OurCompanyPage: React.FC = () => {
  return (
    <div className="bg-[#f5f1e8] text-[#2f3437] min-h-screen">
      {/* Naturetote Header Banner */}
      <div className="bg-[#0e5a46] text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6bcb5b] block mb-1">
            Corporate Heritage &amp; Infrastructure
          </span>
          <h1 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold">
            Our Company
          </h1>
        </div>
      </div>

      {/* About Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-md border border-[#e6dec9] bg-white p-2">
            <ImageWithFallback
              src="/images/ChatGPT-Image-Mar-23-2026-09_11_04-AM.webp"
              alt="About PriGlob Exim"
              fallbackType="corporate"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right Column: Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#0e5a46]/10 text-[#0e5a46] px-3.5 py-1 rounded-full text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              <span>Surat Direct Manufacturing &amp; Global Trading House</span>
            </div>
            <h2 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0e5a46]">
              About PriGlob Exim
            </h2>
            <p className="text-sm sm:text-base text-[#2f3437]/75 leading-relaxed font-light">
              At PriGlob Exim, we specialize in delivering export-grade Indian products across diverse sectors to international buyers. With our industrial base in Surat, Gujarat — India&apos;s leading textile and diamond hub — we combine native artisan craftsmanship with rigorous international quality standards.
            </p>
            <p className="text-sm sm:text-base text-[#2f3437]/75 leading-relaxed font-light">
              Our direct factory integration eliminates intermediary markup, guaranteeing transparent pricing, certified testing documentation, and consistent containerized dispatches.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#2f3437]/85 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0e5a46] flex-shrink-0" />
                <span>Govt. of India IEC Registered</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#2f3437]/85 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0e5a46] flex-shrink-0" />
                <span>Port Loading: Mundra &amp; Pipavav</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#2f3437]/85 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0e5a46] flex-shrink-0" />
                <span>GOTS Organic &amp; REACH Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#2f3437]/85 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0e5a46] flex-shrink-0" />
                <span>IGI, GIA &amp; AGMARK Certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-14 sm:py-16 bg-white border-y border-[#e6dec9] px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#478a3f] block">
              Core Principles
            </span>
            <h2 className="font-serif-nature text-2xl sm:text-3xl font-bold tracking-tight text-[#0e5a46]">
              Our Mission &amp; Global Vision
            </h2>
            <p className="text-sm sm:text-base text-[#2f3437]/70 leading-relaxed font-light">
              To deliver reliable, high-quality, and compliance-driven export solutions that empower international businesses to scale with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f5f1e8] border border-[#e6dec9] rounded-2xl p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-[#0e5a46] text-white rounded-xl flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif-nature text-xl font-bold text-[#0e5a46]">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-[#2f3437]/75 leading-relaxed font-light">
                To bridge Indian master manufacturing with global retailers, distributors, and brands by maintaining rigorous batch-testing, ethical fair-trade supply chains, and transparent FOB/CIF trade pricing.
              </p>
            </div>

            <div className="bg-[#f5f1e8] border border-[#e6dec9] rounded-2xl p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-[#0e5a46] text-white rounded-xl flex items-center justify-center">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif-nature text-xl font-bold text-[#0e5a46]">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-[#2f3437]/75 leading-relaxed font-light">
                To be universally recognized as the preferred Indian merchant export house for sustainable packaging, certified fine jewelry, and pure agrarian spices across North America, Europe, Asia, and Oceania.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Units */}
      <section className="py-14 sm:py-16 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#478a3f] block mb-2">
            Integrated Manufacturing
          </span>
          <h2 className="font-serif-nature text-2xl sm:text-3xl font-bold text-[#0e5a46]">
            Our Sourcing &amp; Processing Units
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-[#e6dec9] rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#fbfaf7]">
              <img src="/images/Fabric-Bag-Mfg.webp" alt="Fabric Bags Manufacturing" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif-nature text-lg font-bold text-[#0e5a46]">
              Fabric Bag Stitching &amp; Printing Unit
            </h3>
            <p className="text-xs text-[#2f3437]/70 font-light leading-relaxed">
              Industrial sewing lines, automated fabric laser cutters, and screen-printing stations with 50,000+ units monthly capacity.
            </p>
          </div>

          <div className="bg-white border border-[#e6dec9] rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#fbfaf7]">
              <img src="/images/Jewellery-Mfg-1024x683.webp" alt="Jewellery Design Unit" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif-nature text-lg font-bold text-[#0e5a46]">
              Jewellery Design &amp; Casting Studio
            </h3>
            <p className="text-xs text-[#2f3437]/70 font-light leading-relaxed">
              Surat master lapidary workshop, precision diamond setting, 3D CAD modeling, and hallmarking assay partnerships.
            </p>
          </div>

          <div className="bg-white border border-[#e6dec9] rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#fbfaf7]">
              <img src="/images/Spices-Mfg-1024x683.webp" alt="Spice Aggregation Unit" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif-nature text-lg font-bold text-[#0e5a46]">
              Spice Aggregation &amp; Packaging Facility
            </h3>
            <p className="text-xs text-[#2f3437]/70 font-light leading-relaxed">
              Mechanical cleaning, destoning, steam sterilization, moisture checking, and vacuum container packaging.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
