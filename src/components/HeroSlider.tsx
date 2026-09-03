import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ActivePage } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroSliderProps {
  onNavigate: (page: ActivePage) => void;
  onOpenQuoteModal: (product?: string) => void;
}

interface SlideItem {
  id: string;
  division: string;
  pageTarget: ActivePage;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  fallbackType: 'bag' | 'jewellery' | 'spices';
  highlights: string[];
}

const SLIDES: SlideItem[] = [
  {
    id: 'bags',
    division: 'Cotton & Jute Bags',
    pageTarget: 'cotton-jute-tote-bag',
    tag: 'Sustainable Packaging • Direct Factory',
    title: 'Eco-Friendly Fabric Bags Crafted for Global Brands',
    subtitle:
      'High-grade organic cotton totes, heavy canvas shoppers, and biodegradable jute packaging manufactured for international retail chains and promotional merchandise.',
    image: '/images/Fabric-Bag-Mfg.webp',
    fallbackType: 'bag',
    highlights: ['150–450 GSM Organic Cotton', 'Custom OEM Silkscreen & Embroidery', 'Mundra Port Sea FCL/LCL'],
  },
  {
    id: 'jewellery',
    division: 'Gems & Fine Jewellery',
    pageTarget: 'gems-jewellery',
    tag: 'Artisan Craftsmanship • Certified Purity',
    title: 'Natural Gemstones & Certified Fine Jewellery',
    subtitle:
      'Precision-cut diamonds, colored gemstones, and 925 sterling silver fine jewellery handmade in Surat for premier international luxury boutiques and private collections.',
    image: '/images/Diamond-Jewellery-683x1024.webp',
    fallbackType: 'jewellery',
    highlights: ['Lab-Grown & Natural Diamonds', '925 Silver & Solid Gold Casting', 'Insured Priority Air Cargo'],
  },
  {
    id: 'spices',
    division: 'Authentic Indian Spices',
    pageTarget: 'indian-spices',
    tag: 'Farm-Direct Agrarian Source • Spices Board',
    title: 'Pure Aromatic Indian Spices Sourced for Importers',
    subtitle:
      'Sortex-cleaned whole and cold-milled spices vacuum-sealed at source to preserve essential aromatic oils, vibrant natural colors, and culinary potency.',
    image: '/images/Indian-Spices-Photo-1024x683.webp',
    fallbackType: 'spices',
    highlights: ['High-Curcumin Turmeric & Cumin', 'Phytosanitary & FSSAI Compliant', '20ft/40ft Ocean Containers'],
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const active = SLIDES[current];

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, current]);

  const handleNext = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section
      className="relative w-full bg-[#F5EFEB] py-10 sm:py-14 lg:py-16 min-h-[620px] sm:min-h-[600px] lg:min-h-[580px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (diff > 45) handleNext();
        else if (diff < -45) handlePrev();
        touchStartX.current = null;
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Clean, Elegant Typography with Fixed Content Height */}
          <div className="lg:col-span-6 text-left flex flex-col justify-between min-h-[380px] sm:min-h-[360px] lg:min-h-[420px]">
            {/* Animated Slide Content Box */}
            <div className="relative min-h-[310px] sm:min-h-[290px] lg:min-h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + '-text'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Clean Sub-tag */}
                  <div className="h-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#A36A23]"></span>
                    <span className="text-xs sm:text-sm font-semibold text-[#8A5B20] tracking-wide uppercase">
                      {active.tag}
                    </span>
                  </div>

                  {/* Main Hero Headline (Reserved Height to prevent height jumping) */}
                  <div className="min-h-[4.2rem] sm:min-h-[5.2rem] lg:min-h-[6.2rem] flex items-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] leading-[1.15]">
                      {active.title}
                    </h1>
                  </div>

                  {/* Subtitle (Reserved Height to prevent height jumping) */}
                  <div className="min-h-[3.8rem] sm:min-h-[3.2rem] lg:min-h-[3.6rem]">
                    <p className="text-sm sm:text-base text-[#444444] leading-relaxed max-w-xl">
                      {active.subtitle}
                    </p>
                  </div>

                  {/* Minimal Highlights (Reserved Height) */}
                  <div className="min-h-[2rem] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#333333]">
                    {active.highlights.map((item, idx) => (
                      <span key={idx} className="flex items-center gap-1.5">
                        <span className="text-[#8A5B20] font-bold">✓</span>
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>

                  {/* Clean Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      id="hero-rfq-button"
                      onClick={() => onOpenQuoteModal(active.division)}
                      className="px-7 py-3.5 rounded-full bg-[#111111] text-white text-xs sm:text-sm font-bold hover:bg-black transition shadow-sm active:scale-95 flex items-center gap-2 group"
                    >
                      <span>Request Export RFQ</span>
                      <ArrowRight className="w-4 h-4 text-[#F9D9A7] group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onNavigate(active.pageTarget)}
                      className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#111111] text-xs sm:text-sm font-semibold border border-[#D5C8B0] transition shadow-xs"
                    >
                      View {active.division.split(' ')[0]} Catalog
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Simple, Minimal Slide Indicators (Dots + Numbers) */}
            <div className="pt-6 sm:pt-4 flex items-center gap-4 border-t border-[#E8DFC8]/60 mt-4">
              <div className="flex items-center gap-2">
                {SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrent(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === current
                        ? 'w-8 h-2 bg-[#111111]'
                        : 'w-2 h-2 bg-[#C8BEB0] hover:bg-[#8A7555]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <span className="text-xs text-[#777777] font-medium">
                0{current + 1} / 0{SLIDES.length}
              </span>

              <div className="flex items-center gap-1 ml-auto sm:ml-4">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full text-[#444444] hover:text-[#111111] hover:bg-white/60 transition"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full text-[#444444] hover:text-[#111111] hover:bg-white/60 transition"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Large, Beautiful Image with Constant Aspect Ratio Container */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md aspect-[4/3] sm:aspect-[16/11] bg-[#EDE5D8]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + '-img'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <ImageWithFallback
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover"
                    fallbackType={active.fallbackType}
                  />

                  {/* Subtle category label in bottom corner */}
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                    {active.division}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
