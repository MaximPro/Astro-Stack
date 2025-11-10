import { atom } from 'nanostores';

// Theme store - Framework agnostic
export const theme = atom<'light' | 'dark'>('light');

// Toggle theme helper
export function toggleTheme() {
  theme.set(theme.get() === 'light' ? 'dark' : 'light');
}

// Initialize theme from localStorage (client-side only)
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  if (savedTheme) {
    theme.set(savedTheme);
  } else {
    // Detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme.set(prefersDark ? 'dark' : 'light');
  }

  // Persist theme changes
  theme.subscribe((value) => {
    localStorage.setItem('theme', value);
    document.documentElement.classList.toggle('dark', value === 'dark');
  });
}
