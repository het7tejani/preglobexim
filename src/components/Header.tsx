import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import { ActivePage } from '../types';
import { SITE_INFO } from '../data/siteContent';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenQuoteModal?: (product?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col bg-[#f5f1e8]/95 backdrop-blur-md border-b border-[#e6dec9] transition-all duration-300">
      {/* Naturetote Top Announcement Bar */}
      <div className="w-full h-9 sm:h-10 bg-[#0e5a46] text-white px-4 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-center flex justify-center items-center overflow-hidden transition-colors duration-300">
        <div className="relative w-full max-w-screen-2xl h-full flex items-center justify-between">
          <div className="hidden md:flex items-center gap-2 text-white/80">
            <span className="w-2 h-2 rounded-full bg-[#6bcb5b]"></span>
            <span>IEC Registered Indian Merchant Exporter</span>
          </div>
          <div className="w-full md:w-auto text-center flex items-center justify-center gap-3">
            <span>Global Export Shipping • Mundra &amp; Pipavav Ports • Incoterms 2020</span>
          </div>
          <div className="hidden lg:flex items-center gap-3 text-xs">
            <a href="tel:+919484855426" className="text-white hover:text-[#6bcb5b] transition flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 948 485 5426</span>
            </a>
          </div>
        </div>
      </div>

      {/* Naturetote Main Header Bar */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-18 lg:h-20 flex items-center justify-between gap-6">
        {/* Mobile Header Layout */}
        <div className="flex items-center justify-between w-full lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#2f3437] p-2 hover:bg-[#e6dec9] rounded-full transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleNav('home'); }}
            className="flex items-center group cursor-pointer focus:outline-hidden"
            aria-label="PriGlob Exim Home"
          >
            <img
              src={SITE_INFO.logo}
              alt="PriGlob Exim"
              className="h-9 sm:h-11 w-auto object-contain max-w-[190px]"
            />
          </a>

          <button
            onClick={() => onOpenQuoteModal?.()}
            className="w-10 h-10 relative flex items-center justify-center rounded-full text-[#2f3437] hover:bg-[#e6dec9]/60 transition-colors cursor-pointer"
            aria-label="Open RFQ Quote"
          >
            <ShoppingBag className="w-5.5 h-5.5 text-[#0e5a46]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#478a3f] rounded-full ring-2 ring-[#f5f1e8]" />
          </button>
        </div>

        {/* Desktop Header Layout */}
        <div className="hidden lg:flex items-center justify-between w-full gap-8">
          {/* Brand Logo from preglobexim.vercel.app */}
          <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleNav('home'); }}
            className="flex items-center group flex-shrink-0 cursor-pointer focus:outline-hidden"
            aria-label="PriGlob Exim Home"
          >
            <img
              src={SITE_INFO.logo}
              alt="PriGlob Exim"
              className="h-12 xl:h-14 w-auto object-contain max-w-[240px] transition-transform duration-200 group-hover:scale-102"
            />
          </a>

          {/* Nav Links */}
          <nav className="flex items-center space-x-6 xl:space-x-8 text-[14px] xl:text-[15px] font-medium text-[#2f3437]">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleNav('home'); }}
              className={`py-1.5 transition-colors cursor-pointer ${
                activePage === 'home'
                  ? 'text-[#0e5a46] font-bold border-b-2 border-[#0e5a46]'
                  : 'hover:text-[#0e5a46]'
              }`}
            >
              Home
            </a>

            {/* Cotton & Jute Bags Direct Nav Link */}
            <a
              href="/cotton-jute-tote-bag"
              onClick={(e) => { e.preventDefault(); handleNav('cotton-jute-tote-bag'); }}
              className={`py-1.5 transition-colors cursor-pointer ${
                activePage === 'cotton-jute-tote-bag'
                  ? 'text-[#0e5a46] font-bold border-b-2 border-[#0e5a46]'
                  : 'hover:text-[#0e5a46]'
              }`}
            >
              Cotton &amp; Jute Bags
            </a>

            {/* Blog Link */}
            <a
              href="/blog"
              onClick={(e) => { e.preventDefault(); handleNav('blog'); }}
              className={`py-1.5 transition-colors cursor-pointer ${
                activePage === 'blog'
                  ? 'text-[#0e5a46] font-bold border-b-2 border-[#0e5a46]'
                  : 'hover:text-[#0e5a46]'
              }`}
            >
              Blog
            </a>

            <a
              href="/our-company"
              onClick={(e) => { e.preventDefault(); handleNav('our-company'); }}
              className={`py-1.5 transition-colors cursor-pointer ${
                activePage === 'our-company'
                  ? 'text-[#0e5a46] font-bold border-b-2 border-[#0e5a46]'
                  : 'hover:text-[#0e5a46]'
              }`}
            >
              Our Company
            </a>

            <a
              href="/our-team"
              onClick={(e) => { e.preventDefault(); handleNav('our-team'); }}
              className={`py-1.5 transition-colors cursor-pointer ${
                activePage === 'our-team'
                  ? 'text-[#0e5a46] font-bold border-b-2 border-[#0e5a46]'
                  : 'hover:text-[#0e5a46]'
              }`}
            >
              Our Team
            </a>

            <a
              href="/faq"
              onClick={(e) => { e.preventDefault(); handleNav('faq'); }}
              className={`py-1.5 transition-colors cursor-pointer ${
                activePage === 'faq'
                  ? 'text-[#0e5a46] font-bold border-b-2 border-[#0e5a46]'
                  : 'hover:text-[#0e5a46]'
              }`}
            >
              FAQs
            </a>

            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
              className={`py-1.5 transition-colors cursor-pointer ${
                activePage === 'contact'
                  ? 'text-[#0e5a46] font-bold border-b-2 border-[#0e5a46]'
                  : 'hover:text-[#0e5a46]'
              }`}
            >
              Contact Us
            </a>
          </nav>

          {/* Right Action Button & RFQ Cart */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal?.()}
              className="bg-[#0e5a46] hover:bg-[#197a60] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Get Export RFQ</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Flyout */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#f5f1e8] border-b border-[#e6dec9] px-4 py-6 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 text-sm font-medium text-[#2f3437]">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleNav('home'); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#e6dec9]/50"
            >
              Home
            </a>
            <a
              href="/cotton-jute-tote-bag"
              onClick={(e) => { e.preventDefault(); handleNav('cotton-jute-tote-bag'); }}
              className={`text-left py-2 px-3 rounded-lg hover:bg-[#e6dec9]/50 ${
                activePage === 'cotton-jute-tote-bag' ? 'font-bold text-[#0e5a46] bg-[#e6dec9]/40' : ''
              }`}
            >
              Cotton &amp; Jute Bags
            </a>
            <a
              href="/blog"
              onClick={(e) => { e.preventDefault(); handleNav('blog'); }}
              className={`text-left py-2 px-3 rounded-lg hover:bg-[#e6dec9]/50 ${
                activePage === 'blog' ? 'font-bold text-[#0e5a46] bg-[#e6dec9]/40' : ''
              }`}
            >
              Blog &amp; Insights
            </a>
            <div className="border-t border-[#e6dec9] pt-2" />
            <a
              href="/our-company"
              onClick={(e) => { e.preventDefault(); handleNav('our-company'); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#e6dec9]/50"
            >
              Our Company
            </a>
            <a
              href="/our-team"
              onClick={(e) => { e.preventDefault(); handleNav('our-team'); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#e6dec9]/50"
            >
              Our Team
            </a>
            <a
              href="/faq"
              onClick={(e) => { e.preventDefault(); handleNav('faq'); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#e6dec9]/50"
            >
              FAQs
            </a>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#e6dec9]/50"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal?.();
              }}
              className="w-full bg-[#0e5a46] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Request Export Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
