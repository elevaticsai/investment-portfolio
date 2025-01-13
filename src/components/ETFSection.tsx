import React from 'react';
import { BarChart2 } from 'lucide-react';

const etfs = [
  {
    symbol: 'VOO',
    name: 'Vanguard S&P 500 ETF',
    price: '425.67',
    change: '+1.2%',
    volume: '4.2M',
    expense: '0.03%',
    category: 'Large Blend'
  },
  {
    symbol: 'QQQ',
    name: 'Invesco QQQ Trust',
    price: '438.92',
    change: '+1.8%',
    volume: '3.8M',
    expense: '0.20%',
    category: 'Large Growth'
  },
  {
    symbol: 'ARKK',
    name: 'ARK Innovation ETF',
    price: '52.34',
    change: '+2.5%',
    volume: '2.1M',
    expense: '0.75%',
    category: 'Technology'
  }
];

export function ETFSection() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <BarChart2 className="h-5 w-5 text-indigo-600" />
          <h2 className="ml-2 text-lg font-semibold text-gray-900">Popular ETFs</h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Expense Ratio</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {etfs.map((etf) => (
              <tr key={etf.symbol} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{etf.symbol}</div>
                    <div className="text-xs text-gray-500">{etf.category}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{etf.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">${etf.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">+{etf.change}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{etf.volume}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{etf.expense}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}