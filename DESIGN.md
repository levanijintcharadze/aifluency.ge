---
name: AI Fluency
description: A clean, well-kept Georgian reference on AI, where the reader always knows where they are and where the sources are.
colors:
  sky-blue: "#1f5fbf"
  sky-blue-deep: "#194f9f"
  sky-blue-night: "#8ab4ff"
  amber-dot: "#f2a93b"
  paper: "#ffffff"
  paper-subtle: "#f5f7fa"
  ink: "#101828"
  ink-muted: "#556173"
  sky-tint: "#eaf1fb"
  hairline: "#e3e8ef"
  hairline-strong: "#cdd5e0"
  night: "#0b1220"
  night-subtle: "#121b2c"
  night-ink: "#e6ebf3"
  night-muted: "#9aa8bb"
  night-sky-tint: "#16233d"
  night-hairline: "#1e2a3e"
  night-hairline-strong: "#2c3b55"
typography:
  display:
    fontFamily: "FiraGO, 'Noto Sans Georgian', 'BPG Arial', Sylfaen, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 1.8vw, 2.375rem)"
    fontWeight: 700
    lineHeight: 1.22
  headline:
    fontFamily: "FiraGO, 'Noto Sans Georgian', 'BPG Arial', Sylfaen, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "FiraGO, 'Noto Sans Georgian', 'BPG Arial', Sylfaen, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1.3
  lead:
    fontFamily: "FiraGO, 'Noto Sans Georgian', 'BPG Arial', Sylfaen, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "FiraGO, 'Noto Sans Georgian', 'BPG Arial', Sylfaen, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  meta:
    fontFamily: "FiraGO, 'Noto Sans Georgian', 'BPG Arial', Sylfaen, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  label:
    fontFamily: "FiraGO, 'Noto Sans Georgian', 'BPG Arial', Sylfaen, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.5
  code:
    fontFamily: "ui-monospace, 'Cascadia Mono', 'Segoe UI Mono', Menlo, Consolas, monospace"
    fontSize: "0.88em"
    fontWeight: 400
rounded:
  code: "4px"
  sm: "6px"
  md: "8px"
  pill: "999px"
spacing:
  xs: "0.35rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "2rem"
  xl: "3rem"
  gutter: "clamp(1rem, 3vw, 2rem)"
  header: "4rem"
  measure: "68ch"
components:
  button-primary:
    backgroundColor: "{colors.sky-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1.15rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.sky-blue-deep}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1.15rem"
    height: "2.75rem"
  button-secondary-hover:
    backgroundColor: "{colors.paper-subtle}"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.md}"
    size: "2.75rem"
  icon-button-hover:
    backgroundColor: "{colors.paper-subtle}"
    textColor: "{colors.ink}"
  nav-link:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.sm}"
    padding: "0.4rem 0.75rem"
  nav-link-current:
    textColor: "{colors.sky-blue}"
  sidebar-link:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.sm}"
    padding: "0.35rem 0.6rem"
  sidebar-link-current:
    backgroundColor: "{colors.sky-tint}"
    textColor: "{colors.sky-blue}"
  toc-link:
    textColor: "{colors.ink-muted}"
    padding: "0.3rem 0 0.3rem 0.9rem"
  toc-link-current:
    textColor: "{colors.sky-blue}"
  letter-index-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    size: "2.75rem"
  draft-mark:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "0 0.45rem"
  consent-banner:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "1.25rem 1.25rem 1.1rem"
    width: "34rem"
---

# Design System: AI Fluency

## Overview

**Creative North Star: "The Well-Kept Reference"**

AI Fluency is the category standard for a learning site, executed carefully rather than reinvented, in the company of MDN Web Docs, Stripe Docs and Khan Academy: a white page (deep blue-black at night), near-black ink, one blue for links and for "you are here", and hairline rules doing the work that cards and panels do elsewhere. The reader should always know three things at a glance: where they are (current nav item, highlighted sidebar row, scroll-spy in the contents rail), what this page covers (breadcrumb, h1, lead, the "ამ გვერდზე" list), and where the sources are (a dated sources section closing every article).

The system is quiet on purpose. One typeface (FiraGO at 400 and 700, self-hosted as a Georgian and Latin subset), small radii (6 to 8px), no gradients, no glass, no colour fields. Density is that of documentation: a 64px top bar, a 15rem topic sidebar, a 68ch reading column and a 13.5rem contents rail on wide screens. Structure comes from alignment and hairlines; topics and principles are ruled rows, never a grid of same-size cards.

