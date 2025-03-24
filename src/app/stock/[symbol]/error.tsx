'use client';

import { useEffect } from 'react';
import Logo from '../../../components/Logo';
import ParallaxBackground from '../../../components/ParallaxBackground';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen relative">
      <ParallaxBackground />
      
      <div className="relative z-10">
        <header className="bg-white/80 dark:bg-[#000042]/80 backdrop-blur-sm shadow-sm sticky top-0 z-20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center">
              <Logo />
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="bg-white/80 dark:bg-[#000042]/80 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Something went wrong!
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {error.message || 'Failed to load stock data'}
            </p>
            <button
              onClick={reset}
              className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 