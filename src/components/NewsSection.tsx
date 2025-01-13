import React from 'react';
import { Newspaper } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'Fed Signals Potential Rate Cuts Later This Year',
    source: 'Financial Times',
    time: '2h ago',
    impact: 'high',
    summary: 'Federal Reserve officials indicated they expect to cut interest rates three times this year...'
  },
  {
    id: 2,
    title: 'NVIDIA Continues AI Dominance with New Chip Release',
    source: 'Bloomberg',
    time: '4h ago',
    impact: 'medium',
    summary: 'NVIDIA unveils next-generation AI chips, maintaining its leadership in the AI hardware market...'
  },
  {
    id: 3,
    title: 'Treasury Yields Hit New Highs Amid Economic Data',
    source: 'Reuters',
    time: '5h ago',
    impact: 'high',
    summary: '10-year Treasury yields reached new levels following stronger-than-expected economic indicators...'
  }
];

export function NewsSection() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Newspaper className="h-5 w-5 text-indigo-600" />
            <h2 className="ml-2 text-lg font-semibold text-gray-900">Market News</h2>
          </div>
          <button className="text-sm text-indigo-600 hover:text-indigo-700">View All</button>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {newsItems.map((item) => (
          <div key={item.id} className="p-6 hover:bg-gray-50">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.summary}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-xs text-gray-500">{item.source}</span>
                  <span className="text-xs text-gray-500">{item.time}</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.impact === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.impact.charAt(0).toUpperCase() + item.impact.slice(1)} Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}