---
name: AI Fluency
description: Calm, sourced Georgian explanations of AI, behind clear glass over soft sky-and-amber light.
colors:
  sky-blue: "#1f5fbf"
  deep-ink: "#0f2a4d"
  amber-dot: "#f2a93b"
  morning-ground: "#f5f8fc"
  slate-muted: "#5a6578"
  paper-white: "#ffffff"
  mist-border: "#dde3ec"
  night-ground: "#0b1a2e"
  night-surface: "#12243b"
  night-text: "#e8eef6"
  night-muted: "#a7b3c4"
  night-sky: "#82b1ff"
  night-border: "#24395a"
typography:
  display:
    fontFamily: "FiraGO, 'Noto Sans Georgian', 'BPG Arial', Sylfaen, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 5vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.3
  headline:
    fontFamily: "FiraGO, 'Noto Sans Georgian', 'BPG Arial', Sylfaen, system-ui, sans-serif"
    fontSize: "1.5em"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "FiraGO, 'Noto Sans Georgian', 'BPG Arial', Sylfaen, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "FiraGO, 'Noto Sans Georgian', 'BPG Arial', Sylfaen, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "FiraGO, 'Noto Sans Georgian', 'BPG Arial', Sylfaen, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  tag:
    fontFamily: "FiraGO, 'Noto Sans Georgian', 'BPG Arial', Sylfaen, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
rounded:
  button: "0.75rem"
  card: "1.25rem"
  pill: "999px"
spacing:
  base: "1rem"
  card-padding: "1.25rem"
  measure: "70ch"
  container: "64rem"
components:
  button-primary:
    backgroundColor: "{colors.sky-blue}"
    textColor: "{colors.paper-white}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "0.5rem 1.25rem"
    height: "2.75rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.deep-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "0.5rem 1.25rem"
    height: "2.75rem"
  icon-button:
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.pill}"
    size: "2.75rem"
  card:
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-padding}"
  tag:
    textColor: "{colors.deep-ink}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: "0.1rem 0.6rem"
  nav-link:
    textColor: "{colors.slate-muted}"
    typography: "{typography.body}"
  nav-link-current:
    textColor: "{colors.deep-ink}"
---

# Design System: AI Fluency

## Overview

**Creative North Star: "The Clear Window"**

AI Fluency looks out onto a complicated subject through clear glass: calm, honest, nothing hidden. The page is a soft morning ground lit by two diffuse pools of light, sky blue and amber, that drift behind everything. A few surfaces float above it as frosted glass: the sticky header, topic and article cards, and the consent banner. Everything a reader actually reads sits on the plain ground in one calm Georgian sans, at a comfortable measure.

The system is low-density and quiet. There is one typeface (FiraGO), two weights, one interactive color, and one warm accent that never carries text. Generous rounding and pill-shaped icon buttons make it soft and approachable for readers who aren't technical. The glass is the signature, and it stays special because there's little of it.

Both themes are first-class. Dark mode swaps the ground to night blue, lightens the interactive blue, and deepens the glass. It's a full counterpart, not an inverted afterthought.

**Key Characteristics:**
- Frosted-glass header, cards and overlays over soft, fixed radial blobs of blue and amber.
- One family, FiraGO, in Regular and Bold, self-hosted with a Georgian–Latin subset.
- Reading text capped at 70ch on the plain ground, never on glass.
- Sky blue is the only interactive color; amber is decoration only.
- Light and dark themes are equally complete; transparency degrades to solid surfaces.

## Colors

A cool sky-and-ink palette warmed by a single amber spark ("ცისფერი და ქარვა", sky and amber).

### Primary
- **Sky Blue** (`sky-blue`): every link, the primary button, the focus ring, the logo tile and the browser theme color. It reads at 6.1:1 on white. In dark mode the interactive role passes to **Night Sky** (`night-sky`) so links stay legible on night blue; the primary button fill stays Sky Blue in both themes.

