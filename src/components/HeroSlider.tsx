import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { ActivePage } from '../types';

interface Slide {
  id: string;
  division: string;
  badge: string;
  title: string;
  subtitle: string;
  bgImage: string;
  showcaseImage: string;
  showcaseBadge: string;
  showcaseLabel: string;
  pageTarget: ActivePage;
  ctaPrimary: string;
  ctaSecondary: string;
  highlights: string[];
}

const SLIDE_DURATION = 6000; // 6 seconds per slide

const SLIDES: Slide[] = [
  {
    id: 'bags',
    division: 'Cotton & Jute Bags',
    badge: '100% Eco-Sustainable Packaging',
    title: 'Organic Cotton & Classic Jute Bags',
    subtitle: 'Certified GOTS raw organic cotton, heavy-duty 350 GSM natural golden jute, double-stitched export grade totes, and custom branded drawstring pouches manufactured directly in Surat.',
    bgImage: '/images/Fabric-Bag-Mfg.webp',
    showcaseImage: '/images/Bag-1-638x1024.webp',
    showcaseBadge: 'Surat Factory Direct',
    showcaseLabel: 'Natural Golden Jute & Organic Cotton',
    pageTarget: 'cotton-jute-tote-bag',
    ctaPrimary: 'Explore Bags Catalog',
    ctaSecondary: 'Request Bags RFQ',
    highlights: ['Custom DTF & Screen Print', '350 GSM Heavy Jute', 'Zero Single-Use Plastic'],
  },
  {
    id: 'jewellery',
    division: 'Gems & Jewellery',
    badge: 'Hallmarked Indian Craftsmanship',
    title: 'Lab-Grown & Natural Fine Jewelry',
    subtitle: 'Surat precision cut CVD & HPHT diamonds, certified emerald, sapphire & ruby engagement rings, tennis bracelets, and luxury artisan-crafted hallmarked gold & sterling silver collections.',
    bgImage: '/images/Jewellery-Mfg-1024x683.webp',
    showcaseImage: '/images/Diamond-Jewellery-683x1024.webp',
    showcaseBadge: 'Hallmarked & Certified',
    showcaseLabel: 'Surat Precision Cut Fine Jewelry',
    pageTarget: 'gems-jewellery',
    ctaPrimary: 'View Fine Jewelry',
    ctaSecondary: 'Custom Jewelry RFQ',
    highlights: ['IGI / GIA Certified', 'Surat Precision Cutting', 'Bespoke OEM Castings'],
  },
  {
    id: 'spices',
    division: 'Authentic Indian Spices',
    badge: 'Phytosanitary & AGMARK Certified',
    title: 'Direct Agrarian Indian Spices',
    subtitle: 'Direct farm-sourced Salem turmeric fingers, unadulterated Gujarat cumin seeds, bold green cardamom, coriander, and steam-sterilized whole spices packaged for international food brands.',
    bgImage: '/images/Indian-Spices-Photo-1024x683.webp',
    showcaseImage: '/images/Indian-Spices-683x1024.webp',
    showcaseBadge: 'Phytosanitary Cleared',
    showcaseLabel: 'Salem Turmeric & Gujarat Cumin',
    pageTarget: 'indian-spices',
    ctaPrimary: 'Browse Spices Catalog',
    ctaSecondary: 'Bulk Container Quote',
    highlights: ['Steam Sterilized Whole', 'FSSAI & AGMARK Compliant', 'FCL & LCL Sea Shipments'],
  },
  {
    id: 'global-trade',
    division: 'Global Trade Network',
    badge: 'Reliable Ocean & Air Logistics',
    title: 'Direct Port-to-Port Global Trade',
    subtitle: 'Comprehensive container shipping, pre-shipment quality verification, transparent Incoterms (FOB, CIF, CFR, DDP), and dedicated regional export trade desks serving 35+ countries.',
    bgImage: '/images/hero-trade.webp',
    showcaseImage: '/images/sea-shipment.png',
    showcaseBadge: 'Global Inbound Logistics',
    showcaseLabel: 'Serving Asia, EU & The Americas',
    pageTarget: 'our-company',
    ctaPrimary: 'Discover Our Company',
    ctaSecondary: 'Contact Trade Desk',
    highlights: ['Incoterms FOB / CIF / DDP', 'Pre-Shipment Inspection', 'Multilingual Trade Support'],
  },
];

