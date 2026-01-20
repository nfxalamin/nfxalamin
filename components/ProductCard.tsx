
import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.title} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{product.discount}%
          </div>
        )}
        <button 
          onClick={(e) => {
            e.preventDefault();
            onAddToCart(product);
          }}
          className="absolute bottom-3 right-3 bg-orange-600 text-white p-2 rounded-full shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-700 active:scale-90"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors">
          {product.title}
        </h3>
        
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          
          <div className="flex items-center justify-between text-[11px] text-gray-500">
            <div className="flex items-center gap-1">
              <div className="flex items-center text-yellow-400">
                <Star className="w-3 h-3 fill-current" />
                <span className="ml-1 font-bold text-gray-700">{product.rating}</span>
              </div>
              <span>• {product.orders >= 1000 ? `${(product.orders / 1000).toFixed(1)}k+` : product.orders} sold</span>
            </div>
            {product.isFreeShipping && (
              <span className="text-green-600 font-semibold bg-green-50 px-1.5 py-0.5 rounded">Free Shipping</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
