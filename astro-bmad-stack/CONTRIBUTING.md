# Contributing to Astro BMAD Stack

Thank you for your interest in contributing! 🎉

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm or pnpm
- Git
- Claude Code (recommended)

### Setup

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/astro-bmad-stack.git
cd astro-bmad-stack

# Install dependencies + BMAD-METHOD
npm run setup

# Start development
npm run dev
```

## Development Workflow

### Using BMAD-METHOD (Recommended)

We encourage using BMAD-METHOD for contributions:

```bash
# In Claude Code
@bmad/agents/bmad-master.agent.yaml
*/workflow-init

# Choose appropriate workflow:
# - Quick Flow: Small features/bug fixes
# - BMad Method: New features/templates
# - Party Mode: Complex features (multiple agents)
```

### Manual Development

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes
# ...

# Check types
npm run check

# Build
npm run build

# Commit
git commit -m "feat: your feature description"

# Push
git push origin feature/your-feature-name
```

## Contribution Types

### 1. Bug Fixes

- Use GitHub issue template: "Bug Report"
- Reference issue number in PR
- Add tests if applicable
- Use **Quick Flow** workflow

### 2. New Features

- Open a "Feature Request" issue first
- Discuss implementation approach
- Use **BMad Method** workflow
- Update documentation
- Add examples if applicable

### 3. Documentation

- Fix typos, improve clarity
- Add examples and use cases
- Use **Tech Writer** agent
- Keep style consistent

### 4. Templates

- Create in `templates/` directory
- Include comprehensive README
- Add to main documentation
- Use **BMad Method** workflow

### 5. BMAD Workflows

- Custom workflows go in `bmad/_cfg/workflows/`
- Document usage clearly
- Test thoroughly
- Share in PR description

## Code Style

### TypeScript

- Use strict mode
- Prefer type inference
- Document complex types
- Use path aliases (`@/components`)

### React Components

- Functional components only
- TypeScript for props
- Use Motion for animations
- Follow shadcn/ui patterns

### Astro Pages

- Use TypeScript in frontmatter
- SEO meta tags required
- Accessibility (WCAG AA)
- Performance optimized

### CSS/Tailwind

- Utility-first approach
- Use CSS variables for theming
- Dark mode support
- Mobile-first responsive

## Commit Messages

Follow conventional commits:

```
feat: add new landing page template
fix: resolve navigation bug on mobile
docs: update BMAD workflow guide
style: format code with Biome
refactor: optimize image loading
test: add unit tests for utils
chore: update dependencies
```

**Scopes (optional):**
```
feat(templates): add e-commerce template
fix(components): button hover state
docs(bmad): clarify workflow usage
```

## Pull Request Process

### 1. Before Submitting

- [ ] Code follows style guidelines
- [ ] Type checking passes (`npm run check`)
- [ ] Build successful (`npm run build`)
- [ ] Linter passes (Biome)
- [ ] Documentation updated
- [ ] Self-review completed

### 2. PR Template

Fill out the PR template completely:
- Description of changes
- Type of change
- Related issues
- BMAD workflow used (if any)
- Testing performed
- Screenshots (if UI changes)

### 3. Review Process

- Maintainers will review within 48 hours
- Address feedback promptly
- Keep PR focused and scoped
- Squash commits if requested

### 4. After Merge

- Delete your branch
- Update your fork
- Celebrate! 🎉

## Project Structure

```
astro-bmad-stack/
├── src/              # Source code
│   ├── components/   # React components
│   ├── layouts/      # Astro layouts
│   ├── pages/        # Routes
│   ├── lib/          # Utilities
│   └── styles/       # Global CSS
├── public/           # Static assets
├── bmad/             # BMAD-METHOD (auto-generated)
├── .github/          # GitHub configs
└── docs/             # Additional documentation
```

## Testing

### Type Checking

```bash
npm run check
```

### Build Testing

```bash
npm run build
npm run preview
```

### Linting

```bash
npx @biomejs/biome check .
npx @biomejs/biome check --apply .  # Fix issues
```

## BMAD-METHOD Guidelines

### Agent Usage

| Agent | Use For |
|-------|---------|
| BMad Master | Starting point, workflow routing |
| PM | Requirements, user stories |
| Architect | Technical design, architecture |
| Developer | Implementation, code review |
| UX Designer | User experience, design |
| Tech Writer | Documentation |
| Test Architect | Testing strategy |

### Workflow Selection

| Workflow | When to Use |
|----------|-------------|
| **Quick Flow** | Bug fixes, small features, single components |
| **BMad Method** | New templates, features, integrations |
| **Enterprise** | Complex systems, compliance requirements |
| **Party Mode** | Multi-agent collaboration for complex features |

## Documentation Standards

### Code Comments

```typescript
/**
 * Utility function to combine class names
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### README Updates

- Keep examples up-to-date
- Add new features to feature list
- Update Quick Start if needed
- Maintain table of contents

### BMAD Documentation

- Document custom workflows
- Explain agent customizations
- Provide usage examples
- Keep `.claude/README.md` current

## Release Process

(For maintainers)

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create release branch
4. Tag release: `git tag v1.x.x`
5. Push: `git push --tags`
6. GitHub Actions handles deployment

## Questions?

- Open a "BMAD Question" issue
- Join Discord: https://discord.gg/gk8jAdXWmj
- Check documentation: `.claude/README.md`

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for making Astro BMAD Stack better!** 🚀
