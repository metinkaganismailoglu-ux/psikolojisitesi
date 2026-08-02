/**
 * Sitenin tek gerçek kaynağı.
 * Tüm sayfalar, meta etiketler ve schema.org verisi buradan beslenir.
 * Yayına almadan önce bu dosyadaki bilgileri güncelleyin.
 */

export const SITE = {
  url: 'https://www.metinkagan.com',
  name: 'Uzm. Psk. Metin Kağan',
  shortName: 'Metin Kağan',
  jobTitle: 'Uzman Klinik Psikolog',
  title: 'Uzm. Psk. Metin Kağan | Çocuk ve Ergen Psikoloğu',
  description:
    'Çocuk ve ergen odaklı klinik psikolog. Oyun terapisi, ergen danışmanlığı, ebeveyn danışmanlığı ve online terapi. İstanbul’da yüz yüze, Türkiye genelinde online görüşme.',
  locale: 'tr-TR',
  lang: 'tr',
  themeColor: '#2f6f6b',
  defaultOgImage: '/og-default.png',
} as const;

export const CONTACT = {
  phoneDisplay: '+90 (5xx) xxx xx xx',
  phoneHref: '+905xxxxxxxxx',
  whatsapp: '905xxxxxxxxx',
  whatsappMessage: 'Merhaba, randevu hakkında bilgi almak istiyorum.',
  email: 'iletisim@metinkagan.com',
  address: {
    street: 'Örnek Mah. Örnek Cad. No: 1 D: 2',
    district: 'Kadıköy',
    city: 'İstanbul',
    postalCode: '34000',
    country: 'TR',
  },
  geo: { latitude: 40.9903, longitude: 29.0245 },
  mapsUrl: 'https://maps.google.com/?q=Kadıköy+İstanbul',
  openingHours: [
    { days: 'Pazartesi – Cuma', hours: '09:00 – 19:00' },
    { days: 'Cumartesi', hours: '10:00 – 15:00' },
    { days: 'Pazar', hours: 'Kapalı' },
  ],
  openingHoursSchema: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
    { dayOfWeek: ['Saturday'], opens: '10:00', closes: '15:00' },
  ],
} as const;

export const SOCIAL = [
  { label: 'Instagram', href: 'https://instagram.com/kullaniciadi' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kullaniciadi' },
  { label: 'YouTube', href: 'https://youtube.com/@kullaniciadi' },
] as const;

export const NAV = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımda', href: '/hakkimda' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Blog', href: '/blog' },
  { label: 'S.S.S.', href: '/sss' },
  { label: 'İletişim', href: '/iletisim' },
] as const;

/** Kişisel bilgiler: Hakkımda sayfası ve Person schema’sı için. */
export const PROFILE = {
  intro:
    'Çocukların ve ergenlerin duygularını güvenle ifade edebildiği bir alan kurmak için çalışıyorum. Terapi sürecini yalnızca çocukla değil, aileyle birlikte yürütüyorum.',
  bio: [
    'Klinik psikoloji alanındaki çalışmalarıma çocuk ve ergen ruh sağlığı odağında devam ediyorum. Oyun terapisi, bilişsel davranışçı terapi ve ebeveyn danışmanlığı yaklaşımlarını, her çocuğun kendi ritmine göre harmanlayarak kullanıyorum.',
    'Bir çocuk için terapi odası; yargılanmadan öfkelenebildiği, korkularını oyunla anlatabildiği ve “böyle hissetmek normal” cümlesini duyabildiği bir yerdir. Ergenlerle çalışırken ise güven ve gizlilik ilkesini merkeze alır, aileyle iş birliğini genç kişinin onayıyla kurarım.',
    'Görüşmelerimi İstanbul’daki ofisimde yüz yüze; Türkiye’nin diğer şehirlerinde ve yurt dışında yaşayan danışanlarımla online olarak sürdürüyorum.',
  ],
  education: [
    { title: 'Klinik Psikoloji Yüksek Lisansı', org: 'Üniversite Adı', year: '20XX' },
    { title: 'Psikoloji Lisansı', org: 'Üniversite Adı', year: '20XX' },
  ],
  certificates: [
    { title: 'Çocuk Merkezli Oyun Terapisi Eğitimi', org: 'Eğitim Kurumu', year: '20XX' },
    { title: 'Bilişsel Davranışçı Terapi (BDT) Uygulayıcı Eğitimi', org: 'Eğitim Kurumu', year: '20XX' },
    { title: 'Ebeveyn Danışmanlığı Programı', org: 'Eğitim Kurumu', year: '20XX' },
  ],
  memberships: ['Türk Psikologlar Derneği'],
  stats: [
    { value: '10+', label: 'yıllık klinik deneyim' },
    { value: '1.500+', label: 'tamamlanan seans' },
    { value: '3–18', label: 'yaş aralığında çalışma' },
  ],
} as const;

