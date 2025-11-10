import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourdomain.com', // Update with your domain

  integrations: [
    react(),
    mdx(),
    sitemap(),
    db(),
  ],

  // Vite configuration for optimal performance
  vite: {
    optimizeDeps: {
      exclude: ['@studio-freight/lenis'],
    },
    ssr: {
      noExternal: ['@studio-freight/lenis'],
    },
  },

  // Build configuration
  build: {
    inlineStylesheets: 'auto',
  },

  // Output configuration for SSR
  output: 'hybrid', // Hybrid rendering: static by default, SSR opt-in

  // Image optimization
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },

  // Experimental features
  experimental: {
    contentLayer: true,
  },

  // Dev toolbar
  devToolbar: {
    enabled: true,
  },
});
