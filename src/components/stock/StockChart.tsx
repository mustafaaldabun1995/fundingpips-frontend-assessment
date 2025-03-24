'use client';

import { StockHistory } from '../../lib/api';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import { Period, getPriceInterval, getXAxisInterval, formatDate, getFilteredHistory } from '../../utils/stock';

interface StockChartProps {
  history: StockHistory[];
  selectedPeriod: Period;
}

export default function StockChart({ history, selectedPeriod }: StockChartProps) {
  const filteredHistory = getFilteredHistory(history, selectedPeriod);

  const minPrice = filteredHistory.length ? Math.min(...filteredHistory.map(h => h.close)) : 0;
  const maxPrice = filteredHistory.length ? Math.max(...filteredHistory.map(h => h.close)) : 0;
  const priceDiff = maxPrice - minPrice;
  
  const yAxisMin = Math.floor(minPrice - (priceDiff * 0.05));
  const yAxisMax = Math.ceil(maxPrice + (priceDiff * 0.05));
  
  const priceInterval = getPriceInterval(yAxisMin, yAxisMax);
  const yAxisTicks = [];
  for (let price = yAxisMin; price <= yAxisMax; price += priceInterval) {
    yAxisTicks.push(Number(price.toFixed(2)));
  }

  const xAxisInterval = getXAxisInterval(filteredHistory.length, selectedPeriod);

  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={filteredHistory}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            stroke="#666"
            tickFormatter={(str) => formatDate(str, selectedPeriod)}
            tick={{ fill: '#666' }}
            interval={xAxisInterval}
          />
          <YAxis
            stroke="#666"
            tickFormatter={(value) => `$${value.toFixed(2)}`}
            tick={{ fill: '#666' }}
            domain={[yAxisMin, yAxisMax]}
            ticks={yAxisTicks}
            allowDecimals={true}
          />
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
            labelFormatter={(date) => new Date(date).toLocaleDateString()}
          />
          <Area
            type="monotone"
            dataKey="close"
            stroke="#3B82F6"
            fill="url(#colorPrice)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
} 