### Tertiary
- **Amber Dot** (`amber-dot`): the dot on the logo's „ა“ and the warm background blob. Detail and background only. At 2.0:1 on white it can never be text or an icon on a light surface.

### Neutral
- **Deep Ink** (`deep-ink`): headings and body text in light mode (14.4:1 on white).
- **Slate Muted** (`slate-muted`): secondary text, metadata, footer, inactive nav links (5.5:1).
- **Morning Ground** (`morning-ground`): the page background in light mode.
- **Paper White** (`paper-white`): solid surface, used where glass falls back and as text on Sky Blue.
- **Mist Border** (`mist-border`): hairlines for the footer rule, tags, table rows, secondary buttons and the mobile menu dividers.
- **Night Ground / Night Surface / Night Text / Night Muted / Night Border**: the dark-theme counterparts of ground, solid surface, text, secondary text and hairline.

### Named Rules
**The Amber Never Speaks Rule.** Amber is light, not language. It appears as the logo dot and a background glow, never as text, icons, links or a button fill.

**The One Blue Rule.** Sky Blue means "you can act on this." Don't spend it on decoration, headings or fills that aren't interactive (the logo tile is the single brand exception).

## Typography

**Display Font:** FiraGO (with Noto Sans Georgian, BPG Arial, Sylfaen, system-ui)
**Body Font:** FiraGO (same stack)

**Character:** A single humanist sans that handles Mkhedruli and Latin with equal clarity. Hierarchy comes from size and the jump from 400 to 700 weight, never from a second family.

### Hierarchy
- **Display** (700, `clamp(1.6rem, 5vw, 2.4rem)`, 1.3): the page's single h1.
- **Headline** (700, browser h2 default ≈1.5em, 1.3): section titles inside pages and articles.
- **Title** (700, 1.15rem, 1.3): card headings and glossary terms.
- **Body** (400, 1.0625rem, 1.7): all reading text, capped at 70ch. The generous leading accommodates Georgian ascenders and descenders.
- **Label** (400, 0.95rem): metadata (updated dates), footer and table text, in Slate Muted.
- **Tag** (400, 0.85rem): pillar chips.

### Named Rules
**The Two Weights Rule.** Only 400 and 700 are loaded. Don't specify 500, 600 or italics; the browser would synthesize them.

**The Bold Is Enough Rule.** Georgian has no case, so emphasis never uses uppercase or letter-spacing. Use weight or Slate Muted for contrast.

## Layout

A single centered column: the container is 64rem wide with 1rem side padding, and reading content inside it is capped at a 70ch measure. Main content has 2rem top and 3rem bottom padding. Card grids auto-fit columns of at least 16rem with 1rem gaps, so they collapse to one column on phones without breakpoints. The one breakpoint is 48rem: below it, the header nav collapses behind a menu button into a full-width list of 0.7rem-padded rows divided by hairlines. Spacing stays on a loose 1rem rhythm; nothing is dense.

## Elevation & Depth

Depth comes from glass, not stacked shadows. Glass surfaces combine a translucent fill, an 18px backdrop blur with 180% saturation, a 1px light border, an inset top highlight, and one soft ambient shadow tinted with Deep Ink. Behind them, three fixed radial blobs (two Sky Blue, one Amber) give the blur something to catch. Everything else is flat.

### Shadow Vocabulary
- **Glass rest** (`inset 0 1px 0 var(--glass-highlight), 0 10px 30px rgb(15 42 77 / 0.08), 0 1px 2px rgb(15 42 77 / 0.06)`): header and cards at rest.
- **Glass lift** (`inset 0 1px 0 var(--glass-highlight), 0 16px 40px rgb(15 42 77 / 0.12)`): card hover, paired with a 2px rise.
- **Overlay** (`inset 0 1px 0 var(--glass-highlight), 0 18px 50px rgb(15 42 77 / 0.18)`): the consent banner, the highest layer.
- Dark theme uses `0 10px 30px rgb(0 0 0 / 0.35)` for the ambient shadow.

