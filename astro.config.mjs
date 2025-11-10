// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [react()],
  adapter: node({
    mode: 'standalone', // ✅ necesario para correr en Coolify/Docker
  }),
  vite: {
    server: {
      allowedHosts: ['proto.oberstaff.com', '.sslip.io', 'localhost'],
    },
    preview: {
      allowedHosts: ['proto.oberstaff.com', '.sslip.io', 'localhost'],
    },
  },
});
