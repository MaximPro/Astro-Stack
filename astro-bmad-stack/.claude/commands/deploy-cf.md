---
description: Deploy to Cloudflare Pages with one command
---

# Deploy to Cloudflare Pages

I'll deploy your site to Cloudflare Pages:

## Prerequisites Check

Let me check:
- [ ] Project built? (`npm run build`)
- [ ] Cloudflare account?
- [ ] Wrangler CLI installed?

## Deployment Options

### Option 1: GitHub Integration (Recommended)

**One-time setup:**
1. Push to GitHub
2. Go to Cloudflare Dashboard → Pages
3. Connect repository
4. Auto-deploys on every push!

**I'll guide you through this.**

### Option 2: Wrangler CLI (Quick)

**For immediate deploy:**

```bash
# Install Wrangler (if needed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run build
wrangler pages deploy dist --project-name=your-site
```

## Configuration

Using `wrangler.toml` (already configured):
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ Security headers
- ✅ Cache rules
- ✅ Node version 20

## After Deploy

You'll get:
- 🔗 Live URL: `https://your-site.pages.dev`
- 🌍 Global CDN (300+ locations)
- 🔒 Auto SSL
- ⚡ <50ms TTFB
- 📊 Analytics dashboard
- 🔄 Rollback capability

## Environment Variables

If you need env vars:

**In Cloudflare Dashboard:**
Pages → Settings → Environment Variables

Add:
- `PUBLIC_SITE_URL`
- Any CMS keys
- Analytics IDs
- etc.

## Custom Domain

After deploy:
1. Cloudflare Dashboard → Pages → Custom Domains
2. Add your domain
3. Update DNS (automatic if domain on Cloudflare)

**Ready to deploy?**

Tell me:
1. Already have Cloudflare account? (yes/no)
2. Prefer GitHub integration or CLI?
3. Need custom domain setup? (yes/no)

I'll guide you through the steps!
