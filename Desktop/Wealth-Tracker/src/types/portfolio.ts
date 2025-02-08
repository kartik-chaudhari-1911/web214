export interface Asset {
  id: string;
  name: string;
  symbol: string;
  type: 'stock' | 'crypto' | 'bond';
  quantity: number;
  currentPrice: number;
  purchasePrice: number;
  lastUpdated: string;
}

export interface PortfolioData {
  totalValue: number;
  assets: Asset[];
  performance: {
    daily: number;
    weekly: number;
    monthly: number;
    yearly: number;
  };
  marketNews: {
    id: string;
    title: string;
    date: string;
    summary: string;
  }[];
}