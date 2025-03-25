'use client';

import StockSearch from '../components/stock/StockSearch';
import StockCard from '../components/stock/StockCard';
import WatchlistSection from '../components/layout/WatchlistSection';
import { fetchStocks } from '../lib/api';
import StatsSection from '../components/layout/StatsSection';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Stock } from '../types/stock';

export default function Home() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const loadStocks = async () => {
      const data = await fetchStocks();
      setStocks(data);
    };
    loadStocks();
  }, []);

  const handleViewMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, stocks.length));
  };

  return (
    <main className="min-h-screen relative">
      <div className="relative z-10">
        <StatsSection />
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Track Your Stocks in Real-Time
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Search for any stock by symbol or company name to get instant access to real-time prices, historical data, and market insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StockSearch />
          </motion.div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Top Movers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stocks.slice(0, visibleCount).map((stock) => (
                  <motion.div
                    key={stock.symbol}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <StockCard stock={stock} />
                  </motion.div>
                ))}
              </div>
              {stocks.length > 6 && (
                <div className="flex justify-center gap-4 mt-8">
                  {visibleCount < stocks.length && (
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleViewMore}
                      className="relative group px-8 py-3 rounded-xl bg-white/20 dark:bg-[#000042]/20 backdrop-blur-xs border border-white/40 dark:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent rounded-xl blur-xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/10 dark:to-transparent rounded-xl" />
                      <span className="relative flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                        View More
                        <svg 
                          className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </motion.button>
                  )}
                </div>
              )}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <WatchlistSection />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="p-6 bg-white/80 dark:bg-[#000042]/80 backdrop-blur-sm rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-Time Updates</h3>
              <p className="text-gray-600 dark:text-gray-300">Get instant access to live stock prices and market data.</p>
            </div>
            <div className="p-6 bg-white/80 dark:bg-[#000042]/80 backdrop-blur-sm rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Historical Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">Analyze price trends and patterns with detailed historical data.</p>
            </div>
            <div className="p-6 bg-white/80 dark:bg-[#000042]/80 backdrop-blur-sm rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Watchlist</h3>
              <p className="text-gray-600 dark:text-gray-300">Create and manage your personalized stock watchlist.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 