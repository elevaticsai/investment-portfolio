import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const comparisonData = [
  { date: 'Jan', AAPL: 180, MSFT: 390, GOOGL: 140 },
  { date: 'Feb', AAPL: 176, MSFT: 402, GOOGL: 145 },
  { date: 'Mar', AAPL: 172, MSFT: 415, GOOGL: 138 },
  { date: 'Apr', AAPL: 169, MSFT: 408, GOOGL: 142 },
  { date: 'May', AAPL: 175, MSFT: 420, GOOGL: 148 },
  { date: 'Jun', AAPL: 180, MSFT: 430, GOOGL: 152 },
];

const metrics = [
  { label: 'P/E Ratio', AAPL: '28.5x', MSFT: '35.2x', GOOGL: '25.8x' },
  { label: 'Market Cap', AAPL: '$2.8T', MSFT: '$3.1T', GOOGL: '$1.8T' },
  { label: 'Revenue Growth', AAPL: '+8.1%', MSFT: '+12.5%', GOOGL: '+9.2%' },
];

export function StockComparison() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Stock Comparison</h2>
      </div>
      <div className="p-6">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="AAPL" stroke="#6366f1" strokeWidth={2} />
              <Line type="monotone" dataKey="MSFT" stroke="#8b5cf6" strokeWidth={2} />
              <Line type="monotone" dataKey="GOOGL" stroke="#ec4899" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">AAPL</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">MSFT</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">GOOGL</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {metrics.map((metric) => (
                <tr key={metric.label}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{metric.label}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{metric.AAPL}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{metric.MSFT}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{metric.GOOGL}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}