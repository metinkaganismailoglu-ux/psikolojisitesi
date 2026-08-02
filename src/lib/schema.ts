import { CONTACT, PROFILE, SITE, SOCIAL } from '../config/site';

const abs = (path: string) => new URL(path, SITE.url).href;

export const PRACTICE_ID = abs('/#practice');
export const PERSON_ID = abs('/#psychologist');

/**
 * Psikolog (kişi) + muayenehane (yerel işletme) düğümleri.
 * Her sayfada yayınlanır; diğer şemalar bu düğümlere @id ile referans verir.
 */
export function baseGraph() {
  return [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: SITE.name,
      jobTitle: SITE.jobTitle,
      description: PROFILE.intro,
      url: abs('/hakkimda'),
      email: `mailto:${CONTACT.email}`,
      telephone: CONTACT.phoneHref,
      knowsLanguage: ['tr', 'en'],
      sameAs: SOCIAL.map((s) => s.href),
      alumniOf: PROFILE.education.map((e) => ({
        '@type': 'EducationalOrganization',
        name: e.org,
      })),
      memberOf: PROFILE.memberships.map((m) => ({ '@type': 'Organization', name: m })),
      worksFor: { '@id': PRACTICE_ID },
    },
    {
      '@type': ['Psychologist', 'LocalBusiness'],
      '@id': PRACTICE_ID,
      name: SITE.name,
      description: SITE.description,
      url: SITE.url,
      image: abs(SITE.defaultOgImage),
      telephone: CONTACT.phoneHref,
      email: `mailto:${CONTACT.email}`,
      priceRange: '₺₺',
      currenciesAccepted: 'TRY',
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT.address.street,
        addressLocality: CONTACT.address.district,
        addressRegion: CONTACT.address.city,
        postalCode: CONTACT.address.postalCode,
        addressCountry: CONTACT.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: CONTACT.geo.latitude,
        longitude: CONTACT.geo.longitude,
      },
      openingHoursSpecification: CONTACT.openingHoursSchema.map((o) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: o.dayOfWeek,
        opens: o.opens,
        closes: o.closes,
      })),
      areaServed: [
        { '@type': 'City', name: CONTACT.address.city },
        { '@type': 'Country', name: 'Türkiye' },
      ],
      availableService: {
        '@type': 'PsychologicalTreatment',
        name: 'Çocuk ve ergen psikoterapisi',
      },
      founder: { '@id': PERSON_ID },
      employee: { '@id': PERSON_ID },
      sameAs: SOCIAL.map((s) => s.href),
    },
  ];
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(service: { title: string; description: string; path: string }) {
  return {
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: abs(service.path),
    serviceType: service.title,
    provider: { '@id': PRACTICE_ID },
    areaServed: [
      { '@type': 'City', name: CONTACT.address.city },
      { '@type': 'Country', name: 'Türkiye' },
    ],
    audience: { '@type': 'PeopleAudience', audienceType: 'Çocuklar, ergenler ve ebeveynler' },
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  path: string;
  publishedAt: Date;
  updatedAt?: Date;
  image?: string;
}) {
  return {
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: abs(post.path),
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(post.path) },
    datePublished: post.publishedAt.toISOString(),
    dateModified: (post.updatedAt ?? post.publishedAt).toISOString(),
    inLanguage: SITE.locale,
    image: abs(post.image ?? SITE.defaultOgImage),
    author: { '@id': PERSON_ID },
    publisher: { '@id': PRACTICE_ID },
  };
}

export function webPageSchema(page: { title: string; description: string; path: string }) {
  return {
    '@type': 'WebPage',
    '@id': abs(page.path) + '#webpage',
    url: abs(page.path),
    name: page.title,
    description: page.description,
    inLanguage: SITE.locale,
    isPartOf: {
      '@type': 'WebSite',
      '@id': abs('/#website'),
      url: SITE.url,
      name: SITE.name,
      inLanguage: SITE.locale,
      publisher: { '@id': PRACTICE_ID },
    },
    about: { '@id': PERSON_ID },
  };
}
