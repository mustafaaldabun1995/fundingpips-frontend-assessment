export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: number;
  volume: number;
  lastUpdated?: string;
  high: number;
  low: number;
}

export interface StockSearchResult {
  symbol: string;
  name: string;
  exchange: string;
} 