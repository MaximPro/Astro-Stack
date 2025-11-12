# 🎨 Visual Editing Setup (wie manus.im)

**Deine Kunden können die Website OHNE Code editieren - Drag & Drop!**

---

## 🎯 Was du bekommst

**Genau wie manus.im:**
- ✅ Drag & Drop Editor
- ✅ Live Preview
- ✅ Component Library
- ✅ Kein Code nötig
- ✅ Sofort speichern & publishen
- ✅ Mobile Preview
- ✅ Undo/Redo

**Deine Kunden sehen:**
1. Website links (Live Preview)
2. Editor rechts (Drag Components)
3. Änderungen instant sichtbar
4. Klick "Publish" → LIVE!

---

## 🔧 Setup (3 Tools kombiniert)

### 1️⃣ **Puck Editor** (Drag & Drop)
### 2️⃣ **TinaCMS** (Content Management)
### 3️⃣ **Keystatic** (Visual Schema Editor)

**= Perfekte Kombination für Client-Editing! 🎉**

---

## 🚀 Quick Setup: Puck Editor (Primary)

**Warum Puck?**
- ✅ React-based (passt zu Astro)
- ✅ Drag & Drop wie Webflow
- ✅ Custom Components
- ✅ Open Source (FREE!)
- ✅ TypeScript-first

### Installation

```bash
npm install @measured/puck
```

### Basic Setup

```tsx
// src/pages/editor.tsx
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";

// Deine Components definieren
const config = {
  components: {
    Hero: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "text" },
        ctaText: { type: "text" },
      },
      defaultProps: {
        title: "Welcome",
        subtitle: "Start building",
        ctaText: "Get Started",
      },
      render: ({ title, subtitle, ctaText }) => (
        <div className="hero">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <button>{ctaText}</button>
        </div>
      ),
    },
    Pricing: {
      fields: {
        tiers: { type: "array", arrayFields: {
          name: { type: "text" },
          price: { type: "number" },
          features: { type: "textarea" },
        }},
      },
      render: ({ tiers }) => (
        <div className="pricing">
          {tiers.map(tier => (
            <div key={tier.name} className="tier">
              <h3>{tier.name}</h3>
              <p>${tier.price}</p>
              <p>{tier.features}</p>
            </div>
          ))}
        </div>
      ),
    },
  },
};

export default function Editor() {
  return (
    <Puck
      config={config}
      data={initialData}
      onPublish={async (data) => {
        // Save to Convex
        await fetch('/api/save-page', {
          method: 'POST',
          body: JSON.stringify(data),
        });
      }}
    />
  );
}
```

---

## 🎨 Custom Component Library

**Erstelle wiederverwendbare Blocks:**

```tsx
// src/puck/components/Hero.tsx
export const Hero = {
  fields: {
    headline: { type: "text", label: "Headline" },
    subheadline: { type: "textarea" },
    backgroundImage: { type: "text", label: "Image URL" },
    ctaButton: {
      type: "object",
      objectFields: {
        text: { type: "text" },
        link: { type: "text" },
        style: { type: "select", options: [
          { label: "Primary", value: "primary" },
          { label: "Secondary", value: "secondary" },
        ]},
      },
    },
  },
  defaultProps: {
    headline: "Your Headline Here",
    subheadline: "Describe your product",
    backgroundImage: "",
    ctaButton: {
      text: "Get Started",
      link: "/signup",
      style: "primary",
    },
  },
  render: ({ headline, subheadline, backgroundImage, ctaButton }) => (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <h1>{headline}</h1>
        <p>{subheadline}</p>
        <a
          href={ctaButton.link}
          className={`btn btn-${ctaButton.style}`}
        >
          {ctaButton.text}
        </a>
      </div>
    </section>
  ),
};
```

---

## 🔐 Client Access Control

```typescript
// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  // Nur authentifizierte Clients können editieren
  if (context.url.pathname.startsWith('/editor')) {
    const user = await context.locals.user;
    if (!user || !user.canEdit) {
      return context.redirect('/login');
    }
  }
  return next();
});
```

---

## 💾 Save to Convex

```typescript
// convex/pages.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const savePage = mutation({
  args: {
    slug: v.string(),
    data: v.any(), // Puck data
    published: v.boolean(),
  },
  handler: async (ctx, { slug, data, published }) => {
    // Save page data
    await ctx.db.insert("pages", {
      slug,
      data,
      published,
      updatedAt: Date.now(),
    });
  },
});

export const getPage = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    return await ctx.db
      .query("pages")
      .filter(q => q.eq(q.field("slug"), slug))
      .first();
  },
});
```

---

## 🎯 Render Published Page

```astro
---
// src/pages/[slug].astro
import { Puck, Render } from "@measured/puck";
import { getPage } from "../../convex/pages";

const { slug } = Astro.params;
const page = await getPage({ slug });

if (!page) return Astro.redirect('/404');
---

<Layout>
  <Render config={puckConfig} data={page.data} />
</Layout>
```

---

## 🎨 Custom Field Types

```tsx
// Image Upload Field
const ImageField = {
  type: "custom",
  render: ({ value, onChange }) => (
    <input
      type="file"
      accept="image/*"
      onChange={async (e) => {
        const file = e.target.files[0];
        // Upload zu Cloudflare R2
        const url = await uploadImage(file);
        onChange(url);
      }}
    />
  ),
};

// Rich Text Editor
const RichTextField = {
  type: "custom",
  render: ({ value, onChange }) => (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={{
        toolbar: [
          ['bold', 'italic', 'underline'],
          ['link', 'image'],
          [{ list: 'ordered' }, { list: 'bullet' }],
        ],
      }}
    />
  ),
};
```

