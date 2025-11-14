# 🚀 Astro BMAD Stack

**bolt.new-Style AI-Powered Website Builder - Build Premium Sites in Minutes**

[![Astro](https://img.shields.io/badge/Astro-5.15.3-FF5D01?logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1.16-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![BMAD](https://img.shields.io/badge/BMAD--METHOD-6.0--alpha-orange)](https://github.com/bmad-code-org/BMAD-METHOD)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org)

---

## ⚡ One-Click Website Building (bolt.new-Style)

**Download → Open in Claude Code → Type `/landing` → Done!**

```bash
# Clone and open in Claude Code
git clone <your-repo> && code astro-bmad-stack

# In Claude Code chat:
/landing    # → Complete landing page in 2 min
/saas       # → SaaS site with pricing in 3 min
/portfolio  # → Portfolio website in 2 min
/blog       # → Blog with CMS in 4 min
```

**Like bolt.new and lovable.dev, but with:**
- ✅ Full code ownership
- ✅ No vendor lock-in
- ✅ Latest Astro 5 + React 19
- ✅ Production-ready code
- ✅ Deploy anywhere (Cloudflare/Netlify/Vercel)

---

## 🎯 What Makes This Special?

**3 Power Tools Combined:**

### 1. **Latest Tech Stack** (Astro 5 + React 19 + Tailwind 4)
- Cutting-edge features
- Best performance
- Future-proof

### 2. **BMAD-METHOD** (AI-Driven Development)
- 19+ specialized agents
- 50+ guided workflows
- Scale-adaptive planning

### 3. **Claude Code Integration** (Seamless AI Development)
- Auto-setup on project open
- One-click templates via slash commands
- MCP servers for latest docs
- SessionStart welcome guide

**Result:** Build professional websites **10x faster** than traditional development.

---

## 🚀 Getting Started (Choose Your Style)

### 🎨 Option 1: One-Click Templates (bolt.new-Style)

**Fastest way to build:**

1. **Clone & Open:**
   ```bash
   git clone <your-repo>
   cd astro-bmad-stack
   code .  # Opens in Claude Code
   ```

2. **Auto-Setup Runs:**
   - SessionStart hook welcomes you
   - Shows available commands
   - Checks installation status

3. **Build Instantly:**
   ```
   /landing     → Landing page (2 min)
   /saas        → SaaS landing (3 min)
   /portfolio   → Portfolio site (2 min)
   /blog        → Blog with CMS (4 min)
   /setup-all   → First-time setup
   ```

### 🤖 Option 2: BMAD Workflow (Guided AI Development)

**For custom/complex sites:**

```bash
npm run setup

# In Claude Code:
@bmad/agents/bmad-master.agent.yaml
*/workflow-init

# Choose:
- Quick Flow (features/fixes)
- BMad Method (full websites)
- Party Mode (multi-agent)
```

### 💻 Option 3: Traditional Development

```bash
npm install
npm run dev  # http://localhost:4321
```

---

## ⚡ Quick Start (2 Minuten)

### Option 1: Auto-Setup

```bash
git clone <your-repo-url> my-project
cd my-project
npm run setup
```

**Fertig!** BMAD-METHOD ist installiert, alle Dependencies ready.

### Option 2: Manual

```bash
# 1. Install dependencies
npm install

# 2. Install BMAD-METHOD
npm run bmad:install

# 3. Start dev server
npm run dev
```

**Server läuft:** http://localhost:4321

---

## 🤖 BMAD-METHOD nutzen

### In Claude Code:

```bash
# 1. Load BMad Master Agent
@bmad/agents/bmad-master.agent.yaml

# 2. Start Workflow
*/workflow-init

# 3. Wähle Workflow:
- Quick Flow (Features/Fixes)
- BMad Method (Full Websites)
- Enterprise (Complex Systems)
```

### Beispiel-Session:

```
You: @bmad/agents/bmad-master.agent.yaml
You: */workflow-init

BMad Master: 🎯 Welcome! What would you like to build today?

You: Create a responsive landing page with hero, features, pricing

BMad Master:
I recommend **Quick Flow** for this.
Loading Product Manager agent...

PM: Let's define your landing page requirements...
[Guided conversation follows]
```

---

## 📁 Project Structure

```
astro-bmad-stack/
│
├── src/
│   ├── components/          # React components
│   │   └── ui/              # Reusable UI components
│   ├── layouts/             # Astro layouts
│   │   └── BaseLayout.astro # Base layout with SEO
│   ├── pages/               # Routes (file-based)
│   │   └── index.astro      # Homepage
│   ├── lib/                 # Utilities & helpers
│   │   └── utils.ts         # Common functions
│   └── styles/              # Global styles
│       └── globals.css      # Tailwind + custom CSS
│
├── public/                  # Static assets (images, fonts)
│
├── bmad/                    # BMAD-METHOD (auto-generated)
│   ├── agents/              # Specialized AI agents
│   │   ├── bmad-master.agent.yaml
│   │   ├── pm.agent.yaml
│   │   ├── architect.agent.yaml
│   │   ├── developer.agent.yaml
│   │   └── ...
│   ├── workflows/           # Guided workflows
│   └── _cfg/                # Your customizations (update-safe!)
│
├── .claude/                 # Claude Code integration docs
│   └── README.md            # Detailed usage guide
│
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── biome.json               # Biome linter config
└── package.json             # Dependencies & scripts
```

---

## 🛠️ Tech Stack

### Core

| Technology | Version | Purpose |
|------------|---------|---------|
| **Astro** | 5.15.3 | Static site generation with Islands architecture |
| **React** | 19.2.0 | UI components (only where needed) |
| **TypeScript** | 5.8.3 | Type safety throughout |
| **Tailwind CSS** | 4.1.16 | Utility-first styling (10x faster compilation) |

### UI & Animations

| Technology | Version | Purpose |
|------------|---------|---------|
| **Motion** | 12.23.24 | Smooth animations (formerly Framer Motion, 20% smaller) |
| **Lucide React** | latest | Beautiful icon library |
| **CVA** | 0.7.1 | Component variants (shadcn/ui style) |

### Development Tools

| Technology | Version | Purpose |
|------------|---------|---------|
| **BMAD-METHOD** | 6.0-alpha.9 | AI-driven development framework |
| **Biome** | 2.3.2 | Linting & formatting (50x faster than ESLint) |
| **Vite** | (via Astro) | Lightning-fast HMR |

---

## 🎨 Features

### ✅ Astro 5 Latest Features

- **Server Islands** - Dynamic content on static sites
- **Content Layer API** - Fetch from any source (APIs, CMSs, DBs)
- **Responsive Images** - Automatic optimization
- **Islands Architecture** - Zero JS by default, hydrate only what's needed

### ✅ BMAD-METHOD Integration

- **19+ Specialized Agents** - PM, Architect, Developer, UX, DevOps, etc.
- **50+ Guided Workflows** - From planning to deployment
- **Scale-Adaptive Planning** - Automatically adjusts to project size
- **Party Mode** - Multi-agent collaboration
- **Update-Safe Customization** - Your configs persist

### ✅ Development Experience

- **Fast Refresh** - Instant updates on save
- **Type-Safe** - TypeScript strict mode
- **Auto-Import** - Components auto-imported
- **Path Aliases** - Clean imports (`@/components/...`)
- **Dark Mode** - Ready out of the box
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards

### ✅ Production Ready

- **Lighthouse 98+** - Perfect scores out of the box
- **Edge Deployable** - Cloudflare Pages, Netlify, Vercel
- **Fast Builds** - Optimized for CI/CD
- **Security Headers** - Included in deployment configs
- **Asset Optimization** - Images, CSS, JS automatically optimized

---

## 📚 NPM Scripts

```bash
# Development
npm run dev              # Start dev server (localhost:4321)
npm run build            # Production build
npm run preview          # Preview production build
npm run check            # TypeScript type check

# BMAD-METHOD
npm run bmad:install     # Install/update BMAD-METHOD
npm run bmad:status      # Check BMAD installation status
npm run bmad:menu        # Show how to use BMAD

# Setup
npm run setup            # Install all + BMAD-METHOD
```

---

## 🚀 Deployment

### Cloudflare Pages (Recommended)

**Warum Cloudflare?**
- ✅ FREE unlimited bandwidth
- ✅ 300+ global edge locations
- ✅ <50ms TTFB
- ✅ Workers AI integration ready

**Deploy:**

```bash
# Option 1: GitHub integration
# Push to GitHub, connect in Cloudflare Dashboard

# Option 2: CLI
npm run build
npx wrangler pages deploy dist
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Vercel

```bash
npm install -g vercel
vercel
```

**Full deployment guide:** See `.claude/README.md` for detailed instructions.

---

## 🎨 Available Slash Commands

### One-Click Templates

| Command | Creates | Time | Sections |
|---------|---------|------|----------|
| `/landing` | Landing Page | 2 min | Hero, Features, Benefits, Social Proof, CTA, Footer |
| `/saas` | SaaS Site | 3 min | Hero, Features, Pricing (3 tiers), FAQ, Testimonials, CTA |
| `/portfolio` | Portfolio | 2 min | Hero, About, Projects Grid, Services, Testimonials, Contact |
| `/blog` | Blog | 4 min | Homepage, Post Pages, Categories, Tags, Search, Author Pages |
| `/ecommerce` | E-Commerce | 5 min | Coming soon |

### Quick Actions

| Command | Purpose |
|---------|---------|
| `/setup-all` | Complete first-time setup (deps + BMAD + dev server) |
| `/component` | Create new React component |
| `/page` | Create new Astro page |
| `/deploy-cf` | Deploy to Cloudflare Pages |
| `/deploy-netlify` | Deploy to Netlify |

### BMAD Workflows

| Command | Purpose |
|---------|---------|
| `/bmad-quick` | Quick Flow (small features/fixes) |
| `/bmad-full` | Full BMad Method (complete sites) |
| `/bmad-party` | Party Mode (multi-agent collaboration) |

**How to use:**
1. Open project in Claude Code
2. Type slash command in chat
3. Answer customization prompts
4. Website generated in minutes!

---

## 🤖 BMAD Workflows Examples

### Create Landing Page

```
*/workflow-init → Quick Flow
"Create responsive landing page with:
- Hero section with gradient background
- Feature grid (3 columns)
- Pricing table (3 tiers)
- CTA section
- Footer"
```

### Add Blog

```
*/workflow-init → BMad Method
"Add blog functionality with:
- Markdown content
- Categories & tags
- SEO optimization
- RSS feed"
```

### Integrate CMS

```
*/workflow-init → BMad Method
"Integrate TinaCMS for content management with visual editing"
```

### Performance Optimization

```
@bmad/agents/performance.agent.yaml
"Analyze website and optimize for Lighthouse 100 score"
```

---

## 💡 Best Practices

### 1. **Start with BMad Master**
Always begin with the orchestrator agent for best workflow routing.

### 2. **Use Scale-Adaptive Planning**
Let BMAD choose the right depth:
- Bug fix → Quick Flow
- Feature → Quick Flow or BMad Method
- New website → BMad Method
- Complex system → Enterprise

### 3. **Leverage Party Mode**
For complex features, use multiple agents simultaneously:
```
*/party-mode
→ Select: PM + Architect + Developer
```

### 4. **Customize Agents**
Edit `bmad/_cfg/agents/` to personalize:
- Communication style
- Language (e.g., German)
- Technical depth

### 5. **Commit Frequently**
Use BMAD's structured approach for clean commit history:
```
feat: add pricing section (BMad Quick Flow)
fix: resolve mobile navigation bug (BMad Quick Flow)
docs: update README with deployment guide (Tech Writer)
```

---

## 🎓 Learning Path

### Day 1: Setup & Basics
1. ✅ Run `npm run setup`
2. ✅ Load BMad Master in Claude Code
3. ✅ Complete `*/workflow-init` once
4. ✅ Create first component with Developer agent

### Week 1: Core Workflows
1. ✅ Build landing page (Quick Flow)
2. ✅ Add content pages (Quick Flow)
3. ✅ Integrate CMS (BMad Method)
4. ✅ Deploy to Cloudflare

### Month 1: Advanced
1. ✅ Use Party Mode for complex features
2. ✅ Customize BMAD agents
3. ✅ Create custom workflows
4. ✅ Optimize for Lighthouse 100

---

## 🐛 Troubleshooting

### BMAD not found?

```bash
# Reinstall
npm run bmad:install

# Verify
npm run bmad:status
```

### Port 4321 already in use?

```bash
# Kill process
lsof -ti:4321 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Type errors?

```bash
# Clear cache
rm -rf .astro node_modules
npm install

# Check types
npm run check
```

### Build fails?

```bash
# Check for errors
npm run check

# Clean build
rm -rf dist .astro
npm run build
```

---

## 📖 Documentation

- **Claude Code Integration:** `.claude/README.md` (detailed guide)
- **BMAD-METHOD Docs:** https://github.com/bmad-code-org/BMAD-METHOD
- **Astro Docs:** https://docs.astro.build
- **Tailwind Docs:** https://tailwindcss.com/docs

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Use BMAD workflows for development
4. Commit changes (`git commit -m 'feat: add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open Pull Request

---

## 📄 License

MIT License - see LICENSE file for details.

---

## 🙏 Credits

Built with:
- **Astro** by the Astro team
- **BMAD-METHOD** by Brian Madison (@bmad-code)
- **Claude Code** by Anthropic
- **React** by Meta
- **Tailwind CSS** by Tailwind Labs

---

## 🎉 Ready to Build?

```bash
npm run setup
npm run dev
```

**Load BMad Master in Claude Code and start creating!** 🚀

---

**Need help?** Check `.claude/README.md` for detailed usage guide.
