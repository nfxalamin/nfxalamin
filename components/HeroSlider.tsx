
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    title: "Big Summer Sale!",
    subtitle: "Up to 70% off on all items. Free shipping on orders over $15.",
    color: "bg-gradient-to-r from-orange-500 to-red-500",
    image: "https://picsum.photos/1200/400?random=20"
  },
  {
    title: "New Arrivals: Tech",
    subtitle: "Explore the latest gadgets and accessories with 10% cash back.",
    color: "bg-gradient-to-r from-blue-600 to-indigo-600",
    image: "https://picsum.photos/1200/400?random=21"
  },
  {
    title: "Dollar Express Deals",
    subtitle: "Everything under $5. Limitless choices, limited time.",
    color: "bg-gradient-to-r from-purple-600 to-pink-600",
    image: "https://picsum.photos/1200/400?random=22"
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="relative h-[300px] md:h-[450px] overflow-hidden rounded-3xl group">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 flex items-center ${
              index === current ? 'opacity-100' : 'opacity-0'
            } ${banner.color}`}
          >
            <img 
              src={banner.image} 
              alt={banner.title} 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40" 
            />
            <div className="relative z-10 px-10 md:px-20 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                {banner.title}
              </h2>
              <p className="text-lg md:text-xl text-white opacity-90 mb-8">
                {banner.subtitle}
              </p>
              <button className="bg-white text-orange-600 font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform active:scale-95">
                Shop Now
              </button>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button 
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {banners.map((_, i) => (
            <div 
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
