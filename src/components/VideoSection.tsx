import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, ArrowUpRight, Play, Pause, X } from 'lucide-react';

export interface VideoReel {
  id: string;
  videoUrl: string;
  posterUrl: string;
  productTitle: string;
  price: string;
  productImage: string;
  tagline: string;
}

export const REELS_DATA: VideoReel[] = [
  {
    id: 'reel-1',
    videoUrl: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr-nfc/general/49191783081807649.mp4',
    posterUrl: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr-nfc/general/17551783054901731.png',
    productTitle: 'Sweet Kitty Tote Bag | 300 Gsm',
    price: '₹449',
    productImage: '/images/14x16_Inch-1024x1024.webp',
    tagline: 'Custom Printed Drawstring & Tote',
  },
  {
    id: 'reel-2',
    videoUrl: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr-nfc/general/17281783082072159.mp4',
    posterUrl: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr-nfc/general/20011783054930626.png',
    productTitle: 'Artisan Screen Print Cotton Tote',
    price: '₹399',
    productImage: '/images/3x4_72408bcc-66f6-49cc-bdb9-13e671d67be9-1024x1024.webp',
    tagline: 'High Precision Heat Transfer Art',
  },
  {
    id: 'reel-3',
    videoUrl: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr-nfc/general/61971783082842806.mp4',
    posterUrl: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr-nfc/general/81371783054955341.png',
    productTitle: 'Export Fabric Precision Cutting',
    price: '₹249',
    productImage: '/images/Fabric-Bag-Mfg.webp',
    tagline: 'Mass Production Textile Workshop',
  },
  {
    id: 'reel-4',
    videoUrl: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr-nfc/general/62441783082362828.mp4',
    posterUrl: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr-nfc/general/68131783054987885.png',
    productTitle: 'Brahmras Premium Eco Bag Range',
    price: '₹599',
    productImage: '/images/Bag-1-638x1024.webp',
    tagline: 'Founder Product Quality Tour',
  },
  {
    id: 'reel-5',
    videoUrl: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr-nfc/general/70191783083089824.mp4',
    posterUrl: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr-nfc/general/46591783055003338.png',
    productTitle: 'Sustainable Cotton Canvas Bags',
    price: '₹349',
    productImage: '/images/14x16_Inch-1024x1024.webp',
    tagline: 'Aakhirkaar Sustainable Bag Hi Kyun?',
  },
  {
    id: 'reel-6',
    videoUrl: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr-nfc/general/39291783083055949.mp4',
    posterUrl: 'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr-nfc/general/49861783138499153.png',
    productTitle: 'Heavy-Duty Jute & Cotton Packaging',
    price: '₹299',
    productImage: '/images/Fabric-Bag-Mfg.webp',
    tagline: 'Direct Factory Floor Manufacturing',
  },
];

