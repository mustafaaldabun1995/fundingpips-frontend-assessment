import { Stock, StockSearchResult } from '@/types';

const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

export async function searchStocks(query: string): Promise<StockSearchResult[]> {
  const response = await fetch(
    `${BASE_URL}?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data.bestMatches?.map((match: any) => ({
    symbol: match['1. symbol'],
    name: match['2. name'],
    exchange: match['4. exchange'],
    type: match['3. type'],
  })) || [];
}

export async function getStockQuote(symbol: string): Promise<Stock> {
  const response = await fetch(
    `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
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