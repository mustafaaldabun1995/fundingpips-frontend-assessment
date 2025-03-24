interface StockPageProps {
  params: {
    ticker: string;
  };
}

export default function StockPage({ params }: StockPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Stock Details: {params.ticker}</h1>
      {/* Stock details will go here */}
    </div>
  );
} 