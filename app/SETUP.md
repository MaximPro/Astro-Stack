# 🚀 Complete Setup Guide

**Get your Astro landing page running in 5 minutes**

---

## 🎯 Quick Start (Choose One)

### Option 1: StackBlitz (Instant, Browser-based)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/yourusername/astro-stack)

**Setup Time:** 10 seconds
**No installation required!**

### Option 2: Local Development

```bash
# Clone repository
git clone https://github.com/yourusername/astro-stack.git
cd astro-stack/app

# Install dependencies
npm install

# Start development server
npm run dev
```

**Opens at:** http://localhost:4321

### Option 3: GitHub Codespaces

Click: **Code → Codespaces → Create codespace**
Everything auto-installs, just wait 30 seconds!

---

## 📁 Choose Your Template

Navigate to the template you want:

```bash
cd templates/01-saas-landing    # SaaS with Auth
cd templates/02-ecommerce       # Coming soon
cd templates/03-blog            # Coming soon
cd templates/04-portfolio       # Coming soon
cd templates/05-docs            # Coming soon
```

---

## 🔧 Template 1: SaaS Landing Page

### What's Included
- ✅ Landing page with hero, features, pricing
- ✅ Clerk authentication (sign up/login)
- ✅ Convex database (real-time)
- ✅ Protected dashboard
- ✅ Stripe-ready (payments)

### Setup Steps

#### 1. Install Dependencies
```bash
cd templates/01-saas-landing
npm install
```

#### 2. Setup Convex (Database)
```bash
# Start Convex dev server
npx convex dev

# This creates:
# - convex/ folder
# - .env.local with CONVEX_URL
```

**What is Convex?**
- TypeScript-first database
- Real-time updates
- Serverless functions
- FREE tier: 1GB storage, 1M calls/month

#### 3. Setup Clerk (Authentication)

1. Go to https://clerk.com → Sign up (FREE)
2. Create new application
3. Copy API keys

```bash
# Add to .env.local
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

**What is Clerk?**
- Modern authentication
- Social logins (Google, GitHub, etc.)
- Multi-factor auth
- FREE tier: 10K users

#### 4. Start Development

```bash
npm run dev
```

**Two servers run:**
- Astro dev: http://localhost:4321
- Convex dev: Real-time sync in background

#### 5. Test Features

**Landing Page:** http://localhost:4321
- See hero, features, pricing

**Sign Up:** http://localhost:4321/signup
- Create test account
- Redirects to dashboard

**Dashboard:** http://localhost:4321/dashboard
- Protected route (requires auth)
- Shows user data from Convex

---

## 🎨 Customization

### Change Colors

```javascript
// tailwind.config.mjs
colors: {
  primary: '#0066ff',    // Your brand color
  secondary: '#00d4ff',  // Accent
}
```

### Update Content

```astro
<!-- src/pages/index.astro -->
<Hero
  headline="Your Product Name"
  subheadline="Solve X in Y minutes"
/>
```

### Add Features

```typescript
// src/components/Features.tsx
const features = [
  {
    icon: Zap,
    title: 'Your Feature',
    description: 'Description here',
  },
  // Add more...
];
```

---

## 💳 Optional: Stripe Payments

### Setup

```bash
npm install @stripe/stripe-js stripe
```

### Get API Keys

1. Go to https://stripe.com → Sign up
2. Copy API keys

```bash
# Add to .env.local
STRIPE_SECRET_KEY=sk_test_...
PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### Create Checkout

```typescript
// convex/stripe.ts
import { mutation } from './_generated/server';
import Stripe from 'stripe';

export const createCheckout = mutation({
  handler: async (ctx, { priceId }) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: 'https://yourdomain.com/dashboard',
    });
    return session.url;
  },
});
```

---

## 🚀 Deployment

### Cloudflare Pages (Recommended - FREE)

#### Method 1: GitHub Integration

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push origin main

