import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product, ProductFilters, ProductSort } from '../../model';

interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  filters: ProductFilters;
  sort: ProductSort;
  viewMode: 'grid' | 'list';
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  filters: {
    categories: [],
    priceRange: [0, 10000],
    minRating: undefined,
    inStock: undefined,
    tags: [],
  },
  sort: {
    field: 'featured',
    order: 'desc',
  },
  viewMode: 'grid',
};

const applyFiltersAndSort = (state: ProductsState) => {
  let filtered = [...state.products];

  // Apply category filter
  if (state.filters.categories.length > 0) {
    filtered = filtered.filter(p => state.filters.categories.includes(p.category));
  }

  // Apply price range filter
  filtered = filtered.filter(
    p => p.price >= state.filters.priceRange[0] && p.price <= state.filters.priceRange[1]
  );

  // Apply rating filter
  if (state.filters.minRating) {
    filtered = filtered.filter(p => (p.rating || 0) >= state.filters.minRating!);
  }

  // Apply stock filter
  if (state.filters.inStock !== undefined) {
    filtered = filtered.filter(p => p.inStock === state.filters.inStock);
  }

  // Apply sorting
  filtered.sort((a, b) => {
    let comparison = 0;
    
    switch (state.sort.field) {
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'rating':
        comparison = (a.rating || 0) - (b.rating || 0);
        break;
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'newest':
        comparison = (a.isNew ? 1 : 0) - (b.isNew ? 1 : 0);
        break;
      default:
        comparison = (a.isBestseller ? 1 : 0) - (b.isBestseller ? 1 : 0);
    }

    return state.sort.order === 'asc' ? comparison : -comparison;
  });

  state.filteredProducts = filtered;
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      applyFiltersAndSort(state);
    },
    setFilters: (state, action: PayloadAction<Partial<ProductFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
      applyFiltersAndSort(state);
    },
    setSort: (state, action: PayloadAction<ProductSort>) => {
      state.sort = action.payload;
      applyFiltersAndSort(state);
    },
    setViewMode: (state, action: PayloadAction<'grid' | 'list'>) => {
      state.viewMode = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
      applyFiltersAndSort(state);
    },
  },
});

export const {
  setProducts,
  setFilters,
  setSort,
  setViewMode,
  resetFilters,
} = productsSlice.actions;

export default productsSlice.reducer;
