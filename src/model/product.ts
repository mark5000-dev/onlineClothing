export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  mainCategory: "womens" | "mens" | "kids" | "accessories" | "shoes" | "jewelry";
  subCategories?: string[];
  description?: string;
  isNew?: boolean;
  isBestseller?: boolean;
  rating?: number;
  reviews?: number;
  size?: string;
  colors?: string[];
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

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: 2899,
    image: "https://images.unsplash.com/photo-1675294292093-5f6f5bb8836f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "womens",
    subCategories: ["dresses", "evening wear"],
    isNew: true,
    isBestseller: false,
    inStock: true,
  },
  {
    id: 2,
    name: "Pleated Midi Skirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1758749646094-606f23edaef6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "womens",
    subCategories: ["bottoms", "skirts"],
    isNew: false,
    isBestseller: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Cashmere Cardigan",
    price: 1299,
    image: "https://images.unsplash.com/photo-1581089781786-4e6d3c86357c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "womens",
    subCategories: ["tops", "sweaters"],
    isNew: true,
    isBestseller: true,
    inStock: false,
  },
  {
    id: 4,
    name: "Satin Cocktail Dress",
    price: 1599,
    image: "https://images.unsplash.com/photo-1578300160140-5d9dfef98f6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "womens",
    subCategories: ["dresses", "cocktail"],
    isNew: false,
    isBestseller: false,
    inStock: true,
  },

  // Mens
  {
    id: 5,
    name: "Tailored Wool Coat",
    price: 1899,
    image: "https://images.unsplash.com/photo-1610484826301-62e7e4bdb848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "mens",
    subCategories: ["outerwear", "coats"],
    isNew: false,
    isBestseller: true,
    inStock: true,
  },
  {
    id: 6,
    name: "Slim Fit Chinos",
    price: 799,
    image: "https://images.unsplash.com/photo-1616628185993-1b8f1d0326b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "mens",
    subCategories: ["bottoms", "pants"],
    isNew: true,
    isBestseller: false,
    inStock: true,
  },
  {
    id: 7,
    name: "Cashmere Sweater",
    price: 999,
    image: "https://images.unsplash.com/photo-1661268095505-cbfb42ef6f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "mens",
    subCategories: ["tops", "sweaters"],
    isNew: false,
    isBestseller: true,
    inStock: false,
  },
  {
    id: 8,
    name: "Leather Jacket",
    price: 2299,
    image: "https://images.unsplash.com/photo-1610111548856-51229f11b2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "mens",
    subCategories: ["outerwear", "jackets"],
    isNew: true,
    isBestseller: true,
    inStock: true,
  },

  // Kids
  {
    id: 9,
    name: "Kids Floral Dress",
    price: 499,
    image: "https://images.unsplash.com/photo-1603030618422-646d187e0ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "kids",
    subCategories: ["dresses", "floral"],
    isNew: true,
    isBestseller: false,
    inStock: true,
  },
  {
    id: 10,
    name: "Boys Denim Jacket",
    price: 699,
    image: "https://images.unsplash.com/photo-1612254500923-b3a3720efb4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "kids",
    subCategories: ["outerwear", "jackets"],
    isNew: false,
    isBestseller: true,
    inStock: true,
  },
  {
    id: 11,
    name: "Kids Graphic Tee",
    price: 299,
    image: "https://images.unsplash.com/photo-1612254500812-f1a06c59cd28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "kids",
    subCategories: ["tops", "t-shirts"],
    isNew: true,
    isBestseller: false,
    inStock: true,
  },

  // Accessories
  {
    id: 12,
    name: "Leather Handbag",
    price: 1299,
    image: "https://images.unsplash.com/photo-1600185363532-5ee36d3e5b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "accessories",
    subCategories: ["bags", "leather"],
    isNew: true,
    isBestseller: true,
    inStock: true,
  },
  {
    id: 13,
    name: "Silk Scarf",
    price: 499,
    image: "https://images.unsplash.com/photo-1590080871541-6fa3783d1db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "accessories",
    subCategories: ["scarves", "silk"],
    isNew: false,
    isBestseller: false,
    inStock: true,
  },
  {
    id: 14,
    name: "Gold Hoop Earrings",
    price: 299,
    image: "https://images.unsplash.com/photo-1600185363584-2e1bc2bfc0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    mainCategory: "accessories",
    subCategories: ["jewelry", "earrings"],
    isNew: true,
    isBestseller: true,
    inStock: true,
  }
];


// Example filter sections
export const filterSections = [
  {
    id: "price",
    title: "Price Range",
    type: "slider" as const,
    min: 0,
    max: 10000,
    step: 100,
    value: [0, 10000],
  },
  {
    id: "category",
    title: "Category",
    type: "checkbox" as const,
    options: [
      { id: "all", label: "All" },
      { id: "outerwear", label: "Outerwear" },
      { id: "accessories", label: "Accessories" },
      { id: "jewelry", label: "Jewelry" },
      { id: "beauty", label: "Beauty" },
    ],
  },
  {
    id: "rating",
    title: "Minimum Rating",
    type: "checkbox" as const,
    options: [
      { id: "5stars", label: "5+ Stars" },
      { id: "4stars", label: "4+ Stars" },
      { id: "3stars", label: "3+ Stars" },
    ],
  },
];