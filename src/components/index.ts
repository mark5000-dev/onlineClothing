// Layout Components
export { Header } from './Header';
export { Footer } from './Footer';

// Reusable Page Components (Use these for all pages with listing/filtering)
export { PageHero } from './PageHero';
export { SubcategoryNav } from './SubcategoryNav';
export { ItemsToolbar } from './ItemsToolbar';
export { ItemsFilter } from './ItemsFilter';
export { ItemsGrid } from './ItemsGrid';

// Product Components
export { ProductCard } from './ProductCard';
export { ProductGrid } from './ProductGrid'; // Home page only

// Category Components
export { CategoryCard } from './CategoryCard';
export { CategoryShowcase } from './CategoryShowcase';

// Home Components
export { Hero } from './Hero';
export { FeaturedCollection } from './FeaturedCollection';
export { Newsletter } from './Newsletter';
export { CollectionInfo } from './Info';

// Cart
export { Cart } from './Cart';

// Utility
export { ImageWithFallback } from './ui/ImageWithFallback';

// DEPRECATED: Use reusable components instead
// - CollectionHero -> Use PageHero + SubcategoryNav
// - CollectionToolbar -> Use ItemsToolbar
// - CollectionFilter -> Use ItemsFilter
// - CollectionGrid -> Use ItemsGrid with ProductCard
