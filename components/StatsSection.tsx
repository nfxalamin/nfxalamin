
import React from 'react';
import { Users, Package, Globe, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: <Users className="w-8 h-8 text-orange-600" />, label: "5M+ Active Sellers", sub: "Global network" },
  { icon: <Package className="w-8 h-8 text-orange-600" />, label: "20M+ Products", sub: "Endless choices" },
  { icon: <Globe className="w-8 h-8 text-orange-600" />, label: "200+ Countries", sub: "World-wide shipping" },
  { icon: <ShieldCheck className="w-8 h-8 text-orange-600" />, label: "Buyer Protection", sub: "Guaranteed safety" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-12 border-y border-gray-100 my-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-4 bg-orange-50 p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-800">{stat.label}</h4>
              <p className="text-sm text-gray-500">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