---

## 📱 Mobile Preview

```tsx
<Puck
  config={config}
  data={data}
  viewports={[
    { width: 375, height: 667, label: "Mobile" },
    { width: 768, height: 1024, label: "Tablet" },
    { width: 1440, height: 900, label: "Desktop" },
  ]}
/>
```

---

## 🔄 Version History

```typescript
// convex/pages.ts
export const saveVersion = mutation({
  args: {
    pageId: v.id("pages"),
    data: v.any(),
  },
  handler: async (ctx, { pageId, data }) => {
    await ctx.db.insert("page_versions", {
      pageId,
      data,
      createdAt: Date.now(),
    });
  },
});

export const restoreVersion = mutation({
  args: {
    pageId: v.id("pages"),
    versionId: v.id("page_versions"),
  },
  handler: async (ctx, { pageId, versionId }) => {
    const version = await ctx.db.get(versionId);
    await ctx.db.patch(pageId, {
      data: version.data,
    });
  },
});
```

---

## 🎯 Complete Component Examples

### 1. Hero Section

```tsx
export const HeroComponent = {
  fields: {
    layout: {
      type: "radio",
      options: [
        { label: "Center", value: "center" },
        { label: "Left", value: "left" },
        { label: "Split", value: "split" },
      ],
    },
    headline: { type: "text" },
    subheadline: { type: "textarea" },
    image: { type: "text", label: "Image URL" },
    cta: {
      type: "array",
      arrayFields: {
        text: { type: "text" },
        link: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
        },
      },
    },
  },
  render: ({ layout, headline, subheadline, image, cta }) => (
    <section className={`hero hero-${layout}`}>
      {/* Implementation */}
    </section>
  ),
};
```

### 2. Feature Grid

```tsx
export const FeatureGrid = {
  fields: {
    title: { type: "text" },
    features: {
      type: "array",
      arrayFields: {
        icon: { type: "text", label: "Icon (emoji or URL)" },
        title: { type: "text" },
        description: { type: "textarea" },
      },
    },
    columns: {
      type: "select",
      options: [
        { label: "2 Columns", value: 2 },
        { label: "3 Columns", value: 3 },
        { label: "4 Columns", value: 4 },
      ],
    },
  },
  render: ({ title, features, columns }) => (
    <section className="features">
      <h2>{title}</h2>
      <div className={`grid-${columns}`}>
        {features.map(feature => (
          <div key={feature.title} className="feature">
            <span className="icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  ),
};
```

---

## 🚀 Client Workflow

**1. Login**
```
https://yoursite.com/login
→ Clerk authentication
```

**2. Go to Editor**
```
https://yoursite.com/editor
→ Puck visual editor opens
```

**3. Edit Content**
- Drag components from sidebar
- Click component to edit
- See changes live
- Reorder by dragging

**4. Publish**
- Click "Publish" button
- Changes go LIVE instantly
- Version saved to Convex

**5. View Site**
```
https://yoursite.com
→ See published changes
```

---

## 💡 Pro Tips

### 1. Custom Theme Editor

```tsx
const ThemeEditor = {
  fields: {
    colors: {
      type: "object",
      objectFields: {
        primary: { type: "text", label: "Primary Color" },
        secondary: { type: "text" },
        accent: { type: "text" },
      },
    },
    fonts: {
      type: "object",
      objectFields: {
        heading: { type: "text" },
        body: { type: "text" },
      },
    },
  },
  render: ({ colors, fonts }) => {
    // Apply theme globally
    document.documentElement.style.setProperty('--color-primary', colors.primary);
    return null;
  },
};
```

### 2. SEO Fields

```tsx
const SEOSettings = {
  fields: {
    title: { type: "text", label: "Page Title" },
    description: { type: "textarea", label: "Meta Description" },
    og: {
      type: "object",
      objectFields: {
        image: { type: "text", label: "OG Image URL" },
        type: { type: "select", options: [
          { label: "Website", value: "website" },
          { label: "Article", value: "article" },
        ]},
      },
    },
  },
};
```

---

## 🔗 Links & Resources

- **Puck Docs:** https://puckeditor.com/docs
- **Puck GitHub:** https://github.com/measuredco/puck
- **Examples:** https://puckeditor.com/docs/examples
- **Component Library:** https://puckeditor.com/docs/component-library

**Alternative (falls Puck nicht passt):**
- **Builder.io:** https://builder.io (€50/mo aber sehr mächtig)
- **TinaCMS:** https://tina.io (FREE, aber weniger visual)
- **Keystatic:** https://keystatic.com (FREE, modern)

---

## 🎉 Result

**Deine Kunden können jetzt:**
- ✅ Website komplett selbst editieren
- ✅ Ohne Code-Kenntnisse
- ✅ Drag & Drop Interface
- ✅ Live Preview
- ✅ Mobile optimiert
- ✅ Instant Publish

**= Genau wie manus.im! 🚀**

---

**Setup Zeit:** 2-3 Stunden
**Client Training:** 15 Minuten
**Result:** Glückliche Kunden die selbst editieren können! 🎉
