import { SITE, CONTACT, SOCIAL } from '../config/site';

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
