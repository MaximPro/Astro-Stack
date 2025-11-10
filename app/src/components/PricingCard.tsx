import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCartStore } from '@/stores/ui';
import { fadeInScale } from '@/lib/framer-variants';

interface PricingTier {
  name: string;
  price: number;
  currency?: string;
  period?: string;
  description: string;
  features: string[];
  featured?: boolean;
  ctaText?: string;
}

interface PricingCardProps {
  tier: PricingTier;
  index: number;
}

export default function PricingCard({ tier, index }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { selectPlan } = useCartStore();

  const handleSelectPlan = () => {
    selectPlan(tier.name, tier.price);
    // Track event for lead scoring
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        activityType: 'pricing_view',
        activityData: { plan: tier.name, price: tier.price },
      }),
    }).catch(console.error);
  };

  return (
    <motion.div
      variants={fadeInScale}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
      className={`pricing-card ${tier.featured ? 'pricing-card--featured' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {tier.featured && <div className="pricing-card__badge">Beliebt</div>}

      <div className="pricing-card__header">
        <h3 className="pricing-card__name">{tier.name}</h3>
        <div className="pricing-card__price">
          <span className="pricing-card__currency">{tier.currency || '€'}</span>
          <span className="pricing-card__amount">
            {tier.price.toLocaleString('de-DE')}
          </span>
          {tier.period && (
            <span className="pricing-card__period">/{tier.period}</span>
          )}
        </div>
        <p className="pricing-card__description">{tier.description}</p>
      </div>

      <ul className="pricing-card__features">
        {tier.features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={isHovered ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.05 }}
            className="pricing-card__feature"
          >
            <svg
              className="pricing-card__check"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.666 5L7.5 14.167 3.334 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {feature}
          </motion.li>
        ))}
      </ul>

      <motion.button
        className={`btn ${tier.featured ? 'btn-primary' : 'btn-secondary'} pricing-card__cta`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSelectPlan}
      >
        {tier.ctaText || 'Jetzt anfragen'}
      </motion.button>
    </motion.div>
  );
}
