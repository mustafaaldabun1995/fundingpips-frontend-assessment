'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useThemeStore } from '../store/theme';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { isDarkMode, initializeTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    initializeTheme();
    setMounted(true);
  }, [initializeTheme]);

  // Handle theme changes
  useEffect(() => {
    if (!mounted) return;

    // Set initial theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      useThemeStore.setState({ isDarkMode: e.matches });
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [isDarkMode, mounted]);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return <>{children}</>;
} 