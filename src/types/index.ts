export type ActivePage =
  | 'home'
  | 'cotton-jute-tote-bag'
  | 'blog'
  | 'admin'
  | 'our-company'
  | 'our-team'
  | 'contact'
  | 'faq';

export interface BlogPost {
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
  publishedDate: string;
  isPublished: boolean;
  readTime: string;
  views?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface QuoteRequestData {
  name: string;
  email: string;
  phone?: string;
  productInterest?: string;
  message: string;
}
