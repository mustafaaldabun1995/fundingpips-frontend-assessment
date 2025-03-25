'use client';

import { useWatchlistStore } from '../../store/watchlist';
import StockCard from '../stock/StockCard';
import { motion } from 'framer-motion';

export default function WatchlistSection() {
  const { watchlist, clearWatchlist } = useWatchlistStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent rounded-xl blur-2xl" />
      
      <div className="relative p-6 bg-[#dfebfe]/30 dark:bg-[#000042]/20 backdrop-blur-xl rounded-xl border border-white/40 dark:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] mt-14">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/10 dark:to-transparent rounded-xl" />
        
        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Watchlist</h2>
            {watchlist.length > 0 && (
              <motion.button
                onClick={clearWatchlist}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-white/20 dark:bg-white/10 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors group"
                title="Clear Watchlist"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-red-500 dark:text-gray-500 dark:group-hover:text-red-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </motion.button>
            )}
          </div>

          {watchlist.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-400">Your watchlist is empty</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Add stocks to your watchlist to track them here
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {watchlist.map((stock) => (
                <motion.div
                  key={stock.symbol}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <StockCard stock={stock} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
} 