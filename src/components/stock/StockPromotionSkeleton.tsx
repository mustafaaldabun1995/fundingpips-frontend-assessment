export default function StockPromotionSkeleton() {
  return (
    <div className="bg-white/80 dark:bg-[#000042]/80 rounded-lg p-8 flex items-center justify-between mb-12">
      <div className="w-2/3">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-6"></div>
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
      </div>
      <div className="hidden lg:block w-1/3">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
      </div>
    </div>
  );
} 