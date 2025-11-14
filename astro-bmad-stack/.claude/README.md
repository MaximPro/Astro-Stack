# 🤖 Claude Code + BMAD-METHOD Integration

**Optimized Astro Stack für AI-gestütztes Web Development**

---

## 🎯 Was ist das?

Dieses Projekt kombiniert die Power von:

- **Astro 5.15.3** - Lightning-fast static site generation
- **BMAD-METHOD** - AI-driven agile development framework
- **Claude Code** - Official Anthropic CLI for development
- **React 19** + **Tailwind 4** - Modern UI stack

**Resultat:** Von Idee zu Production-ready Website in Minuten statt Stunden.

---

## ⚡ Quick Start

### 1. Installation

```bash
# Clone repository
git clone <your-repo-url>
cd astro-bmad-stack

# Install all dependencies + BMAD-METHOD
npm run setup
```

**Was passiert:**
- ✅ npm install (Node dependencies)
- ✅ npx bmad-method@alpha install (BMAD Framework)
- ✅ Erstellt `bmad/` Ordner mit Agents & Workflows

### 2. Development Server starten

```bash
npm run dev
```

**Öffnet:** http://localhost:4321

### 3. BMAD in Claude Code nutzen

**In Claude Code:**

1. Load BMad Master Agent:
   ```
   @bmad/agents/bmad-master.agent.yaml
   ```

2. Initialize Workflow:
   ```
   */workflow-init
   ```

3. Wähle Workflow:
   - Quick Flow (kleine Features/Fixes)
   - BMad Method (vollständige Websites)
   - Enterprise (komplexe Systeme)

---

## 🛠️ Available Workflows

### For Website Development

**1. Landing Page (Quick Flow)**
```
*/workflow-init
→ Quick Flow
→ "Create responsive landing page with hero, features, CTA"
```

**2. Full Website (BMad Method)**
```
*/workflow-init
→ BMad Method
→ Follows: Analysis → Planning → Implementation
```

**3. Component Creation**
```
*/workflow-init
→ Quick Flow
→ "Create reusable [component name] component"
```

### For Content Management

**4. Blog Setup**
```
*/workflow-init
→ BMad Method
→ "Add content layer with markdown blog posts"
```

**5. CMS Integration**
```
*/workflow-init
→ BMad Method
→ "Integrate [TinaCMS/Sanity/etc] for content management"
```

---

## 📁 Project Structure

```
astro-bmad-stack/
├── src/
│   ├── components/      # React components
│   ├── layouts/         # Astro layouts
│   ├── pages/           # Routes
│   ├── lib/             # Utilities
│   └── styles/          # Global CSS
├── public/              # Static assets
├── bmad/                # BMAD-METHOD (auto-generated)
│   ├── agents/          # Specialized AI agents
│   ├── workflows/       # Guided processes
│   └── _cfg/            # Your customizations
└── .claude/             # Claude Code integration
```

---

## 🤖 BMAD Agents Overview

Nach `npm run bmad:install` hast du Zugriff auf:

### Core Agents

| Agent | Purpose | Use For |
|-------|---------|---------|
| **BMad Master** | Orchestrator | Start here, workflow navigation |
| **PM** | Product Manager | Requirements, user stories |
| **Architect** | Solution Architect | Technical architecture |
| **Developer** | Full-Stack Dev | Implementation, code review |
| **UX Designer** | UX/UI Design | User experience, wireframes |
| **Tech Writer** | Documentation | README, guides, API docs |

### Specialized Agents

| Agent | Purpose |
|-------|---------|
| **Test Architect** | Test strategy, test cases |
| **DevOps** | CI/CD, deployment |
| **Security** | Security review, best practices |
| **Performance** | Optimization, benchmarks |

---

## 🚀 Common Workflows

### Workflow 1: Create New Page

```bash
# 1. In Claude Code
@bmad/agents/developer.agent.yaml

# 2. Request
"Create new /about page with company info and team section"

# 3. BMAD guides you through:
- Component structure
- Styling approach
- SEO optimization
- Accessibility checks
```

### Workflow 2: Add Feature

```bash
# 1. Load PM agent
@bmad/agents/pm.agent.yaml

# 2. Define feature
"Add newsletter signup with email validation"

# 3. PM creates user story

# 4. Switch to Developer
@bmad/agents/developer.agent.yaml

# 5. Implement
"Implement the newsletter feature from user story"
```

### Workflow 3: Optimize Performance

```bash
# 1. Load Performance agent
@bmad/agents/performance.agent.yaml

# 2. Request audit
"Analyze and optimize website performance"

# 3. Agent provides:
- Lighthouse audit
- Optimization suggestions
- Implementation guide
```

---

## 💡 BMAD-METHOD Features

### Scale-Adaptive Planning

BMAD automatically adjusts to your project size:

