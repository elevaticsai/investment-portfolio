import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const stocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: '175.84', change: '+2.45', changePercent: '+1.41%' },
  { symbol: 'MSFT', name: 'Microsoft', price: '338.11', change: '-0.89', changePercent: '-0.26%' },
  { symbol: 'GOOGL', name: 'Alphabet', price: '125.30', change: '+1.56', changePercent: '+1.26%' },
  { symbol: 'AMZN', name: 'Amazon', price: '127.12', change: '-0.45', changePercent: '-0.35%' },
];

export function StockTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {stocks.map((stock) => (
            <tr key={stock.symbol}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stock.symbol}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stock.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">${stock.price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                <span className={`inline-flex items-center ${parseFloat(stock.change) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {parseFloat(stock.change) >= 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                  {stock.changePercent}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}