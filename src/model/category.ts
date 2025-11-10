export interface Category {
  id: number | string;
  name: string;
  slug: string;
  image: string;
  description?: string;
  productCount?: number;
  featured?: boolean;
}
