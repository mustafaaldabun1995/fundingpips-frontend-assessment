'use client';

import { motion } from 'framer-motion';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { HiCurrencyDollar } from 'react-icons/hi';
import { SiHiveBlockchain } from 'react-icons/si';

const topGainers = [
  { icon: FaHandHoldingUsd, name: 'Four', symbol: 'FORM', price: 2.491575, change: 27.56 },
  { icon: SiHiveBlockchain, name: 'Hive', symbol: 'HIVE', price: 0.279907, change: 22.27 },
  { icon: HiCurrencyDollar, name: 'Ankr', symbol: 'ANKR', price: 0.020942, change: 19.16 },
];

export default function TopGainers() {
  return (
    <div className="relative group mb-4">
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent rounded-xl blur-xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-[#dfebfe]/40 dark:bg-[#000042]/20 backdrop-blur-xs rounded-xl border border-white/40 dark:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/10 dark:to-transparent rounded-xl" />
        
        <div className="relative">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Top 3 Gainers
          </h2>
          <div className="space-y-4">
            {topGainers.map((crypto) => (
              <div 
                key={crypto.symbol} 
                className="flex items-center justify-between hover:bg-gradient-to-br hover:from-white/10 hover:to-transparent dark:hover:from-white/5 dark:hover:to-transparent p-2 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-white/20 to-white/10 dark:from-white/10 dark:to-transparent backdrop-blur-xs rounded-full">
                    <crypto.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{crypto.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{crypto.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">
                    ${crypto.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-500">
                    +{crypto.change}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
} 