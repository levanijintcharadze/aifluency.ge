import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * სტატიები: src/content/articles/*.md
 * ყოველ გამოქვეყნებულ (draft: false) სტატიას სჭირდება მინიმუმ ერთი წყარო
 * და „ბოლო განახლების" თარიღი — პროექტის სტანდარტის მიხედვით.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      pillar: z.enum(['basics', 'safety', 'responsible-use', 'practice', 'framework']),
      updated: z.coerce.date(),
      sources: z
        .array(
          z.object({
            title: z.string(),
            url: z.url(),
          }),
        )
        .default([]),
      draft: z.boolean().default(true),
    })
    .refine((data) => data.draft || data.sources.length > 0, {
      message: 'გამოქვეყნებულ სტატიას მინიმუმ ერთი წყარო სჭირდება',
      path: ['sources'],
    }),
});

/**
 * ტერმინთა ლექსიკონი: src/content/glossary.json
 * ყოველ ჩანაწერს სჭირდება უნიკალური `id` (ინგლისური, kebab-case).
 */
const glossary = defineCollection({
  loader: file('./src/content/glossary.json'),
  schema: z.object({
    term: z.string(),
    en: z.string(),
    definition: z.string(),
    note: z.string().optional(),
  }),
});

export const collections = { articles, glossary };
