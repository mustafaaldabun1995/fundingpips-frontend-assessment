'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <div ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Background layers with parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5"
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          opacity: 0.1,
        }} />
      </motion.div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4"
            >
              767,797
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8"
            >
              USERS TRUST US
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-lg blur-xl" />
            <div className="relative px-8 py-4 bg-white/10 dark:bg-[#000042]/10 backdrop-blur-xl rounded-lg border border-white/20 dark:border-white/10">
              <p className="text-xl text-gray-900 dark:text-white font-medium">
                Built by traders <span className="text-blue-600 dark:text-blue-400">→</span> for traders
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 