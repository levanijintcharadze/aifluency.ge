import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { pillarLabels } from '../../lib/labels';
import { renderOgPng } from '../../lib/og';
import type { OgContent } from '../../lib/og-svg';
import { PAGES, articleOgKey } from '../../lib/site';

// თითოეული გვერდის გაზიარების სურათი build-ის დროს იქმნება: /og/<key>.png
export const getStaticPaths = (async () => {
  const pages = Object.entries(PAGES).map(([key, page]) => ({
    params: { key },
    props: { title: page.ogTitle, kicker: page.ogKicker, description: page.description } satisfies OgContent,
  }));

  const articles = await getCollection('articles', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  const articlePages = articles.map((article) => ({
    params: { key: articleOgKey(article.id) },
    props: {
      title: article.data.title,
      kicker: `სტატია · ${pillarLabels[article.data.pillar]}`,
      description: article.data.description,
    } satisfies OgContent,
  }));

  return [...pages, ...articlePages];
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const png = renderOgPng(props as OgContent);
  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
