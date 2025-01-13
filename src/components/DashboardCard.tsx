import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  icon?: React.ReactNode;
}

export function DashboardCard({ title, value, change, isPositive, icon }: DashboardCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-200 hover:shadow-xl">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">{title}</h3>
        {icon}
      </div>
      <div className="flex items-baseline">
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        {change && (
          <span className={`ml-2 text-sm font-medium ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {isPositive ? '↑' : '↓'} {change}
          </span>
        )}
      </div>
    </div>
  );
}