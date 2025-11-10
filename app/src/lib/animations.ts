import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import type Lenis from '@studio-freight/lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Initialize GSAP with Lenis integration
export function initGSAPWithLenis() {
  if (typeof window === 'undefined') return;

  const lenis = (window as any).lenis as Lenis | undefined;

  if (lenis) {
    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }
}

// Hero parallax animation
export function heroParallax(selector: string) {
  const element = document.querySelector(selector);
  if (!element) return;

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
    y: 200,
    scale: 1.1,
    opacity: 0.3,
    ease: 'none',
  });
}

// Fade in on scroll animation
export function fadeInOnScroll(selector: string, options?: { stagger?: number }) {
  const elements = gsap.utils.toArray(selector);

  elements.forEach((element) => {
    gsap.from(element as gsap.TweenTarget, {
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start: 'top 85%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
  });

  // Add stagger if multiple elements
  if (options?.stagger && elements.length > 1) {
    gsap.from(elements as gsap.TweenTarget[], {
      scrollTrigger: {
        trigger: elements[0] as gsap.DOMTarget,
        start: 'top 85%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: options.stagger,
      ease: 'power3.out',
    });
  }
}

// Slide in animation
export function slideInOnScroll(
  selector: string,
  direction: 'left' | 'right' = 'left',
) {
  const elements = gsap.utils.toArray(selector);

  elements.forEach((element) => {
    gsap.from(element as gsap.TweenTarget, {
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      x: direction === 'left' ? -100 : 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
    });
  });
}

// Scale on scroll
export function scaleOnScroll(selector: string) {
  const element = document.querySelector(selector);
  if (!element) return;

  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.4)',
  });
}

// Pin section (for showcases)
export function pinSection(selector: string, options?: { duration?: string }) {
  const element = document.querySelector(selector);
  if (!element) return;

  ScrollTrigger.create({
    trigger: element,
    start: 'top top',
    end: options?.duration || '+=1000',
    pin: true,
    pinSpacing: true,
  });
}

// Text reveal animation (character by character)
export function textReveal(selector: string) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    const text = element.textContent || '';
    element.textContent = '';

    const chars = text.split('');
    chars.forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      element.appendChild(span);
    });

    gsap.from(element.children, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
      },
      opacity: 0,
      y: 20,
      rotationX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out(1.5)',
    });
  });
}

// Counter animation (for stats)
export function counterAnimation(selector: string, target: number) {
  const element = document.querySelector(selector);
  if (!element) return;

  const counter = { value: 0 };

  ScrollTrigger.create({
    trigger: element,
    start: 'top 80%',
    onEnter: () => {
      gsap.to(counter, {
        value: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          element.textContent = Math.round(counter.value).toLocaleString();
        },
      });
    },
  });
}

// Cleanup function
export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
