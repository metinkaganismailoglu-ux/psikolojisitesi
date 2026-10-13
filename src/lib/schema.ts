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
