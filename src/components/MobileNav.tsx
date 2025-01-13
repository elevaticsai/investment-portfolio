import React from 'react';
import { Menu, X } from 'lucide-react';
import { menuItems, bottomMenuItems } from './Sidebar';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 transform transition-transform duration-300 ease-in-out">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                {bottomMenuItems.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}