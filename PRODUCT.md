# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The general Georgian-reading public, of any age and any technical background. Readers arrive wanting to understand what AI is, where it can help them, and where they need to be careful. School life is one source of examples, not the target audience; teachers and schools may reuse the material under its open license, but they are not the primary reader.

## Product Purpose

AI Fluency (aifluency.ge) is a Georgian-language educational site that teaches people to use artificial intelligence sensibly, safely and responsibly ("გონივრულად, უსაფრთხოდ და პასუხისმგებლობით"). Explanations are plain, built on examples, and written for everyone. Success means a reader leaves understanding a concept well enough to act on it: checking a fact, spotting a deepfake, protecting their data, writing a better prompt.

## Positioning

An independent, Georgian-first, vendor-neutral explainer. Every published article carries sources and a last-updated date, and the build enforces it. All content is openly licensed so anyone can reuse it. It does not promote any AI tool over another.

## Operating Context

- Read on phones and desktops, in light or dark theme (follows the system setting, with a manual toggle).
- Content is organized in five pillars: საფუძვლები (basics), უსაფრთხოება (safety), პასუხისმგებლიანი გამოყენება (responsible use), პრაქტიკა (practice, including ready-made Georgian prompts), and 4D ჩარჩო (the 4D framework).
- A glossary (`src/content/glossary.json`) gives each AI term in Georgian, with its English equivalent and a simple definition.
- Articles are shared via social links; each page and article gets a generated 1200×630 share image.

## Capabilities and Constraints

- Static Astro 7 site, hosted on Cloudflare Workers static assets.
- Collections: articles (Markdown with frontmatter: title, description, pillar, updated, sources, draft) and glossary entries. Drafts appear only in `npm run dev`. A published article must have at least one source.
- Pages: home, articles index and article pages, glossary, about, privacy, 404, sitemap, generated OG images.
- Privacy: no third-party CDNs (fonts and icons are self-hosted). Google Analytics (GA4) loads only after the visitor consents. Ad-related consent is always denied. The consent choice is asked again yearly and can be changed from the footer.
- All UI copy and labels are in Georgian (`src/lib/labels.ts`); dates use the `ka-GE` format.
- Code is MIT-licensed; content is CC BY-SA 4.0 (`LICENSE-CONTENT.md`).
- The 4D framework (Delegation, Description, Discernment, Diligence) is taught as an independent adaptation of the AI Fluency framework. The project is not affiliated with or endorsed by the framework's authors. Credit the framework and never imply a partnership.
- Undecided: lesson plans and checklists are named in the content license but don't exist yet.

## Brand Commitments

- Name: "AI Fluency"; domain aifluency.ge.
- Logo: a Georgian letter „ა“ in a rounded blue square with an amber dot (`public/logo.svg`, `public/favicon.svg`, `src/components/LogoMark.astro`).
- Voice: plain, calm, example-led Georgian; neutral toward AI vendors; honest about AI's limits without alarmism.
- Brand colors and font (FiraGO) are documented in `README.md` and `src/styles/global.css`. The visual system itself belongs in DESIGN.md, not here.

## Evidence on Hand

- Run by one person. There are no testimonials, partner organizations, school adopters, usage statistics or press. Never invent any of these.
- Content so far: one draft article skeleton (`src/content/articles/ra-aris-xelovnuri-inteleqti.md`) and the glossary. No published articles yet.
- Public source repository: https://github.com/levanijintcharadze/aifluency.ge.

## Product Principles

1. **Understanding over hype.** Explain how things work and where they fail; never sell AI or fear it.
2. **Every claim is traceable.** Sources and update dates are part of the product, not footnotes.
3. **Neutral by default.** Compare tools fairly. No tool gets preferred placement.
4. **Respect the reader's privacy.** Collect nothing without consent, and send nothing to third parties needlessly.
5. **Open for reuse.** Content should be easy to cite, share and adapt under CC BY-SA.

## Accessibility & Inclusion

- Georgian script must render well everywhere (self-hosted Georgian-Latin FiraGO subset).
- Written for non-technical readers of all ages: plain language, terms explained or linked to the glossary.
- Light and dark themes must both stay fully readable.
