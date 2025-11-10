/**
 * GSAP ScrollSmoother - NOW 100% FREE! 🎉
 *
 * Alternative to Lenis smooth scrolling.
 * ScrollSmoother was previously a premium plugin but is now free thanks to Webflow sponsorship.
 *
 * Features:
 * - Butter-smooth scrolling
 * - Parallax effects via data-speed attributes
 * - Native scrollbar (no fake scrollbars)
 * - Mobile-friendly
 *
 * Usage:
 * import { initScrollSmoother } from '@/lib/gsap-scrollsmoother';
 * initScrollSmoother();
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function initScrollSmoother(options?: {
  smooth?: number;
  effects?: boolean;
  normalizeScroll?: boolean;
  speed?: number;
}) {
  const defaults = {
    smooth: 1.5, // Smoothness in seconds (1-2 recommended)
    effects: true, // Enable data-speed parallax
    normalizeScroll: true, // Handles momentum scrolling on mobile
    speed: 1, // Scroll speed multiplier
    ...options,
  };

  const smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper', // Outer wrapper
    content: '#smooth-content', // Inner content
    smooth: defaults.smooth,
    effects: defaults.effects,
    normalizeScroll: defaults.normalizeScroll,
  });

  // Apply speed multiplier if not 1
  if (defaults.speed !== 1) {
    smoother.scrollTrigger.vars.speed = defaults.speed;
  }

  return smoother;
}

/**
 * HTML Structure Required:
 *
 * <div id="smooth-wrapper">
 *   <div id="smooth-content">
 *     <!-- Your content here -->
 *
 *     <!-- Parallax example -->
 *     <div data-speed="0.5">Slow scroll (background)</div>
 *     <div data-speed="1">Normal speed</div>
 *     <div data-speed="1.5">Fast scroll (foreground)</div>
 *
 *     <!-- Clamp to prevent offset above fold -->
 *     <div data-speed="0.8" data-speed-clamp="true">No offset</div>
 *   </div>
 * </div>
 */

/**
 * Scroll to specific position smoothly
 */
export function scrollSmootherTo(
  target: string | number,
  options?: { duration?: number; offset?: number }
) {
  const smoother = ScrollSmoother.get();
  if (!smoother) {
    console.warn('ScrollSmoother not initialized');
    return;
  }

  smoother.scrollTo(target, true, `top ${options?.offset || 0}px`);
}

/**
 * Pause smooth scrolling (useful for modals)
 */
export function pauseScrollSmoother() {
  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.paused(true);
  }
}

/**
 * Resume smooth scrolling
 */
export function resumeScrollSmoother() {
  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.paused(false);
  }
}

/**
 * Get ScrollSmoother instance
 */
export function getScrollSmoother() {
  return ScrollSmoother.get();
}

/**
 * Example parallax speeds:
 *
 * 0.5  - Background layer (slow)
 * 0.7  - Mid-background
 * 1.0  - Normal speed (no parallax)
 * 1.3  - Foreground
 * 1.5  - Fast foreground
 *
 * Pro tip: Keep speeds between 0.5-1.5 for best results
 */
