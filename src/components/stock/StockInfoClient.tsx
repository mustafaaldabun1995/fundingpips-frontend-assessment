'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StockInfoClientProps {
  children: ReactNode;
}

export default function StockInfoClient({ children }: StockInfoClientProps) {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent rounded-xl blur-xl" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-[#dfebfe]/40 dark:bg-[#000042]/20 backdrop-blur-xs rounded-xl border border-white/40 dark:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/10 dark:to-transparent rounded-xl" />
        <div className="relative">
          {children}
        </div>
      </motion.div>
    </div>
  );
} 