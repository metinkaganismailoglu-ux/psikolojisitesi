import { getCollection } from 'astro:content';

export async function getServices() {
  const services = await getCollection('services');
  return services.sort((a, b) => a.data.order - b.data.order);
}

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft || import.meta.env.DEV);
  return posts.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}
