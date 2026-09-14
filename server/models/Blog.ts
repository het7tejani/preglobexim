import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlog extends Document {
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
  publishedDate: Date;
  isPublished: boolean;
  readTime: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Blog content is required'],
    },
    excerpt: {
      type: String,
      default: '',
      trim: true,
    },
    author: {
      name: {
        type: String,
        default: 'PriGlob Exim Editorial',
      },
      role: {
        type: String,
        default: 'Textile & Export Specialist',
      },
      avatar: {
        type: String,
        default: '/images/arsh-kukadiya.bb94d916e19db2daabf9-300x300.webp',
      },
    },
    coverImage: {
      type: String,
      default: '/images/Bag-1-638x1024.webp',
    },
    category: {
      type: String,
      default: 'Sustainable Packaging',
    },
    tags: {
      type: [String],
      default: ['Cotton Bags', 'Eco-Friendly', 'Export'],
    },
    publishedDate: {
      type: Date,
      default: Date.now,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    readTime: {
      type: String,
      default: '4 min read',
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Reuse existing model if already registered (prevents Mongoose OverwriteModelError in HMR/dev)
export const BlogModel: Model<IBlog> =
  (mongoose.models && mongoose.models.Blog) ||
  mongoose.model<IBlog>('Blog', BlogSchema);
