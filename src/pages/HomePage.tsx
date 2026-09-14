import React, { useState, useEffect } from 'react';
import { ActivePage, BlogPost } from '../types';
import { HeroSlider } from '../components/HeroSlider';
import { CategorySlider } from '../components/CategorySlider';
import { ProductCard } from '../components/ProductCard';
import { VideoSection } from '../components/VideoSection';
import { COTTON_JUTE_CATEGORIES } from '../data/catalogData';
import {
  ChevronRight,
  Leaf,
  Award,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Users2,
  ArrowRight,
  PackageCheck,
  Sparkles,
  Scissors,
  BookOpen,
  Calendar,
  Clock,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: ActivePage) => void;
  onOpenQuoteModal: (product?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  // Grab bag subcategories for dedicated showcases
  const canvasToteProducts =
    COTTON_JUTE_CATEGORIES.find((c) => c.name.toLowerCase().includes('canvas'))?.products || [];
  const juteProducts =
    COTTON_JUTE_CATEGORIES.find((c) => c.name.toLowerCase().includes('jute'))?.products || [];
  const pouchProducts =
    COTTON_JUTE_CATEGORIES.find((c) => c.name.toLowerCase().includes('drawstring'))?.products || [];
  const allBagProducts = COTTON_JUTE_CATEGORIES.flatMap((c) => c.products);

  const [recentBlogs, setRecentBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((json) => {
        if (json.success && Array.isArray(json.data)) {
          setRecentBlogs(json.data.slice(0, 3));
        }
      })
      .catch((err) => console.error('Failed to load recent blogs:', err));
  }, []);

  return (
    <div className="w-full flex flex-col bg-[#f5f1e8] text-[#2f3437]">
      {/* 1. Naturetote Full-Width Hero Slider with Bottom Linear Progress Indicators */}
      <HeroSlider
        onNavigate={onNavigate}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* 2. Product Overview Circular Slider (formerly Shop by Category) */}
      <CategorySlider
        onSelectCategory={(page) => {
          onNavigate(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 3. Showcase 1: Cotton Canvas & Everyday Totes */}
      <section className="w-full py-8 sm:py-12 border-t border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46]">
                Cotton Canvas &amp; Everyday Totes
              </h2>
              <p className="text-xs sm:text-sm text-[#2f3437]/65 font-light">
                GOTS certified organic cotton totes, heavy-duty 150-350 GSM shoppers &amp; double-stitched carryalls
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('cotton-jute-tote-bag');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs sm:text-sm font-bold text-[#0e5a46] hover:text-[#197a60] flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>View All ({allBagProducts.length})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {(canvasToteProducts.length > 0 ? canvasToteProducts.slice(0, 8) : allBagProducts.slice(0, 8)).map(
              (product, idx) => (
                <ProductCard
                  key={idx}
                  product={product}
                  fallbackType="bag"
                  onInquire={(title) => onOpenQuoteModal(title)}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* 4. Showcase 2: Golden Jute & Hamper Collections */}
      <section className="w-full py-8 sm:py-12 bg-white/40 border-t border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46]">
                Golden Jute Bags &amp; Eco Hampers
              </h2>
              <p className="text-xs sm:text-sm text-[#2f3437]/65 font-light">
                100% biodegradable natural golden jute fiber, heavy-duty load bearing, and padded cane/cotton handles
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('cotton-jute-tote-bag');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs sm:text-sm font-bold text-[#0e5a46] hover:text-[#197a60] flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>Explore Jute Collection</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {(juteProducts.length > 0 ? juteProducts.slice(0, 4) : allBagProducts.slice(8, 12)).map(
              (product, idx) => (
                <ProductCard
                  key={idx}
                  product={product}
                  fallbackType="bag"
                  onInquire={(title) => onOpenQuoteModal(title)}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* 5. Showcase 3: Drawstring Pouches & Organizer Bags */}
      <section className="w-full py-8 sm:py-12 border-t border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46]">
                Drawstring Pouches &amp; Packaging Bags
              </h2>
              <p className="text-xs sm:text-sm text-[#2f3437]/65 font-light">
                Eco-friendly retail packaging pouches, dustproof wardrobe organizer covers &amp; bespoke gift bags
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('cotton-jute-tote-bag');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs sm:text-sm font-bold text-[#0e5a46] hover:text-[#197a60] flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>View All Pouches</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {(pouchProducts.length > 0 ? pouchProducts.slice(0, 4) : allBagProducts.slice(12, 16)).map(
              (product, idx) => (
                <ProductCard
                  key={idx}
                  product={product}
                  fallbackType="bag"
                  onInquire={(title) => onOpenQuoteModal(title)}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* Video Reels Section: Spotted It? Shop It! (Naturetote identical layout) */}
      <VideoSection onSelectProduct={(title) => onOpenQuoteModal(title)} />

      {/* 6. Naturetote 4-Column Features / USP Banner */}
      <section className="w-full py-12 bg-white border-y border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-[#e6dec9] p-6 rounded-2xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0e5a46]/10 rounded-2xl flex items-center justify-center text-[#0e5a46]">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif-nature text-[#0e5a46] text-base sm:text-lg font-bold">
                100% Biodegradable &amp; Organic
              </h3>
              <p className="text-[#2f3437]/65 text-xs sm:text-sm font-light leading-relaxed">
                Natural unbleached organic jute, zero-plastic cotton fibres, and GOTS-certified sustainable packaging.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#e6dec9] p-6 rounded-2xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0e5a46]/10 rounded-2xl flex items-center justify-center text-[#0e5a46]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif-nature text-[#0e5a46] text-base sm:text-lg font-bold">
                Custom OEM Branding
              </h3>
              <p className="text-[#2f3437]/65 text-xs sm:text-sm font-light leading-relaxed">
                Corporate logos, silk-screen printing, bespoke embroidery, custom hangtags, and private label packaging.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#e6dec9] p-6 rounded-2xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0e5a46]/10 rounded-2xl flex items-center justify-center text-[#0e5a46]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif-nature text-[#0e5a46] text-base sm:text-lg font-bold">
                Made in India Direct
              </h3>
              <p className="text-[#2f3437]/65 text-xs sm:text-sm font-light leading-relaxed">
                Manufactured by master Gujarat artisans and stitching technicians with zero third-party agent markups.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#e6dec9] p-6 rounded-2xl flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0e5a46]/10 rounded-2xl flex items-center justify-center text-[#0e5a46]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-nature text-[#0e5a46] text-base sm:text-lg font-bold">
                Secure Global Shipping
              </h3>
              <p className="text-[#2f3437]/65 text-xs sm:text-sm font-light leading-relaxed">
                Full container FCL &amp; LCL cargo from Mundra &amp; Pipavav ports with marine insurance and LC terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Naturetote "Why Choose Us" Editorial Section */}
      <section className="w-full py-16 bg-[#f5f1e8] border-b border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col gap-3">
              <h2 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e5a46] leading-tight">
                Why Choose Export Bags <br />from PriGlob Exim?
              </h2>
              <div className="w-16 h-1 bg-[#478a3f]/60 rounded-full" />
              <p className="text-[#2f3437]/70 text-sm font-light leading-relaxed mt-2">
                We bridge the gap between India&apos;s rich textile heritage and international trade requirements. Every bag batch is inspected for seam strength, dye fastness, and delivered on strict FOB/CIF schedules.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0e5a46] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#2f3437]/85 font-medium leading-normal">
                  Reinforced double-stitched fabric handles capable of supporting up to 15-20 kg export loads.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0e5a46] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#2f3437]/85 font-medium leading-normal">
                  Certified unbleached raw organic cotton fibers compliant with EU REACH &amp; GOTS standards.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0e5a46] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#2f3437]/85 font-medium leading-normal">
                  Custom OEM screen printing, azo-free natural dyes, and computerized embroidery branding.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0e5a46] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#2f3437]/85 font-medium leading-normal">
                  100% biodegradable, compostable, and plastic-free golden jute and cotton textiles.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0e5a46] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#2f3437]/85 font-medium leading-normal">
                  Government of India IEC registered with Port of Loading Mundra, Pipavav &amp; Ahmedabad Air Cargo.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0e5a46] mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#2f3437]/85 font-medium leading-normal">
                  Transparent trade pricing under Incoterms 2020: FOB, CIF, CFR, and Door-to-Door DDP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. From Our Manufacturing Journal & Export Blog */}
      {recentBlogs.length > 0 && (
        <section className="w-full py-12 sm:py-16 bg-[#fbfaf7] border-t border-[#e6dec9]">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#478a3f] block mb-2">
                  Market Intelligence &amp; Technical Guides
                </span>
                <h2 className="font-serif-nature text-2xl sm:text-3xl font-bold text-[#0e5a46]">
                  From Our Manufacturing Journal
                </h2>
                <p className="text-xs sm:text-sm text-[#2f3437]/65 mt-1 font-light">
                  Industry insights, global compliance standards, and sustainable packaging trends for retail buyers.
                </p>
              </div>

              <button
                onClick={() => {
                  onNavigate('blog');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs sm:text-sm font-bold text-[#0e5a46] hover:text-[#197a60] flex items-center gap-1.5 hover:underline cursor-pointer whitespace-nowrap self-start sm:self-auto"
              >
                <span>Browse All Articles</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {recentBlogs.map((blog) => (
                <article
                  key={blog._id}
                  onClick={() => {
                    window.location.href = `/blog/${blog.slug}`;
                  }}
                  className="group cursor-pointer bg-white border border-[#e6dec9] rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden bg-[#f5f1e8] relative">
                      <img
                        src={blog.coverImage || '/images/Bag-1-638x1024.webp'}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/95 backdrop-blur-xs text-[#0e5a46] text-[10px] font-bold rounded-full uppercase tracking-wider shadow-xs border border-[#e6dec9]">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 text-[11px] text-[#2f3437]/60 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>

                      <h3 className="font-serif-nature text-base sm:text-lg font-bold text-[#0e5a46] leading-snug mb-2 group-hover:text-[#478a3f] transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-xs text-[#2f3437]/70 font-light leading-relaxed line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between">
                    <span className="text-xs text-[#2f3437]/80 font-medium truncate max-w-[150px]">
                      By {blog.author?.name}
                    </span>
                    <span className="text-xs font-bold text-[#0e5a46] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Dedicated "Our Company & Executive Team" Spotlight */}
      <section className="w-full py-14 sm:py-18 bg-white border-b border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#478a3f] block mb-2">
              Corporate Overview &amp; Leadership
            </span>
            <h2 className="font-serif-nature text-2xl sm:text-3xl font-bold text-[#0e5a46]">
              About PriGlob Exim &amp; Our Team
            </h2>
            <p className="text-xs sm:text-sm text-[#2f3437]/65 mt-2 font-light">
              Rooted in Gujarat — India&apos;s textile and export capital — we connect global buyers directly with specialized bag manufacturing facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Card */}
            <div className="bg-[#f5f1e8] border border-[#e6dec9] rounded-2xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#0e5a46] text-white rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif-nature text-xl font-bold text-[#0e5a46]">
                  Our Manufacturing Infrastructure
                </h3>
                <p className="text-xs sm:text-sm text-[#2f3437]/75 font-light leading-relaxed">
                  PriGlob Exim operates dedicated fabric sizing, cutting, sewing, and screen-printing facilities for cotton canvas and golden jute bags in Gujarat. Fully compliant with international customs, REACH, and environmental sustainability protocols.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-[#0e5a46]">
                  <span className="bg-white px-2.5 py-1 rounded-md border border-[#e6dec9]">Govt. IEC Registration</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-[#e6dec9]">Mundra Port Loading</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-[#e6dec9]">25+ Export Destinations</span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    onNavigate('our-company');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#0e5a46] hover:bg-[#197a60] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Explore Our Company</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Team Card */}
            <div className="bg-[#f5f1e8] border border-[#e6dec9] rounded-2xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#0e5a46] text-white rounded-xl flex items-center justify-center">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif-nature text-xl font-bold text-[#0e5a46]">
                  Executive Leadership Team
                </h3>
                <p className="text-xs sm:text-sm text-[#2f3437]/75 font-light leading-relaxed">
                  Led by experienced international trade specialists and export logistics directors. Our dedicated regional desks serve Asia, Africa, Europe, Oceania, and the Americas with seamless communication in multiple languages.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-[#0e5a46]">
                  <span className="bg-white px-2.5 py-1 rounded-md border border-[#e6dec9]">Asia &amp; Africa Desk</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-[#e6dec9]">EU &amp; Americas Desk</span>
                  <span className="bg-white px-2.5 py-1 rounded-md border border-[#e6dec9]">24/7 RFQ Turnaround</span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    onNavigate('our-team');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#0e5a46] hover:bg-[#197a60] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Meet Our Leadership Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
