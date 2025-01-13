import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const topGainers = [
  { symbol: 'NVDA', name: 'NVIDIA Corp', change: '+8.5%', price: '875.32' },
  { symbol: 'AMD', name: 'Advanced Micro Devices', change: '+6.2%', price: '178.62' },
  { symbol: 'MRVL', name: 'Marvell Technology', change: '+5.8%', price: '75.45' },
];

const topLosers = [
  { symbol: 'NFLX', name: 'Netflix Inc', change: '-4.2%', price: '605.88' },
  { symbol: 'PYPL', name: 'PayPal Holdings', change: '-3.8%', price: '58.32' },
  { symbol: 'INTC', name: 'Intel Corp', change: '-3.5%', price: '42.15' },
];

export function TopMovers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Top Gainers */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <h2 className="ml-2 text-lg font-semibold text-gray-900">Top Gainers</h2>
          </div>
        </div>
        <div className="p-4">
          {topGainers.map((stock) => (
            <div key={stock.symbol} className="flex items-center justify-between py-2">
              <div>
                <div className="text-sm font-medium text-gray-900">{stock.symbol}</div>
                <div className="text-xs text-gray-500">{stock.name}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">${stock.price}</div>
                <div className="text-xs text-green-600">{stock.change}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Losers */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <TrendingDown className="h-5 w-5 text-red-500" />
            <h2 className="ml-2 text-lg font-semibold text-gray-900">Top Losers</h2>
          </div>
        </div>
        <div className="p-4">
          {topLosers.map((stock) => (
            <div key={stock.symbol} className="flex items-center justify-between py-2">
              <div>
                <div className="text-sm font-medium text-gray-900">{stock.symbol}</div>
                <div className="text-xs text-gray-500">{stock.name}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">${stock.price}</div>
                <div className="text-xs text-red-600">{stock.change}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}