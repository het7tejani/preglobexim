import React, { useState, useEffect } from 'react';
import { ActivePage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { CottonJutePage } from './pages/CottonJutePage';
import { GemsJewelleryPage } from './pages/GemsJewelleryPage';
import { IndianSpicesPage } from './pages/IndianSpicesPage';
import { OurCompanyPage } from './pages/OurCompanyPage';
import { OurTeamPage } from './pages/OurTeamPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { MessageCircle } from 'lucide-react';
import { SITE_INFO } from './data/siteContent';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>(undefined);

  // Sync with window hash for seamless back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '') as ActivePage;
      const validPages: ActivePage[] = [
        'home',
        'cotton-jute-tote-bag',
        'gems-jewellery',
        'indian-spices',
        'our-company',
        'our-team',
        'contact',
        'faq',
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (product?: string) => {
    setQuoteProduct(product);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4EC] text-[#111111] font-sans antialiased selection:bg-[#F9D9A7] selection:text-black">
      {/* Top Header */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
        {activePage === 'cotton-jute-tote-bag' && (
          <CottonJutePage onOpenQuoteModal={handleOpenQuoteModal} />
        )}
        {activePage === 'gems-jewellery' && (
          <GemsJewelleryPage onOpenQuoteModal={handleOpenQuoteModal} />
        )}
        {activePage === 'indian-spices' && (
          <IndianSpicesPage onOpenQuoteModal={handleOpenQuoteModal} />
        )}
        {activePage === 'our-company' && <OurCompanyPage />}
        {activePage === 'our-team' && <OurTeamPage />}
        {activePage === 'contact' && <ContactPage />}
        {activePage === 'faq' && <FAQPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Quote & Inquiry Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultProduct={quoteProduct}
      />

      {/* Floating WhatsApp Quick Action */}
      <a
        href={`https://wa.me/${SITE_INFO.contacts.asiaAfricaOceania.phone.replace(/[^0-9]/g, '')}?text=Hello%20PriGlob%20Exim,%20I%20would%20like%20to%20inquire%20about%20your%20products`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with PriGlob Exim on WhatsApp"
        className="fixed bottom-5 right-5 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-semibold">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
