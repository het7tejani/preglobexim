import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ActivePage } from '../types';

interface CategoryItem {
  name: string;
  image: string;
  pageTarget: ActivePage;
  subtitle: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    name: 'Cotton Tote Bags',
    subtitle: '150-350 GSM Organic',
    image: '/images/Bag-1-638x1024.webp',
    pageTarget: 'cotton-jute-tote-bag',
  },
  {
    name: 'Classic Jute Bags',
    subtitle: 'Golden Fiber Hamper',
    image: '/images/Fabric-Bag-Mfg.webp',
    pageTarget: 'cotton-jute-tote-bag',
  },
  {
    name: 'Drawstring Pouches',
    subtitle: 'Custom Eco Packaging',
    image: '/images/3x4_72408bcc-66f6-49cc-bdb9-13e671d67be9-1024x1024.webp',
    pageTarget: 'cotton-jute-tote-bag',
  },
  {
    name: 'Canvas Shoppers',
    subtitle: 'Heavy Duty Carryall',
    image: '/images/Black_White-LargeCanvasToteBag-1024x1024.webp',
    pageTarget: 'cotton-jute-tote-bag',
  },
  {
    name: 'Diamond & Gem Rings',
    subtitle: 'Hallmarked 14k/18k',
    image: '/images/Untitled-design-12.webp',
    pageTarget: 'gems-jewellery',
  },
  {
    name: 'Fine Bracelets & Bangles',
    subtitle: 'Artisan Crafted',
    image: '/images/Untitled-design-15.webp',
    pageTarget: 'gems-jewellery',
  },
  {
    name: 'Marquise Necklaces',
    subtitle: 'Luxury Fine Jewelry',
    image: '/images/DN1118A_940x.webp',
    pageTarget: 'gems-jewellery',
  },
  {
    name: 'Whole & Ground Spices',
    subtitle: 'Cardamom, Cumin, Chili',
    image: '/images/Indian-Spices-683x1024.webp',
    pageTarget: 'indian-spices',
  },
  {
    name: 'Farm-Direct Spices',
    subtitle: 'Turmeric & Masalas',
    image: '/images/Indian-Spices-Photo-1024x683.webp',
    pageTarget: 'indian-spices',
  },
];

interface CategorySliderProps {
  onSelectCategory: (page: ActivePage) => void;
}

export const CategorySlider: React.FC<CategorySliderProps> = ({ onSelectCategory }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full pt-8 pb-4 bg-[#f5f1e8]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with decorative Naturetote chevrons */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <ChevronLeft className="w-5 h-5 text-[#478a3f] md:hidden" />
          <h2 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46]">
            Shop by Category
          </h2>
          <ChevronRight className="w-5 h-5 text-[#478a3f] md:hidden" />
        </div>

        {/* Carousel Container */}
        <div className="relative w-full group/carousel">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white text-[#0e5a46] w-10 h-10 rounded-full border border-[#e6dec9]/80 shadow-md flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 opacity-0 group-hover/carousel:opacity-100 duration-300 md:-translate-x-3"
            aria-label="Slide left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Horizontal Scroll Track */}
          <div
            ref={scrollRef}
            className="flex items-center justify-start gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-3 px-1.5 scroll-smooth"
          >
            {CATEGORIES.map((cat, idx) => (
              <div key={idx} className="flex-shrink-0">
                <button
                  onClick={() => onSelectCategory(cat.pageTarget)}
                  className="flex flex-col items-center gap-3 group cursor-pointer focus:outline-none text-center"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center border-2 border-[#e6dec9] group-hover:border-[#197a60] group-hover:scale-105 transition-all duration-300 shadow-xs bg-white overflow-hidden p-2">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('Bag-1-638x1024.webp')) {
                          target.src = '/images/Bag-1-638x1024.webp';
                        }
                      }}
                    />
                  </div>
                  <div className="max-w-[120px] sm:max-w-[140px]">
                    <span className="block font-medium text-xs sm:text-sm text-[#2f3437] group-hover:text-[#0e5a46] transition-colors leading-tight">
                      {cat.name}
                    </span>
                    <span className="block text-[11px] text-[#2f3437]/60 mt-0.5">
                      {cat.subtitle}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white text-[#0e5a46] w-10 h-10 rounded-full border border-[#e6dec9]/80 shadow-md flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 opacity-0 group-hover/carousel:opacity-100 duration-300 md:translate-x-3"
            aria-label="Slide right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
