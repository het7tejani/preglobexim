import React from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Users2, Mail, Phone, Globe, ShieldCheck } from 'lucide-react';

export const OurTeamPage: React.FC = () => {
  return (
    <div className="bg-[#f5f1e8] text-[#2f3437] min-h-screen">
      {/* Naturetote Header Banner */}
      <div className="bg-[#0e5a46] text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6bcb5b] block mb-1">
            International Trade Executives
          </span>
          <h1 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold">
            Our Leadership Team
          </h1>
        </div>
      </div>

      {/* Intro Spotlight */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-md border border-[#e6dec9] bg-white p-2">
            <ImageWithFallback
              src="/images/ChatGPT-Image-Mar-23-2026-10_01_58-AM.webp"
              alt="About Our Team"
              fallbackType="corporate"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right Column: Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#0e5a46]/10 text-[#0e5a46] px-3.5 py-1 rounded-full text-xs font-semibold">
              <Users2 className="w-3.5 h-3.5" />
              <span>Dedicated International Export Professionals</span>
            </div>
            <h2 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0e5a46]">
              The People Driving Global Trade Excellence
            </h2>
            <p className="text-sm sm:text-base text-[#2f3437]/75 leading-relaxed font-light">
              Our export team coordinates cotton and jute bag sourcing, product specifications, quality checks, and freight documentation. Contact us for quotations, samples, and shipment updates.
            </p>
            <p className="text-sm sm:text-base text-[#2f3437]/75 leading-relaxed font-light">
              Based in Surat, we work with buyers on order requirements and shipping arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Trade Desks Grid */}
      <section className="py-14 sm:py-16 bg-white border-y border-[#e6dec9] px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#478a3f] block mb-2">
              Global Support Network
            </span>
            <h2 className="font-serif-nature text-2xl sm:text-3xl font-bold text-[#0e5a46]">
              Regional Trade Desks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Desk 1 */}
            <div className="bg-[#f5f1e8] border border-[#e6dec9] rounded-2xl p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-[#0e5a46] text-white rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-serif-nature text-xl font-bold text-[#0e5a46]">
                Asia, Africa &amp; Oceania Trade Desk
              </h3>
              <p className="text-xs sm:text-sm text-[#2f3437]/75 leading-relaxed font-light">
                Direct management for Middle East, Southeast Asia, African ports, and Australasia. Coordinating export freight from Mundra and Pipavav ports.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#e6dec9] text-xs font-medium text-[#2f3437]/85">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0e5a46]" />
                  <a href="mailto:priglobexim@gmail.com" className="hover:underline">
                    priglobexim@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0e5a46]" />
                  <a href="tel:+917284866165" className="hover:underline">
                    +91 728 486 6165
                  </a>
                </p>
              </div>
            </div>

            {/* Desk 2 */}
            <div className="bg-[#f5f1e8] border border-[#e6dec9] rounded-2xl p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-[#0e5a46] text-white rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-nature text-xl font-bold text-[#0e5a46]">
                EU, North &amp; South America Trade Desk
              </h3>
              <p className="text-xs sm:text-sm text-[#2f3437]/75 leading-relaxed font-light">
                Dedicated support for European Union importers, US FDA compliance, Canadian logistics, and South American trade partners.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#e6dec9] text-xs font-medium text-[#2f3437]/85">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0e5a46]" />
                  <a href="mailto:info.priglob@gmail.com" className="hover:underline">
                    info.priglob@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0e5a46]" />
                  <a href="tel:+393445784783" className="hover:underline">
                    +39 344 578 4783
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
