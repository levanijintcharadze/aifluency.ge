# AI Fluency — aifluency.ge

არაკომერციული ქართულენოვანი საგანმანათლებლო საიტი, რომელიც ყველას ასწავლის
ხელოვნური ინტელექტის სწორ, უსაფრთხო და პასუხისმგებლიან გამოყენებას.

## პრინციპები

- რეკლამის, სპონსორობის, პარტნიორული ბმულებისა და ფასიანი შიგთავსის გარეშე.
- ნეიტრალურობა: AI-ხელსაწყოებს სამართლიანად ვადარებთ.
- მთელი შიგთავსი უფასოა და ვრცელდება CC BY-SA 4.0 ლიცენზიით.
- ყოველ სტატიას აქვს წყაროები და ბოლო განახლების თარიღი.
- მინიმალური მონაცემები და თვალთვალის გარეშე.

## ტექნოლოგიები

- [Astro](https://astro.build/) 7, სტატიკური საიტი
- Cloudflare Workers (სტატიკური ასეტები) ჰოსტინგისთვის
- ფონტი: FiraGO (ან Noto Sans Georgian)

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
  რომ ვიზიტორების მონაცემები მესამე მხარეს არ გადაეცეს.

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

- [ ] FiraGO ფონტის ფაილები `public/fonts/`-ში და `@font-face` ბლოკების გააქტიურება `global.css`-ში
- [ ] `npx astro add mdx sitemap`: MDX ინტერაქტიული ქვიზებისთვის და sitemap SEO-სთვის
- [ ] Open Graph სურათი
- [ ] კონფიდენციალურობის დამცველი ანალიტიკა (cookie-ების გარეშე)
- [ ] MVP შიგთავსი: 8–10 სტატია, 30–50 ტერმინი, ჩეკლისტი, გაკვეთილის გეგმა

## ლიცენზია

- კოდი: [MIT](./LICENSE)
- შიგთავსი: [CC BY-SA 4.0](./LICENSE-CONTENT.md)
