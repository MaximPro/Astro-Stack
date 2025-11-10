import { motion } from 'framer-motion';
import { slideUp, fadeIn, staggerContainer } from '@/lib/framer-variants';

interface HeroContentProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

export default function HeroContent({
  headline,
  subheadline,
  ctaText,
  ctaLink,
}: HeroContentProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="hero-content"
    >
      <motion.h1 variants={slideUp} className="hero-content__headline">
        {headline}
      </motion.h1>

      <motion.p variants={fadeIn} className="hero-content__subheadline">
        {subheadline}
      </motion.p>

      <motion.div variants={slideUp} className="hero-content__cta">
        <motion.a
          href={ctaLink}
          className="btn btn-primary btn-large"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          {ctaText}
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