/** Terapi sürecinin adımları: ana sayfa ve hizmet sayfalarında kullanılır. */
export const PROCESS = [
  {
    title: 'Ön görüşme',
    text: 'Telefon veya WhatsApp üzerinden kısa bir ön görüşme yapar, ihtiyacınıza uygun çalışma biçimini birlikte belirleriz.',
  },
  {
    title: 'Tanışma seansı',
    text: 'İlk seansı ebeveynlerle yaparız. Çocuğun gelişim öyküsünü, aile içi dinamikleri ve sizi endişelendiren durumları konuşuruz.',
  },
  {
    title: 'Değerlendirme',
    text: 'Çocukla 2–3 tanışma/oyun seansı yapılır; gerektiğinde ölçek ve testlerle desteklenen bir değerlendirme raporu paylaşılır.',
  },
  {
    title: 'Terapi süreci',
    text: 'Haftada bir 50 dakikalık seanslarla çalışırız. Her 4–6 seansta bir ebeveyn görüşmesiyle süreci birlikte gözden geçiririz.',
  },
] as const;

export const FAQS = [
  {
    q: 'Çocuğum için psikoloğa başvurmam gerektiğini nasıl anlarım?',
    a: 'Uyku ve iştah düzeninde süreklilik kazanan değişiklikler, okula gitmek istememe, yaşına göre beklenmedik öfke patlamaları, içe kapanma, kaygı belirtileri veya daha önce kazanılmış becerilerin (tuvalet alışkanlığı gibi) kaybı iki-üç haftadan uzun sürüyorsa bir uzmana danışmak yararlıdır. Erken başvuru, sorunun büyümesini beklemekten çok daha kısa süren bir süreç anlamına gelir.',
  },
  {
    q: 'Bir seans ne kadar sürüyor ve ne sıklıkla görüşüyoruz?',
    a: 'Seanslar 50 dakikadır ve genellikle haftada bir kez yapılır. Sürecin yoğunluğuna göre sıklık iki haftada bire düşürülebilir. Ebeveyn görüşmeleri ortalama 4–6 seansta bir planlanır.',
  },
  {
    q: 'Terapi süreci kaç seans sürer?',
    a: 'Başvuru nedenine göre değişir. Belirli bir odak sorunu için 8–12 seans yeterli olabilirken, travma veya uzun süredir devam eden kaygı durumlarında süreç birkaç aya yayılabilir. Değerlendirme seanslarının sonunda size tahmini bir süre sunulur.',
  },
  {
    q: 'Ebeveyn olarak seanslarda bulunuyor muyum?',
    a: 'Küçük yaş grubunda (3–6) ebeveyn katılımlı seanslar planlanabilir. Daha büyük çocuk ve ergenlerde seanslar çocukla birebir yapılır; siz düzenli ebeveyn görüşmeleriyle sürece dahil olursunuz.',
  },
  {
    q: 'Çocuğumun anlattıkları bana aktarılıyor mu?',
    a: 'Terapide gizlilik esastır ve bu ilke çocuklar için de geçerlidir. Çocuğun güvenliğini ilgilendiren durumlar dışında seans içeriği birebir aktarılmaz; bunun yerine sürecin gidişatı, ihtiyaçlar ve evde yapabilecekleriniz konuşulur.',
  },
  {
    q: 'Online terapi çocuklarda işe yarıyor mu?',
    a: 'Ergenlerde ve 8 yaş üzeri çocuklarda online görüşmeler yüz yüze seanslara yakın etkinlik gösterir. Daha küçük yaşlarda ise online formatı ağırlıklı olarak ebeveyn danışmanlığı için öneriyorum.',
  },
  {
    q: 'Seans ücretleri ve iptal koşulları nasıl?',
    a: 'Güncel seans ücretini iletişim kanallarından öğrenebilirsiniz. Randevunuzu en az 24 saat önce bildirmeniz hâlinde iptal veya erteleme ücretsizdir.',
  },
  {
    q: 'Online terapi için nelere ihtiyacım var?',
    a: 'Kamerası ve mikrofonu çalışan bir telefon, tablet ya da bilgisayar, sabit bir internet bağlantısı ve seans boyunca bölünmeyeceğiniz sessiz bir oda yeterlidir. Görüşme bağlantısı randevudan önce tarafınıza iletilir.',
  },
] as const;