### Named Rules
**The Glass Is Signature Rule.** Glass is for the header, cards and overlays only. Long reading text, articles, the glossary and tables sit on the plain ground. A new surface earns glass only if it floats above content.

**The Clear Fallback Rule.** Every glass surface must fall back to a solid surface under `prefers-reduced-transparency: reduce` or without `backdrop-filter` support, with the blobs hidden, and text contrast must be identical either way.

## Shapes

Soft and friendly. Cards and overlays use a large 1.25rem radius, buttons a gentler 0.75rem, and icon buttons and tags are full pills. The logo is a rounded square (radius 25% of its side) holding a white „ა“ and an amber dot. Borders are 1px hairlines; only buttons use a 2px border. No sharp corners anywhere.

## Components

### Buttons
Soft and approachable: bold label, comfortable 2.75rem touch height.
- **Shape:** gently rounded (0.75rem).
- **Primary:** Sky Blue fill and 2px border, white bold text, 0.5rem × 1.25rem padding.
- **Secondary:** transparent with a 2px Mist Border border and ink text.
- **Hover:** brightness 1.08. **Focus:** the global 3px Sky Blue outline at 2px offset.
- **Link button:** text-styled button (underlined, accent color) for in-text actions like reopening cookie settings.

### Icon Buttons
Circular 2.75rem pills in glass fill with a light border and inset highlight; 1.1rem icons (Font Awesome Free, GitHub from Simple Icons) inherit text color. Hover turns the border and icon Sky Blue. Used for GitHub, the theme toggle (moon ↔ sun) and the mobile menu (bars ↔ ×).

### Chips (Tags)
- **Style:** pill outline, 1px Mist Border border, 0.85rem text, no fill.
- **Use:** the article's pillar (საფუძვლები, უსაფრთხოება, …). Not interactive.

### Cards / Containers
- **Corner Style:** 1.25rem.
- **Background:** glass (`--glass-bg`), solid surface fallback.
- **Shadow Strategy:** Glass rest, lifting to Glass lift with a 2px rise on hover (0.2s ease).
- **Border:** 1px glass border.
- **Internal Padding:** 1.25rem; heading at Title size with no top margin.

### Navigation
- **Header:** sticky glass bar with a bottom hairline. The logo (36px mark plus bold 1.2rem "AI Fluency") sits on the left, the nav and icon buttons on the right.
- **Links:** Slate Muted, no underline; hover goes to ink; the current page is ink and bold (`aria-current="page"`).
- **Mobile (<48rem):** the menu button reveals a vertical list with hairline dividers. It closes on Escape, on link click, or when the viewport widens. Without JavaScript the nav simply stays visible.

### Consent Banner
A floating glass panel at the bottom of the viewport (max 38rem, 1rem from the edges), on the Overlay shadow, with a Title-size heading, a short paragraph and a primary/secondary button pair.

### Glossary List
A definition list: a bold term, its English equivalent in parentheses at regular weight in Slate Muted, then the definition. An optional note follows in smaller muted text.

## Do's and Don'ts

### Do:
- **Do** use the CSS custom properties (`--color-*`, `--glass-*`, `--radius`, `--space`, `--measure`) rather than literal values, so both themes follow automatically.
- **Do** keep reading text on the plain ground at a 70ch measure, line-height 1.7.
- **Do** give every glass surface a solid fallback for reduced transparency and for browsers without backdrop-filter.
- **Do** keep touch targets at least 2.75rem and keep the global 3px focus outline visible.
- **Do** self-host every font and icon as SVG or WOFF; no CDNs.
- **Do** check every new color pairing in both light and dark themes.

### Don't:
- **Don't** use Amber for text, icons, links or button fills.
- **Don't** put articles, glossary entries or tables on glass.
- **Don't** introduce a second typeface or weights other than 400 and 700.
- **Don't** use uppercase or letter-spacing for emphasis.
- **Don't** add motion beyond short state transitions; all animation and transitions are disabled under `prefers-reduced-motion`.
