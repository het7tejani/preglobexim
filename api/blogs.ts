import posts from '../server/data/blogs.json' with { type: 'json' };

export default function handler(req: { method?: string; query: Record<string, string | string[]> }, res: { status: (code: number) => any; setHeader: (name: string, value: string) => void }) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const category = String(req.query.category || 'All').toLowerCase();
  const search = String(req.query.search || '').toLowerCase().trim();
  const data = posts.filter(post => post.isPublished &&
    (category === 'all' || post.category.toLowerCase() === category) &&
    (!search || [post.title, post.excerpt, ...post.tags].some(text => text.toLowerCase().includes(search)))
  ).sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=300');
  return res.status(200).json({ success: true, count: data.length, data });
}