Depth appears only where something genuinely floats above the page: the sticky header once the page has scrolled, and the consent banner. Everything else is flat. Both themes are complete token sets, and motion is limited to short colour, border, shadow and rotation transitions that disappear entirely under reduced motion.

**Key Characteristics:**
- White page / deep blue-black night page, near-black ink, one Sky Blue for links and current location.
- Amber exists only as the dot on the logo mark.
- FiraGO 400/700 for everything; monospace only for code.
- Hairline borders and ruled rows instead of cards, glass or tinted panels.
- Soft offset shadow only on floating layers.
- Three-column docs shell (sidebar, 68ch article, sticky contents rail with scroll-spy) collapsing to disclosures on narrow screens.

## Colors

A neutral paper-and-ink palette with a single working blue; the only warm note is the logo's amber dot.

### Primary
- **Sky Blue** (sky-blue): every link, the current nav item, the current sidebar row, the active contents entry, the focus ring, the text caret and (as a 24% mix) the selection highlight. Also the filled primary button in both themes and the logo square. 6.1:1 on white.
- **Deep Sky Blue** (sky-blue-deep): hover state of the primary button only.
- **Night Sky Blue** (sky-blue-night): the dark-theme value of the accent role, for links and current location on the night page. The filled primary button stays Sky Blue in dark.

### Tertiary
- **Amber Dot** (amber-dot): the dot in the logo mark and favicon. Never text, never a fill, never a highlight.

### Neutral
- **Paper** (paper) / **Night** (night): page background, header background, consent banner and secondary button fill.
- **Paper Subtle** (paper-subtle) / **Night Subtle** (night-subtle): hover fill for rows and links, code and pre background, table header, blockquote, footer band.
- **Ink** (ink) / **Night Ink** (night-ink): body text, headings, topic descriptions.
- **Muted Ink** (ink-muted) / **Night Muted** (night-muted): lead paragraphs, meta lines, breadcrumbs, resting nav and sidebar links, contents entries, footer links. 6.2:1 on white.
- **Sky Tint** (sky-tint) / **Night Sky Tint** (night-sky-tint): the background of the current sidebar row only.
- **Hairline** (hairline) / **Night Hairline** (night-hairline): every structural rule: header bottom, list rows, article header rule, sources rule, table cells, contents rail spine.
- **Strong Hairline** (hairline-strong) / **Night Strong Hairline** (night-hairline-strong): borders that must read as controls or status (secondary button, consent banner, draft mark, skip link, dashed empty note) and the scrollbar thumb.

### Named Rules
**The Where-You-Are Rule.** Sky Blue means "this is a link" or "you are here" (current page, current section, targeted term, focus). It is not decoration and not a heading colour.

**The One Dot Rule.** Amber appears once per screen, as the dot on the „ა" logo mark. Nothing else is amber.

**The Two Complete Themes Rule.** Every colour role has a light and a dark value, switched by `data-theme` or, without JavaScript, by `prefers-color-scheme`. A new colour without its night counterpart is not finished.

## Typography

**Display Font:** FiraGO (with Noto Sans Georgian, BPG Arial, Sylfaen, system-ui)
**Body Font:** FiraGO, same stack
**Label/Mono Font:** ui-monospace / Cascadia Mono / Menlo / Consolas, for code only

**Character:** A single humanist sans that renders Georgian and Latin with equal care, used at two weights. Hierarchy comes from size and weight, never from a second family.

### Hierarchy
- **Display** (700, fluid 1.75 to 2.375rem, 1.22): page h1 only, balanced wrapping.
- **Headline** (700, 1.5rem, 1.3): article h2 sections, with 2.75rem above.
- **Title** (700, 1.1875rem, 1.3): h3 subsections; glossary letter headings sit at 1.25rem.
- **Lead** (400, 1.1875rem, 1.65, muted): the paragraph under the h1 on home and articles.
- **Body** (400, 1.0625rem, 1.7): reading text, held to a 68ch measure.
- **Meta** (400, 0.9375rem, tabular numerals, muted): dates, breadcrumbs, sources list, footer, glossary notes, table text.
- **Label** (700, 0.875rem): the "ამ გვერდზე" title and sidebar group headings; contents entries use the same size at 400.

### Named Rules
**The One Family Rule.** FiraGO 400 and 700 are the only text faces, self-hosted from `/fonts/`. No display face, no third weight, no font CDN.

