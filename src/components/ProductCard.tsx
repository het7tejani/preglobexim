import React from 'react';
import { Product } from '../data/catalogData';
import { ImageWithFallback } from './ImageWithFallback';
import { Globe, ArrowRight } from 'lucide-react';

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
  const getExportBadge = () => {
    switch (fallbackType) {
      case 'bag':
        return 'OEM / ODM Available';
      case 'jewellery':
        return 'Hallmarked Export';
      case 'spices':
        return 'Standard Export Grade';
      default:
        return 'Worldwide Export';
    }
  };

  return (
    <div
      onClick={() => onInquire(product.title)}
      className="bg-[#FAF4EB] border border-[#E5DAC6] hover:border-[#111111] rounded-2xl overflow-hidden cursor-pointer flex flex-col transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group w-full h-full"
    >
      {/* Product Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-[#F2E8D7]">
        <ImageWithFallback
          src={product.image}
          alt={product.title}
          fallbackType={fallbackType}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Export Badge */}
        <div className="absolute top-2.5 left-2.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#111111]/80 backdrop-blur-xs text-white tracking-wide">
            <Globe className="w-2.5 h-2.5 text-[#F9D9A7]" />
            {getExportBadge()}
          </span>
        </div>
      </div>

      {/* Product Content - Centered */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3 text-center">
        <div>
          <h3 className="text-sm sm:text-[15px] font-bold text-[#111111] leading-snug line-clamp-2 group-hover:text-[#A36A23] transition-colors text-center">
            {product.title}
          </h3>
          {product.description && (
            <p className="text-xs text-[#555555] mt-1.5 line-clamp-2 leading-relaxed text-center">
              {product.description}
            </p>
          )}
        </div>

        {/* B2B Export Specs & Action */}
        <div className="pt-2.5 border-t border-[#E8DFC8]/60 flex items-center justify-between text-xs">
          <span className="text-[11px] font-medium text-[#776644] bg-[#F5EAD4] px-2.5 py-0.5 rounded-md">
            FOB / CIF • Custom MOQ
          </span>
          <span className="inline-flex items-center text-[12px] font-semibold text-[#111111] group-hover:text-[#A36A23] transition-colors gap-1">
            RFQ
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

