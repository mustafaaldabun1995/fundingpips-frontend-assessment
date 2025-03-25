export default function StockPromotion({ symbol }: { symbol: string }) {
  return (
    <div className="relative group mb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent rounded-xl blur-xl" />
      
      <div className="relative bg-[#dfebfe]/40 dark:bg-[#000042]/20 backdrop-blur-xs rounded-xl border border-white/40 dark:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-8 flex items-center justify-between">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/10 dark:to-transparent rounded-xl" />
        
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Trade {symbol} Stock</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            Get started with stock trading on our platform. Access real-time market data,
            advanced charts, and professional trading tools.
          </p>
          <button className="mt-6 bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors backdrop-blur-sm">
            Start Trading
          </button>
        </div>
        
        <div className="hidden lg:block w-1/3 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-lg"></div>
          <svg
            viewBox="0 0 200 100"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <g transform="translate(0, 0)">
              {[
                { x: 20, open: 60, close: 75, high: 80, low: 55 },
                { x: 50, open: 75, close: 65, high: 78, low: 63 },
                { x: 80, open: 75, close: 55, high: 50, low: 80 },
                { x: 110, open: 75, close: 40, high: 80, low: 35 },
                { x: 140, open: 70, close: 30, high: 15, low: 78 },
                { x: 170, open: 60, close: 15, high: 5, low: 75 }
              ].map((candle, i) => (
                <g key={i}>
                  <line
                    x1={candle.x}
                    y1={candle.high}
                    x2={candle.x}
                    y2={candle.low}
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-blue-500/40"
                  />
                  <rect
                    x={candle.x - 5}
                    y={Math.min(candle.open, candle.close)}
                    width="10"
                    height={Math.abs(candle.close - candle.open)}
                    className={`${candle.close >= candle.open ? 'text-blue-500' : 'text-blue-500/70'} fill-current`}
                  />
                </g>
              ))}
            </g>
            <path
              d="M20,70 C50,65 80,75 170,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-blue-500/30"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}