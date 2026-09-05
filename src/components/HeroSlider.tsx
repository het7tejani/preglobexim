import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ActivePage } from '../types';

interface NaturetoteSlide {
  id: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  pageTarget: ActivePage;
  actionType: 'navigate' | 'rfq';
  rfqCategory?: string;
}

const NATURETOTE_SLIDES: NaturetoteSlide[] = [
  {
    id: 'slide-1',
    desktopImage: '/images/naturetote-slider/slider-1.webp',
    mobileImage: '/images/naturetote-slider/slider-2.webp',
    alt: 'Sustainable Bags for Better Brand - Naturetote Cotton and Jute Bags',
    pageTarget: 'cotton-jute-tote-bag',
    actionType: 'navigate',
  },
  {
    id: 'slide-2',
    desktopImage: '/images/naturetote-slider/slider-3.webp',
    mobileImage: '/images/naturetote-slider/slider-4.webp',
    alt: "Every Stitch Tells Your Brand's Story - Custom Bags Manufacturing",
    pageTarget: 'cotton-jute-tote-bag',
    actionType: 'rfq',
    rfqCategory: 'Custom Branded Cotton & Jute Bags',
  },
  {
    id: 'slide-3',
    desktopImage: '/images/naturetote-slider/slider-5.webp',
    mobileImage: '/images/naturetote-slider/slider-6.webp',
    alt: 'Naturetote Eco Packaging Collections',
    pageTarget: 'cotton-jute-tote-bag',
    actionType: 'navigate',
  },
];

const SLIDE_INTERVAL_MS = 5000;

interface HeroSliderProps {
  onNavigate: (page: ActivePage) => void;
  onOpenQuoteModal: (category?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-advance slides cleanly without jitter
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % NATURETOTE_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + NATURETOTE_SLIDES.length) % NATURETOTE_SLIDES.length);
  };

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % NATURETOTE_SLIDES.length);
  };

  const currentSlide = NATURETOTE_SLIDES[currentIndex];

  const handleSlideClick = () => {
    if (currentSlide.actionType === 'rfq') {
      onOpenQuoteModal(currentSlide.rfqCategory);
    } else {
      onNavigate(currentSlide.pageTarget);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="naturetote-hero"
      aria-label="Naturetote Hero Slider"
      className="relative w-full overflow-hidden bg-[#e6dec9]/20 select-none group/slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (diff > 45) nextSlide();
        if (diff < -45) prevSlide();
        touchStartX.current = null;
      }}
    >
      {/* Banner Media Frame with Responsive Aspect Ratio */}
      <div
        onClick={handleSlideClick}
        className="relative w-full cursor-pointer aspect-4/5 sm:aspect-16/7 md:aspect-16/6 lg:aspect-192/60 overflow-hidden"
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <picture className="w-full h-full block">
              <source
                media="(max-width: 640px)"
                srcSet={currentSlide.mobileImage}
              />
              <source
                media="(min-width: 641px)"
                srcSet={currentSlide.desktopImage}
              />
              <img
                src={currentSlide.desktopImage}
                alt={currentSlide.alt}
                loading="eager"
                className="w-full h-full object-cover object-center"
              />
            </picture>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Navigation Arrow */}
      <button
        id="hero-slider-prev-btn"
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 md:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-black/25 hover:bg-black/45 text-white/90 hover:text-white flex items-center justify-center backdrop-blur-xs transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        id="hero-slider-next-btn"
        onClick={nextSlide}
        className="absolute right-3 sm:right-5 md:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-black/25 hover:bg-black/45 text-white/90 hover:text-white flex items-center justify-center backdrop-blur-xs transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
      </button>

      {/* Bottom Center Indicator Bars matching Naturetote */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-2.5">
        {NATURETOTE_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              id={`hero-indicator-${idx}`}
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(idx);
              }}
              className="p-1 cursor-pointer focus:outline-hidden"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-8 sm:w-10 h-[3px] sm:h-[3.5px] bg-white shadow-sm'
                    : 'w-5 sm:w-6 h-[2.5px] sm:h-[3px] bg-white/45 hover:bg-white/75'
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};
