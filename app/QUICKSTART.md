# ⚡ Quick Start Guide

Get your premium landing page running in **5 minutes**.

## 1️⃣ Install (2 min)

```bash
cd app
npm install
```

## 2️⃣ Setup Environment (1 min)

```bash
cp .env.example .env
```

**Edit `.env`:**
```env
PUBLIC_SITE_URL=http://localhost:4321
```

*(TinaCMS and n8n are optional - leave empty for now)*

## 3️⃣ Initialize Database (1 min)

```bash
npm run db:push
npm run db:seed
```

## 4️⃣ Start Development (1 min)

```bash
npm run dev
```

**Open:** [http://localhost:4321](http://localhost:4321) 🎉

---

## ✅ What's Working Now

- ✅ Hero Section with animations
- ✅ Pricing Cards (3 tiers)
- ✅ Contact Form with lead tracking
- ✅ Smooth scrolling (Lenis)
- ✅ Premium animations (Framer + GSAP)
- ✅ Lead database (Astro DB)
- ✅ Session tracking
- ✅ Dark/Light theme

---

## 🎨 Customize in 3 Steps

### 1. Change Text & Pricing

**File:** `src/pages/index.astro`

```typescript
// Update pricing tiers
const pricingTiers = [
  {
    name: 'Your Plan',
    price: 999,
    description: 'Your description',
    features: ['Feature 1', 'Feature 2'],
  }
];
```

### 2. Update Hero

```astro
<Hero
  headline="Your Headline"
  subheadline="Your Subheadline"
  ctaText="Your CTA"
/>
```

### 3. Change Colors

**File:** `src/styles/global.css`

```css
:root {
  --color-primary: #YOUR_COLOR;
}
```

---

## 📊 Check Your Leads

Leads are stored in **Astro DB**.

**View leads:**
1. Open [http://localhost:4321/api/leads](http://localhost:4321/api/leads)
2. Or check `db/` folder (SQLite file after first use)

**Lead scoring is automatic:**
- Form submit: +15 points
- Pricing view: +5 points
- Hot lead: Score > 50

---

## 🧪 Run Tests

```bash
npm run test
```

Tests cover:
- ✅ Conversion funnel
- ✅ Form validation
- ✅ Mobile layout
- ✅ Performance

---

## 🚀 Deploy

### Vercel (easiest)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
netlify deploy --prod
```

**Don't forget:** Add environment variables in your hosting dashboard!

---

## 🆘 Troubleshooting

**Issue:** `npm install` fails
- **Solution:** Use Node.js v20+ (`node -v`)

**Issue:** Database errors
- **Solution:** Run `npm run db:push` again

**Issue:** Animations not working
- **Solution:** Make sure JavaScript is enabled

**Issue:** Build errors
- **Solution:** Run `npm run check` for type errors

---

## 📚 Learn More

- **Full Docs:** See `README.md`
- **Astro Docs:** [docs.astro.build](https://docs.astro.build)
- **Components:** Check `src/components/`
- **Styling:** See `src/styles/global.css`

---

## 💡 Pro Tips

1. **Test mobile first** - Most traffic is mobile
2. **Use TinaCMS** for quick headline testing (optional)
3. **Monitor leads** - Check `/api/leads` daily
4. **A/B test pricing** - Try different prices
5. **Optimize images** - Use AVIF format

---

**Need help?** Check the full README.md or open an issue!

🚀 **Now go build something amazing!**
