import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import StockInfoClient from './StockInfoClient';

interface StockInfoProps {
  stock: {
    symbol: string;
    price: number;
    marketCap: number;
    volume: number;
    change: number;
    changePercent: number;
    high: number;
    low: number;
  };
}

export default function StockInfo({ stock }: StockInfoProps) {
  const isPositiveChange = stock.change >= 0;
  const changeColor = isPositiveChange ? 'text-green-500' : 'text-red-500';
  const formattedMarketCap = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2
  }).format(stock.marketCap);

  return (
    <StockInfoClient>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Price of {stock.symbol} today
      </h2>

      <div className="text-gray-600 dark:text-gray-300 mb-8">
        The live price of {stock.symbol} is ${stock.price.toLocaleString()} with a current market cap of {formattedMarketCap}.
        24-hour trading volume is ${stock.volume.toLocaleString()}. {stock.symbol} price is {isPositiveChange ? 'up' : 'down'} {Math.abs(stock.changePercent).toFixed(2)}% in the last 24 hours.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/30 dark:bg-white/5 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Today's Change</div>
          <div className={`text-xl font-semibold ${changeColor} flex items-center gap-1`}>
            {isPositiveChange ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
            ${Math.abs(stock.change).toFixed(2)}
            <span className="ml-1">
              ({Math.abs(stock.changePercent).toFixed(2)}%)
            </span>
          </div>
        </div>

        <div className="bg-white/30 dark:bg-white/5 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">24h High</div>
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            ${stock.high.toLocaleString()}
          </div>
        </div>

        <div className="bg-white/30 dark:bg-white/5 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">24h Low</div>
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            ${stock.low.toLocaleString()}
          </div>
        </div>

        <div className="bg-white/30 dark:bg-white/5 rounded-lg p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Market Cap</div>
          <div className="text-xl font-semibold text-gray-900 dark:text-white">
            {formattedMarketCap}
          </div>
        </div>
      </div>
    </StockInfoClient>
  );
} 