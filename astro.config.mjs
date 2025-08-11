import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://dumitrux.github.io/thenotebookcorner.com/',
  base: '/thenotebookcorner.com/'
  // site: 'https://thenotebookcorner.com'
});