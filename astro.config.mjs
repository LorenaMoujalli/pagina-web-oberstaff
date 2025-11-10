// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static'; // 👈 importante usar "/static"

export default defineConfig({
  integrations: [react()],
  adapter: vercel(),
  vite: {
    server: {
      allowedHosts: ['.vercel.app', 'localhost'],
    },
  },
});
