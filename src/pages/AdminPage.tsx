import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogPost } from '../types';
import { RichTextEditor } from '../components/RichTextEditor';
import {
  Lock,
  User,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  FileText,
  Upload,
  Globe,
  Search,
  Sparkles,
  X,
  ExternalLink,
  Clock,
  Layers,
  Tag,
  AlertCircle,
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const navigate = useNavigate();

  // Auth State
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('priglob_admin_token'));
  const [authLoading, setAuthLoading] = useState(true);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('priglob@2026');
  const [loginError, setLoginError] = useState('');
  const [submittingLogin, setSubmittingLogin] = useState(false);

  // Blog Management State
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');

  // Editor Modal State
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [savingPost, setSavingPost] = useState(false);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Form Fields
  const [postTitle, setPostTitle] = useState('');
  const [postSlug, setPostSlug] = useState('');
  const [postExcerpt, setPostExcerpt] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postCategory, setPostCategory] = useState('Sustainable Packaging');
  const [postTags, setPostTags] = useState('Cotton Bags, Eco-Friendly, Export');
  const [postCoverImage, setPostCoverImage] = useState('/images/Bag-1-638x1024.webp');
  const [postAuthorName, setPostAuthorName] = useState('PriGlob Exim Editorial');
  const [postAuthorRole, setPostAuthorRole] = useState('Textile & Export Specialist');
  const [postIsPublished, setPostIsPublished] = useState(true);
  const [uploadingCover, setUploadingCover] = useState(false);

  // Verify stored token on mount
  useEffect(() => {
    const checkToken = async () => {
      const stored = localStorage.getItem('priglob_admin_token');
      if (!stored) {
        setAuthLoading(false);
        return;
      }
      try {
        const res = await fetch('/api/admin/verify', {
          headers: { Authorization: `Bearer ${stored}` },
        });
        if (res.ok) {
          setToken(stored);
          loadAdminBlogs(stored);
        } else {
          localStorage.removeItem('priglob_admin_token');
          setToken(null);
        }
      } catch (err) {
        setToken(null);
      } finally {
        setAuthLoading(false);
      }
    };
    checkToken();
  }, []);

  const loadAdminBlogs = async (authToken: string) => {
    try {
      setLoadingBlogs(true);
      const res = await fetch('/api/admin/blogs', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      const data = await res.json();
      if (data.success) {
        setBlogs(data.data);
      }
    } catch (err) {
      console.error('Failed to load admin blogs:', err);
    } finally {
      setLoadingBlogs(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setSubmittingLogin(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (res.ok && data.success && data.token) {
        localStorage.setItem('priglob_admin_token', data.token);
        setToken(data.token);
        loadAdminBlogs(data.token);
      } else {
        setLoginError(data.error || 'Authentication failed');
      }
    } catch (err: any) {
      setLoginError(err.message || 'Unable to connect to server');
    } finally {
      setSubmittingLogin(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('priglob_admin_token');
    setToken(null);
    setBlogs([]);
  };

  const handleOpenNewPost = () => {
    setEditingId(null);
    setPostTitle('');
    setPostSlug('');
    setPostExcerpt('');
    setPostContent('<p>Welcome to our new article. Start writing your post content here with headings, bullet lists, images, and quotes.</p>');
    setPostCategory('Sustainable Packaging');
    setPostTags('Cotton Bags, Golden Jute, Export');
    setPostCoverImage('/images/Bag-1-638x1024.webp');
    setPostAuthorName('PriGlob Exim Editorial');
    setPostAuthorRole('Textile & Export Specialist');
    setPostIsPublished(true);
    setSaveSuccessMessage('');
    setEditorOpen(true);
  };

  const handleOpenEditPost = (blog: BlogPost) => {
    setEditingId(blog._id);
    setPostTitle(blog.title);
    setPostSlug(blog.slug);
    setPostExcerpt(blog.excerpt);
    setPostContent(blog.content);
    setPostCategory(blog.category || 'Sustainable Packaging');
    setPostTags(Array.isArray(blog.tags) ? blog.tags.join(', ') : '');
    setPostCoverImage(blog.coverImage || '/images/Bag-1-638x1024.webp');
    setPostAuthorName(blog.author?.name || 'PriGlob Exim Editorial');
    setPostAuthorRole(blog.author?.role || 'Textile & Export Specialist');
    setPostIsPublished(blog.isPublished);
    setSaveSuccessMessage('');
    setEditorOpen(true);
  };

  // Upload image to backend via multer (/api/admin/upload)
  const handleUploadImageFile = async (file: File): Promise<string> => {
    if (!token) throw new Error('Not authenticated');
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch('/api/admin/upload', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Failed to upload image');
    }
    return data.url;
  };

  const handleCoverUploadChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploadingCover(true);
      const url = await handleUploadImageFile(file);
      setPostCoverImage(url);
    } catch (err: any) {
      alert(err.message || 'Image upload failed');
    } finally {
      setUploadingCover(false);
      e.target.value = '';
    }
  };

  const handleSavePost = async (publishStatus?: boolean) => {
    if (!postTitle.trim()) {
      alert('Please enter a post title.');
      return;
    }

    const finalPublished = publishStatus !== undefined ? publishStatus : postIsPublished;
    setSavingPost(true);
    setSaveSuccessMessage('');

    try {
      const payload = {
        title: postTitle.trim(),
        slug: postSlug.trim() || undefined,
        excerpt: postExcerpt.trim(),
        content: postContent,
        category: postCategory,
        tags: postTags.split(',').map((s) => s.trim()).filter(Boolean),
        coverImage: postCoverImage,
        author: {
          name: postAuthorName.trim() || 'PriGlob Exim Editorial',
          role: postAuthorRole.trim() || 'Textile & Export Specialist',
          avatar: '/images/arsh-kukadiya.bb94d916e19db2daabf9-300x300.webp',
        },
        isPublished: finalPublished,
      };

      const url = editingId ? `/api/admin/blogs/${editingId}` : '/api/admin/blogs';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSaveSuccessMessage(
          editingId
            ? 'Article updated successfully!'
            : 'New article published and saved to database!'
        );
        if (token) loadAdminBlogs(token);
        setTimeout(() => {
          setEditorOpen(false);
        }, 1200);
      } else {
        alert(data.error || 'Failed to save blog post');
      }
    } catch (err: any) {
      alert(err.message || 'Network error saving article');
    } finally {
      setSavingPost(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!token) return;
    try {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setBlogs((prev) => prev.filter((b) => b._id !== id));
        setDeleteConfirmId(null);
      } else {
        alert(data.error || 'Failed to delete blog post');
      }
    } catch (err: any) {
      alert(err.message || 'Error deleting blog post');
    }
  };

  const handleTogglePublish = async (blog: BlogPost) => {
    if (!token) return;
    try {
      const res = await fetch(`/api/admin/blogs/${blog._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isPublished: !blog.isPublished }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setBlogs((prev) =>
          prev.map((b) => (b._id === blog._id ? { ...b, isPublished: !b.isPublished } : b))
        );
      }
    } catch (err) {
      console.error('Failed to toggle publish status:', err);
    }
  };

  // Filtered blogs
  const filteredBlogs = blogs.filter((b) => {
    if (statusFilter === 'published' && !b.isPublished) return false;
    if (statusFilter === 'draft' && b.isPublished) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        b.title.toLowerCase().includes(q) ||
        b.category?.toLowerCase().includes(q) ||
        b.author?.name?.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Calculate Metrics
  const totalPosts = blogs.length;
  const publishedCount = blogs.filter((b) => b.isPublished).length;
  const draftCount = blogs.filter((b) => !b.isPublished).length;
  const totalViews = blogs.reduce((acc, b) => acc + (b.views || 0), 0);

  // Initial loading screen
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#f5f1e8] flex items-center justify-center p-4">
        <div className="w-10 h-10 border-3 border-[#0e5a46] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // ==========================================
  // UN-AUTHENTICATED: LOGIN VIEW
  // ==========================================
  if (!token) {
    return (
      <div className="min-h-screen bg-[#f5f1e8] flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-md bg-white border border-[#e6dec9] rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-[#0e5a46] text-white rounded-2xl mx-auto flex items-center justify-center shadow-md mb-4">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="font-serif-nature text-2xl sm:text-3xl font-bold text-[#0e5a46]">
              PriGlob Admin
            </h1>
            <p className="text-xs sm:text-sm text-[#2f3437]/70 font-light mt-1">
              Sign in to manage blog publications, article drafts, and media.
            </p>
          </div>

          {loginError && (
            <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#2f3437] uppercase tracking-wider mb-1.5">
                Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#2f3437]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#fdfcf9] border border-[#e6dec9] rounded-xl text-xs sm:text-sm text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                  placeholder="admin"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2f3437] uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#2f3437]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#fdfcf9] border border-[#e6dec9] rounded-xl text-xs sm:text-sm text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Quick Demo Credentials Box */}
            <div className="p-3 bg-[#f5f1e8]/70 border border-[#e6dec9] rounded-xl text-[11px] text-[#2f3437]/75">
              <p className="font-semibold text-[#0e5a46] mb-0.5">Demo Admin Access:</p>
              <p>Username: <code className="bg-white px-1.5 py-0.5 rounded border border-[#e6dec9]">admin</code></p>
              <p className="mt-0.5">Password: <code className="bg-white px-1.5 py-0.5 rounded border border-[#e6dec9]">priglob@2026</code></p>
            </div>

            <button
              type="submit"
              disabled={submittingLogin}
              className="w-full py-3 bg-[#0e5a46] text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-[#093e30] transition-colors cursor-pointer shadow-md disabled:opacity-50"
            >
              {submittingLogin ? 'Authenticating...' : 'Sign In to Dashboard'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#e6dec9] text-center">
            <button
              onClick={() => navigate('/')}
              className="text-xs text-[#0e5a46] hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              Return to Public Website
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // AUTHENTICATED: ADMIN DASHBOARD
  // ==========================================
  return (
    <div className="min-h-screen bg-[#f5f1e8]/40 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Control Bar */}
        <div className="bg-white border border-[#e6dec9] rounded-3xl p-6 sm:p-8 mb-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0e5a46]">
                PriGlob Exim CMS Dashboard
              </span>
            </div>
            <h1 className="font-serif-nature text-2xl sm:text-3xl font-bold text-[#0e5a46]">
              Article &amp; Blog Publishing Management
            </h1>
            <p className="text-xs text-[#2f3437]/70 font-light mt-0.5">
              Create, edit, format with rich text, upload images, and publish to the live site.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate('/blog')}
              className="px-4 py-2.5 bg-white border border-[#e6dec9] hover:bg-[#f9f7f2] text-xs font-semibold text-[#2f3437] rounded-full inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Live Blog</span>
              <ExternalLink className="w-3 h-3 text-[#2f3437]/50" />
            </button>

            <button
              onClick={handleOpenNewPost}
              className="px-5 py-2.5 bg-[#0e5a46] hover:bg-[#093e30] text-white text-xs font-bold rounded-full inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>New Post</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-2.5 text-[#2f3437]/60 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-[#e6dec9] rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between text-[#2f3437]/60 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Total Posts</span>
              <FileText className="w-4 h-4 text-[#0e5a46]" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-serif-nature text-[#0e5a46]">
              {totalPosts}
            </div>
          </div>

          <div className="bg-white border border-[#e6dec9] rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between text-[#2f3437]/60 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Published</span>
              <CheckCircle className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-serif-nature text-emerald-700">
              {publishedCount}
            </div>
          </div>

          <div className="bg-white border border-[#e6dec9] rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between text-[#2f3437]/60 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Drafts</span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-serif-nature text-amber-700">
              {draftCount}
            </div>
          </div>

          <div className="bg-white border border-[#e6dec9] rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between text-[#2f3437]/60 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Reader Views</span>
              <Eye className="w-4 h-4 text-[#0e5a46]" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-serif-nature text-[#0e5a46]">
              {totalViews}
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-[#0e5a46] text-white'
                  : 'bg-white border border-[#e6dec9] text-[#2f3437]/75 hover:bg-[#e6dec9]/30'
              }`}
            >
              All ({totalPosts})
            </button>
            <button
              onClick={() => setStatusFilter('published')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                statusFilter === 'published'
                  ? 'bg-[#0e5a46] text-white'
                  : 'bg-white border border-[#e6dec9] text-[#2f3437]/75 hover:bg-[#e6dec9]/30'
              }`}
            >
              Published ({publishedCount})
            </button>
            <button
              onClick={() => setStatusFilter('draft')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                statusFilter === 'draft'
                  ? 'bg-[#0e5a46] text-white'
                  : 'bg-white border border-[#e6dec9] text-[#2f3437]/75 hover:bg-[#e6dec9]/30'
              }`}
            >
              Drafts ({draftCount})
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#2f3437]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search posts by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-[#e6dec9] rounded-full text-xs text-[#2f3437] placeholder-[#2f3437]/40 focus:outline-none focus:border-[#0e5a46]"
            />
          </div>
        </div>

        {/* Posts Table */}
        <div className="bg-white border border-[#e6dec9] rounded-3xl overflow-hidden shadow-sm">
          {loadingBlogs ? (
            <div className="p-16 text-center">
              <div className="w-8 h-8 border-2 border-[#0e5a46] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
              <p className="text-xs text-[#2f3437]/60">Loading articles...</p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="p-16 text-center">
              <Sparkles className="w-8 h-8 text-[#0e5a46]/40 mx-auto mb-3" />
              <h3 className="font-serif-nature text-lg font-bold text-[#0e5a46] mb-1">No Posts Found</h3>
              <p className="text-xs text-[#2f3437]/70 max-w-sm mx-auto mb-4 font-light">
                {searchQuery ? 'No articles match your search filter.' : 'Click "New Post" to publish your first article.'}
              </p>
              <button
                onClick={handleOpenNewPost}
                className="px-4 py-2 bg-[#0e5a46] text-white text-xs font-bold rounded-full hover:bg-[#093e30] transition-colors cursor-pointer"
              >
                + Create New Post
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#e6dec9] bg-[#fbfaf7] text-[11px] font-semibold uppercase tracking-wider text-[#2f3437]/70">
                    <th className="py-4 px-6">Post Details</th>
                    <th className="py-4 px-4">Category</th>
                    <th className="py-4 px-4">Author</th>
                    <th className="py-4 px-4">Status</th>
                    <th className="py-4 px-4 text-center">Views</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e6dec9]/60 text-xs text-[#2f3437]">
                  {filteredBlogs.map((blog) => (
                    <tr key={blog._id} className="hover:bg-[#fbfaf7]/60 transition-colors">
                      {/* Post Cover & Title */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-11 rounded-lg overflow-hidden bg-[#f5f1e8] flex-shrink-0 border border-[#e6dec9]">
                            <img
                              src={blog.coverImage || '/images/Bag-1-638x1024.webp'}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="min-w-0 max-w-sm">
                            <p className="font-bold text-[#0e5a46] truncate text-xs sm:text-sm">
                              {blog.title}
                            </p>
                            <p className="text-[11px] text-[#2f3437]/60 truncate font-mono mt-0.5">
                              /blog/{blog.slug}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-4 px-4">
                        <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#f5f1e8] text-[#0e5a46] border border-[#e6dec9]">
                          {blog.category}
                        </span>
                      </td>

                      {/* Author */}
                      <td className="py-4 px-4 font-light">
                        <p className="font-medium text-[#2f3437]">{blog.author?.name || 'PriGlob'}</p>
                        <p className="text-[10px] text-[#2f3437]/50">
                          {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </td>

                      {/* Status Toggle */}
                      <td className="py-4 px-4">
                        <button
                          onClick={() => handleTogglePublish(blog)}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer transition-colors ${
                            blog.isPublished
                              ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                              : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                          }`}
                          title="Click to toggle Published / Draft"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              blog.isPublished ? 'bg-emerald-600' : 'bg-amber-600'
                            }`}
                          />
                          {blog.isPublished ? 'Published' : 'Draft'}
                        </button>
                      </td>

                      {/* Views */}
                      <td className="py-4 px-4 text-center text-xs font-mono text-[#2f3437]/70">
                        {blog.views || 0}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Live preview */}
                          <button
                            onClick={() => window.open(`/blog/${blog.slug}`, '_blank')}
                            className="p-1.5 text-[#2f3437]/60 hover:text-[#0e5a46] hover:bg-[#e6dec9]/40 rounded-lg transition-colors cursor-pointer"
                            title="Preview on live site"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          {/* Edit */}
                          <button
                            onClick={() => handleOpenEditPost(blog)}
                            className="p-1.5 text-[#2f3437]/60 hover:text-[#0e5a46] hover:bg-[#e6dec9]/40 rounded-lg transition-colors cursor-pointer"
                            title="Edit post"
                          >
                            <Edit className="w-4 h-4" />
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() => setDeleteConfirmId(blog._id)}
                            className="p-1.5 text-[#2f3437]/60 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                            title="Delete post"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Delete Confirmation Modal */}
        {deleteConfirmId && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-[#e6dec9]">
              <h3 className="font-serif-nature text-lg font-bold text-[#0e5a46] mb-2">Delete Article?</h3>
              <p className="text-xs text-[#2f3437]/70 font-light mb-6">
                This action is irreversible. The article will be deleted from the database.
              </p>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setDeleteConfirmId(null)}
                  className="px-4 py-2 text-xs font-semibold text-[#2f3437] hover:bg-[#f5f1e8] rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeletePost(deleteConfirmId)}
                  className="px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors cursor-pointer"
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==========================================
            FULLSCREEN POST EDITOR MODAL (WYSIWYG)
           ========================================== */}
        {editorOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-2 sm:p-4 overflow-y-auto">
            <div className="bg-white border border-[#e6dec9] rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#e6dec9] bg-[#fbfaf7]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0e5a46]">
                    {editingId ? 'Edit Article' : 'New Article Draft'}
                  </span>
                  <h2 className="font-serif-nature text-xl font-bold text-[#0e5a46]">
                    {editingId ? 'Update Blog Post' : 'Compose New Post'}
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  {saveSuccessMessage && (
                    <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {saveSuccessMessage}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => handleSavePost(false)}
                    disabled={savingPost}
                    className="px-4 py-2 text-xs font-semibold text-[#2f3437] bg-[#f5f1e8] hover:bg-[#e6dec9] rounded-full transition-colors cursor-pointer disabled:opacity-50"
                  >
                    Save as Draft
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSavePost(true)}
                    disabled={savingPost}
                    className="px-5 py-2 text-xs font-bold text-white bg-[#0e5a46] hover:bg-[#093e30] rounded-full transition-colors cursor-pointer shadow-sm disabled:opacity-50"
                  >
                    {savingPost ? 'Publishing...' : 'Publish Post'}
                  </button>

                  <button
                    type="button"
                    onClick={() => setEditorOpen(false)}
                    className="p-2 text-[#2f3437]/50 hover:text-[#2f3437] rounded-full transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Form */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-2">
                    Post Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => {
                      setPostTitle(e.target.value);
                      if (!editingId) {
                        const s = e.target.value
                          .toLowerCase()
                          .trim()
                          .replace(/[^\w\s-]/g, '')
                          .replace(/[\s_-]+/g, '-')
                          .replace(/^-+|-+$/g, '');
                        setPostSlug(s);
                      }
                    }}
                    placeholder="e.g., The Global Shift to Sustainable Packaging: Why Retailers Choose Indian Cotton"
                    className="w-full px-4 py-3 bg-[#fdfcf9] border border-[#e6dec9] rounded-2xl text-base sm:text-lg font-serif-nature font-bold text-[#0e5a46] focus:outline-none focus:border-[#0e5a46]"
                  />
                  <div className="flex items-center gap-2 mt-1.5 text-xs text-[#2f3437]/60">
                    <span>URL Slug:</span>
                    <input
                      type="text"
                      value={postSlug}
                      onChange={(e) => setPostSlug(e.target.value)}
                      placeholder="custom-url-slug"
                      className="px-2 py-0.5 font-mono text-[11px] bg-[#f5f1e8] border border-[#e6dec9] rounded-md focus:outline-none focus:border-[#0e5a46]"
                    />
                    <span className="text-[11px] text-[#2f3437]/40">(e.g., /blog/{postSlug || 'slug'})</span>
                  </div>
                </div>

                {/* Excerpt / Short Summary */}
                <div>
                  <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-2">
                    Excerpt / Short Summary
                  </label>
                  <textarea
                    rows={2}
                    value={postExcerpt}
                    onChange={(e) => setPostExcerpt(e.target.value)}
                    placeholder="Brief 1-2 sentence overview for card previews, search results, and social shares..."
                    className="w-full px-4 py-2.5 bg-[#fdfcf9] border border-[#e6dec9] rounded-xl text-xs sm:text-sm text-[#2f3437] focus:outline-none focus:border-[#0e5a46] resize-none"
                  />
                </div>

                {/* Grid: Category, Tags, Author */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Category */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2f3437] uppercase tracking-wider mb-1.5">
                      Category
                    </label>
                    <select
                      value={postCategory}
                      onChange={(e) => setPostCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#fdfcf9] border border-[#e6dec9] rounded-xl text-xs text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                    >
                      <option value="Sustainable Packaging">Sustainable Packaging</option>
                      <option value="Material Guide">Material Guide</option>
                      <option value="Manufacturing & OEM">Manufacturing &amp; OEM</option>
                      <option value="Compliance & Export">Compliance &amp; Export</option>
                      <option value="Industry News">Industry News</option>
                    </select>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2f3437] uppercase tracking-wider mb-1.5">
                      Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      value={postTags}
                      onChange={(e) => setPostTags(e.target.value)}
                      placeholder="Cotton Bags, Jute, Export, Retail"
                      className="w-full px-3.5 py-2.5 bg-[#fdfcf9] border border-[#e6dec9] rounded-xl text-xs text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                    />
                  </div>

                  {/* Author Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2f3437] uppercase tracking-wider mb-1.5">
                      Author Name
                    </label>
                    <input
                      type="text"
                      value={postAuthorName}
                      onChange={(e) => setPostAuthorName(e.target.value)}
                      placeholder="Arsh Kukadiya"
                      className="w-full px-3.5 py-2.5 bg-[#fdfcf9] border border-[#e6dec9] rounded-xl text-xs text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                    />
                  </div>
                </div>

                {/* Cover Image Upload & Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-2">
                    Cover Image
                  </label>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-[#e6dec9] rounded-2xl bg-[#fbfaf7]">
                    <div className="w-28 h-20 rounded-xl overflow-hidden bg-white border border-[#e6dec9] flex-shrink-0 relative">
                      <img
                        src={postCoverImage}
                        alt="Cover Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Upload from Computer Button */}
                        <label className="px-4 py-2 bg-[#0e5a46] text-white text-xs font-semibold rounded-full hover:bg-[#093e30] transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-xs">
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleCoverUploadChange}
                            disabled={uploadingCover}
                          />
                          <Upload className="w-3.5 h-3.5" />
                          <span>{uploadingCover ? 'Uploading...' : 'Upload Image from Computer'}</span>
                        </label>

                        {/* Quick Presets */}
                        <button
                          type="button"
                          onClick={() => setPostCoverImage('/images/Bag-1-638x1024.webp')}
                          className="px-3 py-1.5 text-xs bg-white border border-[#e6dec9] text-[#2f3437] rounded-full hover:bg-[#e6dec9]/40"
                        >
                          Stock: Cotton Tote
                        </button>
                        <button
                          type="button"
                          onClick={() => setPostCoverImage('/images/Fabric-Bag-Mfg.webp')}
                          className="px-3 py-1.5 text-xs bg-white border border-[#e6dec9] text-[#2f3437] rounded-full hover:bg-[#e6dec9]/40"
                        >
                          Stock: Factory Floor
                        </button>
                        <button
                          type="button"
                          onClick={() => setPostCoverImage('/images/ChatGPT-Image-Mar-23-2026-09_11_04-AM.webp')}
                          className="px-3 py-1.5 text-xs bg-white border border-[#e6dec9] text-[#2f3437] rounded-full hover:bg-[#e6dec9]/40"
                        >
                          Stock: Jute Bag
                        </button>
                      </div>

                      <input
                        type="text"
                        value={postCoverImage}
                        onChange={(e) => setPostCoverImage(e.target.value)}
                        placeholder="Or enter Image URL (e.g., https://... or /images/...)"
                        className="w-full px-3 py-1.5 bg-white border border-[#e6dec9] rounded-lg text-xs font-mono text-[#2f3437]"
                      />
                    </div>
                  </div>
                </div>

                {/* Rich Text Editor (WYSIWYG TipTap) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider">
                      Article Content (WYSIWYG Editor) *
                    </label>
                    <span className="text-[11px] text-[#2f3437]/60">
                      Use the visual toolbar to format text, headings, lists, quotes &amp; upload images.
                    </span>
                  </div>

                  <RichTextEditor
                    key={editingId || 'new'}
                    content={postContent}
                    onChange={(html) => setPostContent(html)}
                    onUploadImage={handleUploadImageFile}
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-[#e6dec9] bg-[#fbfaf7]">
                <button
                  type="button"
                  onClick={() => setEditorOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#2f3437]/70 hover:text-[#2f3437] cursor-pointer"
                >
                  Cancel &amp; Close
                </button>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleSavePost(false)}
                    disabled={savingPost}
                    className="px-4 py-2.5 text-xs font-semibold text-[#2f3437] bg-white border border-[#e6dec9] hover:bg-[#f5f1e8] rounded-full transition-colors cursor-pointer disabled:opacity-50"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSavePost(true)}
                    disabled={savingPost}
                    className="px-6 py-2.5 text-xs font-bold text-white bg-[#0e5a46] hover:bg-[#093e30] rounded-full transition-colors cursor-pointer shadow-sm disabled:opacity-50"
                  >
                    {savingPost ? 'Publishing...' : 'Publish to Live Site'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
