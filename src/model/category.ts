export interface Subcategory {
  id: number | string;
  name: string;
  slug: string;
}

export interface Category {
  id: number | string;
  name: string;            // e.g., "Women"
  slug: string;            // e.g., "women" (used in URLs)
  image: string;           // hero/banner image
  description?: string;    // optional description
  productCount?: number;   // optional, total products in this category
  featured?: boolean;      // optional
  subcategories?: Subcategory[]; // list of subcategories under this main category
}

export const mockCategories: Category[] = [
  {
    id: 1,
    name: "Women's Collection",
    slug: "womens-collection",
    description: "Elegant pieces crafted for the modern woman",
    image: "https://images.unsplash.com/photo-1661268095505-cbfb42ef6f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwd29tZW58ZW58MXx8fHwxNzYyMDg2MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    productCount: 156,
  },
  {
    id: 2,
    name: "Men's Collection",
    slug: "mens-collection",
    description: "Sophisticated tailoring and timeless style",
    image: "https://images.unsplash.com/photo-1600481006437-5ef63a680aa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbWVufGVufDF8fHx8MTc2MjA4NjEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    productCount: 124,
  },
  {
  id: 3,
  name: "Kids Collection",
  slug: "kids",
  description: "Playful styles and durable clothing for kids of all ages",
  image: "https://via.placeholder.com/1080x1080?text=Kids+Fashion",
  productCount: 58,
},
  {
    id: 4,
    name: "Accessories",
    slug: "accessories",
    description: "Finishing touches that elevate any ensemble",
    image: "https://images.unsplash.com/photo-1591348278900-019a8a2a8b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWdzfGVufDF8fHx8MTc2MjA4NjEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    productCount: 89,
  },
  {
    id: 5,
    name: "Jewelry",
    slug: "jewelry",
    description: "Exquisite pieces for every occasion",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5fGVufDF8fHx8MTc2MjA3NTI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    productCount: 67,
  },
  {
    id: 6,
    name: "Shoes",
    slug: "shoes",
    description: "From casual elegance to formal sophistication",
    image: "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9lc3xlbnwxfHx8fDE3NjIwODYxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    productCount: 92,
  },
];
