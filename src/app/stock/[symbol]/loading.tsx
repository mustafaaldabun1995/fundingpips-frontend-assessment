import StockDetailClientSkeleton from '../../../components/stock/StockDetailClientSkeleton';
import StockInfoSkeleton from '../../../components/stock/StockInfoSkeleton';
import StockActionsSkeleton from '../../../components/stock/StockActionsSkeleton';
import StockPromotionSkeleton from '../../../components/stock/StockPromotionSkeleton';
import BuyFormSkeleton from '../../../components/stock/BuyFormSkeleton';
import TrendingCryptosSkeleton from '../../../components/stock/TrendingCryptosSkeleton';
import TopGainersSkeleton from '../../../components/stock/TopGainersSkeleton';
import TopLosersSkeleton from '../../../components/stock/TopLosersSkeleton';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StockDetailClientSkeleton />
          <StockInfoSkeleton />
          <StockActionsSkeleton />
          <StockPromotionSkeleton />
        </div>
        <div className="space-y-6">
          <BuyFormSkeleton />
          <TrendingCryptosSkeleton />
          <TopGainersSkeleton />
          <TopLosersSkeleton />
        </div>
      </div>
    </div>
  );
} 