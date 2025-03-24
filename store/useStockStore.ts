import { create } from 'zustand';
import { Stock } from '@/types';

interface StockStore {
  watchlist: Stock[];
  addToWatchlist: (stock: Stock) => void;
  removeFromWatchlist: (ticker: string) => void;
}

export const useStockStore = create<StockStore>((set) => ({
  watchlist: [],
  addToWatchlist: (stock) =>
    set((state) => ({
      watchlist: [...state.watchlist, stock],
    })),
  removeFromWatchlist: (ticker) =>
    set((state) => ({
      watchlist: state.watchlist.filter((stock) => stock.symbol !== ticker),
    })),
})); 