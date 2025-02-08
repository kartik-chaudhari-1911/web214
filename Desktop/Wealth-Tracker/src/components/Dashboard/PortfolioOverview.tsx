import React from 'react';
import { PieChart, Pie, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { PortfolioData } from '../../types/portfolio';

interface PortfolioOverviewProps {
  data: PortfolioData;
}

export const PortfolioOverview: React.FC<PortfolioOverviewProps> = ({ data }) => {
  const pieData = data.assets.map(asset => ({
    name: asset.name,
    value: asset.currentPrice * asset.quantity
  }));

  const performanceData = [
    { name: '1D', value: data.performance.daily },
    { name: '1W', value: data.performance.weekly },
    { name: '1M', value: data.performance.monthly },
    { name: '1Y', value: data.performance.yearly }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      {/* Total Value Card */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-700">Total Portfolio Value</h3>
          <DollarSign className="text-green-500" />
        </div>
        <p className="text-3xl font-bold mt-4">${data.totalValue.toLocaleString()}</p>
        <div className="flex items-center mt-2">
          {data.performance.daily >= 0 ? (
            <TrendingUp className="text-green-500 mr-2" size={20} />
          ) : (
            <TrendingDown className="text-red-500 mr-2" size={20} />
          )}
          <span className={data.performance.daily >= 0 ? 'text-green-500' : 'text-red-500'}>
            {data.performance.daily}% Today
          </span>
        </div>
      </div>

      {/* Asset Distribution */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Asset Distribution</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Performance Overview</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};