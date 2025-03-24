'use client';

import { useState } from 'react';
import { StockSearchResult } from '@/types';
import { searchStocks } from '@/lib/api';

export default function StockSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<StockSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const searchResults = await searchStocks(query);
      setResults(searchResults);
    } catch (error) {
      console.error('Error searching stocks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stocks by name or symbol..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((stock) => (
            <div
              key={stock.symbol}
              className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <h3 className="font-semibold">{stock.name}</h3>
              <p className="text-sm text-gray-600">{stock.symbol}</p>
              <p className="text-sm text-gray-500">{stock.exchange}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 