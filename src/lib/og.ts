import { resolve } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import metrics from './og-metrics.json';
import { buildOgSvg, type OgContent } from './og-svg';

// build პროექტის ძირიდან ეშვება, ამიტომ ფონტებს იქიდან ვეძებთ.
const fontFiles = [
  resolve(process.cwd(), 'src/assets/fonts/FiraGO-Regular.ttf'),
  resolve(process.cwd(), 'src/assets/fonts/FiraGO-Bold.ttf'),
];

/** გაზიარების სურათს PNG-ად აგენერირებს (1200×630). */
export function renderOgPng(content: OgContent): Uint8Array {
  const svg = buildOgSvg(content, metrics);
  const resvg = new Resvg(svg, {
    font: {
      fontFiles,
      loadSystemFonts: false,
      defaultFontFamily: 'FiraGO',
    },
    fitTo: { mode: 'original' },
  });
  return new Uint8Array(resvg.render().asPng());
}
