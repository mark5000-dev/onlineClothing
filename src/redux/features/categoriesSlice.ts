import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Category } from '../../model';

interface CategoriesState {
  categories: Category[];
  selectedCategory: Category | null;
}

const initialState: CategoriesState = {
  categories: [],
  selectedCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<Category | null>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  setCategories,
  setSelectedCategory,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
