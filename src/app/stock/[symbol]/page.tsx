import { getStockQuote, getStockHistory } from '../../../lib/api';
import { notFound } from 'next/navigation';
import StockDetailClient from '../../../components/stock/StockDetailClient';
import StockActions from '../../../components/stock/StockActions';
import StockPromotion from '../../../components/stock/StockPromotion';

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
        <StockDetailClient initialStock={initialStock} initialHistory={initialHistory} symbol={symbol} />
        <StockActions symbol={symbol} />
        <StockPromotion symbol={symbol} />
      </div>
    );
  } catch (error) {
    throw new Error(`Failed to load stock data for ${symbol}`);
  }
} 