import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp, Activity, DollarSign } from 'lucide-react';
import { PortfolioData, Asset } from '../../types/portfolio';

interface HomeProps {
  data: PortfolioData;
  onAssetSelect: (asset: Asset) => void;
}

export const Home: React.FC<HomeProps> = ({ data, onAssetSelect }) => {
  const topPerformers = [...data.assets]
    .sort((a, b) => {
      const aPerformance = (a.currentPrice - a.purchasePrice) / a.purchasePrice;
      const bPerformance = (b.currentPrice - b.purchasePrice) / b.purchasePrice;
      return bPerformance - aPerformance;
    })
    .slice(0, 3);

  const totalGainLoss = data.assets.reduce((acc, asset) => {
    const gainLoss = (asset.currentPrice - asset.purchasePrice) * asset.quantity;
    return acc + gainLoss;
  }, 0);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to WealthTracker</h1>
        <p className="text-gray-600">Track your investments and make informed decisions</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Portfolio Value</p>
              <p className="text-2xl font-bold">${data.totalValue.toLocaleString()}</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Gain/Loss</p>
              <p className={`text-2xl font-bold ${totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${Math.abs(totalGainLoss).toLocaleString()}
                {totalGainLoss >= 0 ? ' Gain' : ' Loss'}
              </p>
            </div>
            {totalGainLoss >= 0 ? (
              <ArrowUpRight className="h-8 w-8 text-green-500" />
            ) : (
              <ArrowDownRight className="h-8 w-8 text-red-500" />
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Portfolio Performance</p>
              <p className="text-2xl font-bold text-blue-600">{data.performance.monthly}% MTD</p>
            </div>
            <Activity className="h-8 w-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Top Performers */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Top Performers</h2>
          <TrendingUp className="h-6 w-6 text-green-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topPerformers.map(asset => {
            const performance = ((asset.currentPrice - asset.purchasePrice) / asset.purchasePrice) * 100;
            return (
              <div
                key={asset.id}
                className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => onAssetSelect(asset)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{asset.name}</h3>
                  <span className="text-sm text-gray-500">{asset.symbol}</span>
                </div>
                <p className="text-lg font-bold text-green-600">+{performance.toFixed(2)}%</p>
                <p className="text-sm text-gray-600">
                  ${(asset.currentPrice * asset.quantity).toLocaleString()}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Latest Market News</h2>
        <div className="space-y-4">
          {data.marketNews.slice(0, 2).map(news => (
            <div key={news.id} className="border-b pb-4">
              <h3 className="font-semibold mb-1">{news.title}</h3>
              <p className="text-sm text-gray-600">{news.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};