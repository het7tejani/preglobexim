import React, { useState } from 'react';
import { Mail, ArrowRight, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { ActivePage } from '../types';
import { SITE_INFO } from '../data/siteContent';
import { submitInquiry } from '../data/submitInquiry';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribeError('');
    try {
      await submitInquiry({ email, _subject: 'PriGlob Exim: Newsletter signup', _replyto: email, form: 'Newsletter signup' });
      setSubscribed(true);
      setEmail('');
    } catch (error) {
      setSubscribeError(error instanceof Error ? error.message : 'Could not subscribe. Please email priglobexim@gmail.com directly.');
    }
  };

  const navTo = (page: ActivePage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#e6dec9] border-t border-[#d8ceba] text-[#2f3437]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Col 1: Brand Info & Newsletter (Naturetote ditto copy) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navTo('home'); }}
              className="flex items-center cursor-pointer text-left focus:outline-none group"
              aria-label="PriGlob Exim Home"
            >
              <img
                src={SITE_INFO.logo}
                alt="PriGlob Exim"
                className="h-14 w-auto object-contain max-w-[240px]"
              />
            </a>

            <p className="text-sm font-light text-[#2f3437]/75 leading-relaxed max-w-sm">
              Government of India recognized merchant exporter. Premium organic cotton canvas totes, heavy-duty golden jute hampers, and custom eco-friendly packaging exported to global buyers across 25+ countries.
            </p>

            {/* Newsletter Subscription */}
            <div className="flex flex-col gap-3">
              <h4 className="font-serif-nature font-bold text-base text-[#0e5a46]">
                Subscribe to our trade newsletter
              </h4>
              <form onSubmit={handleSubscribe} className="relative max-w-sm flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email address"
                  className="w-full h-12 pl-10 pr-24 text-xs sm:text-sm bg-white border border-[#d8ceba] rounded-xl focus:outline-none focus:border-[#478a3f] text-[#2f3437] placeholder-[#2f3437]/50"
                  required
                />
                <Mail className="absolute left-3.5 w-4.5 h-4.5 text-[#2f3437]/40 pointer-events-none" />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 h-9 px-4 bg-[#0e5a46] hover:bg-[#197a60] text-white font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-xs"
                >
                  <span>{subscribed ? 'Joined!' : 'Join'}</span>
                  {!subscribed && <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </form>
              {subscribeError && <p role="alert" className="text-xs text-red-700">{subscribeError}</p>}
              {subscribed && (
                <p className="text-xs text-[#0e5a46] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Thank you for subscribing to PriGlob Exim export updates!
                </p>
              )}
            </div>
          </div>

          {/* Col 2, 3, 4: Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Information Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-serif-nature font-extrabold text-sm sm:text-base text-[#0e5a46] uppercase tracking-wider">
                Information
              </h4>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm font-medium text-[#2f3437]/80">
                <li>
                  <a
              href="/our-company"
              onClick={(e) => { e.preventDefault(); navTo('our-company'); }}
                    className="hover:text-[#0e5a46] hover:underline transition-colors underline-offset-4 cursor-pointer text-left"
                  >
                    Our Story &amp; Company
                  </a>
                </li>
                <li>
                  <a
              href="/our-team"
              onClick={(e) => { e.preventDefault(); navTo('our-team'); }}
                    className="hover:text-[#0e5a46] hover:underline transition-colors underline-offset-4 cursor-pointer text-left"
                  >
                    Executive Leadership
                  </a>
                </li>
                <li>
                  <a
              href="/faq"
              onClick={(e) => { e.preventDefault(); navTo('faq'); }}
                    className="hover:text-[#0e5a46] hover:underline transition-colors underline-offset-4 cursor-pointer text-left"
                  >
                    Export FAQs &amp; Incoterms
                  </a>
                </li>
                <li>
                  <a
              href="/blog"
              onClick={(e) => { e.preventDefault(); navTo('blog'); }}
                    className="hover:text-[#0e5a46] hover:underline transition-colors underline-offset-4 cursor-pointer text-left"
                  >
                    Blog &amp; Export Insights
                  </a>
                </li>
                <li>
                  <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navTo('contact'); }}
                    className="hover:text-[#0e5a46] hover:underline transition-colors underline-offset-4 cursor-pointer text-left"
                  >
                    Contact Trade Desk
                  </a>
                </li>
                <li>
                  <span className="text-[#2f3437]/50 text-xs">Ports: Mundra &amp; Pipavav</span>
                </li>
              </ul>
            </div>

            {/* Quick Links / Export Divisions */}
            <div className="flex flex-col gap-4">
              <h4 className="font-serif-nature font-extrabold text-sm sm:text-base text-[#0e5a46] uppercase tracking-wider">
                Export Lines
              </h4>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm font-medium text-[#2f3437]/80">
                <li>
                  <a
              href="/cotton-jute-tote-bag"
              onClick={(e) => { e.preventDefault(); navTo('cotton-jute-tote-bag'); }}
                    className="hover:text-[#0e5a46] hover:underline transition-colors underline-offset-4 cursor-pointer text-left"
                  >
                    Cotton Canvas Totes
                  </a>
                </li>
                <li>
                  <a
              href="/cotton-jute-tote-bag"
              onClick={(e) => { e.preventDefault(); navTo('cotton-jute-tote-bag'); }}
                    className="hover:text-[#0e5a46] hover:underline transition-colors underline-offset-4 cursor-pointer text-left"
                  >
                    Golden Jute Bags &amp; Hampers
                  </a>
                </li>
                <li>
                  <a
              href="/cotton-jute-tote-bag"
              onClick={(e) => { e.preventDefault(); navTo('cotton-jute-tote-bag'); }}
                    className="hover:text-[#0e5a46] hover:underline transition-colors underline-offset-4 cursor-pointer text-left"
                  >
                    Drawstring Pouches &amp; Packaging
                  </a>
                </li>
                <li>
                  <span className="text-[#2f3437]/60 text-xs">FCL &amp; LCL Container Lots</span>
                </li>
                <li>
                  <span className="text-[#2f3437]/60 text-xs">OEM &amp; Screen Printing</span>
                </li>
              </ul>
            </div>

            {/* Get In Touch Column */}
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <h4 className="font-serif-nature font-extrabold text-sm sm:text-base text-[#0e5a46] uppercase tracking-wider">
                Get In Touch
              </h4>
              <div className="flex flex-col gap-3 text-xs sm:text-sm text-[#2f3437]/80">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0e5a46] flex-shrink-0 mt-0.5" />
                  <span>9, Sanskruti Park Society, Jahangirpura, Surat, Gujarat 395005, India.</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0e5a46] flex-shrink-0" />
                  <a href="tel:+917284866165" className="hover:text-[#0e5a46] font-semibold">
                    +91 728 486 6165
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0e5a46] flex-shrink-0" />
                  <a href="mailto:priglobexim@gmail.com" className="hover:text-[#0e5a46]">
                    priglobexim@gmail.com
                  </a>
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded text-[#2f3437] font-semibold border border-[#d8ceba]">
                    FOB
                  </span>
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded text-[#2f3437] font-semibold border border-[#d8ceba]">
                    CIF
                  </span>
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded text-[#2f3437] font-semibold border border-[#d8ceba]">
                    CFR
                  </span>
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded text-[#2f3437] font-semibold border border-[#d8ceba]">
                    DDP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Verification Line */}
        <div className="border-t border-[#d8ceba] pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2f3437]/65">
          <p>© {new Date().getFullYear()} PriGlob Exim. All rights reserved. Direct Manufacturer &amp; Merchant Exporter.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span>Govt. IEC Registration</span>
            <span>•</span>
            <span>EPC Textile &amp; Jute Member</span>
            <span>•</span>
            <span>GOTS Organic Compliance</span>
            <span>•</span>
            <span>Port of Mundra &amp; Pipavav</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
