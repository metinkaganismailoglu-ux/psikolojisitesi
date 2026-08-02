# Uzm. Psk. Metin Kağan — Psikolog Web Sitesi

Astro 7 + Tailwind CSS 4 ile kurulmuş, tamamen statik, SEO/AEO/GEO odaklı psikolog web sitesi.
Cloudflare Pages üzerinde yayınlanmak üzere hazırlanmıştır.

## Hızlı başlangıç

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ klasörüne statik çıktı
npm run preview  # build çıktısını lokalde sun
npm run check    # tip ve şablon kontrolü
npm run og       # og-default.svg -> og-default.png yeniden üret
```

Node 22.12 veya üzeri gerekir.

## Yayına almadan önce doldurulacaklar

Sitenin tüm kişisel bilgileri tek dosyada toplanmıştır: **`src/config/site.ts`**

| Alan | Açıklama |
| --- | --- |
| `SITE.url` | Gerçek alan adı. Kanonik URL, sitemap, RSS ve schema verisi buradan üretilir. |
| `SITE.name`, `SITE.title`, `SITE.description` | İsim, unvan ve ana meta açıklaması. |
| `CONTACT` | Telefon, WhatsApp numarası, e-posta, adres, koordinatlar, çalışma saatleri. |
| `SOCIAL` | Sosyal medya bağlantıları (schema.org `sameAs` alanını da besler). |
| `PROFILE` | Biyografi, eğitim, sertifikalar, üyelikler, istatistikler. |
| `PROCESS`, `FAQS` | Süreç adımları ve genel SSS içerikleri. |

Ayrıca:

- **Gerçek fotoğraf:** `public/images/portre.svg` yer tutucudur. Yerine `portre.jpg` koyup
  `src/pages/index.astro` ile `src/pages/hakkimda.astro` içindeki `src` değerlerini güncelleyin.
- **OG görseli:** `public/og-default.svg` içindeki metni güncelleyip `npm run og` çalıştırın.
- **İletişim formu:** `src/pages/iletisim.astro` içindeki `FORM_ENDPOINT` sabiti
  [Formspree](https://formspree.io) uç noktası için yer tutucudur. Formspree, Web3Forms veya
  Cloudflare Worker tabanlı kendi uç noktanızla değiştirin. Form, başarılı gönderimden sonra
  `/tesekkurler` sayfasına yönlenir.
- **KVKK metni:** `src/pages/kvkk.astro` örnek bir şablondur; hukuk danışmanınızla gözden geçirin.
- **Harita:** `src/pages/iletisim.astro` içindeki iframe adresi Kadıköy'ü gösterir; gerçek adresle
  değiştirin.

## İçerik ekleme

### Blog yazısı

`src/content/blog/` altına yeni bir `.md` dosyası açın. Dosya adı URL olur
(`ornek-yazi.md` → `/blog/ornek-yazi`).

```yaml
---
title: >-
  Yazı başlığı
description: >-
  Arama sonuçlarında görünecek 150-160 karakterlik özet.
publishedAt: 2026-08-01
updatedAt: 2026-08-10        # opsiyonel
category: Okul ve Uyum
readingTime: 6
answer: >-
  Sorunun tek paragraflık net yanıtı. Yapay zekâ motorları ve öne çıkan snippet'ler
  bu alanı kullanır; yazının en üstünde "Kısa yanıt" kutusunda gösterilir.
tags: [okul reddi, ebeveynlik]
faqs:
  - q: >-
      Soru?
    a: >-
      Yanıt. Bu alan sayfaya FAQPage schema'sı olarak eklenir.
draft: false
---
```

> **Not:** Frontmatter'da iki nokta (`: `) içeren metinler YAML'ı bozar. Bu yüzden uzun metinlerde
> yukarıdaki gibi `>-` blok yazımını kullanın.

### Hizmet sayfası

`src/content/services/` altına `.md` dosyası ekleyin. Şema `src/content.config.ts` içinde
tanımlıdır; `order` alanı sıralamayı belirler. Yeni hizmet otomatik olarak ana sayfaya, hizmetler
listesine, alt menüye, SSS sayfasına, sitemap'e ve `llms.txt` dosyasına eklenir.

## SEO / AEO / GEO altyapısı

- **Schema.org (JSON-LD):** Her sayfada `Person` + `Psychologist/LocalBusiness` + `WebPage` grafiği;
  hizmet sayfalarında `Service`, blog yazılarında `Article`, SSS'lerde `FAQPage`, iç sayfalarda
  `BreadcrumbList`. Tümü `src/lib/schema.ts` içinde üretilir.
- **`/llms.txt`:** Dil modelleri için sitenin yapılandırılmış özeti — hizmetler, SSS yanıtları ve
  her blog yazısının "kısa yanıt"ı dahil. İçerik eklendikçe otomatik güncellenir.
- **`/robots.txt`:** GPTBot, ClaudeBot, PerplexityBot, Google-Extended dahil yapay zekâ
  tarayıcılarına açıktır. Bir botu engellemek için `src/pages/robots.txt.ts` dosyasını düzenleyin.
- **Sitemap:** `/sitemap-index.xml` (build sırasında otomatik).
- **RSS:** `/rss.xml`
- **"Kısa yanıt" bloğu:** Her blog yazısının başındaki tek paragraflık yanıt, yapay zekâ
  motorlarının alıntılamasını kolaylaştırır.
- Animasyonlar JavaScript çalışmadığında devre dışı kalır; JS çalıştırmayan botlar için tüm içerik
  ilk HTML'de görünür durumdadır.

## Cloudflare Pages ile yayına alma

Proje statik çıktı ürettiği için ek bir adaptöre gerek yoktur.

1. Depoyu GitHub'a gönderin.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Derleme ayarları:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node sürümü: ortam değişkeni olarak `NODE_VERSION = 22.12.0`
4. Alan adını **Custom domains** sekmesinden bağlayın.
5. `src/config/site.ts` içindeki `SITE.url` değerini gerçek alan adıyla güncelleyip tekrar deploy edin
   (kanonik URL'ler ve sitemap bu değere bağlıdır).

Güvenlik başlıkları ve önbellek kuralları `public/_headers` dosyasındadır; Cloudflare Pages bunu
otomatik uygular.

## Dizin yapısı

```
src/
├── components/     # Header, Footer, kartlar, SSS akordiyonu, ikonlar
├── config/site.ts  # TÜM kişisel bilgiler ve site metinleri
├── content/
│   ├── blog/       # Blog yazıları (markdown)
│   └── services/   # Hizmet sayfaları (markdown)
├── layouts/        # BaseLayout: meta etiketler, JSON-LD, iskelet
├── lib/            # schema.org üreticileri, içerik sorguları
├── pages/          # Rotalar (+ robots.txt, llms.txt, rss.xml)
└── styles/         # Tailwind teması ve tasarım tokenları
public/             # Statik dosyalar, _headers, görseller
```

## Tasarım sistemi

Renkler ve tipografi `src/styles/global.css` içindeki `@theme` bloğunda tanımlıdır:

- `pine` — ana yeşil (güven, sakinlik)
- `clay` — sıcak turuncu vurgu
- `sand` — arka plan tonları
- Başlıklar **Fraunces**, gövde metni **Plus Jakarta Sans** (her ikisi de projeyle birlikte gelir,
  dış istek yapılmaz)
