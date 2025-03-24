'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Stock } from '../../../types/stock';

interface BuyFormProps {
  stock: Stock;
}

export default function BuyForm({ stock }: BuyFormProps) {
  const [buyAmount, setBuyAmount] = useState<string>('');

  const handleBuy = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buying:', buyAmount, 'of', stock.symbol);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 dark:bg-[#000042]/80 backdrop-blur-sm rounded-xl shadow-lg p-8"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Buy {stock.symbol}</h2>
        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Trade</button>
      </div>
      
      <form onSubmit={handleBuy}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            You Buy
          </label>
          <div className="relative">
            <input
              type="number"
              value={buyAmount}
              onChange={(e) => setBuyAmount(e.target.value)}
              className="w-full bg-white/50 dark:bg-white/10 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="0"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/50 dark:bg-white/10 rounded-md px-2 py-1">
              <span className="text-gray-900 dark:text-white font-medium">{stock.symbol}</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            You Spend
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full bg-white/50 dark:bg-white/10 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="10 - 50,000"
              readOnly
              value={buyAmount ? `$${(parseFloat(buyAmount) * stock.price).toFixed(2)}` : ''}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/50 dark:bg-white/10 rounded-md px-2 py-1">
              <span className="text-gray-900 dark:text-white font-medium">USD</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-6">
          <span>1 {stock.symbol} = ${stock.price.toFixed(2)}</span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Buy {stock.symbol}
        </button>
      </form>
    </motion.div>
  );
} 