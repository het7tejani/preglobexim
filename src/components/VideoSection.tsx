import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, ArrowUpRight, Play, X } from 'lucide-react';

export interface VideoReel {
  id: string;
  videoUrl: string;
  posterUrl: string;
  productTitle: string;
  subtitle: string;
  productImage: string;
  tagline: string;
}

export const REELS_DATA: VideoReel[] = [
  {
    id: 'reel-1',
    videoUrl: '/videos/trade-1.mp4',
    posterUrl: '/videos/trade-1-poster.jpg',
    productTitle: 'Global Ocean Freight Transit',
    subtitle: 'Deep-Sea Full Container Load (FCL)',
    productImage: '/images/sea-shipment.png',
    tagline: 'Worldwide Sea Logistics',
  },
  {
    id: 'reel-2',
    videoUrl: '/videos/trade-2.mp4',
    posterUrl: '/videos/trade-2-poster.jpg',
    productTitle: 'Intermodal Port Container Handling',
    subtitle: 'Mundra & Nhava Sheva Port Loading',
    productImage: '/images/hero-trade.webp',
    tagline: 'Heavy Port Gantry Operations',
  },
  {
    id: 'reel-3',
    videoUrl: '/videos/trade-3.mp4',
    posterUrl: '/videos/trade-3-poster.jpg',
    productTitle: 'Direct Merchant Vessel Dispatch',
    subtitle: 'Scheduled International Freight Lines',
    productImage: '/images/sea-shipment.png',
    tagline: 'Commercial Maritime Transit',
  },
  {
    id: 'reel-4',
    videoUrl: '/videos/trade-4.mp4',
    posterUrl: '/videos/trade-4-poster.jpg',
    productTitle: 'Export Fulfillment & Loading Docks',
    subtitle: 'Customs-Cleared Palletized Cargo',
    productImage: '/images/Office_hand_Bag_Beige.webp',
    tagline: 'Multi-Modal Logistics Hub',
  },
  {
    id: 'reel-5',
    videoUrl: '/videos/trade-5.mp4',
    posterUrl: '/videos/trade-5-poster.jpg',
    productTitle: 'OEM Export Textile Stitching',
    subtitle: 'Heavy-Duty Canvas & Jute Production',
    productImage: '/images/Fabric-Bag-Mfg.webp',
    tagline: 'Artisan Workshop Manufacturing',
  },
  {
    id: 'reel-6',
    videoUrl: '/videos/trade-6.mp4',
    posterUrl: '/videos/trade-6-poster.jpg',
    productTitle: 'Priority Air Cargo & Express Customs',
    subtitle: 'IATA Fast-Track Worldwide Transit',
    productImage: '/images/airlines-cta-image-1024x768.webp',
    tagline: 'Global Air Consignments',
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
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 mb-8 sm:mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e5a46]/10 border border-[#0e5a46]/20 text-[#0e5a46] text-xs font-semibold tracking-wide uppercase">
            Global Trade In Motion
          </div>
          <h2 className="font-serif-nature text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0e5a46] tracking-tight">
            Export Logistics & Factory Reels
          </h2>
          <div className="w-16 h-1 bg-[#478a3f]/70 rounded-full my-1" />
          <p className="text-xs sm:text-sm text-[#2f3437]/75 max-w-xl">
            Live reels from our international ocean cargo transit, intermodal port terminals, customs fulfillment hubs, and artisan export workshops.
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
                  <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold tracking-wide text-white/90 uppercase px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 truncate max-w-[170px]">
                      {reel.tagline}
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

                  {/* Bottom Product Pill Badge */}
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
                      <p className="text-[10px] font-medium text-[#6bcb5b] mt-0.5 truncate">
                        {reel.subtitle}
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
            {/* Top Bar: Tagline & Close Button */}
            <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-auto">
              <span className="text-xs font-bold tracking-wide text-white uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                {activeModalReel.tagline}
              </span>
              <button
                onClick={() => setActiveModalReel(null)}
                className="w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

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
                <p className="text-xs text-[#6bcb5b] font-medium">
                  {activeModalReel.subtitle}
                </p>
              </div>
              <button
                onClick={() => {
                  const title = activeModalReel.productTitle;
                  setActiveModalReel(null);
                  onSelectProduct?.(title);
                }}
                className="bg-[#0e5a46] hover:bg-[#197a60] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition-transform active:scale-95 cursor-pointer"
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
