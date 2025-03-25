'use client';

import { Stock } from '../../types/stock';
import { motion } from 'framer-motion';
import { useWatchlistStore } from '../../store/watchlist';
import { useRouter } from 'next/navigation';

interface StockCardProps {
  stock: Stock;
}

export default function StockCard({ stock }: StockCardProps) {
  const { addToWatchlist, removeFromWatchlist, watchlist } = useWatchlistStore();
  const router = useRouter();
  const isInWatchlist = watchlist.some(s => s.symbol === stock.symbol);

  const handleClick = (e: React.MouseEvent) => {
    // Prevent navigation if clicking the watchlist button
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    router.push(`/stock/${stock.symbol}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent rounded-xl blur-xl" />
      
      <div className="relative p-6 bg-white/20 dark:bg-[#000042]/20 backdrop-blur-xs rounded-xl border border-white/40 dark:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/10 dark:to-transparent rounded-xl" />
        
        <div className="relative">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{stock.symbol}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stock.name}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                isInWatchlist ? removeFromWatchlist(stock) : addToWatchlist(stock);
              }}
              className="p-2 rounded-full bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 transition-colors backdrop-blur-md"
            >
              <svg
                className={`w-5 h-5 ${isInWatchlist ? 'text-blue-500' : 'text-gray-400'}`}
                fill={isInWatchlist ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Price</span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                ${stock.price.toFixed(2)}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Change</span>
              <span className={`text-lg font-semibold ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Market Cap</span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                ${(stock.marketCap / 1e9).toFixed(2)}B
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 