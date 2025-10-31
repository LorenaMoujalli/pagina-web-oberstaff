import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  preview: {
    allowedHosts: ['hoks8wc8sw8c8skksg84wocw.109.199.104.87.sslip.io'],
    host: '0.0.0.0',
    port: 3000,
  },
});
