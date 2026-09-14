import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import { createServer as createViteServer } from 'vite';
import { BlogService } from './server/services/blogService';

const app = express();
const PORT = 3000;

// Configurable Admin Credentials and Secrets
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'priglob@2026';
const JWT_SECRET = process.env.JWT_SECRET || 'priglob_exim_jwt_secret_token_2026';

// Parse JSON & URL-encoded payloads
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve public directory statically (robots.txt, sitemap.xml, images, etc.)
app.use(express.static(path.join(process.cwd(), 'public')));

// Ensure public/uploads directory exists and serve static uploads
const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use('/uploads', express.static(uploadsDir));

// Multer storage for uploaded blog images
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const cleanBase = path
      .basename(file.originalname, ext)
      .replace(/[^a-zA-Z0-9]/g, '_')
      .substring(0, 25);
    cb(null, `${Date.now()}_${cleanBase}${ext || '.jpg'}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15 MB
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files (.jpg, .jpeg, .png, .webp, .svg) are allowed.'));
    }
  },
});

// Graceful MongoDB connection (if MONGODB_URI is provided)
const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully via Mongoose'))
    .catch((err) =>
      console.warn('MongoDB connection notice (using fallback local store):', err.message)
    );
} else {
  console.log('Running with local persistent JSON store (MONGODB_URI not set)');
}

// Authentication Middleware
interface AuthenticatedRequest extends Request {
  user?: any;
}

const requireAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Session expired or invalid token. Please log in again.' });
  }
};

// ==========================================
// PUBLIC BLOG API ENDPOINTS
// ==========================================

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    dbMode: mongoose.connection.readyState === 1 ? 'mongodb' : 'local-json',
  });
});

// Get all published blogs (with search & category filters)
app.get('/api/blogs', async (req, res) => {
  try {
    const { category, search } = req.query;
    let blogs = await BlogService.getAllBlogs(true);

    if (category && category !== 'All') {
      blogs = blogs.filter(
        (b) => b.category?.toLowerCase() === String(category).toLowerCase()
      );
    }

    if (search && typeof search === 'string' && search.trim()) {
      const q = search.toLowerCase();
      blogs = blogs.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    res.json({ success: true, count: blogs.length, data: blogs });
  } catch (err: any) {
    console.error('Error fetching blogs:', err);
    res.status(500).json({ success: false, error: err.message || 'Failed to fetch blogs' });
  }
});

// Get single published blog by slug
app.get('/api/blogs/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await BlogService.getBlogBySlug(slug);
    if (!blog) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }
    res.json({ success: true, data: blog });
  } catch (err: any) {
    console.error('Error fetching blog post:', err);
    res.status(500).json({ success: false, error: err.message || 'Failed to fetch blog post' });
  }
});

// ==========================================
// ADMIN AUTHENTICATION & DASHBOARD API
// ==========================================

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Check credentials
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign(
      { username: ADMIN_USERNAME, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.json({
      success: true,
      token,
      user: {
        username: ADMIN_USERNAME,
        role: 'admin',
        name: 'PriGlob Exim Administrator',
      },
    });
  }

  return res.status(401).json({ error: 'Invalid username or password' });
});

// Verify Admin Token
app.get('/api/admin/verify', requireAdmin, (req: AuthenticatedRequest, res) => {
  res.json({
    success: true,
    valid: true,
    user: req.user,
  });
});

// Get all blogs (including drafts) for Admin
app.get('/api/admin/blogs', requireAdmin, async (_req, res) => {
  try {
    const blogs = await BlogService.getAllBlogs(false);
    res.json({ success: true, count: blogs.length, data: blogs });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get single blog by ID for editing
app.get('/api/admin/blogs/:id', requireAdmin, async (req, res) => {
  try {
    const blog = await BlogService.getBlogById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }
    res.json({ success: true, data: blog });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Create new blog post
app.post('/api/admin/blogs', requireAdmin, async (req, res) => {
  try {
    const { title, content, excerpt, category, tags, coverImage, author, isPublished, slug } = req.body;
    if (!title || !title.trim()) {
      return res.status(400).json({ success: false, error: 'Title is required' });
    }

    const created = await BlogService.createBlog({
      title,
      slug,
      content,
      excerpt,
      category,
      tags: Array.isArray(tags) ? tags : typeof tags === 'string' ? tags.split(',').map((s: string) => s.trim()) : [],
      coverImage,
      author,
      isPublished: isPublished !== undefined ? Boolean(isPublished) : true,
    });

    res.status(201).json({ success: true, data: created });
  } catch (err: any) {
    console.error('Error creating blog:', err);
    res.status(500).json({ success: false, error: err.message || 'Failed to create blog post' });
  }
});

// Update blog post
app.put('/api/admin/blogs/:id', requireAdmin, async (req, res) => {
  try {
    const updated = await BlogService.updateBlog(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }
    res.json({ success: true, data: updated });
  } catch (err: any) {
    console.error('Error updating blog:', err);
    res.status(500).json({ success: false, error: err.message || 'Failed to update blog post' });
  }
});

// Delete blog post
app.delete('/api/admin/blogs/:id', requireAdmin, async (req, res) => {
  try {
    const success = await BlogService.deleteBlog(req.params.id);
    if (!success) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }
    res.json({ success: true, message: 'Blog deleted successfully' });
  } catch (err: any) {
    console.error('Error deleting blog:', err);
    res.status(500).json({ success: false, error: err.message || 'Failed to delete blog post' });
  }
});

// Image Upload Endpoint (Multi-format, returns accessible web URL)
app.post('/api/admin/upload', requireAdmin, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No image file uploaded' });
    }

    // Accessible URL
    const imageUrl = `/uploads/${req.file.filename}`;
    res.json({
      success: true,
      url: imageUrl,
      filename: req.file.filename,
      size: req.file.size,
    });
  } catch (err: any) {
    console.error('Upload failed:', err);
    res.status(500).json({ success: false, error: err.message || 'Failed to upload image' });
  }
});

// ==========================================
// VITE MIDDLEWARE & SPA FALLBACK
// ==========================================
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`PriGlob Exim full-stack server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
