import React from 'react';
import { Target } from 'lucide-react';

const priceTargets = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    currentPrice: '175.84',
    targets: [
      { firm: 'Morgan Stanley', target: '210', rating: 'Overweight' },
      { firm: 'Goldman Sachs', target: '199', rating: 'Buy' },
      { firm: 'JP Morgan', target: '190', rating: 'Overweight' },
    ]
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft',
    currentPrice: '338.11',
    targets: [
      { firm: 'Wedbush', target: '425', rating: 'Outperform' },
      { firm: 'Piper Sandler', target: '400', rating: 'Overweight' },
      { firm: 'Barclays', target: '405', rating: 'Buy' },
    ]
  }
];

export function PriceTargets() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <Target className="h-5 w-5 text-indigo-600" />
          <h2 className="ml-2 text-lg font-semibold text-gray-900">Analyst Price Targets</h2>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {priceTargets.map((stock) => (
          <div key={stock.symbol} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{stock.symbol}</h3>
                <p className="text-sm text-gray-500">{stock.name}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Current Price</p>
                <p className="text-lg font-medium text-gray-900">${stock.currentPrice}</p>
              </div>
            </div>
            <div className="space-y-3">
              {stock.targets.map((target, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{target.firm}</p>
                    <p className="text-xs text-gray-500">{target.rating}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">${target.target}</p>
                    <p className="text-xs text-gray-500">Price Target</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}