**The Dated Numbers Rule.** Dates, counts and tables use tabular numerals so updated-on lines and source dates align.

## Layout

A documentation shell inside an 84rem container with a fluid gutter (1rem to 2rem). The sticky top bar is 4rem tall. Below it the docs grid runs:

- **Under 60rem:** one column. The topic sidebar becomes a bordered disclosure above the content (hidden on home), the top nav collapses behind a menu button into full-width ruled rows, and the contents list appears as an inline disclosure after the page intro.
- **60rem and up:** a 15rem sticky, independently scrolling sidebar plus the content column, 3rem column gap, 2.5rem top padding.
- **76rem and up (pages with headings):** a third 13.5rem sticky column holds the contents rail; the inline disclosure hides.
- **Under 48rem:** two-column topic and principle rows stack to one column and drop their side padding.

The reading column is capped at 68ch; the topic and principle indexes at 52rem. Vertical rhythm: 1rem between paragraphs, 2.75rem above h2, 2rem above h3, 3rem before the sources section, 4rem below the grid. Anchored headings land clear of the header through `scroll-padding-top` (header height plus 1.25rem). Plain pages (about, privacy, 404) use the same container without the grid, padded 4rem above and 5rem below.

## Elevation & Depth

The page is flat. Depth is reserved for layers that float over content, and those get one soft, two-part offset shadow. Everything else separates with hairlines and the subtle fill.

