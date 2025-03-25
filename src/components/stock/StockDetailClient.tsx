'use client';

import { useEffect, useState } from 'react';
import { getStockQuote, StockHistory } from '../../lib/api';
import { Stock } from '../../types/stock';
import { Period } from '../../utils/stock';
import StockChart from './StockChart';
import { motion } from 'framer-motion';

interface StockDetailClientProps {
  initialStock: Stock;
  initialHistory: StockHistory[];
  symbol: string;
}

export default function StockDetailClient({ initialStock, initialHistory, symbol }: StockDetailClientProps) {
  const [stock, setStock] = useState<Stock>(initialStock);
  const [history] = useState<StockHistory[]>(initialHistory);
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('1M');

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const stockData = await getStockQuote(symbol);
        setStock(stockData);
      } catch (err) {
        console.error('Error updating quote:', err);
      }
    }, 60000);
    
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 dark:bg-[#000042]/80 backdrop-blur-sm rounded-xl shadow-lg p-8"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{stock.symbol}</h1>
                <p className="text-gray-600 dark:text-gray-300">{stock.name}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${stock.price.toFixed(2)}
                </p>
                <p className={`text-lg ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex gap-4 mb-6">
                {(['7D', '1M', '3M', '6M', '1Y'] as const).map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      selectedPeriod === period
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-900 dark:text-white bg-white/50 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
              
              <StockChart history={history} selectedPeriod={selectedPeriod} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 dark:bg-white/10 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Last Updated</h3>
                <p className="text-gray-600 dark:text-gray-300">{stock.lastUpdated}</p>
              </div>
              <div className="bg-white/50 dark:bg-white/10 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Market Status</h3>
                <p className="text-gray-600 dark:text-gray-300">Open</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 