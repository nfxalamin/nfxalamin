
import React from 'react';
import { CATEGORIES } from '../constants';
import { Category } from '../types';

interface CategoryNavProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <nav className="bg-white border-b border-gray-100 hidden md:block">
      <div className="container mx-auto px-4 overflow-x-auto">
        <ul className="flex items-center space-x-8 py-3">
          {CATEGORIES.map((category) => (
            <li 
              key={category}
              className={`whitespace-nowrap cursor-pointer text-sm font-medium transition-colors hover:text-orange-600 ${
                activeCategory === category ? 'text-orange-600 border-b-2 border-orange-600 pb-1' : 'text-gray-600'
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;
