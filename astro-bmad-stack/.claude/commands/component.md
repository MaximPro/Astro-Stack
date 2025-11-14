---
description: Create a new React component quickly
---

# Create New Component

I'll create a new React component with:

## What I'll Generate

1. **Component File**
   - TypeScript
   - Props interface
   - shadcn/ui style
   - Tailwind styling

2. **Types**
   - Proper TypeScript types
   - Props documentation
   - Variants (if applicable)

3. **Usage Example**
   - How to import
   - Props example
   - Astro integration

## Component Types

Choose one:

### UI Component
- Button, Card, Input, etc.
- Reusable across pages
- Styled with Tailwind
- Variants support (CVA)

### Section Component
- Hero, Features, Pricing, etc.
- Page sections
- Configurable content

### Layout Component
- Header, Footer, Sidebar, etc.
- Navigation
- Structure

### Functional Component
- Form, Modal, Dropdown, etc.
- User interaction
- State management

## Questions

1. **Component name?** (e.g., "PricingCard", "Newsletter", "ContactForm")
2. **Component type?** (UI, Section, Layout, Functional)
3. **Purpose/description?**
4. **Props needed?** (I can suggest based on purpose)
5. **Animations?** (yes/no)

## Example Output

```tsx
// src/components/ui/PricingCard.tsx
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  onCTAClick?: () => void;
}

export function PricingCard({
  title,
  price,
  features,
  highlighted = false,
  ctaText = 'Get Started',
  onCTAClick,
}: PricingCardProps) {
  return (
    <motion.div
      className={cn(
        "p-8 rounded-xl border",
        highlighted && "border-primary scale-105"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Component content */}
    </motion.div>
  );
}
```

## File Location

Components go in:
- `src/components/ui/` - Reusable UI components
- `src/components/sections/` - Page sections
- `src/components/layout/` - Layout components

**Ready! What component do you want to create?**
