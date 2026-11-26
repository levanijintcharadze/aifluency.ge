import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const staticPaths = ['/', '/articles/', '/glossary/', '/about/', '/privacy/'];

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://aifluency.ge');
  const articles = await getCollection('articles', ({ data }) => !data.draft);

  const entries = [
    ...staticPaths.map((path) => ({ loc: new URL(path, base).href, lastmod: undefined as string | undefined })),
    ...articles.map((article) => ({
      loc: new URL(`/articles/${article.id}/`, base).href,
      lastmod: article.data.updated.toISOString().slice(0, 10),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map((e) => `  <url><loc>${e.loc}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}</url>`)
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
