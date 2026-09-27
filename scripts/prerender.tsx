import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../src/App';
import { PUBLIC_BLOGS } from '../src/data/publicBlogs';

const base = 'https://www.priglobexim.com';
const pages: Record<string, [string, string]> = {
  '/': ['PriGlob Exim | Cotton & Jute Bags Exporter', 'PriGlob Exim manufactures and exports cotton canvas and jute bags from India.'],
  '/cotton-jute-tote-bag': ['Cotton & Jute Tote Bags | PriGlob Exim', 'Explore cotton canvas totes, jute hampers, drawstring pouches and custom export bags.'],
  '/blog': ['Export & Sustainable Packaging Insights | PriGlob Exim', 'Articles about sustainable bags, custom branding and international export compliance.'],
  '/our-company': ['Our Company | PriGlob Exim', 'Learn about PriGlob Exim and its textile manufacturing and merchant export operations.'],
  '/our-team': ['Our Team | PriGlob Exim', 'Meet the people behind PriGlob Exim and its global export business.'],
  '/faq': ['FAQs | PriGlob Exim', 'Answers to common questions about export bags, minimum orders and shipping.'],
  '/contact': ['Contact Us | PriGlob Exim', 'Contact PriGlob Exim for wholesale cotton and jute bag exports.'],
};
for (const blog of PUBLIC_BLOGS) pages[`/blog/${blog.slug}`] = [`${blog.title} | PriGlob Exim`, blog.excerpt];
const escape = (str: string) => str.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]!));
const template = fs.readFileSync('dist/index.html', 'utf8');
for (const [route, [title, description]] of Object.entries(pages)) {
  const html = renderToString(<StaticRouter location={route}><App /></StaticRouter>);
  if (!html.includes('<main')) throw new Error(`Missing content: ${route}`);
  const canonical = `${base}${route}`;
  const out = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escape(description)}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escape(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escape(description)}" />`)
    .replace('</head>', `    <link rel="canonical" href="${escape(canonical)}" />\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const destination = route === '/' ? 'dist/index.html' : `dist${route}.html`;
  fs.mkdirSync(path.dirname(destination), {recursive: true});
  fs.writeFileSync(destination, out);
}
// Admin is intentionally excluded from the sitemap and served only to the browser.
fs.writeFileSync('dist/admin.html', template.replace('</head>', '<meta name="robots" content="noindex" /></head>'));
const urls = Object.keys(pages).map(route => `  <url><loc>${base}${route}</loc></url>`).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
fs.writeFileSync('dist/sitemap.xml', sitemap);
fs.writeFileSync('public/sitemap.xml', sitemap);
const error = template.replace('<div id="root"></div>', '<div id="root"><main><h1>Page not found</h1><p>The requested page does not exist.</p><a href="/">Home</a></main></div>')
  .replace('<title>PriGlob Exim</title>', '<title>Page not found | PriGlob Exim</title>')
  .replace('</head>', '<meta name="robots" content="noindex" /></head>');
fs.writeFileSync('dist/404.html', error);
console.log(`Pre-rendered ${Object.keys(pages).length} real pages and 404.html`);
