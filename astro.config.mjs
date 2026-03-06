import { defineConfig } from 'astro/config';

export default defineConfig({
  // This tells Astro your public URL
  site: 'https://elaksobol.github.io',
  // This tells Astro the folder name on GitHub (must match your repo name)
  base: '/personal-site', 
  output: 'static',
});
