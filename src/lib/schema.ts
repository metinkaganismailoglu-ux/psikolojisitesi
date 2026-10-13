import { SITE, CONTACT, SOCIAL, PROFILE } from '../config/site';

export function baseGraph() {
  const socialLinks = Array.isArray(SOCIAL) ? SOCIAL.map(s => s.href) : [];
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': `${SITE.url}/#organization`,
        'name': SITE.name,
        'url': SITE.url,
        'telephone': CONTACT.phone,
        'email': CONTACT.email,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': CONTACT.address,
          'addressCountry': 'TR'
        },
        'sameAs': socialLinks
      }
    ]
  };
}

export function serviceSchema(data: { title: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': data.title,
    'description': data.description,
    'provider': {
      '@type': 'MedicalBusiness',
      'name': SITE.name
    }
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': Array.isArray(faqs) ? faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    })) : []
  };
}
