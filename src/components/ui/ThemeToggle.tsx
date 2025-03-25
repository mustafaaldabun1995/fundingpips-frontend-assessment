'use client';

import { useThemeStore } from '../../store/theme';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <SunIcon className="h-5 w-5 text-gray-400" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-600" />
      )}
    </button>
  );
} 