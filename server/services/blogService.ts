import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import { BlogModel, IBlog } from '../models/Blog';

const DATA_FILE = path.join(process.cwd(), 'server', 'data', 'blogs.json');
const INITIAL_FILE = path.join(process.cwd(), 'server', 'data', 'initialBlogs.json');

export interface BlogItem {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: {
    name: string;
    role?: string;
    avatar?: string;
  };
  coverImage: string;
  category: string;
  tags: string[];
  publishedDate: string | Date;
  isPublished: boolean;
  readTime: string;
  views: number;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

// Ensure the local JSON store exists
function ensureLocalStore(): BlogItem[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(raw);
    }
    if (fs.existsSync(INITIAL_FILE)) {
      const raw = fs.readFileSync(INITIAL_FILE, 'utf-8');
      const initial = JSON.parse(raw);
      fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2));
      return initial;
    }
    return [];
  } catch (err) {
    console.error('Error accessing local blog store:', err);
    return [];
  }
}

function saveLocalStore(blogs: BlogItem[]): void {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(blogs, null, 2));
  } catch (err) {
    console.error('Error writing local blog store:', err);
  }
}

// Generate URL slug from title
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// Calculate approximate read time
export function estimateReadTime(content: string): string {
  const plainText = content.replace(/<[^>]+>/g, ' ');
  const words = plainText.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export const BlogService = {
  isMongooseConnected(): boolean {
    return mongoose.connection.readyState === 1;
  },

  async getAllBlogs(onlyPublished = false): Promise<BlogItem[]> {
    if (this.isMongooseConnected()) {
      try {
        const filter = onlyPublished ? { isPublished: true } : {};
        const docs = await BlogModel.find(filter).sort({ publishedDate: -1 }).lean();
        return docs.map((doc: any) => ({
          ...doc,
          _id: doc._id.toString(),
        })) as BlogItem[];
      } catch (err) {
        console.warn('Mongoose query failed, falling back to local store:', err);
      }
    }

    // Local JSON store fallback
    const blogs = ensureLocalStore();
    const sorted = [...blogs].sort((a, b) => {
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    });
    return onlyPublished ? sorted.filter(b => b.isPublished) : sorted;
  },

  async getBlogBySlug(slug: string): Promise<BlogItem | null> {
    if (this.isMongooseConnected()) {
      try {
        const doc = await BlogModel.findOne({ slug }).lean();
        if (doc) {
          // Increment views
          await BlogModel.updateOne({ _id: (doc as any)._id }, { $inc: { views: 1 } });
          return {
            ...(doc as any),
            _id: (doc as any)._id.toString(),
            views: ((doc as any).views || 0) + 1,
          } as BlogItem;
        }
      } catch (err) {
        console.warn('Mongoose slug lookup failed, using local store:', err);
      }
    }

    const blogs = ensureLocalStore();
    const index = blogs.findIndex(b => b.slug === slug);
    if (index !== -1) {
      blogs[index].views = (blogs[index].views || 0) + 1;
      saveLocalStore(blogs);
      return blogs[index];
    }
    return null;
  },

  async getBlogById(id: string): Promise<BlogItem | null> {
    if (this.isMongooseConnected()) {
      try {
        const doc = await BlogModel.findById(id).lean();
        if (doc) {
          return { ...(doc as any), _id: (doc as any)._id.toString() } as BlogItem;
        }
      } catch (err) {
        console.warn('Mongoose findById failed:', err);
      }
    }

    const blogs = ensureLocalStore();
    return blogs.find(b => b._id === id) || null;
  },

  async createBlog(data: Partial<BlogItem>): Promise<BlogItem> {
    const title = (data.title || 'Untitled Post').trim();
    let slug = data.slug ? slugify(data.slug) : slugify(title);
    if (!slug) slug = `post-${Date.now()}`;

    // Read time
    const readTime = data.readTime || estimateReadTime(data.content || '');

    // Excerpt fallback if empty
    let excerpt = data.excerpt;
    if (!excerpt && data.content) {
      const clean = data.content.replace(/<[^>]+>/g, ' ').trim();
      excerpt = clean.length > 160 ? clean.substring(0, 160) + '...' : clean;
    }

    const newBlogData = {
      title,
      slug,
      content: data.content || '<p>Write your blog content here...</p>',
      excerpt: excerpt || '',
      author: {
        name: data.author?.name || 'PriGlob Exim Editorial',
        role: data.author?.role || 'Textile & Export Specialist',
        avatar: data.author?.avatar || '/images/arsh-kukadiya.bb94d916e19db2daabf9-300x300.webp',
      },
      coverImage: data.coverImage || '/images/Bag-1-638x1024.webp',
      category: data.category || 'Sustainable Packaging',
      tags: data.tags && data.tags.length > 0 ? data.tags : ['Cotton Bags', 'Eco Friendly'],
      publishedDate: data.publishedDate ? new Date(data.publishedDate) : new Date(),
      isPublished: data.isPublished !== undefined ? Boolean(data.isPublished) : true,
      readTime,
      views: 0,
    };

    if (this.isMongooseConnected()) {
      try {
        const created = await BlogModel.create(newBlogData);
        return {
          ...(created.toObject() as any),
          _id: created._id.toString(),
        } as BlogItem;
      } catch (err) {
        console.warn('Mongoose create failed, writing to local store:', err);
      }
    }

    // Local JSON store
    const blogs = ensureLocalStore();
    // ensure unique slug
    let uniqueSlug = slug;
    let counter = 1;
    while (blogs.some(b => b.slug === uniqueSlug)) {
      uniqueSlug = `${slug}-${counter++}`;
    }

    const createdItem: BlogItem = {
      ...newBlogData,
      _id: `blog-${Date.now()}`,
      slug: uniqueSlug,
      publishedDate: newBlogData.publishedDate.toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    blogs.unshift(createdItem);
    saveLocalStore(blogs);
    return createdItem;
  },

  async updateBlog(id: string, data: Partial<BlogItem>): Promise<BlogItem | null> {
    if (data.title && !data.slug) {
      data.slug = slugify(data.title);
    } else if (data.slug) {
      data.slug = slugify(data.slug);
    }

    if (data.content && !data.readTime) {
      data.readTime = estimateReadTime(data.content);
    }

    if (this.isMongooseConnected()) {
      try {
        const updated = await BlogModel.findByIdAndUpdate(id, data, { new: true }).lean();
        if (updated) {
          return { ...(updated as any), _id: (updated as any)._id.toString() } as BlogItem;
        }
      } catch (err) {
        console.warn('Mongoose update failed:', err);
      }
    }

    const blogs = ensureLocalStore();
    const index = blogs.findIndex(b => b._id === id);
    if (index === -1) return null;

    blogs[index] = {
      ...blogs[index],
      ...data,
      author: {
        ...blogs[index].author,
        ...(data.author || {}),
      },
      updatedAt: new Date().toISOString(),
    };
    saveLocalStore(blogs);
    return blogs[index];
  },

  async deleteBlog(id: string): Promise<boolean> {
    if (this.isMongooseConnected()) {
      try {
        const res = await BlogModel.findByIdAndDelete(id);
        if (res) return true;
      } catch (err) {
        console.warn('Mongoose delete failed:', err);
      }
    }

    const blogs = ensureLocalStore();
    const initialLength = blogs.length;
    const filtered = blogs.filter(b => b._id !== id);
    if (filtered.length !== initialLength) {
      saveLocalStore(filtered);
      return true;
    }
    return false;
  },
};
