import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogPost } from '../types';
import { Search, Calendar, Clock, User, ArrowRight, Tag, Sparkles, BookOpen } from 'lucide-react';

export const BlogListPage: React.FC = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, [selectedCategory, searchQuery]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (selectedCategory && selectedCategory !== 'All') {
        params.append('category', selectedCategory);
      }
      if (searchQuery.trim()) {
        params.append('search', searchQuery.trim());
      }

      const res = await fetch(`/api/blogs?${params.toString()}`);
      const json = await res.json();
      if (json.success) {
        setBlogs(json.data);
      }
    } catch (err) {
      console.error('Failed to load blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    'All',
    'Sustainable Packaging',
    'Material Guide',
    'Manufacturing & OEM',
    'Compliance & Export',
  ];

  const featuredPost = blogs.length > 0 && selectedCategory === 'All' && !searchQuery.trim() ? blogs[0] : null;
  const regularPosts = featuredPost ? blogs.slice(1) : blogs;

  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8]/30 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title Section */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e5a46]/10 text-[#0e5a46] text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>PriGlob Insights &amp; Manufacturing Journal</span>
          </div>
          <h1 className="font-serif-nature text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0e5a46] tracking-tight mb-4">
            Sustainable Packaging, Export Guides &amp; Bag Insights
          </h1>
          <p className="text-sm sm:text-base text-[#2f3437]/75 font-light leading-relaxed">
            In-depth technical guides, global retail compliance standards, fabric analyses, and export market intelligence from our factory floor in Gujarat, India.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#e6dec9]">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0e5a46] text-white shadow-sm'
                    : 'bg-white text-[#2f3437]/80 hover:bg-[#e6dec9]/40 border border-[#e6dec9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#2f3437]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-[#e6dec9] rounded-full text-xs text-[#2f3437] placeholder-[#2f3437]/40 focus:outline-none focus:border-[#0e5a46]"
            />
          </div>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="py-20 text-center">
            <div className="w-10 h-10 border-3 border-[#0e5a46] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs text-[#2f3437]/60">Fetching latest articles...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && blogs.length === 0 && (
          <div className="py-20 text-center bg-white rounded-2xl border border-[#e6dec9] p-8 max-w-lg mx-auto">
            <Sparkles className="w-10 h-10 text-[#0e5a46]/50 mx-auto mb-3" />
            <h3 className="font-serif-nature text-xl font-bold text-[#0e5a46] mb-2">No Articles Found</h3>
            <p className="text-xs sm:text-sm text-[#2f3437]/70 font-light mb-6">
              We couldn&apos;t find any articles matching your search criteria. Try choosing another category or clearing filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-[#0e5a46] text-white rounded-full text-xs font-semibold hover:bg-[#093e30] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Featured Hero Article */}
        {!loading && featuredPost && (
          <div className="mb-12">
            <div
              onClick={() => navigate(`/blog/${featuredPost.slug}`)}
              className="group cursor-pointer bg-white border border-[#e6dec9] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#fbfaf7] relative">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0e5a46] text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                    Featured Insight
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#2f3437]/60 mb-3">
                    <span className="text-[#0e5a46] font-semibold">{featuredPost.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif-nature text-xl sm:text-2xl lg:text-3xl font-bold text-[#0e5a46] leading-tight mb-4 group-hover:text-[#478a3f] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#2f3437]/75 font-light leading-relaxed mb-6 line-clamp-4">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#e6dec9]/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {featuredPost.author.avatar ? (
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-9 h-9 rounded-full object-cover border border-[#e6dec9]"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-[#0e5a46]/10 flex items-center justify-center text-[#0e5a46]">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-bold text-[#2f3437]">{featuredPost.author.name}</p>
                      <p className="text-[11px] text-[#2f3437]/60">{formatDate(featuredPost.publishedDate)}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0e5a46] group-hover:translate-x-1 transition-transform">
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        {!loading && regularPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {regularPosts.map((blog) => (
              <article
                key={blog._id}
                onClick={() => navigate(`/blog/${blog.slug}`)}
                className="group cursor-pointer bg-white border border-[#e6dec9] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#fbfaf7] relative">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-[#0e5a46] text-[10px] font-bold rounded-full uppercase tracking-wider shadow-xs border border-[#e6dec9]">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-[11px] text-[#2f3437]/60 mb-2.5">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(blog.publishedDate)}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="font-serif-nature text-lg sm:text-xl font-bold text-[#0e5a46] leading-snug mb-2.5 group-hover:text-[#478a3f] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-[#2f3437]/70 font-light leading-relaxed line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {blog.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-md bg-[#f5f1e8] text-[#2f3437]/75"
                          >
                            <Tag className="w-2.5 h-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-transparent flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {blog.author.avatar ? (
                      <img
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-[#e6dec9]"
                      />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-[#0e5a46]/10 flex items-center justify-center text-[#0e5a46]">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <span className="text-xs text-[#2f3437]/80 font-medium truncate max-w-[120px]">
                      {blog.author.name}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#0e5a46] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* B2B Newsletter / Inquiry Callout Banner */}
        <div className="mt-16 bg-[#0e5a46] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a8d5ba] block mb-2">
              Global Importers &amp; Procurement Newsletter
            </span>
            <h2 className="font-serif-nature text-2xl sm:text-3xl font-bold mb-4">
              Get Export Market Pricing &amp; Textile Production Trends
            </h2>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-6">
              Subscribe to receive quarterly commodity price alerts, EU REACH compliance updates, and new eco-bag product releases directly from our Surat manufacturing mill.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter corporate email..."
                className="px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:bg-white/20"
              />
              <button className="px-6 py-3 bg-[#f5f1e8] text-[#0e5a46] font-bold text-xs rounded-full hover:bg-white transition-colors whitespace-nowrap cursor-pointer">
                Subscribe Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
