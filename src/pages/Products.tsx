import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { ItemsToolbar } from "../components/ItemsToolbar";
import { ItemsFilter } from "../components/ItemsFilter";
import { ItemsGrid } from "../components/ItemsGrid";
import { ProductCard } from "../components/ProductCard";
import { Star } from "lucide-react";
import type { Product } from "../model";

const products: Product[] = [
  {
    id: 1,
    name: "Cashmere Overcoat",
    price: 2899,
    image: "https://images.unsplash.com/photo-1567777301743-3b7ef158aadf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzYyMzIxNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Outerwear",
    isNew: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Swiss Luxury Watch",
    price: 8999,
    image: "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjIzMTg1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    isBestseller: true,
    rating: 5.0,
    reviews: 342,
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: 599,
    image: "https://images.unsplash.com/photo-1722842529941-825976fc14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzYyMzIxMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    isNew: false,
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 4,
    name: "Luxury Perfume",
    price: 399,
    image: "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lfGVufDF8fHx8MTc2MjM2MzcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Beauty",
    isBestseller: true,
    rating: 4.9,
    reviews: 267,
  },
  {
    id: 5,
    name: "Silk Designer Scarf",
    price: 299,
    image: "https://images.unsplash.com/photo-1759725608258-6c02f617665b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNjYXJmfGVufDF8fHx8MTc2MjI1MTU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    isNew: true,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 6,
    name: "Premium Leather Belt",
    price: 449,
    image: "https://images.unsplash.com/flagged/photo-1553802922-5f7e9934e328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWx0fGVufDF8fHx8MTc2MjM2MzcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    isNew: false,
    rating: 4.5,
    reviews: 98,
  },
  {
    id: 7,
    name: "Tailored Blazer",
    price: 1899,
    image: "https://images.unsplash.com/photo-1567777301743-3b7ef158aadf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzYyMzIxNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Outerwear",
    isBestseller: true,
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 8,
    name: "Gold Cufflinks",
    price: 799,
    image: "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjIzMTg1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Jewelry",
    isNew: true,
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 9,
    name: "Signature Fragrance Set",
    price: 699,
    image: "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lfGVufDF8fHx8MTc2MjM2MzcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Beauty",
    isNew: false,
    rating: 4.7,
    reviews: 187,
  },
];

const filterSections = [
  {
    id: "price",
    title: "Price Range",
    type: "slider" as const,
    min: 0,
    max: 10000,
    step: 100,
    value: [0, 10000],
  },
  {
    id: "category",
    title: "Category",
    type: "checkbox" as const,
    options: [
      { id: "all", label: "All" },
      { id: "outerwear", label: "Outerwear" },
      { id: "accessories", label: "Accessories" },
      { id: "jewelry", label: "Jewelry" },
      { id: "beauty", label: "Beauty" },
    ],
  },
  {
    id: "rating",
    title: "Minimum Rating",
    type: "checkbox" as const,
    options: [
      { id: "5stars", label: "5+ Stars" },
      { id: "4stars", label: "4+ Stars" },
      { id: "3stars", label: "3+ Stars" },
    ],
  },
];

export default function Products() {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleFilterChange = (sectionId: string, value: any) => {
    console.log("Filter changed:", sectionId, value);
    // Implement filter logic here
  };

  const handleSortChange = (value: string) => {
    console.log("Sort changed:", value);
    // Implement sort logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Page Hero */}
        <PageHero
          title="All Products"
          description="Explore our complete collection of luxury fashion and accessories, carefully curated for the discerning individual."
          breadcrumbs={[{ label: "All Products" }]}
          badge={{
            label: "Luxury Collection",
          }}
          showGradient={false}
        />

        {/* Main Content */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Toolbar */}
            <ItemsToolbar
              showFilters={showFilters}
              onToggleFilters={() => setShowFilters(!showFilters)}
              totalItems={products.length}
              itemLabel="products"
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onSortChange={handleSortChange}
            />

            <div className="grid lg:grid-cols-4 gap-8 mt-8">
              {/* Filters Sidebar */}
              <ItemsFilter
                show={showFilters}
                sections={filterSections}
                onFilterChange={handleFilterChange}
              />

              {/* Product Grid */}
              <ItemsGrid
                items={products}
                renderItem={(product: Product) => (
                  <ProductCard key={product.id} product={product} />
                )}
                viewMode={viewMode}
                gridCols={{
                  default: 1,
                  sm: 2,
                  lg: 3,
                }}
                showLoadMore={true}
                onLoadMore={() => console.log("Load more")}
                loadMoreLabel="Load More Products"
                className={showFilters ? "lg:col-span-3" : "lg:col-span-4"}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
