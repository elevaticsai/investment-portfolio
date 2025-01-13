import React from 'react';
import { Brain, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const aiInsights = [
  {
    type: 'pattern',
    title: 'Bullish Pattern Detected',
    stock: 'NVDA',
    description: 'Cup and Handle pattern forming, suggesting potential upward movement',
    confidence: 85,
    timeFrame: 'Short-term'
  },
  {
    type: 'risk',
    title: 'Volatility Alert',
    stock: 'TSLA',
    description: 'Unusual options activity detected, suggesting increased volatility',
    confidence: 75,
    timeFrame: 'Immediate'
  },
  {
    type: 'opportunity',
    title: 'Oversold Condition',
    stock: 'AMD',
    description: 'RSI indicates oversold conditions, potential bounce expected',
    confidence: 82,
    timeFrame: 'Medium-term'
  }
];

export function AIAnalysis() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Brain className="h-5 w-5 text-indigo-600" />
            <h2 className="ml-2 text-lg font-semibold text-gray-900">AI-Powered Analysis</h2>
          </div>
          <span className="text-sm text-gray-500">Updated 5 min ago</span>
        </div>
      </div>
      <div className="p-6 space-y-6">
        {aiInsights.map((insight, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center">
                  {insight.type === 'pattern' ? (
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  ) : insight.type === 'risk' ? (
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-blue-500" />
                  )}
                  <h3 className="ml-2 text-base font-medium text-gray-900">{insight.title}</h3>
                </div>
                <p className="mt-1 text-sm text-gray-600">{insight.description}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-xs font-medium text-gray-500">Stock: {insight.stock}</span>
                  <span className="text-xs font-medium text-gray-500">Timeframe: {insight.timeFrame}</span>
                  <div className="flex items-center">
                    <span className="text-xs font-medium text-gray-500">Confidence:</span>
                    <div className="ml-2 bg-gray-200 rounded-full h-2 w-20">
                      <div
                        className="bg-indigo-600 rounded-full h-2"
                        style={{ width: `${insight.confidence}%` }}
                      />
                    </div>
                    <span className="ml-2 text-xs font-medium text-gray-500">{insight.confidence}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}