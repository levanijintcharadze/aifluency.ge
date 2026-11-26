// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://aifluency.ge',
  output: 'static',
  vite: {
    // resvg-js Node-ის ნატიური მოდულია: build-ში bundle-ში არ ვაერთიანებთ.
    ssr: { external: ['@resvg/resvg-js'] },
    optimizeDeps: { exclude: ['@resvg/resvg-js'] },
  },
});
