import { defineConfig } from 'tinacms';

// TinaCMS Configuration
export default defineConfig({
  branch: process.env.TINA_BRANCH || 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'pages',
        label: 'Landing Pages',
        path: 'src/content/pages',
        format: 'mdx',
        ui: {
          router: ({ document }) => `/${document._sys.filename}`,
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Page Title (SEO)',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Meta Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'object',
            name: 'hero',
            label: 'Hero Section',
            fields: [
              {
                type: 'string',
                name: 'headline',
                label: 'Hauptüberschrift',
                required: true,
              },
              {
                type: 'string',
                name: 'subheadline',
                label: 'Unterüberschrift',
                ui: {
                  component: 'textarea',
                },
              },
              {
                type: 'string',
                name: 'ctaText',
                label: 'CTA Button Text',
                default: 'Jetzt starten',
              },
              {
                type: 'string',
                name: 'ctaLink',
                label: 'CTA Button Link',
                default: '#contact',
              },
              {
                type: 'image',
                name: 'backgroundImage',
                label: 'Background Image',
              },
            ],
          },
          {
            type: 'object',
            name: 'features',
            label: 'Features Section',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'icon',
                label: 'Icon (Emoji)',
              },
              {
                type: 'string',
                name: 'title',
                label: 'Feature Title',
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
                ui: {
                  component: 'textarea',
                },
              },
            ],
          },
          {
            type: 'object',
            name: 'pricing',
            label: 'Pricing Tiers',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'name',
                label: 'Plan Name',
                required: true,
              },
              {
                type: 'number',
                name: 'price',
                label: 'Price (in EUR)',
                required: true,
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
                ui: {
                  component: 'textarea',
                },
              },
              {
                type: 'string',
                name: 'features',
                label: 'Features',
                list: true,
              },
              {
                type: 'boolean',
                name: 'featured',
                label: 'Featured Plan',
                default: false,
              },
              {
                type: 'string',
                name: 'ctaText',
                label: 'CTA Text',
                default: 'Jetzt anfragen',
              },
            ],
          },
          {
            type: 'object',
            name: 'socialProof',
            label: 'Social Proof / Testimonials',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'quote',
                label: 'Quote',
                ui: {
                  component: 'textarea',
                },
              },
              {
                type: 'string',
                name: 'author',
                label: 'Author Name',
              },
              {
                type: 'string',
                name: 'role',
                label: 'Role/Company',
              },
              {
                type: 'image',
                name: 'avatar',
                label: 'Avatar Image',
              },
              {
                type: 'number',
                name: 'rating',
                label: 'Rating (1-5)',
                default: 5,
              },
            ],
          },
        ],
      },
      {
        name: 'blog',
        label: 'Blog Posts',
        path: 'src/content/blog',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'datetime',
            name: 'publishedAt',
            label: 'Published Date',
            required: true,
          },
          {
            type: 'image',
            name: 'coverImage',
            label: 'Cover Image',
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            default: 'Team',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'boolean',
            name: 'published',
            label: 'Published',
            default: false,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
