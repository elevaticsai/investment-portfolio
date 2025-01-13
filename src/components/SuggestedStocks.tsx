import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

const suggestedStocks = [
  {
    industry: 'Technology',
    stocks: [
      { symbol: 'NVDA', name: 'NVIDIA', price: '875.32', change: '+3.45%', rating: 'Strong Buy' },
      { symbol: 'AMD', name: 'Advanced Micro Devices', price: '178.62', change: '+2.89%', rating: 'Buy' }
    ]
  },
  {
    industry: 'Healthcare',
    stocks: [
      { symbol: 'LLY', name: 'Eli Lilly', price: '768.42', change: '+1.92%', rating: 'Strong Buy' },
      { symbol: 'ISRG', name: 'Intuitive Surgical', price: '386.75', change: '+2.15%', rating: 'Buy' }
    ]
  },
  {
    industry: 'Clean Energy',
    stocks: [
      { symbol: 'ENPH', name: 'Enphase Energy', price: '124.30', change: '+4.21%', rating: 'Buy' },
      { symbol: 'SEDG', name: 'SolarEdge', price: '72.45', change: '+3.18%', rating: 'Buy' }
    ]
  }
];

export function SuggestedStocks() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <Star className="h-5 w-5 text-indigo-600" />
          <h2 className="ml-2 text-lg font-semibold text-gray-900">Top Performers by Industry</h2>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {suggestedStocks.map((category) => (
            <div key={category.industry}>
              <h3 className="text-sm font-medium text-gray-500 mb-3">{category.industry}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.stocks.map((stock) => (
                  <div key={stock.symbol} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{stock.symbol}</h4>
                        <p className="text-sm text-gray-500">{stock.name}</p>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {stock.rating}
                      </span>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-900">${stock.price}</span>
                      <span className="inline-flex items-center text-green-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {stock.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}