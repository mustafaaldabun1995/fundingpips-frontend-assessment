'use client';

import { motion } from 'framer-motion';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { FaEthereum } from 'react-icons/fa';
import { SiDogecoin, SiCardano } from 'react-icons/si';
import { RiNftFill } from 'react-icons/ri';

const trendingCryptos = [
  { icon: BsCurrencyBitcoin, name: 'BNB', symbol: 'BNB', price: 638.95, change: 2.98 },
  { icon: FaEthereum, name: 'Ethereum', symbol: 'ETH', price: 2067.75, change: 4.15 },
  { icon: SiDogecoin, name: 'Dogecoin', symbol: 'DOGE', price: 0.186681, change: 8.76 },
  { icon: SiCardano, name: 'Cardano', symbol: 'ADA', price: 0.733902, change: 3.62 },
  { icon: RiNftFill, name: 'Nillion', symbol: 'NIL', price: 0.714878, change: -20.28 },
];

export default function TrendingCryptos() {
  return (
    <div className="relative group mb-4">
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent rounded-xl blur-xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white/20 dark:bg-[#000042]/20 backdrop-blur-xs rounded-xl border border-white/40 dark:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/10 dark:to-transparent rounded-xl" />
        
        <div className="relative">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Trending cryptos
          </h2>
          <div className="space-y-4">
            {trendingCryptos.map((crypto) => (
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
                  <p className={`text-sm ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.change >= 0 ? '+' : ''}{crypto.change}%
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