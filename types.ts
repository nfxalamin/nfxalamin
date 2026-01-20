
export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  orders: number;
  image: string;
  category: string;
  section: 'Today\'s Deals' | 'Super Deals' | 'Dollar Express' | 'More To Love';
  isFreeShipping: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 'All Categories' | 'Deals' | 'New Arrivals' | 'Electronics' | 'Fashion' | 'Home & Kitchen' | 'Beauty' | 'Toys' | 'Accessories';