### Shadow Vocabulary
- **Float, light** (`box-shadow: 0 1px 2px rgb(16 24 40 / 0.06), 0 8px 24px rgb(16 24 40 / 0.08)`): the sticky header once scrolled past 4px, and the consent banner.
- **Float, dark** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.3), 0 8px 24px rgb(0 0 0 / 0.35)`): the same two roles on the night page.

### Named Rules
**The Only-What-Floats Rule.** A shadow means the element sits above scrolling content. Rows, lists, tables, code, blockquotes and buttons never carry one.

## Shapes

Small, consistent corners: 6px on compact interactive things (nav links, sidebar links, letter-index tiles, skip link) and 8px on containers and buttons (icon buttons, buttons, sidebar and contents disclosures, code blocks, blockquotes, table wrapper, empty note, consent banner). Inline code uses 4px. The draft mark is the single pill (999px), a status tag rather than a container. Borders are always 1px; the contents rail hangs on a 1px left spine whose current segment turns Sky Blue. The logo mark is a rounded Sky Blue square (16 of 64 units) carrying a white Georgian „ა" and an amber dot at its upper right.

## Components

### Top Bar and Navigation
Calm, full-width, always present.
- **Bar:** sticky, Paper background, hairline bottom, 4rem minimum height; gains the Float shadow after 4px of scroll (0.25s ease-out).
- **Logo:** 36px „ა" mark plus "AI Fluency" in 700 at 1.125rem, Ink.
- **Links:** Muted Ink, 6px radius, 0.4rem by 0.75rem padding; hover Ink on Paper Subtle; current page Sky Blue at 700.
- **Narrow screens:** links hide behind a menu button and open as full-width rows separated by hairlines; Escape closes. Without JavaScript the links stay visible and the JavaScript-only buttons hide.

### Icon Buttons
- **Shape:** 2.75rem square, 8px radius, transparent border at rest.
- **Color:** Muted Ink; hover Ink on Paper Subtle with a hairline border.
- **Icons:** self-hosted inline SVG (Font Awesome Free; Simple Icons for GitHub) at 1.1rem using `currentColor`. Used for GitHub, the theme toggle (moon/sun swap) and the menu (bars/xmark swap).

### Topic Sidebar
- **Wide:** borderless sticky column; groups headed by 0.875rem 700 Ink links (hover Sky Blue), items 0.9375rem Muted Ink in 6px-radius rows.
- **Current row:** Sky Blue text at 700 on Sky Tint. Hover: Ink on Paper Subtle.
- **Narrow:** a hairline, 8px-radius disclosure with a 2.75rem summary and a chevron that rotates 180 degrees when open.

### On This Page (Contents Rail)
The signature interaction.
- **Rail:** the "ამ გვერდზე" label, then a list hung on a 1px hairline spine; entries 0.875rem Muted Ink, h3 entries indented to 1.75rem.
- **Scroll-spy:** an IntersectionObserver marks the heading in view with `aria-current="location"`: Sky Blue at 700 with a Sky Blue spine segment, 0.2s colour transition. At page end the last entry is current.
- **Inline variant:** below 76rem the same list appears as a hairline, 8px-radius disclosure placed after each page's intro (under the article header on articles), entries 0.9375rem Muted, hover Sky Blue.

### Topic and Principle Lists
Ruled rows, never cards.
- **Topic row:** a whole-row link between hairline rules; three columns (14rem name, description, count) with a 2rem gap and 1.1rem by 0.75rem padding. Name Sky Blue 700, description Ink, count 0.875rem Muted. Hover fills Paper Subtle.
- **Principle row:** a definition list on the same 14rem / fluid grid, term in 700 Ink.
- **Article list:** rows with 1rem vertical padding; title link 1.125rem 700 without underline until hover, description below.
- **Empty note:** muted 0.9375rem text in a dashed Strong Hairline box, 8px radius.

### Article Header and Breadcrumb
- **Breadcrumb:** 0.9375rem Muted links separated by slashes; hover Sky Blue with underline.
- **Header:** Display h1, Lead paragraph, Meta line with the updated date, closed by a hairline and 2rem of space.
- **Draft mark:** 0.75rem 700 Muted text in a Strong Hairline pill, beside drafts in the sidebar, the article list and the article meta line.

### Sources Section
Closes every article: 3rem of space, a hairline rule, a headline, and an ordered list at 0.9375rem. Plain links, no card or tinted box.

### Glossary
- **Letter index:** a wrapping row of 2.75rem, 6px-radius tiles with a hairline border and 700 Ink letters; hover turns letter and border Sky Blue.
- **Letter heading:** 1.25rem with a hairline underneath.
- **Entries:** a definition list separated by hairlines with 1rem vertical padding; term 1.125rem 700 with the English equivalent beside it in 0.9375rem Muted 400; a targeted term turns Sky Blue.

### Tables
Wrapped in a hairline, 8px-radius horizontal scroll container; 0.9375rem tabular text, 0.65rem by 0.9rem cells, hairline row rules, Paper Subtle header row, no rule under the last row.

### Buttons
- **Shape:** 8px radius, 2.75rem minimum height, 0.5rem by 1.15rem padding, 1rem 700.
- **Primary:** white on Sky Blue with a matching border; hover Deep Sky Blue (0.2s). Same fill in both themes.
- **Secondary:** Ink on Paper with a Strong Hairline border; hover Paper Subtle.
- **Link button:** a `<button>` styled as an underlined Sky Blue link (1px underline, 0.2em offset); used for the footer's cookie-settings control.
- **Focus:** the global 2px Sky Blue outline at 2px offset.

### Consent Banner
The one floating panel. Fixed at the bottom (centred with 1rem insets on narrow screens, bottom-left at 1.5rem on wide), max 34rem, Paper background, Strong Hairline border, 8px radius, Float shadow. Title 1.0625rem 700, body 0.9375rem, then the primary accept and secondary decline buttons side by side at the same size.

### Footer
A Paper Subtle band with a hairline top: brand line, a wrapping row of Muted links (hover Ink with underline) including the link button, and the licence line, all at 0.9375rem.

## Do's and Don'ts

### Do:
- **Do** use Sky Blue only for links, current location (nav, sidebar row, contents entry, targeted term) and focus.
- **Do** keep amber on the logo dot and nowhere else; render the logo as the Georgian „ა" in a rounded Sky Blue square with an amber dot.
- **Do** separate content with 1px hairlines and ruled rows; let alignment carry structure.
- **Do** keep reading text at 68ch and every interactive target at least 2.75rem tall.
- **Do** define every new colour for both themes and check it in dark as well as light.
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` at 0.2 to 0.25s for colour, border, shadow and chevron transitions, and let the reduced-motion block remove them.
- **Do** self-host fonts and icons; icons are inline SVG at 1.1rem using `currentColor`.
- **Do** close every article with a dated sources section, and give pages with two or more headings the contents list.

### Don't:
- **Don't** use glass, backdrop blur, gradients or colour blobs.
- **Don't** build page structure from cards or grids of same-size cards; topics and principles are ruled rows.
- **Don't** put shadows on anything that does not float above scrolling content.
- **Don't** use radii above 8px on containers or controls (the draft-mark pill is the only exception).
- **Don't** introduce a second typeface or weights other than 400 and 700.
- **Don't** colour headings, labels or decoration Sky Blue for emphasis.
- **Don't** load fonts, icons or scripts from third-party CDNs.
