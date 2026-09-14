import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { ActivePage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { CottonJutePage } from './pages/CottonJutePage';
import { OurCompanyPage } from './pages/OurCompanyPage';
import { OurTeamPage } from './pages/OurTeamPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostDetailPage } from './pages/BlogPostDetailPage';
import { AdminPage } from './pages/AdminPage';
import { MessageCircle } from 'lucide-react';
import { SITE_INFO } from './data/siteContent';
import { COTTON_JUTE_CATEGORIES } from './data/catalogData';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>(undefined);

  // Derive activePage accurately from the current pathname
  const activePage: ActivePage = useMemo(() => {
    const clean = location.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
    if (!clean || clean === 'home') return 'home';
    if (clean.startsWith('blog')) return 'blog';
    const validPages: ActivePage[] = [
      'cotton-jute-tote-bag',
      'blog',
      'admin',
      'our-company',
      'our-team',
      'contact',
      'faq',
    ];
    return validPages.includes(clean as ActivePage) ? (clean as ActivePage) : 'home';
  }, [location.pathname]);

  // Backward compatibility: If a user or legacy link arrives with a hash like #cotton-jute-tote-bag,
  // gracefully redirect to the clean path /cotton-jute-tote-bag
  useEffect(() => {
    if (window.location.hash) {
      const hashPage = window.location.hash.replace(/^#\/?/, '') as ActivePage;
      const validPages: ActivePage[] = [
        'home',
        'cotton-jute-tote-bag',
        'blog',
        'admin',
        'our-company',
        'our-team',
        'contact',
        'faq',
      ];
      if (validPages.includes(hashPage)) {
        const cleanPath = hashPage === 'home' ? '/' : `/${hashPage}`;
        navigate(cleanPath, { replace: true });
      }
    }
  }, [navigate]);

  // Scroll to top instantly on every page/route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Background prefetch catalog images during idle time so page openings are instantaneous
  useEffect(() => {
    const prefetchImages = () => {
      const allUrls = [
        ...COTTON_JUTE_CATEGORIES.flatMap(c => c.products.map(p => p.image)),
      ];
      allUrls.forEach(url => {
        if (url) {
          const img = new Image();
          img.src = url;
        }
      });
    };

    if ('requestIdleCallback' in window) {
      const id = (window as any).requestIdleCallback(prefetchImages, { timeout: 1500 });
      return () => (window as any).cancelIdleCallback(id);
    } else {
      const timer = setTimeout(prefetchImages, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNavigate = (page: ActivePage) => {
    const targetPath = page === 'home' ? '/' : `/${page}`;
    navigate(targetPath);
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

      {/* Main Content Area with React Router Routes */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onNavigate={handleNavigate}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route
            path="/cotton-jute-tote-bag"
            element={<CottonJutePage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          {/* Gracefully redirect legacy removed category URLs to cotton-jute-tote-bag */}
          <Route
            path="/gems-jewellery"
            element={<Navigate to="/cotton-jute-tote-bag" replace />}
          />
          <Route
            path="/indian-spices"
            element={<Navigate to="/cotton-jute-tote-bag" replace />}
          />
          <Route path="/blog" element={<BlogListPage />} />
          <Route
            path="/blog/:slug"
            element={<BlogPostDetailPage onOpenQuoteModal={handleOpenQuoteModal} />}
          />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/our-company" element={<OurCompanyPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          {/* Unknown routes redirect cleanly to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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

