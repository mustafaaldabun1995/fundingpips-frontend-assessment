import { TrendingUp, PieChart, BarChart3 } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface StockActionCardProps { 
  title: string; 
  description: string; 
  buttonText: string; 
  icon: LucideIcon;
}

const StockActionCard = ({ 
  title, 
  description, 
  buttonText, 
  icon: Icon 
}: StockActionCardProps) => {
  return (
    <div className="relative group h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent rounded-xl blur-xl" />
      
      <div className="relative p-6 bg-white/20 dark:bg-[#000042]/20 backdrop-blur-xs rounded-xl border border-white/40 dark:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] h-full flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/10 dark:to-transparent rounded-xl" />
        
        <div className="relative">
          <div className="mb-4 p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-full w-max mx-auto">
            <Icon className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{description}</p>
          <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors backdrop-blur-sm">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function StockActions({ symbol }: { symbol: string }) {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          What Can You Do With {symbol}?
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore how to manage your stock investments with our platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StockActionCard
          title="Trade"
          description="Buy and sell stocks with advanced trading tools and real-time market data."
          buttonText="Trade Now"
          icon={TrendingUp}
        />
        <StockActionCard
          title="Analyze"
          description="Access detailed technical analysis, charts, market insights and more."
          buttonText="Analyze"
          icon={BarChart3}
        />
        <StockActionCard
          title="Portfolio"
          description="Track your investments, monitor and manage your portfolio."
          buttonText="View Portfolio"
          icon={PieChart}
        />
      </div>
    </>
  );
} 