import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

import { SITE } from '../config/site';
import { getPosts } from '../lib/services';

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: `${SITE.name} — Blog`,
    description: 'Çocuk ve ergen psikolojisi üzerine ebeveynler için yazılar.',
    site: context.site ?? SITE.url,
    trailingSlash: false,
    customData: `<language>tr-tr</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/blog/${post.id}`,
      categories: [post.data.category, ...post.data.tags],
    })),
  });
}
