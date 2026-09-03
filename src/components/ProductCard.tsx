import React from 'react';
import { Product } from '../data/catalogData';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onInquire: (productName: string) => void;
  fallbackType?: 'bag' | 'jewellery' | 'spices' | 'general';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onInquire,
  fallbackType = 'general',
}) => {
  return (
    <div
      onClick={() => onInquire(product.title)}
      className="bg-[#F9D9A7] rounded-[32px] overflow-hidden cursor-pointer flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
    >
      {/* Product Image edge-to-edge with 1:1 aspect ratio */}
      <div className="w-full aspect-square overflow-hidden bg-[#F1DEBE]">
        <ImageWithFallback
          src={product.image}
          alt={product.title}
          fallbackType={fallbackType}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Title and Description */}
      <div className="p-6 text-center space-y-2 flex-1 flex flex-col justify-start">
        <h3 className="text-base sm:text-lg font-bold text-[#111111] leading-snug">
          {product.title}
        </h3>
        {product.description && (
          <p className="text-sm text-[#444444] leading-relaxed">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};
