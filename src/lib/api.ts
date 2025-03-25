import { Stock, StockSearchResult } from '../types/stock';

const ALPHA_VANTAGE_API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

interface AlphaVantageStock {
  ticker: string;
  price: string;
  change_amount: string;
  change_percentage: string;
  volume: string;
}

interface AlphaVantageResponse {
  top_gainers: AlphaVantageStock[];
  top_losers: AlphaVantageStock[];
}

interface AlphaVantageSearchMatch {
  '1. symbol': string;
  '2. name': string;
  '4. exchange': string;
}

interface AlphaVantageSearchResponse {
  bestMatches: AlphaVantageSearchMatch[];
}

interface AlphaVantageQuote {
  '01. symbol': string;
  '02. name': string;
  '05. price': string;
  '09. change': string;
  '10. change percent': string;
  '06. volume': string;
  '07. latest trading day': string;
  '03. high': string;
  '04. low': string;
}

interface AlphaVantageGlobalQuoteResponse {
  'Global Quote': AlphaVantageQuote;
}

interface AlphaVantageTimeSeriesData {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '6. volume': string;
}

interface AlphaVantageTimeSeriesResponse {
  'Time Series (Daily)': Record<string, AlphaVantageTimeSeriesData>;
}

export async function fetchStocks(): Promise<Stock[]> {
  try {
    const response = await fetch(
      `${BASE_URL}?function=TOP_GAINERS_LOSERS&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    const data: AlphaVantageResponse = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch stocks');
    }

    const topGainers = data.top_gainers.map((stock: AlphaVantageStock) => ({
      symbol: stock.ticker,
      name: stock.ticker,
      price: parseFloat(stock.price),
      change: parseFloat(stock.change_amount),
      changePercent: parseFloat(stock.change_percentage),
      marketCap: 0,
      volume: parseInt(stock.volume),
      high: parseFloat(stock.price),
      low: parseFloat(stock.price),
    }));

    const topLosers = data.top_losers.map((stock: AlphaVantageStock) => ({
      symbol: stock.ticker,
      name: stock.ticker,
      price: parseFloat(stock.price),
      change: parseFloat(stock.change_amount),
      changePercent: parseFloat(stock.change_percentage),
      marketCap: 0,
      volume: parseInt(stock.volume),
      high: parseFloat(stock.price),
      low: parseFloat(stock.price),
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
    const data: AlphaVantageSearchResponse = await response.json();

    if (!response.ok) {
      throw new Error('Failed to search stocks');
    }

    return data.bestMatches.map((match) => ({
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
  const data: AlphaVantageGlobalQuoteResponse = await response.json();
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
    const data: AlphaVantageTimeSeriesResponse = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch stock history');
    }

    const timeSeriesData = data['Time Series (Daily)'];
    return Object.entries(timeSeriesData).map(([date, values]) => ({
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