import React from 'react';
import { 
  Home, 
  PieChart, 
  TrendingUp, 
  BarChart2, 
  Brain, 
  Target, 
  Settings, 
  HelpCircle,
  Search
} from 'lucide-react';

export const menuItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: PieChart, label: 'Portfolio' },
  { icon: TrendingUp, label: 'Trading' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: Brain, label: 'AI Insights' },
  { icon: Target, label: 'Watchlist' },
];

export const bottomMenuItems = [
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help' },
];

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 transition-colors duration-200">
      <div className="flex flex-col h-full">
        {/* Search Bar */}
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search stocks..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Main Menu */}
        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                item.active
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom Menu */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          {bottomMenuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}