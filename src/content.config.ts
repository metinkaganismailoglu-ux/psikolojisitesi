import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
    ageRange: z.string(),
    duration: z.string(),
    format: z.string(),
    forWhom: z.array(z.string()),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.string(),
    readingTime: z.number(),
    /** Yapay zekâ motorları ve öne çıkan snippet'ler için tek cümlelik yanıt. */
    answer: z.string(),
    tags: z.array(z.string()).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, blog };