interface VideoSectionProps {
  onSelectProduct?: (productTitle: string) => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onSelectProduct }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeModalReel, setActiveModalReel] = useState<VideoReel | null>(null);
  const [mutedStates, setMutedStates] = useState<{ [id: string]: boolean }>({
    'reel-1': true,
    'reel-2': true,
    'reel-3': true,
    'reel-4': true,
    'reel-5': true,
    'reel-6': true,
  });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const toggleMute = (reelId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMutedStates((prev) => ({
      ...prev,
      [reelId]: !prev[reelId],
    }));
  };

  return (
    <section className="w-full py-12 sm:py-16 bg-[#faf7f2] border-b border-[#e6dec9]/60 overflow-hidden">
      <div className="max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Section Header (Matches Naturetote 'Spotted It? Shop It!') */}
        <div className="flex flex-col items-center gap-2 mb-8 sm:mb-10 text-center">
          <h2 className="font-serif-nature text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0e5a46] tracking-tight">
            Spotted It? Shop It!
          </h2>
          <div className="w-16 h-1 bg-[#478a3f]/70 rounded-full my-1" />
          <p className="text-xs sm:text-sm text-[#2f3437]/75 max-w-lg">
            Real reels from our active workshops, manufacturing facilities, and client showcases.
          </p>
        </div>

        {/* Video Carousel Track */}
        <div className="relative group/track">
          {/* Scroll Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white hover:bg-slate-50 text-[#0e5a46] shadow-lg border border-slate-100 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer opacity-0 group-hover/track:opacity-100 hidden md:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scroll Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-white hover:bg-slate-50 text-[#0e5a46] shadow-lg border border-slate-100 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer opacity-0 group-hover/track:opacity-100 hidden md:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Reel Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {REELS_DATA.map((reel) => {
              const isMuted = mutedStates[reel.id] ?? true;

              return (
                <div
                  key={reel.id}
                  onClick={() => setActiveModalReel(reel)}
                  className="flex-shrink-0 w-[240px] sm:w-[270px] md:w-[290px] snap-start bg-black rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative aspect-[9/16] group select-none"
                >
                  {/* Video Player */}
                  <video
                    src={reel.videoUrl}
                    poster={reel.posterUrl}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    preload="auto"
                  />

                  {/* Gradient Overlays for readable text */}
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 pointer-events-none" />

                  {/* Top Bar: Brand Watermark & Sound Toggle */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-wider text-white/90 uppercase px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                      PriGlob Reel
                    </span>

                    <button
                      type="button"
                      onClick={(e) => toggleMute(reel.id, e)}
                      className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-all duration-200 active:scale-90"
                      title={isMuted ? 'Unmute video' : 'Mute video'}
                      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#6bcb5b]" />}
                    </button>
                  </div>

                  {/* Play Indicator overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg">
                      <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Product Pill Badge (Naturetote identical layout) */}
                  <div className="absolute bottom-4 left-3.5 right-3.5 z-20 flex items-center gap-2.5 bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/15 hover:bg-black/60 transition-colors">
                    {/* Product Thumbnail */}
                    <div className="w-11 h-11 bg-white rounded-xl flex-shrink-0 relative overflow-hidden p-0.5 shadow-md">
                      <img
                        src={reel.productImage}
                        alt={reel.productTitle}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.src = '/images/14x16_Inch-1024x1024.webp';
                        }}
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0 text-left">
                      <p className="text-xs font-semibold text-white truncate leading-tight">
                        {reel.productTitle}
                      </p>
                      <p className="text-[11px] font-bold text-white/90 mt-0.5">
                        {reel.price}
                      </p>
                    </div>

                    {/* Direct Select / Inquire Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct?.(reel.productTitle);
                      }}
                      className="w-8 h-8 rounded-xl bg-[#0e5a46] hover:bg-[#197a60] text-white flex items-center justify-center flex-shrink-0 shadow-sm transition-transform active:scale-90 cursor-pointer"
                      title="Select Product"
                      aria-label={`Select ${reel.productTitle}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full Reel Video Modal View */}
      {activeModalReel && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setActiveModalReel(null)}
        >
          <div
            className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalReel(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player in Modal */}
            <video
              src={activeModalReel.videoUrl}
              poster={activeModalReel.posterUrl}
              className="w-full h-full object-cover"
              controls
              autoPlay
              playsInline
            />

            {/* Product Card at bottom of modal */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/20">
              <img
                src={activeModalReel.productImage}
                alt={activeModalReel.productTitle}
                className="w-12 h-12 rounded-xl object-cover bg-white p-0.5"
              />
              <div className="flex-1 min-w-0 text-left">
                <p className="text-sm font-semibold text-white truncate">
                  {activeModalReel.productTitle}
                </p>
                <p className="text-xs text-[#6bcb5b] font-bold">
                  {activeModalReel.price}
                </p>
              </div>
              <button
                onClick={() => {
                  const title = activeModalReel.productTitle;
                  setActiveModalReel(null);
                  onSelectProduct?.(title);
                }}
                className="bg-[#0e5a46] hover:bg-[#197a60] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition-transform active:scale-95"
              >
                Inquire
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
