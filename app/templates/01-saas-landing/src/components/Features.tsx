import { motion } from 'motion/react';
import { Zap, Shield, Rocket, Code, Database, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with Astro 5 for optimal performance. <50ms TTFB with Cloudflare Pages.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Clerk authentication with multi-factor auth, session management, and user profiles.',
  },
  {
    icon: Rocket,
    title: 'Deploy in Minutes',
    description: 'One-click deploy to Cloudflare, Netlify, or Vercel. Zero configuration needed.',
  },
  {
    icon: Code,
    title: 'Modern Stack',
    description: 'React 19, Tailwind 4, Motion 12, and GSAP for beautiful animations.',
  },
  {
    icon: Database,
    title: 'Backend Included',
    description: 'Convex backend with real-time database, file storage, and serverless functions.',
  },
  {
    icon: Globe,
    title: 'SEO Optimized',
    description: 'Perfect Lighthouse scores out of the box. Meta tags, sitemaps, and structured data.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Everything You Need to
              <span className="gradient-text"> Ship Fast</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A complete stack with authentication, database, payments, and more.
              Stop wasting time on boilerplate.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={item}
                className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
              >
                {/* Gradient on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
