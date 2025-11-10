import { atom, computed } from 'nanostores';

// Session tracking for analytics and lead scoring
export const sessionId = atom<string>('');
export const sessionStartTime = atom<number>(0);
export const pageViews = atom<number>(0);
export const scrollDepth = atom<number>(0);

// Initialize session (client-side only)
if (typeof window !== 'undefined') {
  // Generate or retrieve session ID
  let id = sessionStorage.getItem('sessionId');
  if (!id) {
    id = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem('sessionId', id);
  }
  sessionId.set(id);
  sessionStartTime.set(Date.now());

  // Track page views
  pageViews.set((parseInt(sessionStorage.getItem('pageViews') || '0', 10) || 0) + 1);
  sessionStorage.setItem('pageViews', pageViews.get().toString());

  // Track scroll depth
  let maxScrollDepth = 0;
  const updateScrollDepth = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

    if (scrollPercent > maxScrollDepth) {
      maxScrollDepth = scrollPercent;
      scrollDepth.set(scrollPercent);
    }
  };

  window.addEventListener('scroll', updateScrollDepth, { passive: true });
}

// Computed: Session duration in seconds
export const sessionDuration = computed([sessionStartTime], (start) => {
  if (typeof window === 'undefined') return 0;
  return Math.floor((Date.now() - start) / 1000);
});

// Computed: Engagement score (0-100)
export const engagementScore = computed(
  [pageViews, scrollDepth, sessionDuration],
  (views, depth, duration) => {
    const viewScore = Math.min(views * 10, 30); // Max 30 points
    const depthScore = Math.min(depth * 0.4, 40); // Max 40 points
    const durationScore = Math.min(duration * 0.5, 30); // Max 30 points
    return Math.round(viewScore + depthScore + durationScore);
  },
);
