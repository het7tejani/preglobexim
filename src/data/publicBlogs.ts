import blogs from '../../server/data/blogs.json';
import type { BlogPost } from '../types';

// The Vercel deployment is static. Keep published articles in the build so
// both the HTML served to crawlers and the hydrated UI use the same data.
export const PUBLIC_BLOGS = (blogs as BlogPost[])
  .filter(blog => blog.isPublished)
  .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
