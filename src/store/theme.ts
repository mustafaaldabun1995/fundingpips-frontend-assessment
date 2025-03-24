import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeStore {
  isDarkMode: boolean;
  toggleTheme: () => void;
  initializeTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDarkMode: true,
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      initializeTheme: () => {
        if (typeof window !== 'undefined') {
          const savedTheme = localStorage.getItem('theme-storage');
          if (savedTheme) {
            try {
              const { state } = JSON.parse(savedTheme);
              set({ isDarkMode: state.isDarkMode });
              return;
            } catch (error) {
              console.error('Error parsing theme from localStorage:', error);
            }
          }

          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          set({ isDarkMode: prefersDark });
        }
      },
    }),
    {
      name: 'theme-storage',
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        if (state) {
          if (state.isDarkMode) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      },
    }
  )
); 