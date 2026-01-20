
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  'All Categories',
  'Deals',
  'New Arrivals',
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Beauty',
  'Toys',
  'Accessories'
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Wireless Bluetooth Earbuds with ANC',
    price: 24.99,
    originalPrice: 49.99,
    discount: 50,
    rating: 4.8,
    orders: 12400,
    image: 'https://picsum.photos/400/400?random=1',
    category: 'Electronics',
    section: 'Super Deals',
    isFreeShipping: true
  },
  {
    id: '2',
    title: 'Minimalist Stainless Steel Watch',
    price: 15.50,
    originalPrice: 35.00,
    discount: 55,
    rating: 4.6,
    orders: 8900,
    image: 'https://picsum.photos/400/400?random=2',
    category: 'Accessories',
    section: "Today's Deals",
    isFreeShipping: true
  },
  {
    id: '3',
    title: 'Multi-functional Kitchen Blender',
    price: 32.00,
    originalPrice: 85.00,
    discount: 62,
    rating: 4.9,
    orders: 3500,
    image: 'https://picsum.photos/400/400?random=3',
    category: 'Home & Kitchen',
    section: 'More To Love',
    isFreeShipping: false
  },
  {
    id: '4',
    title: 'USB-C Fast Charging Cable 2m',
    price: 1.00,
    originalPrice: 5.99,
    discount: 83,
    rating: 4.7,
    orders: 45000,
    image: 'https://picsum.photos/400/400?random=4',
    category: 'Electronics',
    section: 'Dollar Express',
    isFreeShipping: true
  },
  {
    id: '5',
    title: 'Yoga Mat Non-slip Exercise Pad',
    price: 18.99,
    originalPrice: 29.99,
    discount: 36,
    rating: 4.5,
    orders: 2100,
    image: 'https://picsum.photos/400/400?random=5',
    category: 'Accessories',
    section: 'More To Love',
    isFreeShipping: true
  },
  {
    id: '6',
    title: 'Smart LED Light Bulb RGB',
    price: 8.50,
    originalPrice: 19.99,
    discount: 57,
    rating: 4.8,
    orders: 15000,
    image: 'https://picsum.photos/400/400?random=6',
    category: 'Electronics',
    section: 'Super Deals',
    isFreeShipping: true
  },
  {
    id: '7',
    title: 'Portable Electric Kettle 500ml',
    price: 21.00,
    originalPrice: 39.00,
    discount: 46,
    rating: 4.6,
    orders: 5400,
    image: 'https://picsum.photos/400/400?random=7',
    category: 'Home & Kitchen',
    section: "Today's Deals",
    isFreeShipping: true
  },
  {
    id: '8',
    title: 'Silicone iPhone Case - All Models',
    price: 1.00,
    originalPrice: 9.99,
    discount: 90,
    rating: 4.9,
    orders: 88000,
    image: 'https://picsum.photos/400/400?random=8',
    category: 'Electronics',
    section: 'Dollar Express',
    isFreeShipping: true
  },
  {
    id: '9',
    title: 'Professional Makeup Brush Set',
    price: 12.40,
    originalPrice: 25.00,
    discount: 50,
    rating: 4.7,
    orders: 12000,
    image: 'https://picsum.photos/400/400?random=9',
    category: 'Beauty',
    section: 'Super Deals',
    isFreeShipping: false
  },
  {
    id: '10',
    title: 'Wireless Optical Mouse 2.4G',
    price: 6.99,
    originalPrice: 15.00,
    discount: 53,
    rating: 4.4,
    orders: 22000,
    image: 'https://picsum.photos/400/400?random=10',
    category: 'Electronics',
    section: 'More To Love',
    isFreeShipping: true
  },
  {
    id: '11',
    title: 'Cotton T-Shirt Casual Wear',
    price: 9.90,
    originalPrice: 18.00,
    discount: 45,
    rating: 4.5,
    orders: 6700,
    image: 'https://picsum.photos/400/400?random=11',
    category: 'Fashion',
    section: 'More To Love',
    isFreeShipping: true
  },
  {
    id: '12',
    title: 'Building Block Set for Kids',
    price: 14.50,
    originalPrice: 28.00,
    discount: 48,
    rating: 4.9,
    orders: 3100,
    image: 'https://picsum.photos/400/400?random=12',
    category: 'Toys',
    section: 'More To Love',
    isFreeShipping: true
  }
];
