export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  isNew?: boolean;
  isBestseller?: boolean;
  rating?: number;
  reviews?: number;
  size?: string;
  color?: string;
  images?: string[];
  inStock?: boolean;
  stock?: number;
  isFeatured?: boolean;
}

export interface ProductFilters {
  categories: string[];
  priceRange: [number, number];
  minRating?: number;
  inStock?: boolean;
  tags?: string[];
}

export interface ProductSort {
  field: 'featured' | 'newest' | 'price' | 'rating' | 'name';
  order: 'asc' | 'desc';
}
