export function baseGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://example.com/#website',
        'url': 'https://example.com',
        'name': 'Feride İsmailoğlu'
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
      'name': 'Feride İsmailoğlu'
    }
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}
