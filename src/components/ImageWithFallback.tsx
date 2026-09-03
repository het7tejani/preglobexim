import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'bag' | 'jewellery' | 'spices' | 'corporate' | 'logo' | 'general';
}

const FALLBACKS: Record<string, string> = {
  bag: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
  jewellery: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  spices: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
  corporate: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  logo: 'https://priglobexim.com/wp-content/uploads/2026/03/Untitled_design__7_-removebg-preview.png',
  general: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
};

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = '',
  fallbackType = 'general',
  className = '',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [hasFailed, setHasFailed] = useState(false);

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
      loading="lazy"
      referrerPolicy="no-referrer"
      className={className}
      {...props}
    />
  );
};
