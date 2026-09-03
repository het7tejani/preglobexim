import React from 'react';
import { ActivePage } from '../types';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#F8F4EC] border-t border-[#E3D6C1] py-10 px-4 sm:px-6 lg:px-8 text-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-center">
          {/* Column 1 (40% flex-basis on original site) */}
          <div className="md:col-span-5 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              PriGlob Exim
            </h2>
          </div>

          {/* Column 2 (22.5% flex-basis on original site) */}
          <div className="md:col-span-3 text-center">
            <p className="text-sm text-[#333333] leading-relaxed">
              9, Sanskruti Park Society, Jahangirpura, Surat, Gujarat, India.
            </p>
          </div>

          {/* Column 3 (22.5% flex-basis on original site) */}
          <div className="md:col-span-4 text-center space-y-3 text-sm">
            <div>
              <p className="font-bold text-[#111111]">For Asia, Africa &amp; Oceania</p>
              <p className="text-[#333333]">
                <a href="mailto:priglobexim@gmail.com" className="hover:underline">
                  priglobexim@gmail.com
                </a>
                <br />
                <a href="tel:+919484855426" className="hover:underline">
                  +91 948 485 5426
                </a>
              </p>
            </div>

            <div>
              <p className="font-bold text-[#111111]">For EU &amp; North/South America</p>
              <p className="text-[#333333]">
                <a href="mailto:info.priglob@gmail.com" className="hover:underline">
                  info.priglob@gmail.com
                </a>
                <br />
                <a href="tel:+393445784783" className="hover:underline">
                  +39 344 578 4783
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Navigation & copyright */}
        <div className="mt-10 pt-6 border-t border-[#EAE0D0] flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-[#666666]">
          <button
            onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-black transition"
          >
            Home
          </button>
          <button
            onClick={() => { onNavigate('cotton-jute-tote-bag'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-black transition"
          >
            Cotton &amp; Jute Bags
          </button>
          <button
            onClick={() => { onNavigate('gems-jewellery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-black transition"
          >
            Gems &amp; Jewellery
          </button>
          <button
            onClick={() => { onNavigate('indian-spices'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-black transition"
          >
            Indian Spices
          </button>
          <button
            onClick={() => { onNavigate('our-company'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-black transition"
          >
            Our Company
          </button>
          <button
            onClick={() => { onNavigate('our-team'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-black transition"
          >
            Our Team
          </button>
          <button
            onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-black transition"
          >
            Contact Us
          </button>
          <button
            onClick={() => { onNavigate('faq'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-black transition"
          >
            FAQ
          </button>
        </div>
      </div>
    </footer>
  );
};
