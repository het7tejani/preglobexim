import React, { useState } from 'react';
import { ShoppingCart, Heart, RotateCw } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export interface ProductItem {
  title: string;
  image: string;
  altImage?: string;
  price?: string;
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
  const [isLiked, setIsLiked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const activeImage = isFlipped && product.altImage ? product.altImage : product.image;

  return (
    <article
      onClick={() => onInquire(product.title)}
      className="bg-white border border-[#e6dec9]/80 rounded-2xl overflow-hidden flex flex-col relative w-full shadow-xs hover:shadow-lg hover:border-[#0e5a46]/30 transition-all duration-300 group cursor-pointer"
    >
      {/* Product Image Stage */}
      <div className="w-full aspect-square bg-[#fbfaf7] relative overflow-hidden flex items-center justify-center border-b border-[#f0ebe0]">
        <div
          className={`w-full h-full transform transition-all duration-500 group-hover:scale-105 flex items-center justify-center p-3 relative ${
            isFlipped && !product.altImage ? 'scale-x-[-1]' : ''
          }`}
        >
          <ImageWithFallback
            src={activeImage}
            alt={product.title}
            className="w-full h-full object-contain"
            fallbackType={fallbackType}
          />
        </div>

        {/* Rotate / Flip View Button (Bottom-Left) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsFlipped((prev) => !prev);
          }}
          className="absolute bottom-2.5 left-2.5 z-10 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-[#2f3437] shadow-sm border border-black/10 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer hover:shadow-md"
          title={isFlipped ? 'Show front view' : 'Rotate view'}
          aria-label="Rotate view"
        >
          <RotateCw
            className={`w-3.5 h-3.5 transition-transform duration-300 ${
              isFlipped ? 'rotate-180 text-[#0e5a46]' : 'text-[#2f3437]'
            }`}
          />
        </button>

        {/* Wishlist Heart Button (Bottom-Right) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked((prev) => !prev);
          }}
          className="absolute bottom-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/95 hover:bg-white shadow-sm border border-black/10 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer hover:shadow-md"
          title={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-label="Add to wishlist"
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors duration-200 ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-[#2f3437]'
            }`}
          />
        </button>
      </div>

      {/* Product Details (Price removed as requested) */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 gap-2 text-left justify-between">
        {/* Title */}
        <h3
          className="font-medium text-xs sm:text-[13px] text-[#2f3437] line-clamp-1 leading-snug group-hover:text-[#0e5a46] transition-colors"
          title={product.title}
        >
          {product.title}
        </h3>

        {/* Action Row - Clean Select Button */}
        <div className="flex items-center justify-end gap-2 mt-auto pt-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onInquire(product.title);
            }}
            className="w-full sm:w-auto bg-[#0e5a46] hover:bg-[#093f31] text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl flex items-center justify-center gap-1.5 font-bold text-xs sm:text-[13px] shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
            aria-label={`Select ${product.title}`}
          >
            <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Select</span>
          </button>
        </div>
      </div>
    </article>
  );
};
