import type { APIContext } from 'astro';

import { SITE } from '../config/site';

/**
 * Yapay zekâ tarayıcılarına açık bir robots.txt.
 * Bir botu engellemek isterseniz ilgili user-agent'ı `blocked` listesine taşıyın.
 */
const allowedAiBots = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'DuckAssistBot',
  'meta-externalagent',
  'cohere-ai',
  'YouBot',
];

export function GET(context: APIContext) {
  const site = context.site?.href.replace(/\/$/, '') ?? SITE.url;

  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /tesekkurler',
    '',
    ...allowedAiBots.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${site}/sitemap-index.xml`,
    `# LLM özeti: ${site}/llms.txt`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
