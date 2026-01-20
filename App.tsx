
import React, { useState, useMemo, useEffect } from 'react';
import { Product, CartItem, Category } from './types';
import { MOCK_PRODUCTS } from './constants';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import HeroSlider from './components/HeroSlider';
import ProductCard from './components/ProductCard';
import StatsSection from './components/StatsSection';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import { Zap, DollarSign, Star, Heart, Truck } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((p) => {
      const matchesCategory = activeCategory === 'All Categories' || p.category === activeCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // Section-based filtering for the home view
  const sections = [
    { name: "Today's Deals", icon: <Zap className="w-5 h-5 text-orange-500" />, items: filteredProducts.filter(p => p.section === "Today's Deals") },
    { name: 'Super Deals', icon: <Star className="w-5 h-5 text-red-500" />, items: filteredProducts.filter(p => p.section === 'Super Deals') },
    { name: 'Dollar Express', icon: <DollarSign className="w-5 h-5 text-green-500" />, items: filteredProducts.filter(p => p.section === 'Dollar Express') },
    { name: 'More To Love', icon: <Heart className="w-5 h-5 text-pink-500" />, items: filteredProducts.filter(p => p.section === 'More To Love') },
  ];

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Optional: open cart when item is added
    // setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) => 
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      <CategoryNav 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <main className="flex-grow">
        <HeroSlider />

        {/* Local Shipping Banner */}
        <section className="container mx-auto px-4 mb-10">
          <div className="bg-blue-600 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-6 h-6" />
                <span className="font-bold tracking-widest uppercase text-xs">Fast Local Shipping</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-1">Ships from Local Warehouse</h3>
              <p className="text-blue-100 opacity-80">Delivery within 3-5 business days. Shop local, get it faster.</p>
            </div>
            <button className="relative z-10 mt-6 md:mt-0 bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:shadow-xl transition-all active:scale-95">
              Explore Local Warehouse
            </button>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/10 skew-x-[-20deg] translate-x-1/2"></div>
          </div>
        </section>

        {/* Main Product Feed */}
        {sections.map((section, idx) => (
          section.items.length > 0 && (
            <section key={idx} className="container mx-auto px-4 mb-16">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-black text-gray-800 tracking-tight">{section.name}</h2>
                </div>
                <button className="text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors">
                  View All
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
                {section.items.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={addToCart} 
                  />
                ))}
              </div>
            </section>
          )
        ))}

        {filteredProducts.length === 0 && (
          <div className="container mx-auto px-4 py-20 text-center text-gray-400">
            <h3 className="text-xl font-medium">No products found matching your criteria.</h3>
            <button 
              onClick={() => {setSearchTerm(''); setActiveCategory('All Categories');}}
              className="mt-4 text-orange-600 font-bold hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        <StatsSection />
      </main>

      <Footer />

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default App;
