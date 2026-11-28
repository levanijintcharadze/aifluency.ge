---
version: 1
slug: "src-layouts-baselayout-astro"
primary_target: "src/layouts/BaseLayout.astro"
related_targets: ["src/pages/index.astro","src/pages/articles","src/pages/glossary.astro","src/pages/about.astro","src/pages/privacy.astro"]
---

# Site shell and reading pages

Scope: the whole site shell (header, footer, consent banner) plus home, articles index, article, glossary, about, privacy and 404. Visitor mode: Read (home works as the docs index, which is still Read).

Audience and job: Georgian readers of any age who want to understand one AI topic and act on it. Content: five pillars, articles with sources and update dates, a glossary. Constraints: everything in PRODUCT.md, including no third-party assets, consent-gated analytics, and both themes.

Craft bar (chosen by the user): MDN Web Docs, Anthropic Academy/docs, Khan Academy, Stripe Docs.

## Direction contract

THESIS: The category standard, executed impeccably: a clean learning site where the reader always knows where they are, what this page covers and where the sources are. It refuses glass, colour blobs and same-size card grids.

OWN-WORLD: White page (dark: deep blue-black), near-black ink, brand Sky Blue for links and the current location, amber only on the logo dot. One family, FiraGO 400/700. Hairline borders, no glass, small radii (6–8px), soft offset shadows only on floating layers (sticky header on scroll, consent banner).

STORY: The reader lands, sees the five topics and what each covers, opens one, reads a calm article with an "on this page" list, checks the dated sources at the end, and jumps to the glossary for any term.

FIRST VIEWPORT: 64px top bar (logo left; nav; GitHub and theme toggle right). Below it, on wide screens, three columns: the topic sidebar (pillars with their articles, current item tinted), the article column at 68ch (pillar · updated date, h1, body), and a sticky "ამ გვერდზე" contents list with scroll-spy on the right. Home uses the same shell: h1 and lead, then the five pillars as a linked list with descriptions.

FORM: category standard (canon), chosen by the user over the rolled direction; seed:e4086758fb0eef69. Signature interaction: scroll-spy on the contents list.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
