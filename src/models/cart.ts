import type { Product } from "./types";

export interface CartItem extends Product {
    quantity: number;
    size?: string;
    color?: string;
}

export interface CartState {
    isCartOpen: boolean;
    cartItems: CartItem[];
}
