'use client';

import StockSearch from '../components/stock/StockSearch';
import StockCard from '../components/stock/StockCard';
import WatchlistSection from '../components/layout/WatchlistSection';
import { fetchStocks } from '../lib/api';
import Logo from '../components/ui/Logo';
import ParallaxBackground from '../components/visual/ParallaxBackground';
import StatsSection from '../components/layout/StatsSection';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Stock } from '../types/stock';

export default function Home() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    const loadStocks = async () => {
      const data = await fetchStocks();
      setStocks(data);
    };
    loadStocks();
  }, []);

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
                {stocks.map((stock, index) => (
                  <motion.div
                    key={stock.symbol}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <StockCard stock={stock} />
                  </motion.div>
                ))}
              </div>
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