import { create } from 'zustand';
import { Stock } from '../types/stock';

interface WatchlistStore {
  watchlist: Stock[];
  addToWatchlist: (stock: Stock) => void;
  removeFromWatchlist: (symbol: string) => void;
  isInWatchlist: (symbol: string) => boolean;
}

export const useWatchlistStore = create<WatchlistStore>((set, get) => ({
  watchlist: [],
  addToWatchlist: (stock) => {
    set((state) => ({
      watchlist: [...state.watchlist, stock],
    }));
  },
  removeFromWatchlist: (symbol) => {
    set((state) => ({
      watchlist: state.watchlist.filter((stock) => stock.symbol !== symbol),
    }));
  },
  isInWatchlist: (symbol) => {
    return get().watchlist.some((stock) => stock.symbol === symbol);
  },
})); 