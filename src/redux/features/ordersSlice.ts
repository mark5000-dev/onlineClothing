import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { OrderState, Order } from '../../model';

const initialState: OrderState = {
  orders: [],
  currentOrder: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.unshift(action.payload);
    },
    setCurrentOrder: (state, action: PayloadAction<Order | null>) => {
      state.currentOrder = action.payload;
    },
    updateOrderStatus: (state, action: PayloadAction<{ id: string; status: Order['status'] }>) => {
      const order = state.orders.find(o => o.id === action.payload.id);
      if (order) {
        order.status = action.payload.status;
      }
    },
  },
});

export const {
  setOrders,
  addOrder,
  setCurrentOrder,
  updateOrderStatus,
} = ordersSlice.actions;

export default ordersSlice.reducer;
