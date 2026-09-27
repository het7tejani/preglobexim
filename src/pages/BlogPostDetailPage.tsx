import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PUBLIC_BLOGS } from '../data/publicBlogs';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Check,
  Tag,
  BookOpen,
  MessageCircle,
  Linkedin,
  Twitter,
  ChevronRight,
} from 'lucide-react';

interface BlogPostDetailPageProps {
  onOpenQuoteModal?: (product?: string) => void;
}

export const BlogPostDetailPage: React.FC<BlogPostDetailPageProps> = ({
  onOpenQuoteModal,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blog = PUBLIC_BLOGS.find(item => item.slug === slug) || null;
  const relatedBlogs = blog ? PUBLIC_BLOGS.filter(item => item.category === blog.category && item.slug !== slug).slice(0, 3) : [];
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  if (!blog) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <BookOpen className="w-12 h-12 text-[#0e5a46]/40 mb-4" />
        <h1 className="font-serif-nature text-2xl sm:text-3xl font-bold text-[#0e5a46] mb-2">
          Article Not Found
        </h1>
        <p className="text-xs sm:text-sm text-[#2f3437]/70 font-light max-w-md mb-6">
          The requested article may have been moved, unpublished, or the URL might be mistyped.
        </p>
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0e5a46] text-white text-xs font-semibold rounded-full hover:bg-[#093e30] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Blog Directory
        </button>
      </div>
    );
  }

  const shareText = encodeURIComponent(`${blog.title} - PriGlob Exim`);
  const shareUrl = encodeURIComponent(`https://www.priglobexim.com/blog/${slug}`);

  return (
    <div className="min-h-screen bg-[#fbfaf7] py-8 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-[#2f3437]/60 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#0e5a46] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-[#2f3437]/30 flex-shrink-0" />
          <Link to="/blog" className="hover:text-[#0e5a46] transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3 h-3 text-[#2f3437]/30 flex-shrink-0" />
          <span className="text-[#0e5a46] font-medium truncate max-w-[240px] sm:max-w-md">
            {blog.title}
          </span>
        </nav>

        {/* Back Link */}
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0e5a46] hover:text-[#478a3f] transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to all articles
        </button>

        {/* Category & Title Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e5a46]/10 text-[#0e5a46] text-xs font-bold uppercase tracking-wider mb-4">
            <Tag className="w-3 h-3" />
            <span>{blog.category}</span>
          </div>

          <h1 className="font-serif-nature text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0e5a46] tracking-tight leading-tight mb-6">
            {blog.title}
          </h1>

          {/* Subtitle / Excerpt */}
          {blog.excerpt && (
            <p className="text-base sm:text-lg text-[#2f3437]/80 font-light leading-relaxed mb-6 italic border-l-2 border-[#0e5a46] pl-4">
              {blog.excerpt}
            </p>
          )}

          {/* Author, Date, Reading Time & Social Share Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#e6dec9]">
            <div className="flex items-center gap-3">
              {blog.author.avatar ? (
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#e6dec9]"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#0e5a46]/10 flex items-center justify-center text-[#0e5a46]">
                  <User className="w-5 h-5" />
                </div>
              )}
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#2f3437]">{blog.author.name}</p>
                <p className="text-[11px] text-[#2f3437]/60">{blog.author.role || 'PriGlob Exim Team'}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#2f3437]/70">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#0e5a46]" />
                <span>{formatDate(blog.publishedDate)}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#0e5a46]" />
                <span>{blog.readTime}</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#e6dec9]">
                <button
                  onClick={handleCopyLink}
                  className="p-2 rounded-full hover:bg-[#e6dec9]/60 transition-colors text-[#2f3437]"
                  title="Copy Article Link"
                >
                  {copied ? <Check className="w-4 h-4 text-[#0e5a46]" /> : <Share2 className="w-4 h-4" />}
                </button>
                <a
                  href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-[#e6dec9]/60 text-[#2f3437] transition-colors"
                  title="Share on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-[#e6dec9]/60 text-[#2f3437] transition-colors"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-[#e6dec9]/60 text-[#2f3437] transition-colors"
                  title="Share on X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Cover Image */}
        {blog.coverImage && (
          <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden mb-10 border border-[#e6dec9] shadow-sm bg-[#f5f1e8]">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Body Content */}
        <article className="prose prose-stone prose-lg max-w-none text-[#2f3437] font-light leading-relaxed mb-12">
          {/* Render formatted HTML content */}
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="space-y-4 [&>h2]:font-serif-nature [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#0e5a46] [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:font-serif-nature [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#0e5a46] [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:leading-relaxed [&>p]:text-[#2f3437]/85 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>blockquote]:border-l-4 [&>blockquote]:border-[#0e5a46] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-[#0e5a46] [&>blockquote]:my-6 [&>img]:rounded-2xl [&>img]:border [&>img]:border-[#e6dec9] [&>img]:shadow-sm"
          />
        </article>

        {/* Article Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="pt-6 border-t border-[#e6dec9] mb-12 flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#2f3437]/60 mr-2 font-medium">Tagged in:</span>
            {blog.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white border border-[#e6dec9] rounded-full text-xs text-[#2f3437]/80 hover:border-[#0e5a46] transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Bottom CTA for B2B Inquiries */}
        <div className="bg-[#f5f1e8] border border-[#e6dec9] rounded-3xl p-8 sm:p-10 mb-16 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-[#478a3f] block mb-1">
              Direct Manufacturer Sourcing
            </span>
            <h3 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46] mb-2">
              Interested in Custom Bags or Private Label Manufacturing?
            </h3>
            <p className="text-xs sm:text-sm text-[#2f3437]/75 font-light leading-relaxed">
              We manufacture customized cotton canvas totes, golden jute shoppers, and drawstring packaging pouches with custom OEM branding and global container freight dispatch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenQuoteModal ? onOpenQuoteModal('Cotton & Jute Bags') : navigate('/contact')}
              className="px-6 py-3.5 bg-[#0e5a46] text-white text-xs font-bold rounded-full hover:bg-[#093e30] transition-colors whitespace-nowrap cursor-pointer shadow-sm"
            >
              Request Factory Quote
            </button>
            <button
              onClick={() => navigate('/cotton-jute-tote-bag')}
              className="px-6 py-3.5 bg-white border border-[#e6dec9] text-[#2f3437] text-xs font-bold rounded-full hover:bg-[#f9f7f2] transition-colors whitespace-nowrap cursor-pointer"
            >
              View Bag Catalog
            </button>
          </div>
        </div>

        {/* Related Articles Rail */}
        {relatedBlogs.length > 0 && (
          <div className="pt-8 border-t border-[#e6dec9]">
            <h3 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46] mb-6">
              More Insights on {blog.category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((rel) => (
                <div
                  key={rel._id}
                  className="group cursor-pointer bg-white border border-[#e6dec9] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#f5f1e8]">
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] text-[#2f3437]/60 mb-1">{formatDate(rel.publishedDate)}</p>
                    <h4 className="font-serif-nature text-sm font-bold text-[#0e5a46] group-hover:text-[#478a3f] transition-colors line-clamp-2">
                      <a href={`/blog/${rel.slug}`}>{rel.title}</a>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
