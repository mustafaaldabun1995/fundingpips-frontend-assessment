import { StockHistory } from '../lib/api';

export type Period = '7D' | '1M' | '3M' | '6M' | '1Y';

export const periods = {
  '7D': 7,
  '1M': 30,
  '3M': 90,
  '6M': 180,
  '1Y': 365
} as const;

export const getPriceInterval = (min: number, max: number) => {
  const range = max - min;
  if (range <= 1) return 0.1;
  if (range <= 5) return 0.5;
  if (range <= 10) return 1;
  if (range <= 50) return 5;
  if (range <= 100) return 10;
  if (range <= 500) return 50;
  if (range <= 1000) return 100;
  return Math.ceil(range / 10);
};

export const getXAxisInterval = (dataLength: number, selectedPeriod: Period, viewportWidth: number) => {
  if (dataLength <= 10) return 0;
  
  if (viewportWidth < 640) {
    if (selectedPeriod === '7D') return Math.floor(dataLength / 2.5);
    if (selectedPeriod === '1M') return Math.floor(dataLength / 4);
    if (selectedPeriod === '3M') return Math.floor(dataLength / 5);
    if (selectedPeriod === '6M') return Math.floor(dataLength / 3);
    return Math.floor(dataLength / 4);
  }
  
  if (selectedPeriod === '7D') return Math.floor(dataLength / 7);
  if (selectedPeriod === '1M') return Math.floor(dataLength / 10);
  if (selectedPeriod === '3M') return Math.floor(dataLength / 12);
  if (selectedPeriod === '6M') return Math.floor(dataLength / 8);
  return Math.floor(dataLength / 10);
};

export const formatDate = (date: string, selectedPeriod: Period) => {
  const d = new Date(date);
  switch (selectedPeriod) {
    case '7D':
      return d.toLocaleDateString(undefined, { weekday: 'short' });
    case '1M':
      return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    case '3M':
    case '6M':
    case '1Y':
      return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    default:
      return d.toLocaleDateString();
  }
};

export const getFilteredHistory = (history: StockHistory[], selectedPeriod: Period) => {
  if (!history.length) return [];
  
  const now = new Date();
  const cutoffDate = new Date(now);
  cutoffDate.setDate(cutoffDate.getDate() - periods[selectedPeriod]);
  
  const filteredData = history.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate >= cutoffDate && itemDate <= now;
  });

  if (selectedPeriod === '3M' || selectedPeriod === '6M' || selectedPeriod === '1Y') {
    const sampleSize = selectedPeriod === '3M' ? 60 : selectedPeriod === '6M' ? 120 : 240;
    const step = Math.max(1, Math.floor(filteredData.length / sampleSize));
    
    return filteredData
      .filter((_, index) => index % step === 0)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }
  return filteredData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}; 