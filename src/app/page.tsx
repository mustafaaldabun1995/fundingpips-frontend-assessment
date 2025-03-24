import StockSearch from '../components/StockSearch';
import StockCard from '../components/StockCard';
import { fetchStocks } from '../lib/api';

export default async function Home() {
  const stocks = await fetchStocks();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Track Your Stocks in Real-Time
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Search for any stock by symbol or company name to get instant access to real-time prices, historical data, and market insights.
          </p>
        </div>

        <StockSearch />

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Top Movers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stocks.map((stock) => (
              <StockCard key={stock.symbol} stock={stock} />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-Time Updates</h3>
            <p className="text-gray-600 dark:text-gray-300">Get instant access to live stock prices and market data.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Historical Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300">Analyze price trends and patterns with detailed historical data.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Watchlist</h3>
            <p className="text-gray-600 dark:text-gray-300">Create and manage your personalized stock watchlist.</p>
          </div>
        </div>
      </div>
    </main>
  );
} 