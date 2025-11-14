// Astro 5.15.3 Configuration with BMAD-METHOD optimization
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      experimentalReactChildren: true, // React 19 feature
    }),
    tailwind({
      applyBaseStyles: true,
    }),
  ],

  // Server configuration
  server: {
    port: 4321,
    host: true,
  },

  // Experimental features (Astro 5.15+)
  experimental: {
    contentLayer: true,
    responsiveImages: true,
    serverIslands: true,
  },

  // Output mode
  output: 'static', // Change to 'server' or 'hybrid' for SSR

  // SEO & Site Config
  site: 'https://yourdomain.com',

  // Build configuration
  build: {
    inlineStylesheets: 'auto',
  },

  // Vite configuration for optimizations
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'motion': ['motion/react'],
          },
        },
      },
    },
  },
});
