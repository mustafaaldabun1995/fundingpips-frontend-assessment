import { getStockQuote, getStockHistory } from '../../../lib/api';
import { notFound } from 'next/navigation';
import StockDetailClient from '../../../components/stock/StockDetailClient';
import StockActions from '../../../components/stock/StockActions';
import StockPromotion from '../../../components/stock/StockPromotion';
import StockInfo from '../../../components/stock/StockInfo';
import BuyForm from '../../../components/stock/BuyForm';
import TrendingCryptos from '../../../components/stock/TrendingCryptos';
import TopGainers from '../../../components/stock/TopGainers';
import TopLosers from '../../../components/stock/TopLosers';

interface StockPageProps {
  params: {
    symbol: string;
  };
}

export default async function StockDetailPage({ params }: StockPageProps) {
  const symbol = params.symbol;
  
  try {
    const [initialStock, initialHistory] = await Promise.all([
      getStockQuote(symbol),
      getStockHistory(symbol)
    ]);

    if (!initialStock) {
      notFound();
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StockDetailClient initialStock={initialStock} initialHistory={initialHistory} symbol={symbol} />
            <StockInfo stock={{
              symbol,
              price: initialStock.price,
              marketCap: initialStock.marketCap,
              volume: initialStock.volume,
              change: initialStock.change,
              changePercent: initialStock.changePercent,
              high: initialStock.high,
              low: initialStock.low
            }} />
            <StockActions symbol={symbol} />
            <StockPromotion symbol={symbol} />
          </div>
          <div className="space-y-6">
            <BuyForm stock={{
              symbol,
              price: initialStock.price,
              change: initialStock.change,
              changePercent: initialStock.changePercent
            }} />
            <TrendingCryptos />
            <TopGainers />
            <TopLosers />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    throw new Error(`Failed to load stock data for ${symbol}`);
  }
} 