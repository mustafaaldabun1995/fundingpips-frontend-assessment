'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-[#000042] dark:to-[#000042]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-30" />
      </motion.div>
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }} />
      </motion.div>
    </div>
  );
} 