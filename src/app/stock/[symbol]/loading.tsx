export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      {/* StockDetailClient skeleton */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="flex-grow">
          <div className="bg-white/80 dark:bg-[#000042]/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
              </div>
              <div className="text-right">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex gap-4 mb-6">
                {['7D', '1M', '3M', '6M', '1Y'].map((period) => (
                  <div
                    key={period}
                    className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded"
                  />
                ))}
              </div>
              
              <div className="h-[400px] bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 dark:bg-white/10 rounded-lg p-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
              </div>
              <div className="bg-white/50 dark:bg-white/10 rounded-lg p-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-96">
          <div className="bg-white/80 dark:bg-[#000042]/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
            <div className="space-y-4">
              <div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 mb-2"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 mb-2"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              </div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* StockActions skeleton */}
      <div className="mb-8">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 bg-white/80 dark:bg-[#000042]/80 rounded-lg flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
          </div>
        ))}
      </div>

      {/* StockPromotion skeleton */}
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
    </div>
  );
} 