| Track | When | Deliverables |
|-------|------|--------------|
| **Quick Flow** | Small features, bug fixes | Tech spec only |
| **BMad Method** | Full websites, products | PRD + Architecture + UX |
| **Enterprise** | Complex systems | Full Method + Security + DevOps |

### Party Mode (Multi-Agent)

Run multiple agents simultaneously:

```
*/party-mode
→ Select agents: PM + Architect + Developer
→ Collaborative solution
```

### Document Sharding

For large projects, BMAD can chunk documentation:
- Reduces token usage by 90%+
- Contextual loading
- Seamless workflow integration

---

## 📋 Daily Development Flow

### Morning: Plan

```bash
# 1. Load PM agent
@bmad/agents/pm.agent.yaml

# 2. Define today's goals
"What should I work on today for the [project name]?"

# 3. Get prioritized user stories
```

### Day: Build

```bash
# 1. Load Developer agent
@bmad/agents/developer.agent.yaml

# 2. Implement features
"Implement user story #[number]"

# 3. Iterate with BMAD guidance
```

### Evening: Review

```bash
# 1. Load Test Architect
@bmad/agents/test-architect.agent.yaml

# 2. Create tests
"Generate tests for today's features"

# 3. Commit with good messages
git commit -m "feat: [feature name] as per BMAD workflow"
```

---

## 🎨 Customization

### Modify BMAD Agents

Your customizations are **update-safe**:

```bash
# Edit agent behavior
bmad/_cfg/agents/developer.custom.yaml

# Example: Change communication style
communication_style: "casual and friendly"
language: "de"  # German
```

### Add Custom Workflows

```bash
# Create custom workflow
bmad/_cfg/workflows/my-workflow.yaml

# Use in Claude Code
*/my-workflow
```

---

## 📚 Tech Stack Details

### Frontend
- **Astro 5.15.3** - Static site generator with Islands
- **React 19.2** - UI components (only where needed)
- **Tailwind 4.1.16** - Utility-first CSS (10x faster)
- **Motion 12** - Animations (formerly Framer Motion)
- **TypeScript 5.8** - Type safety

### Development
- **BMAD-METHOD 6.0-alpha** - AI development framework
- **Biome 2.3** - Linting/formatting (50x faster than ESLint)
- **Vite** - Lightning-fast builds

### Deployment
- **Cloudflare Pages** - Recommended (FREE unlimited)
- **Netlify** - Easy setup
- **Vercel** - Next.js-like experience

---

## 🔧 Commands Reference

### NPM Scripts

```bash
npm run dev          # Start dev server (localhost:4321)
npm run build        # Production build
npm run preview      # Preview production build
npm run check        # Type check
npm run bmad:install # Install/update BMAD-METHOD
npm run bmad:status  # Check BMAD installation
npm run setup        # Full setup (install + bmad)
```

### BMAD Commands (in Claude Code)

```bash
*/workflow-init          # Start workflow wizard
*/workflow-prd           # Create Product Requirements
*/workflow-architecture  # Design architecture
*/workflow-implement     # Guided implementation
*/party-mode             # Multi-agent collaboration
*/workflow-test          # Generate test suite
```

---

## 🐛 Troubleshooting

### BMAD not working?

```bash
# Check installation
npm run bmad:status

# Reinstall
npm run bmad:install

# Verify bmad/ folder exists
ls -la bmad/
```

### Agent not loading?

```bash
# Correct path in Claude Code:
@bmad/agents/[agent-name].agent.yaml

# NOT:
@./bmad/agents/...
```

### Workflow not found?

```bash
# Use * prefix
*/workflow-init

# NOT:
/workflow-init or workflow-init
```

---

## 📖 Additional Resources

### BMAD-METHOD
- **Docs:** https://github.com/bmad-code-org/BMAD-METHOD
- **Discord:** https://discord.gg/gk8jAdXWmj
- **YouTube:** https://www.youtube.com/@BMadCode

### Astro
- **Docs:** https://docs.astro.build
- **Discord:** https://astro.build/chat

### Claude Code
- **Docs:** https://docs.claude.com/claude-code
- **GitHub:** https://github.com/anthropics/claude-code

---

## 🎉 Quick Tips

1. **Always start with BMad Master**
   - Best entry point for all workflows
   - Helps you choose the right agent

2. **Use Party Mode for complex features**
   - Multiple expert perspectives
   - Better solutions

3. **Customize agents to your style**
   - Edit `bmad/_cfg/agents/`
   - Changes persist through updates

4. **Leverage scale-adaptive planning**
   - Don't over-plan small features
   - Let BMAD decide the right depth

5. **Commit frequently with BMAD**
   - BMAD can guide commit messages
   - Maintains clear project history

---

**Ready to build? Run `npm run setup` and load the BMad Master agent in Claude Code!** 🚀
