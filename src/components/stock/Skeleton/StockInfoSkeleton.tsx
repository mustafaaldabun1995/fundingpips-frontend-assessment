export default function StockInfoSkeleton() {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent rounded-xl blur-xl" />
      
      <div className="relative bg-white/20 dark:bg-[#000042]/20 backdrop-blur-xs rounded-xl border border-white/40 dark:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/10 dark:to-transparent rounded-xl" />
        
        <div className="relative">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6 animate-pulse"></div>

          <div className="space-y-2 mb-8">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white/30 dark:bg-white/5 rounded-lg p-4">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2 animate-pulse"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 