interface HeroSliderProps {
  onNavigate: (page: ActivePage) => void;
  onOpenQuoteModal: (division?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Rock-solid glitch-free timer using setTimeout
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [currentIndex, isPaused]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <section
      id="naturetote-hero"
      className="relative w-full overflow-hidden bg-[#0a382b] text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (diff > 50) nextSlide();
        if (diff < -50) prevSlide();
        touchStartX.current = null;
      }}
    >
      {/* Background with Ambient Image & Naturetote Deep Forest Gradient */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.bgImage}
              alt=""
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                // Safe fallback to prevent broken visual
                const target = e.currentTarget;
                if (!target.src.includes('Fabric-Bag-Mfg.webp')) {
                  target.src = '/images/Fabric-Bag-Mfg.webp';
                }
              }}
            />
            {/* Elegant Naturetote multi-stop gradient ensuring 100% readable text & visible background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#072a20]/95 via-[#0e5a46]/85 to-[#0e5a46]/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#072a20] via-transparent to-black/25" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Slide Content Area */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[460px] sm:min-h-[500px]">
          
          {/* Left Column: Editorial Naturetote Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="space-y-4 sm:space-y-5"
              >
                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 bg-[#f5f1e8]/15 border border-[#f5f1e8]/25 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-[#f5f1e8] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#6bcb5b] animate-pulse" />
                  <span>{currentSlide.badge}</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-serif-nature text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                  {currentSlide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-[#f5f1e8]/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light">
                  {currentSlide.subtitle}
                </p>

                {/* Value Checkpoints */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs sm:text-sm text-[#f5f1e8]/85">
                  {currentSlide.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#6bcb5b] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Call-to-action Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3.5">
                  <button
                    id={`hero-btn-primary-${currentSlide.id}`}
                    onClick={() => onNavigate(currentSlide.pageTarget)}
                    className="bg-[#f5f1e8] hover:bg-white text-[#0e5a46] font-bold px-6 sm:px-8 py-3.5 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-xl flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>{currentSlide.ctaPrimary}</span>
                    <ArrowRight className="w-4 h-4 text-[#0e5a46]" />
                  </button>

                  <button
                    id={`hero-btn-rfq-${currentSlide.id}`}
                    onClick={() => onOpenQuoteModal(currentSlide.division)}
                    className="border border-[#f5f1e8]/60 hover:border-white bg-[#f5f1e8]/10 hover:bg-[#f5f1e8]/20 text-white font-semibold px-5 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm transition-all duration-200 backdrop-blur-xs cursor-pointer active:scale-95 flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#6bcb5b]" />
                    <span>{currentSlide.ctaSecondary}</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Featured Product Showcase Card (Ensures Products are Clearly Visible) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/20 text-[#2f3437] relative group"
              >
                {/* Product Image Frame */}
                <div className="relative w-full aspect-4/3 sm:aspect-square rounded-xl overflow-hidden bg-[#f5f1e8] flex items-center justify-center p-3">
                  <img
                    src={currentSlide.showcaseImage}
                    alt={currentSlide.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('Bag-1-638x1024.webp')) {
                        target.src = '/images/Bag-1-638x1024.webp';
                      }
                    }}
                  />
                  {/* Floating Trust Badge */}
                  <div className="absolute top-3 left-3 bg-[#0e5a46] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#6bcb5b]" />
                    <span>{currentSlide.showcaseBadge}</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#0e5a46] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs border border-[#e6dec9]">
                    {currentSlide.division}
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="mt-3.5 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-nature font-bold text-base text-[#0e5a46] leading-tight">
                      {currentSlide.showcaseLabel}
                    </h3>
                    <p className="text-xs text-[#2f3437]/65 mt-0.5">
                      Export Quality • Custom Branding Available
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate(currentSlide.pageTarget)}
                    className="shrink-0 p-2 rounded-lg bg-[#e6dec9]/60 hover:bg-[#0e5a46] hover:text-white text-[#0e5a46] transition-colors cursor-pointer"
                    aria-label="View product details"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Navigation Arrow Controls */}
      <button
        id="hero-slider-prev-btn"
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-[#0e5a46] text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        id="hero-slider-next-btn"
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-[#0e5a46] text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Interactive Bottom Progress Indicators & Slide Switcher */}
      <div className="relative z-20 w-full bg-black/25 backdrop-blur-xs border-t border-white/10 py-3">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            {SLIDES.map((slide, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  id={`hero-slide-tab-${slide.id}`}
                  onClick={() => goToSlide(idx)}
                  className={`text-left p-2 rounded-lg transition-all duration-200 cursor-pointer group ${
                    isCurrent
                      ? 'bg-white/15 border border-white/25 shadow-xs'
                      : 'hover:bg-white/10 border border-transparent'
                  }`}
                  aria-label={`Go to ${slide.division}`}
                >
                  {/* Progress Line */}
                  <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden mb-1.5">
                    {isCurrent ? (
                      <motion.div
                        key={`progress-${idx}-${currentIndex}-${isPaused}`}
                        initial={{ width: '0%' }}
                        animate={{ width: isPaused ? undefined : '100%' }}
                        transition={{
                          duration: isPaused ? 0 : SLIDE_DURATION / 1000,
                          ease: 'linear',
                        }}
                        className="h-full bg-[#6bcb5b] rounded-full"
                      />
                    ) : (
                      <div className="h-full w-0" />
                    )}
                  </div>

                  {/* Tab Label */}
                  <div className="flex items-center justify-between text-xs">
                    <span
                      className={`font-semibold truncate ${
                        isCurrent ? 'text-white' : 'text-white/70 group-hover:text-white'
                      }`}
                    >
                      {slide.division}
                    </span>
                    <span className="text-[10px] text-white/50 shrink-0 ml-1">
                      0{idx + 1}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

