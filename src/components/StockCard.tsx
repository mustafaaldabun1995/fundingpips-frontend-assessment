'use client';

import { Stock } from '../types/stock';
import { useWatchlistStore } from '../store/watchlist';
import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

interface StockCardProps {
  stock: Stock;
}

export default function StockCard({ stock }: StockCardProps) {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlistStore();

  const handleWatchlistToggle = () => {
    if (isInWatchlist(stock.symbol)) {
      removeFromWatchlist(stock.symbol);
    } else {
      addToWatchlist(stock);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{stock.symbol}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{stock.name}</p>
        </div>
        <button
          onClick={handleWatchlistToggle}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
        >
          {isInWatchlist(stock.symbol) ? (
            <StarIconSolid className="h-5 w-5 text-yellow-400" />
          ) : (
            <StarIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          )}
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Price:</span>
          <span className="font-medium text-gray-900 dark:text-white">${stock.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Change:</span>
          <span className={`font-medium ${stock.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Volume:</span>
          <span className="font-medium text-gray-900 dark:text-white">{stock.volume.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
} 