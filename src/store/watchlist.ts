import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Stock } from '../types/stock';

interface WatchlistState {
  watchlist: Stock[];
  addToWatchlist: (stock: Stock) => void;
  removeFromWatchlist: (stock: Stock) => void;
  clearWatchlist: () => void;
}

export const useWatchlistStore = create<WatchlistState>()(
  persist(
    (set) => ({
      watchlist: [],
      addToWatchlist: (stock) =>
        set((state) => ({
          watchlist: [...state.watchlist, stock],
        })),
      removeFromWatchlist: (stock) =>
        set((state) => ({
          watchlist: state.watchlist.filter((s) => s.symbol !== stock.symbol),
        })),
      clearWatchlist: () => set({ watchlist: [] }),
    }),
    {
      name: 'watchlist-storage',
    }
  )
); 