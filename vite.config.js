import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

// Permite dominios externos (como los de Coolify *.sslip.io)
export default defineConfig({
  plugins: [astro()],
  preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      'hoks8wc8sw8c8skksg84wocw.109.199.104.87.sslip.io',
      '.sslip.io' // permite cualquier subdominio sslip.io
    ],
  },
});
