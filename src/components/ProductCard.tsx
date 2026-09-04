import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export interface ProductItem {
  title: string;
  image: string;
  description?: string;
  category?: string;
  moq?: string;
  specs?: string;
}

interface ProductCardProps {
  product: ProductItem;
  fallbackType: 'bag' | 'jewellery' | 'spices';
  onInquire: (title: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  fallbackType,
  onInquire,
}) => {
  return (
    <article
      onClick={() => onInquire(product.title)}
      className="bg-white border border-[#e6dec9] rounded-2xl overflow-hidden flex flex-col relative w-full shadow-md shadow-[#e6dec9]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#e6dec9]/50 hover:-translate-y-0.5 group cursor-pointer"
    >
      {/* Product Image Stage */}
      <div className="w-full aspect-square bg-[#fbfaf7] relative overflow-hidden flex items-center justify-center border-b border-[#e6dec9]">
        <div className="w-full h-full transform transition-transform duration-700 group-hover:scale-105 flex items-center justify-center relative p-3">
          <ImageWithFallback
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
            fallbackType={fallbackType}
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1 gap-2 text-left">
        <h3 className="font-semibold text-sm sm:text-[15px] text-[#2f3437]/95 line-clamp-1 leading-tight text-center group-hover:text-[#0e5a46] transition-colors">
          {product.title}
        </h3>

        {/* 5-Star Rating Row */}
        <div className="flex items-center justify-center gap-1.5">
          <div className="flex items-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs text-[#2f3437]/50 font-medium">5 (1)</span>
        </div>

        {/* Price / MOQ row */}
        <div className="flex items-center justify-between gap-2 mt-auto pt-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1.5">
            <span className="font-bold text-sm sm:text-base text-[#0e5a46]">
              {product.moq || 'FOB / CIF'}
            </span>
            <span className="text-[11px] text-[#2f3437]/60">Export MOQ</span>
          </div>

          {/* Reserved spacer so text doesn't clash with floating button */}
          <div className="w-9 h-9 sm:w-24 sm:h-10 flex-shrink-0" />
        </div>
      </div>

      {/* Action Button (Naturetote ditto copy) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onInquire(product.title);
        }}
        className="absolute bottom-4 right-4 z-10 bg-[#0e5a46] hover:bg-[#197a60] text-white w-9 h-9 sm:w-24 sm:h-10 rounded-xl flex items-center justify-center shadow-sm cursor-pointer hover:shadow-md transition-all duration-200 active:scale-95"
        aria-label="Request quote"
      >
        <ShoppingCart className="w-4 h-4 sm:me-1.5" />
        <span className="font-bold text-xs sm:text-sm hidden sm:block">Inquire</span>
      </button>
    </article>
  );
};
