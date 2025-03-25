export default function StockDetailClientSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-12">
      <div className="flex-grow">
        <div className="bg-white/80 dark:bg-[#000042]/80 backdrop-blur-sm rounded-xl shadow-lg lg:p-8">
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
    </div>
  );
} 