import posts from '../../server/data/blogs.json' with { type: 'json' };

export default function handler(req: { method?: string; query: Record<string, string | string[]> }, res: { status: (code: number) => any; setHeader: (name: string, value: string) => void }) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const data = posts.find(post => post.isPublished && post.slug === req.query.slug);
  if (!data) return res.status(404).json({ success: false, error: 'Blog post not found' });
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=300');
  return res.status(200).json({ success: true, data });
}