# 2. Go to Cloudflare Dashboard
# → Pages → Create Project → Connect Git
# → Select repo
# → Build command: npm run build
# → Output: dist
# → Deploy!
```

**Result:** https://your-project.pages.dev (live in 2 minutes)

#### Method 2: Wrangler CLI

```bash
# Install
npm install -g wrangler

# Login
wrangler login

# Deploy
npm run build
wrangler pages deploy dist/
```

### Netlify (FREE - Easy)

```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
npm run build
netlify deploy --prod
```

**Or drag & drop:**
Go to https://app.netlify.com/drop → Drag `dist/` folder

### Vercel (FREE)

```bash
# Install CLI
npm install -g vercel

# Deploy
vercel
```

### Coolify (Self-hosted)

See `.claude/DEPLOYMENT-GUIDE.md` for detailed Coolify setup.

---

## 🔐 Environment Variables

### Production Setup

**In Cloudflare Pages:**
1. Pages → Settings → Environment Variables
2. Add:
   - `PUBLIC_CONVEX_URL`
   - `PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `PUBLIC_SITE_URL`

**In Netlify:**
1. Site Settings → Environment Variables
2. Add same variables

**In Vercel:**
1. Settings → Environment Variables
2. Add same variables

---

## 🧪 Testing

```bash
# Type checking
npm run check

# Build (to catch errors)
npm run build

# E2E tests (if installed)
npm run test
```

---

## 📊 Analytics (Optional)

### Cloudflare Web Analytics (FREE)

```html
<!-- src/layouts/BaseLayout.astro -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

Get token: Cloudflare Dashboard → Analytics → Web Analytics

### Plausible (Privacy-focused)

```html
<script defer data-domain="yourdomain.com"
  src="https://plausible.io/js/script.js"></script>
```

---

## 🆘 Troubleshooting

### "Convex not connecting"

**Solution:**
```bash
# Check convex dev is running
# Look for: "Convex functions ready!"

# If not, restart:
npx convex dev
```

### "Clerk authentication not working"

**Solutions:**
1. Check `.env.local` has correct keys
2. Ensure `PUBLIC_` prefix on publishable key
3. Restart dev server: `npm run dev`

### "Build fails"

**Solutions:**
```bash
# Clear cache
rm -rf .astro node_modules
npm install

# Check types
npm run check
```

### "Port 4321 already in use"

**Solution:**
```bash
# Kill process
lsof -ti:4321 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

---

## 💰 Cost Breakdown

### FREE Tier (Enough for most projects)

```
Astro:           FREE (open source)
Convex:          FREE (1GB, 1M calls)
Clerk:           FREE (10K users)
Cloudflare:      FREE (unlimited bandwidth)
Domain:          $12/year
SSL:             FREE (automatic)

Total: $0-12/year
```

### Pro Tier (Scale to 100K users)

```
Convex Pro:      $25/mo
Clerk Pro:       $25/mo
Cloudflare:      FREE
Domain:          $12/year

Total: ~$612/year
```

---

## 📚 Documentation Links

- **Astro:** https://docs.astro.build
- **Convex:** https://docs.convex.dev
- **Clerk:** https://clerk.com/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React:** https://react.dev
- **Cloudflare Pages:** https://developers.cloudflare.com/pages

---

## 🎉 Next Steps

1. ✅ Customize colors and content
2. ✅ Add your logo and images
3. ✅ Configure Stripe (if using payments)
4. ✅ Test all features locally
5. ✅ Deploy to Cloudflare/Netlify/Vercel
6. ✅ Add custom domain
7. ✅ Launch! 🚀

---

## 🤝 Need Help?

- Check `.claude/` folder for guides:
  - `DEPLOYMENT-GUIDE.md` - Hosting options
  - `VISUAL-EDITING-SETUP.md` - Client editing
  - `README-RAG-SETUP.md` - Claude Code integration

- Astro Discord: https://astro.build/chat
- Convex Discord: https://convex.dev/community
- Clerk Discord: https://clerk.com/discord

---

**Built with ❤️ for fast launches**

⭐ Ready to ship in < 1 hour!
