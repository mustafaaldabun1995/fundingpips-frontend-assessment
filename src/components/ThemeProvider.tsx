'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useThemeStore } from '../store/theme';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { isDarkMode, initializeTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    initializeTheme();
    setMounted(true);
  }, [initializeTheme]);

  useEffect(() => {
    if (!mounted) return;

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      useThemeStore.setState({ isDarkMode: e.matches });
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [isDarkMode, mounted]);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
} 