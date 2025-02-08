import React, { useState } from 'react';
import { PortfolioOverview } from './components/Dashboard/PortfolioOverview';
import { AssetList } from './components/AssetList/AssetList';
import { Navbar } from './components/Navigation/Navbar';
import { Home } from './components/Home/Home';
import { PortfolioData, Asset } from './types/portfolio';

// Mock data for demonstration
const mockPortfolioData: PortfolioData = {
  totalValue: 150000,
  assets: [
    {
      id: '1',
      name: 'Apple Inc.',
      symbol: 'AAPL',
      type: 'stock',
      quantity: 100,
      currentPrice: 175.50,
      purchasePrice: 150.00,
      lastUpdated: new Date().toISOString()
    },
    {
      id: '2',
      name: 'Bitcoin',
      symbol: 'BTC',
      type: 'crypto',
      quantity: 0.5,
      currentPrice: 65000,
      purchasePrice: 50000,
      lastUpdated: new Date().toISOString()
    },
    {
      id: '3',
      name: 'US Treasury Bond',
      symbol: 'USTB',
      type: 'bond',
      quantity: 10,
      currentPrice: 1000,
      purchasePrice: 980,
      lastUpdated: new Date().toISOString()
    }
  ],
  performance: {
    daily: 2.5,
    weekly: 5.8,
    monthly: 12.3,
    yearly: 28.7
  },
  marketNews: [
    {
      id: '1',
      title: 'Federal Reserve Maintains Interest Rates',
      date: '2024-03-20',
      summary: 'The Federal Reserve decided to maintain current interest rates...'
    },
    {
      id: '2',
      title: 'Tech Stocks Rally Continues',
      date: '2024-03-19',
      summary: 'Major tech stocks continue their upward trend...'
    },
    {
      id: '3',
      title: 'Cryptocurrency Market Shows Strong Recovery',
      date: '2024-03-18',
      summary: 'Bitcoin and other cryptocurrencies show significant gains...'
    }
  ]
};

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio' | 'news'>('home');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const handleAssetSelect = (asset: Asset) => {
    setSelectedAsset(asset);
    setCurrentPage('portfolio');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {currentPage === 'home' && (
          <Home data={mockPortfolioData} onAssetSelect={handleAssetSelect} />
        )}

        {currentPage === 'portfolio' && (
          <>
            <PortfolioOverview data={mockPortfolioData} />
            
            <div className="mt-6">
              <AssetList
                assets={mockPortfolioData.assets}
                onAssetSelect={setSelectedAsset}
              />
            </div>

            {selectedAsset && (
              <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">{selectedAsset.name} Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Current Price</p>
                    <p className="text-lg font-semibold">${selectedAsset.currentPrice.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Quantity</p>
                    <p className="text-lg font-semibold">{selectedAsset.quantity}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Value</p>
                    <p className="text-lg font-semibold">
                      ${(selectedAsset.currentPrice * selectedAsset.quantity).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Purchase Price</p>
                    <p className="text-lg font-semibold">${selectedAsset.purchasePrice.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {currentPage === 'news' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6">Market News</h2>
            <div className="space-y-6">
              {mockPortfolioData.marketNews.map(news => (
                <div key={news.id} className="border-b pb-6">
                  <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <p className="text-gray-700">{news.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;