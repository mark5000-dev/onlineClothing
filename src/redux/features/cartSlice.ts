import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartState, CartItem } from '../../model';

const calculateTotals = (state: CartState) => {
  state.subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  state.shipping = state.subtotal > 500 ? 0 : 50;
  state.discount = state.promoCode ? state.subtotal * 0.1 : 0;
  state.tax = (state.subtotal - state.discount) * 0.08;
  state.total = state.subtotal - state.discount + state.tax + state.shipping;
};

const initialState: CartState = {
  items: [],
  subtotal: 0,
  shipping: 0,
  discount: 0,
  tax: 0,
  total: 0,
  promoCode: undefined,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        item => item.productId === action.payload.productId && 
                item.size === action.payload.size && 
                item.color === action.payload.color
      );
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      calculateTotals(state);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      calculateTotals(state);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
        calculateTotals(state);
      }
    },
    applyPromoCode: (state, action: PayloadAction<string>) => {
      state.promoCode = action.payload;
      calculateTotals(state);
    },
    removePromoCode: (state) => {
      state.promoCode = undefined;
      calculateTotals(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.promoCode = undefined;
      calculateTotals(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  applyPromoCode,
  removePromoCode,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
