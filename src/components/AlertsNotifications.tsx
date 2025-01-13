import React from 'react';
import { Bell, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'price',
    title: 'AAPL Exceeded Price Target',
    message: 'Apple Inc. has exceeded your price target of $180',
    time: '10 minutes ago',
    priority: 'high'
  },
  {
    id: 2,
    type: 'volume',
    title: 'Unusual Volume Alert',
    message: 'TSLA is showing 50% higher than average volume',
    time: '30 minutes ago',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'news',
    title: 'Breaking News',
    message: 'Major acquisition announcement for Microsoft',
    time: '1 hour ago',
    priority: 'high'
  }
];

export function AlertsNotifications() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-indigo-600" />
            <h2 className="ml-2 text-lg font-semibold text-gray-900">Alerts & Notifications</h2>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            3 New
          </span>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {alerts.map((alert) => (
          <div key={alert.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start space-x-4">
              {alert.priority === 'high' ? (
                <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
              ) : alert.type === 'volume' ? (
                <TrendingUp className="h-5 w-5 text-green-500 mt-1" />
              ) : (
                <TrendingDown className="h-5 w-5 text-blue-500 mt-1" />
              )}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">{alert.title}</h3>
                  <span className="text-xs text-gray-500">{alert.time}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{alert.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
          View All Alerts
        </button>
      </div>
    </div>
  );
}