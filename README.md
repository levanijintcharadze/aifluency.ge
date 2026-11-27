# AI Fluency (aifluency.ge)

ქართულენოვანი საგანმანათლებლო საიტი, რომელიც ყველას ასწავლის
ხელოვნური ინტელექტის სწორ, უსაფრთხო და პასუხისმგებლიან გამოყენებას.

## პრინციპები

- ნეიტრალურობა: AI-ხელსაწყოებს სამართლიანად ვადარებთ.
- შიგთავსი ვრცელდება CC BY-SA 4.0 ლიცენზიით.
- ყოველ სტატიას აქვს წყაროები და ბოლო განახლების თარიღი.
- ვიზიტების სტატისტიკა (Google Analytics) მხოლოდ ვიზიტორის თანხმობით.

## ტექნოლოგიები

- [Astro](https://astro.build/) 7, სტატიკური საიტი
- Cloudflare Workers (სტატიკური ასეტები) ჰოსტინგისთვის
- ფონტი: FiraGO (SIL OFL 1.1), ქართულ-ლათინური ქვესიმრავლე `public/fonts/`-ში

## ბრენდი

- **ლოგო:** ქართული „ა“ ცისფერ, მომრგვალებულ კვადრატში, ქარვისფერი წერტილით. ფაილებია
  `public/logo.svg` და `public/favicon.svg`, კომპონენტი `src/components/LogoMark.astro`.
  ასოს კონტური აღებულია DejaVu Sans Bold-იდან.
- **ფერები:**

  | როლი | ფერი | გამოყენება |
  | --- | --- | --- |
  | მთავარი | `#1F5FBF` | ბმულები, ღილაკები, ლოგო |
  | მელანი | `#0F2A4D` | სათაურები, ტექსტი |
  | აქცენტი | `#F2A93B` | მხოლოდ დეტალად და ფონად, ტექსტად არა |
  | ფონი | `#F5F8FC` | გვერდის ფონი |
  | მეორადი | `#5A6578` | მეორადი ტექსტი |

  ფერები CSS ცვლადებადაა გაწერილი `src/styles/global.css`-ში (`--brand-*`).
- **თემა:** ღია და მუქი, გადამრთველით header-ში. არჩევანი ბრაუზერში ინახება, თავიდან კი
  სისტემის პარამეტრს მიჰყვება.
- **ხატულები:** Font Awesome Free (CC BY 4.0), SVG-ებად `src/icons/`-ში. CDN-ს არ ვიყენებთ,
  რომ ვიზიტორების მონაცემები მესამე მხარეს არ გადაეცეს. GitHub-ის ნიშანი აღებულია
  Simple Icons-იდან (CC0 1.0).
- **GitHub-ის ბმული:** მისამართი `src/lib/site.ts`-შია (`SITE.repo`). ჩანს header-ში ხატულად,
  ფუტერში და „პროექტის შესახებ“ გვერდზე.

## SEO და გაზიარება

- **სათაურები და აღწერები:** ძირითადი გვერდებისა `src/lib/site.ts`-შია, სტატიებისა კი მათ frontmatter-ში.
- **გაზიარების სურათები:** თითოეულ გვერდს და სტატიას საკუთარი სურათი აქვს (`/og/<key>.png`, 1200×630).
  ისინი build-ის დროს ავტომატურად იქმნება (`src/pages/og/[key].png.ts`, შაბლონი `src/lib/og-svg.ts`).
- **sitemap:** `/sitemap.xml` (`src/pages/sitemap.xml.ts`), მითითებულია `robots.txt`-ში.
- **სტრუქტურირებული მონაცემები (Schema.org):** მთავარ გვერდზე `WebSite`, სტატიებზე `Article`,
  ლექსიკონში `DefinedTermSet`.
- მონახაზები და 404 გვერდი `noindex`-ით არის მონიშნული.

## ანალიტიკა და ქუქი-ფაილები

- Google-ის ტეგი `src/lib/site.ts`-შია (`GOOGLE_TAG_ID`): Tag Manager-ის კონტეინერი (`GTM-...`) ან GA4-ის ID (`G-...`).
- ID-ის შევსების შემდეგ ჩნდება ქუქი-ფაილების ბანერი (`src/components/ConsentBanner.astro`).
  Google-ის სკრიპტი მხოლოდ თანხმობის შემდეგ იტვირთება. უარის შემთხვევაში არ იტვირთება და `_ga` ქუქი-ფაილები იშლება.
- არჩევანი წელიწადში ერთხელ ხელახლა ეკითხება. ფუტერში არის ღილაკი „ქუქი-ფაილების პარამეტრები“.
- სარეკლამო მონაცემებზე თანხმობა (`ad_storage`, `ad_user_data`, `ad_personalization`) ყოველთვის `denied`-ია. Google signals GA-ს პარამეტრებში უნდა იყოს გამორთული.
- კონფიდენციალურობის გვერდი: `src/pages/privacy.astro` (`/privacy/`).

## ლოკალურად გაშვება

საჭიროა Node.js 22.12 ან უფრო ახალი (იხ. `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # აწყობს საიტს dist/-ში
npm run preview  # აჩვენებს აწყობილ საიტს
```

მონახაზები (`draft: true`) ჩანს მხოლოდ `npm run dev`-ში. production build-ში არ შედის.

## სტრუქტურა

```
src/
  content.config.ts        კოლექციების სქემები (სტატიები, ლექსიკონი)
  content/
    articles/*.md          სტატიები
    glossary.json          ტერმინთა ლექსიკონი
  layouts/BaseLayout.astro საერთო შაბლონი (header, footer, SEO)
  lib/labels.ts            ქართული წარწერები და თარიღის ფორმატი
  pages/                   გვერდები: მთავარი, სტატიები, ლექსიკონი, შესახებ
  styles/global.css        სტილები
public/
  _headers                 Cloudflare-ის უსაფრთხოების ჰედერები
wrangler.jsonc             Cloudflare Workers-ის კონფიგურაცია
```

## სტატიის დამატება

შექმენი ფაილი `src/content/articles/`-ში, მაგალითად `deepfake-amocnoba.md`:

```md
---
title: როგორ ამოვიცნოთ დიპფეიკი
description: ერთწინადადებიანი აღწერა ძიებისა და ბარათისთვის.
pillar: safety                   # basics | safety | responsible-use | practice | framework
updated: 2026-12-01
draft: false
sources:
  - title: წყაროს სახელი
    url: https://example.org/...
---

სტატიის ტექსტი...
```

`draft: false` სტატიას სჭირდება მინიმუმ ერთი წყარო, თორემ build შეცდომას აჩვენებს.

## ლექსიკონში ტერმინის დამატება

დაამატე ჩანაწერი `src/content/glossary.json`-ში:

```json
{
  "id": "deepfake",
  "term": "დიპფეიკი",
  "en": "Deepfake",
  "definition": "მოკლე, მარტივი ახსნა.",
  "note": "არასავალდებულო: შენიშვნა ტერმინის არჩევანზე."
}
```

## გამოქვეყნება (Cloudflare Workers)

საიტი Cloudflare Workers-ის სტატიკურ ასეტებზეა განთავსებული (Worker სახელით `aifluency-ge`,
კონფიგურაცია `wrangler.jsonc`-ში). Workers Builds `main` ბრენჩზე ყოველ push-ზე ავტომატურად:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

დომენი `aifluency.ge` Worker-ზე Custom Domain-ადაა მიბმული.

## შემდეგი ნაბიჯები

- [ ] `npx astro add mdx`: MDX ინტერაქტიული ქვიზებისთვის
- [ ] Google Search Console-ში საიტის დამატება და `sitemap.xml`-ის გაგზავნა
- [ ] კონფიდენციალურობის დამცველი ანალიტიკა (cookie-ების გარეშე)
- [ ] MVP შიგთავსი: 8–10 სტატია, 30–50 ტერმინი, ჩეკლისტი, გაკვეთილის გეგმა

## ლიცენზია

- კოდი: [MIT](./LICENSE)
- შიგთავსი: [CC BY-SA 4.0](./LICENSE-CONTENT.md)
