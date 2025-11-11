import { type Product } from "./product";

export interface WishlistItem extends Product {

  inStock: boolean;
  addedAt: string;
}

export interface WishlistState {
  items: WishlistItem[];
}
