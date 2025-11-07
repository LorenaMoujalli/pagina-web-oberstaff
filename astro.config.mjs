// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    server: {
      allowedHosts: ['proto.oberstaff.com'], 
    },
    preview: {
      allowedHosts: ['proto.oberstaff.com'],
    },
  },
});
