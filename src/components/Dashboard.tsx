import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { useTheme } from './ThemeContext';
import { DashboardCard } from './DashboardCard';
import { PortfolioChart } from './PortfolioChart';
import { AllocationChart } from './AllocationChart';
import { StockTable } from './StockTable';
import { SuggestedStocks } from './SuggestedStocks';
import { NewsSection } from './NewsSection';
import { ETFSection } from './ETFSection';
import { AlertsNotifications } from './AlertsNotifications';
import { AIAnalysis } from './AIAnalysis';
import { StockComparison } from './StockComparison';
import { TopMovers } from './TopMovers';
import { PriceTargets } from './PriceTargets';
import { Wallet, Sun, Moon, DollarSign, TrendingUp, PieChart, Activity } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="lg:hidden">
        <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </div>
      
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-10 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="lg:hidden">
                  <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
                </div>
                <Wallet className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                <h1 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">Investment Portfolio</h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Welcome, {user?.name}</span>
                  <img
                    src={user?.avatar}
                    alt="User avatar"
                    className="h-8 w-8 rounded-full"
                  />
                </div>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <button
                  onClick={logout}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Portfolio Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard
              title="Total Portfolio Value"
              value="$534,892"
              change="12.5%"
              isPositive={true}
              icon={<DollarSign className="h-5 w-5 text-green-500" />}
            />
            <DashboardCard
              title="Today's Return"
              value="$2,145"
              change="1.2%"
              isPositive={true}
              icon={<TrendingUp className="h-5 w-5 text-blue-500" />}
            />
            <DashboardCard
              title="Total Return"
              value="$89,234"
              change="23.5%"
              isPositive={true}
              icon={<PieChart className="h-5 w-5 text-purple-500" />}
            />
            <DashboardCard
              title="Risk Level"
              value="Moderate"
              change="Beta: 1.2"
              icon={<Activity className="h-5 w-5 text-orange-500" />}
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Portfolio Performance</h2>
              <PortfolioChart />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Asset Allocation</h2>
              <AllocationChart />
            </div>
          </div>

          {/* Stock Table and AI Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white p-6 border-b border-gray-200 dark:border-gray-700">
                Portfolio Holdings
              </h2>
              <StockTable />
            </div>
            <AIAnalysis />
          </div>

          {/* Stock Comparison and Price Targets */}
          <div className="grid grid-cols-1 gap-6 mb-8">
            <StockComparison />
            <PriceTargets />
          </div>

          {/* Top Movers */}
          <div className="mb-8">
            <TopMovers />
          </div>

          {/* News and Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <NewsSection />
            <AlertsNotifications />
          </div>

          {/* ETFs and Suggested Stocks */}
          <div className="grid grid-cols-1 gap-6">
            <ETFSection />
            <SuggestedStocks />
          </div>
        </main>
      </div>
    </div>
  );
}