import StockDetailClientSkeleton from '../../../components/stock/Skeleton/StockDetailClientSkeleton';
import StockInfoSkeleton from '../../../components/stock/Skeleton/StockInfoSkeleton';
import StockActionsSkeleton from '../../../components/stock/Skeleton/StockActionsSkeleton';
import StockPromotionSkeleton from '../../../components/stock/Skeleton/StockPromotionSkeleton';
import BuyFormSkeleton from '../../../components/stock/Skeleton/BuyFormSkeleton';
import TrendingCryptosSkeleton from '../../../components/stock/Skeleton/TrendingCryptosSkeleton';
import TopGainersSkeleton from '../../../components/stock/Skeleton/TopGainersSkeleton';
import TopLosersSkeleton from '../../../components/stock/Skeleton/TopLosersSkeleton';

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