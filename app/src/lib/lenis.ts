import Lenis from '@studio-freight/lenis';

// Initialize Lenis Smooth Scroll
export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2, // Smooth scroll duration
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  // Request animation frame loop
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Expose lenis instance globally for GSAP ScrollTrigger integration
  if (typeof window !== 'undefined') {
    (window as any).lenis = lenis;
  }

  return lenis;
}

// Scroll to target element
export function scrollToElement(target: string | HTMLElement, options?: { offset?: number }) {
  if (typeof window === 'undefined') return;

  const lenis = (window as any).lenis as Lenis | undefined;
  if (!lenis) {
    console.warn('Lenis not initialized');
    return;
  }

  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) {
    console.warn('Target element not found:', target);
    return;
  }

  lenis.scrollTo(element as HTMLElement, {
    offset: options?.offset || 0,
    duration: 1.5,
  });
}

// Scroll to top
export function scrollToTop() {
  if (typeof window === 'undefined') return;

  const lenis = (window as any).lenis as Lenis | undefined;
  if (!lenis) {
    console.warn('Lenis not initialized');
    return;
  }

  lenis.scrollTo(0, { duration: 1.5 });
}

// Stop smooth scroll (useful for modals)
export function stopScroll() {
  if (typeof window === 'undefined') return;

  const lenis = (window as any).lenis as Lenis | undefined;
  if (lenis) {
    lenis.stop();
  }
}

// Resume smooth scroll
export function startScroll() {
  if (typeof window === 'undefined') return;

  const lenis = (window as any).lenis as Lenis | undefined;
  if (lenis) {
    lenis.start();
  }
}
