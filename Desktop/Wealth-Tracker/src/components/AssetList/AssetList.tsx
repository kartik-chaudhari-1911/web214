import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Asset } from '../../types/portfolio';

interface AssetListProps {
  assets: Asset[];
  onAssetSelect: (asset: Asset) => void;
}

export const AssetList: React.FC<AssetListProps> = ({ assets, onAssetSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredAssets = assets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || asset.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex flex-col space-y-4">
        {/* Search and Filter Controls */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search assets..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-400" />
            <select
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">All Assets</option>
              <option value="stock">Stocks</option>
              <option value="crypto">Crypto</option>
              <option value="bond">Bonds</option>
            </select>
          </div>
        </div>

        {/* Asset List */}
        <div className="space-y-4">
          {filteredAssets.map(asset => (
            <div
              key={asset.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => onAssetSelect(asset)}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">{asset.symbol[0]}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">{asset.name}</h4>
                  <p className="text-sm text-gray-500">{asset.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">${(asset.currentPrice * asset.quantity).toLocaleString()}</p>
                <p className={`text-sm ${asset.currentPrice > asset.purchasePrice ? 'text-green-500' : 'text-red-500'}`}>
                  {((asset.currentPrice - asset.purchasePrice) / asset.purchasePrice * 100).toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};