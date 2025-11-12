# 🚀 SaaS Landing Page Template

**Production-ready SaaS landing page with auth, pricing, and dashboard**

Built with: Astro 5.15.3 · React 19.2 · Convex · Clerk · Tailwind 4

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Setup Convex
npx convex dev
# Creates convex/ folder and .env.local

# 3. Setup Clerk
# Get keys from: https://clerk.com
echo "PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_..." >> .env.local
echo "CLERK_SECRET_KEY=sk_test_..." >> .env.local

# 4. Start development
npm run dev
```

**Opens at:** `http://localhost:4321`

---

## 📦 What's Included

### Pages
- `/` - Landing page (hero, features, pricing, CTA)
- `/pricing` - Detailed pricing table
- `/dashboard` - Protected dashboard (requires auth)
- `/login` - Clerk sign-in page
- `/signup` - Clerk sign-up page

### Components
- `<Hero />` - Animated hero section
- `<Pricing />` - 3-tier pricing table
- `<Features />` - Feature grid with icons
- `<CTA />` - Call-to-action sections
- `<Dashboard />` - User dashboard
- `<WaitlistForm />` - Email capture (Convex)

### Convex Schema
```typescript
// convex/schema.ts
users: { email, name, plan, createdAt }
waitlist: { email, referralSource, createdAt }
subscriptions: { userId, plan, status, stripeId }
```

---

## 🎨 Customization

### 1. Change Brand Colors

```javascript
// tailwind.config.mjs
colors: {
  primary: '#0066ff',    // Your brand color
  secondary: '#00d4ff',  // Accent color
}
```

### 2. Update Hero Content

```astro
<!-- src/pages/index.astro -->
<Hero
  headline="Your SaaS Product Name"
  subheadline="Solve X problem in Y minutes"
  ctaText="Start Free Trial"
  ctaLink="/signup"
/>
```

### 3. Modify Pricing Tiers

```typescript
// src/config/pricing.ts
export const PRICING_TIERS = [
  {
    name: 'Starter',
    price: 29,
    features: ['Feature 1', 'Feature 2'],
    cta: 'Start Free Trial'
  }
  // Add more tiers...
];
```

---

## 🔐 Authentication Flow

**Using Clerk:**

1. User clicks "Sign Up"
2. Clerk handles auth UI
3. After signup → Convex creates user record
4. User redirected to `/dashboard`
5. Protected routes check auth status

```typescript
// Protected route example
export const prerender = false; // Server-rendered

// In component
const { userId } = useAuth(); // Clerk hook
if (!userId) return <SignIn />;
```

---

## 💳 Stripe Integration

**Setup:**

```bash
npm install @stripe/stripe-js stripe
```

**Create checkout:**

```typescript
// convex/stripe.ts
export const createCheckout = mutation({
  args: { priceId: v.string() },
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

## 📊 Convex Database

### Queries

```typescript
// Get current user
const user = useQuery(api.users.getCurrentUser);

// Get all pricing plans
const plans = useQuery(api.subscriptions.getPlans);
```

### Mutations

```typescript
// Add to waitlist
const addToWaitlist = useMutation(api.waitlist.add);
await addToWaitlist({ email: 'user@example.com' });
```

---

## 🚀 Deployment

### Cloudflare Pages (Recommended)

```bash
# 1. Build
npm run build

# 2. Deploy
npm run deploy
# or: npx wrangler pages deploy dist/
```

### Vercel

```bash
vercel
```

### Netlify

```bash
netlify deploy --prod
```

---

## 🧪 Testing

```bash
# E2E tests
npm run test

# Specific test
npm run test -- pricing.spec.ts
```

**Tests included:**
- User signup flow
- Pricing page interactions
- Waitlist form submission
- Dashboard access (protected route)

---

## 📈 Analytics

Add Cloudflare Web Analytics:

```html
<!-- src/layouts/Layout.astro -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon='{"token": "your-token"}'></script>
```

---

## 🎯 Features

- ✅ **Sub-50ms TTFB** (Cloudflare edge)
- ✅ **100/100 Lighthouse** score capable
- ✅ **Real-time updates** (Convex)
- ✅ **Type-safe** (TypeScript everywhere)
- ✅ **Accessible** (WCAG AA)
- ✅ **SEO optimized** (Meta tags, sitemap)
- ✅ **Mobile-first** design
- ✅ **Dark mode** ready

---

## 💰 Cost

```
Convex:     €0 (up to 1GB / 1M calls)
Clerk:      €0 (up to 10K users)
Cloudflare: €0 (unlimited bandwidth)
Domain:     €12/year

Total: ~€0-12/year for small/medium SaaS
```

---

## 🛠️ Tech Stack

| Layer | Technology | Why? |
|-------|------------|------|
| **Framework** | Astro 5.15 | Fast, flexible, zero JS by default |
| **UI** | React 19.2 | Islands architecture, only where needed |
| **Styling** | Tailwind 4 | Utility-first, 10x faster compilation |
| **Database** | Convex | TypeScript-first, real-time, serverless |
| **Auth** | Clerk | Modern, secure, great DX |
| **Animations** | Framer Motion + GSAP | Smooth, performant |
| **Deployment** | Cloudflare Pages | Edge network, fast, free |

---

## 📚 Documentation

- [Astro Docs](https://docs.astro.build)
- [Convex Docs](https://docs.convex.dev)
- [Clerk Docs](https://clerk.com/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)

---

## 🆘 Troubleshooting

**Convex not connecting?**
- Check `convex dev` is running
- Verify `.env.local` has correct URL

**Clerk authentication not working?**
- Check API keys in `.env.local`
- Ensure `PUBLIC_` prefix for publishable key

**Build errors?**
- Run `npm run check` for type errors
- Clear `.astro` cache: `rm -rf .astro`

---

## 🎉 What's Next?

1. ✅ Customize content and colors
2. ✅ Add your logo and images
3. ✅ Configure Stripe for payments
4. ✅ Add custom features
5. ✅ Deploy to production
6. ✅ Launch your SaaS!

---

**Built with ❤️ for fast SaaS launches**

⭐ Ready to ship in < 1 hour!
