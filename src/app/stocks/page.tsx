import StockSearch from '@/components/StockSearch';

export default function StocksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Stocks</h1>
      <StockSearch />
    </div>
  );
} 