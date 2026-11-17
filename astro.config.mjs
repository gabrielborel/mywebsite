import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Quando o dominio existir, descomente e troque. Usado em canonical, sitemap e RSS.
  site: 'https://borelgabriel.com',
  markdown: {
    shikiConfig: {
      // Dois temas ao mesmo tempo: o CSS escolhe qual usar (ver global.css).
      themes: { light: 'github-light-high-contrast', dark: 'github-dark-high-contrast' },
      defaultColor: false,
    },
  },
});
