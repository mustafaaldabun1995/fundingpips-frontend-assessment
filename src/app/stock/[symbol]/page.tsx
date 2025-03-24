import { getStockQuote, getStockHistory } from '../../../lib/api';
import { notFound } from 'next/navigation';
import StockDetailClient from '../../../components/stock/StockDetailClient';

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

    return <StockDetailClient initialStock={initialStock} initialHistory={initialHistory} symbol={symbol} />;
  } catch (error) {
    throw new Error(`Failed to load stock data for ${symbol}`);
  }
} 