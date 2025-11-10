import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import db from '@astrojs/db';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// Astro 5.15.1 (2025 Edition) with latest features
export default defineConfig({
  site: 'https://yourdomain.com', // Update with your domain

  integrations: [
    react({
      // React 19 streaming control (Astro 5.15+ feature)
      experimentalReactChildren: true,
    }),
    mdx(),
    sitemap(),
    db(),
    tailwind({
      // Tailwind 4 support (Astro 5.2+ feature)
      applyBaseStyles: true,
    }),
  ],

  // Vite configuration for optimal performance
  vite: {
    optimizeDeps: {
      exclude: ['@studio-freight/lenis', 'motion'],
    },
    ssr: {
      noExternal: ['@studio-freight/lenis', 'motion'],
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
    domains: ['yourdomain.com'],
  },

  // Markdown & MDX configuration (Astro 5.15 features)
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },

  // Security headers
  security: {
    checkOrigin: true,
  },

  // Experimental features
  experimental: {
    contentLayer: true,
    responsiveImages: true, // New in Astro 5.15
  },

  // Dev toolbar
  devToolbar: {
    enabled: true,
  },

  // Redirects with external support (Astro 5.2+ feature)
  redirects: {
    // Example: '/old-page': { status: 301, destination: '/new-page' }
  },
});
