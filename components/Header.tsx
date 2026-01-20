
import React from 'react';
import { Search, ShoppingCart, User, Package, Menu } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  searchTerm: string;
  setSearchTerm: (val: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, searchTerm, setSearchTerm }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer shrink-0">
          <div className="bg-orange-600 p-2 rounded-lg">
            <ShoppingCart className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-gray-800 hidden md:block">GlobalMarket</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative">
          <input
            type="text"
            placeholder="Search for items, brands and more..."
            className="w-full pl-4 pr-12 py-2.5 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-orange-500 transition-all outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-1 top-1 bottom-1 px-5 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-6 text-gray-600">
          <div className="hidden md:flex flex-col items-center cursor-pointer hover:text-orange-600 transition-colors">
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">Account</span>
          </div>
          <div className="hidden md:flex flex-col items-center cursor-pointer hover:text-orange-600 transition-colors">
            <Package className="w-6 h-6" />
            <span className="text-xs font-medium">Orders</span>
          </div>
          <div 
            className="relative flex flex-col items-center cursor-pointer hover:text-orange-600 transition-colors"
            onClick={onCartClick}
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="text-xs font-medium">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </div>
          <div className="md:hidden">
            <Menu className="w-6 h-6" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
