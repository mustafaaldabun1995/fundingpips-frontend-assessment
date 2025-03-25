export default function BuyFormSkeleton() {
  return (
    <div className="bg-white/80 dark:bg-[#000042]/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="h-7 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>

        <div>
          <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>

        <div className="h-5 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>

        <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
} 