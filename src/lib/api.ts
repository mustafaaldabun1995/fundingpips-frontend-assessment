import { Stock, StockSearchResult } from '../types/stock';

const ALPHA_VANTAGE_API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

export async function fetchStocks(): Promise<Stock[]> {
  try {
    const response = await fetch(
      `${BASE_URL}?function=TOP_GAINERS_LOSERS&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch stocks');
    }

    const topGainers = data.top_gainers.map((stock: any) => ({
      symbol: stock.ticker,
      name: stock.ticker,
      price: parseFloat(stock.price),
      change: parseFloat(stock.change_amount),
      changePercent: parseFloat(stock.change_percentage),
      marketCap: 0,
      volume: parseInt(stock.volume),
    }));

    const topLosers = data.top_losers.map((stock: any) => ({
      symbol: stock.ticker,
      name: stock.ticker,
      price: parseFloat(stock.price),
      change: parseFloat(stock.change_amount),
      changePercent: parseFloat(stock.change_percentage),
      marketCap: 0,
      volume: parseInt(stock.volume),
    }));

    return [...topGainers, ...topLosers];
  } catch (error) {
    console.error('Error fetching stocks:', error);
    return [];
  }
}

export async function searchStocks(query: string): Promise<StockSearchResult[]> {
  try {
    const response = await fetch(
      `${BASE_URL}?function=SYMBOL_SEARCH&keywords=${query}&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to search stocks');
    }

    return data.bestMatches.map((match: any) => ({
      symbol: match['1. symbol'],
      name: match['2. name'],
      exchange: match['4. exchange'],
    }));
  } catch (error) {
    console.error('Error searching stocks:', error);
    return [];
  }
}

export async function getStockQuote(symbol: string): Promise<Stock> {
  const response = await fetch(
    `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
  );
  const data = await response.json();
  const quote = data['Global Quote'];
  
  return {
    symbol: quote['01. symbol'],
    name: quote['02. name'],
    price: parseFloat(quote['05. price']),
    change: parseFloat(quote['09. change']),
    changePercent: parseFloat(quote['10. change percent']),
    marketCap: 0,
    volume: parseInt(quote['06. volume']),
    lastUpdated: quote['07. latest trading day'],
    high: parseFloat(quote['03. high']),
    low: parseFloat(quote['04. low'])
  };
}

export interface StockHistory {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export async function getStockHistory(symbol: string): Promise<StockHistory[]> {
  try {
    const response = await fetch(
      `${BASE_URL}?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&entitlement=delayed&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch stock history');
    }

    const timeSeriesData = data['Time Series (Daily)'];
    return Object.entries(timeSeriesData).map(([date, values]: [string, any]) => ({
      date,
      open: parseFloat(values['1. open']),
      high: parseFloat(values['2. high']),
      low: parseFloat(values['3. low']),
      close: parseFloat(values['4. close']),
      volume: parseInt(values['6. volume'], 10)
    })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error fetching stock history:', error);
    return [];
  }
} 