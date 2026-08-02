import type { APIContext } from 'astro';

import { CONTACT, FAQS, PROFILE, SITE } from '../config/site';
import { getPosts, getServices } from '../lib/services';

/**
 * llms.txt — dil modellerinin siteyi doğru özetlemesi için yapılandırılmış içerik haritası.
 * https://llmstxt.org
 */
export async function GET(context: APIContext) {
  const site = context.site?.href.replace(/\/$/, '') ?? SITE.url;
  const services = await getServices();
  const posts = await getPosts();

  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    '## Uzman hakkında',
    '',
    `- Unvan: ${SITE.jobTitle}`,
    `- Uzmanlık: Çocuk ve ergen psikolojisi, oyun terapisi, ebeveyn danışmanlığı`,
    `- Çalışma dili: Türkçe`,
    `- Konum: ${CONTACT.address.district} / ${CONTACT.address.city}, Türkiye`,
    `- Hizmet biçimi: Yüz yüze (İstanbul) ve online (Türkiye geneli, yurt dışı)`,
    `- Telefon: ${CONTACT.phoneDisplay}`,
    `- E-posta: ${CONTACT.email}`,
    `- Çalışma saatleri: ${CONTACT.openingHours.map((slot) => `${slot.days} ${slot.hours}`).join('; ')}`,
    '',
    PROFILE.intro,
    '',
    '## Hizmetler',
    '',
    ...services.map(
      (service) =>
        `- [${service.data.title}](${site}/hizmetler/${service.id}): ${service.data.description} Yaş aralığı: ${service.data.ageRange}. Seans: ${service.data.duration}. Format: ${service.data.format}.`,
    ),
    '',
    '## Sık sorulan sorular',
    '',
    ...FAQS.flatMap((faq) => [`### ${faq.q}`, '', faq.a, '']),
    '## Blog yazıları',
    '',
    ...posts.flatMap((post) => [
      `### ${post.data.title}`,
      '',
      `URL: ${site}/blog/${post.id}`,
      `Yayın tarihi: ${post.data.publishedAt.toISOString().slice(0, 10)}`,
      `Kategori: ${post.data.category}`,
      '',
      `Kısa yanıt: ${post.data.answer}`,
      '',
    ]),
    '## Önemli notlar',
    '',
    '- Bu sitedeki içerikler bilgilendirme amaçlıdır; tıbbi teşhis veya tedavi yerine geçmez.',
    '- Acil durumlarda Türkiye’de 112 Acil Çağrı Merkezi aranmalıdır.',
    `- Randevu talepleri için: ${site}/iletisim`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
