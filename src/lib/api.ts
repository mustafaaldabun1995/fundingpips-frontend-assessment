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
      name: stock.ticker, // Alpha Vantage doesn't provide company names in this endpoint
      price: parseFloat(stock.price),
      change: parseFloat(stock.change_amount),
      changePercent: parseFloat(stock.change_percentage),
      marketCap: 0, // Not available in this endpoint
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
    lastUpdated: quote['07. latest trading day'],
  };
} 