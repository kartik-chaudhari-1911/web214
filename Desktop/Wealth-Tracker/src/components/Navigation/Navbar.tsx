import React from 'react';
import { LayoutDashboard, PieChart, Newspaper } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'portfolio' | 'news';
  onPageChange: (page: 'home' | 'portfolio' | 'news') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <PieChart className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">WealthTracker</span>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => onPageChange('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentPage === 'home'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-2">
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </div>
            </button>

            <button
              onClick={() => onPageChange('portfolio')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentPage === 'portfolio'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-2">
                <PieChart size={18} />
                <span>Portfolio</span>
              </div>
            </button>

            <button
              onClick={() => onPageChange('news')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentPage === 'news'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Newspaper size={18} />
                <span>News</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};