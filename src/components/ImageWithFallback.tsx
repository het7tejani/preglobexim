import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'bag' | 'jewellery' | 'spices' | 'corporate' | 'logo' | 'general';
}

const FALLBACKS: Record<string, string> = {
  bag: '/images/fallback-bag.webp',
  jewellery: '/images/fallback-jewellery.webp',
  spices: '/images/fallback-spices.webp',
  corporate: '/images/fallback-corporate.webp',
  logo: '/images/Untitled_design__7_-removebg-preview.png',
  general: '/images/fallback-general.webp',
};

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = '',
  fallbackType = 'general',
  className = '',
  loading = 'eager',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasFailed(false);
  }, [src]);

  const handleError = () => {
    if (!hasFailed) {
      setHasFailed(true);
      setImgSrc(FALLBACKS[fallbackType] || FALLBACKS.general);
    }
  };

  return (
    <img
      src={imgSrc || FALLBACKS[fallbackType] || FALLBACKS.general}
      alt={alt}
      onError={handleError}
      loading={loading}
      decoding="async"
      className={className}
      {...props}
    />
  );
};
