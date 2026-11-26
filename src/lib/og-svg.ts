/**
 * გაზიარების სურათის (Open Graph, 1200×630) SVG შაბლონი.
 * სუფთა ფუნქციაა: ტექსტს FiraGO-ს სიმბოლოების სიგანით ზომავს და ხაზებად ყოფს.
 */

export interface OgContent {
  title: string;
  kicker: string;
  description?: string;
}

export interface FontMetrics {
  upm: number;
  widths: Record<string, number>;
}

export interface OgMetrics {
  regular: FontMetrics;
  bold: FontMetrics;
}

const W = 1200;
const H = 630;
const PAD = 88;
const MAX_TEXT_W = W - PAD * 2;

const LOGO_TRANSFORM = 'matrix(0.02709 0 0 -0.02709 14.639 49.214)';
const LOGO_PATH = 'M1034 444Q1034 -29 566 -29Q100 -29 100 456L133 674H447L413 451Q415 195 569 195Q717 195 717 444Q717 628 534.5 798.0Q352 968 352 1226H676Q677 1038 855.5 868.5Q1034 699 1034 444Z';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function measure(text: string, font: FontMetrics, size: number): number {
  const fallback = font.widths['ა'] ?? font.upm * 0.6;
  let units = 0;
  for (const ch of text) units += font.widths[ch] ?? fallback;
  return (units / font.upm) * size;
}

/** ტექსტს სიტყვებად ყოფს და maxWidth-ში ატევს. თუ ხაზები არ ეყო, ბოლოს „…“ ემატება. */
function wrap(text: string, font: FontMetrics, size: number, maxWidth: number, maxLines: number) {
  const words = text.trim().split(/\s+/);
  const lines: string[] = [];
  let line = '';
  let overflow = false;

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (measure(candidate, font, size) <= maxWidth || !line) {
      line = candidate;
    } else {
      lines.push(line);
      line = word;
      if (lines.length === maxLines) {
        overflow = true;
        break;
      }
    }
  }
  if (!overflow && line) lines.push(line);
  if (lines.length > maxLines) {
    lines.length = maxLines;
    overflow = true;
  }
  if (overflow) {
    let last = lines[maxLines - 1];
    while (last.length > 1 && measure(`${last}…`, font, size) > maxWidth) {
      last = last.slice(0, -1).trimEnd();
    }
    lines[maxLines - 1] = `${last}…`;
  }
  return { lines, overflow };
}

/** სათაურისთვის ყველაზე დიდ ზომას არჩევს, რომლითაც ტექსტი 3 ხაზში ეტევა. */
function fitTitle(title: string, bold: FontMetrics) {
  for (const size of [72, 64, 58, 52, 46]) {
    const result = wrap(title, bold, size, MAX_TEXT_W, 3);
    if (!result.overflow) return { size, lines: result.lines };
  }
  return { size: 46, lines: wrap(title, bold, 46, MAX_TEXT_W, 3).lines };
}

export function buildOgSvg(content: OgContent, metrics: OgMetrics): string {
  const title = fitTitle(content.title, metrics.bold);
  const titleLineH = Math.round(title.size * 1.22);
  const titleTop = 268;
  const titleBottom = titleTop + titleLineH * (title.lines.length - 1);

  const descSize = 30;
  const descLines =
    content.description && title.lines.length <= 2
      ? wrap(content.description, metrics.regular, descSize, MAX_TEXT_W, title.lines.length === 1 ? 3 : 2).lines
      : [];
  const descTop = titleBottom + 64;

  const titleText = title.lines
    .map((l, i) => `<tspan x="${PAD}" y="${titleTop + i * titleLineH}">${escapeXml(l)}</tspan>`)
    .join('');
  const descText = descLines
    .map((l, i) => `<tspan x="${PAD}" y="${descTop + i * 44}">${escapeXml(l)}</tspan>`)
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="blobBlue" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#1F5FBF" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#1F5FBF" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="blobAmber" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#F2A93B" stop-opacity="0.24"/>
      <stop offset="1" stop-color="#F2A93B" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#F5F8FC"/>
  <ellipse cx="80" cy="40" rx="520" ry="380" fill="url(#blobBlue)"/>
  <ellipse cx="1160" cy="560" rx="480" ry="360" fill="url(#blobAmber)"/>
  <g transform="translate(${PAD} 72) scale(1)">
    <rect width="64" height="64" rx="16" fill="#1F5FBF"/>
    <path transform="${LOGO_TRANSFORM}" fill="#FFFFFF" d="${LOGO_PATH}"/>
    <circle cx="50" cy="15" r="5" fill="#F2A93B"/>
  </g>
  <text x="${PAD + 84}" y="116" font-family="FiraGO" font-weight="700" font-size="34" fill="#0F2A4D">AI Fluency</text>
  <text x="${PAD}" y="${titleTop - title.size - 18}" font-family="FiraGO" font-weight="700" font-size="26" fill="#1F5FBF">${escapeXml(content.kicker)}</text>
  <text font-family="FiraGO" font-weight="700" font-size="${title.size}" fill="#0F2A4D">${titleText}</text>
  <text font-family="FiraGO" font-weight="400" font-size="${descSize}" fill="#5A6578">${descText}</text>
  <text x="${PAD}" y="566" font-family="FiraGO" font-weight="400" font-size="26" fill="#5A6578">aifluency.ge</text>
  <rect x="0" y="${H - 16}" width="${W}" height="16" fill="#1F5FBF"/>
</svg>`;
}
