
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, CreditCard, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Customer Service</h5>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Transaction Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Free Return</li>
              <li className="hover:text-white cursor-pointer transition-colors">Submit a Dispute</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Shopping Guide</h5>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">All Categories</li>
              <li className="hover:text-white cursor-pointer transition-colors">Request for Quotation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Ready to Ship</li>
              <li className="hover:text-white cursor-pointer transition-colors">Trade Show</li>
              <li className="hover:text-white cursor-pointer transition-colors">Custom Services</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">About Us</h5>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">GlobalMarket News</li>
              <li className="hover:text-white cursor-pointer transition-colors">Our History</li>
              <li className="hover:text-white cursor-pointer transition-colors">Affiliate Program</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Investors</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">Connect With Us</h5>
            <div className="flex gap-4 mb-8">
              <Facebook className="w-6 h-6 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-white cursor-pointer" />
              <Youtube className="w-6 h-6 hover:text-white cursor-pointer" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-600" />
                <span className="text-sm">Buyer Protection Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-orange-600" />
                <span className="text-sm">Secure Payment Methods</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">© 2024 GlobalMarket. All rights reserved.</p>
          <div className="flex gap-8 text-sm">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Use</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>
          <div className="flex items-center gap-4">
            <select className="bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg border-none focus:ring-1 focus:ring-orange-600 outline-none">
              <option>English (US)</option>
              <option>Español</option>
              <option>Français</option>
            </select>
            <select className="bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg border-none focus:ring-1 focus:ring-orange-600 outline-none">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
