import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserState, User, Address, PaymentMethod } from '../../model';

const initialState: UserState = {
  user: null,
  addresses: [],
  paymentMethods: [],
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.addresses = [];
      state.paymentMethods = [];
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    addAddress: (state, action: PayloadAction<Address>) => {
      state.addresses.push(action.payload);
    },
    updateAddress: (state, action: PayloadAction<Address>) => {
      const index = state.addresses.findIndex(a => a.id === action.payload.id);
      if (index >= 0) {
        state.addresses[index] = action.payload;
      }
    },
    removeAddress: (state, action: PayloadAction<number>) => {
      state.addresses = state.addresses.filter(a => a.id !== action.payload);
    },
    setDefaultAddress: (state, action: PayloadAction<number>) => {
      state.addresses.forEach(a => {
        a.isDefault = a.id === action.payload;
      });
    },
    addPaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
      state.paymentMethods.push(action.payload);
    },
    removePaymentMethod: (state, action: PayloadAction<number>) => {
      state.paymentMethods = state.paymentMethods.filter(p => p.id !== action.payload);
    },
    setDefaultPaymentMethod: (state, action: PayloadAction<number>) => {
      state.paymentMethods.forEach(p => {
        p.isDefault = p.id === action.payload;
      });
    },
  },
});

export const {
  setUser,
  logout,
  updateUser,
  addAddress,
  updateAddress,
  removeAddress,
  setDefaultAddress,
  addPaymentMethod,
  removePaymentMethod,
  setDefaultPaymentMethod,
} = userSlice.actions;

export default userSlice.reducer;
