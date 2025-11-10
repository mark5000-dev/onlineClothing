import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { ItemsGrid } from "../components/ItemsGrid";
import { ProductCard } from "../components/ProductCard";
import { type Product, mockProducts as products } from "../model";

const subcategories = [
  { id: "womens", label: "Women" },
  { id: "mens", label: "Men" },
  { id: "kids", label: "Kids" },
  { id: "accessories", label: "Accessories" },
];

export default function Products() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const navigate = useNavigate();

  const handleSortChange = (value: string) => {
    console.log("Sort changed:", value);
  };

  const handleSubcategoryClick = (id: string) => {
    navigate(`/category/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHero
        title="All Products"
        description="Explore our complete collection of luxury fashion and accessories, carefully curated for the discerning individual."
        breadcrumbs={[{ label: "All Products" }]}
        badge={{ label: "Luxury Collection" }}
      />

      {/* Toolbar-like div */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Left: Subcategory buttons */}
            <div className="flex flex-wrap gap-2">
              {subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => handleSubcategoryClick(sub.id)}
                  className="px-4 py-2 text-sm font-medium rounded bg-gray-100 hover:bg-gray-200 transition"
                >
                  {sub.label}
                </button>
              ))}
            </div>

            {/* Right: Sort & View */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{products.length} products</span>

              {/* View Mode */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-gray-300" : "bg-gray-100"}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-gray-300" : "bg-gray-100"}`}
                >
                  List
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                className="border rounded p-1 text-sm"
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <ItemsGrid
            items={products}
            renderItem={(product: Product) => <ProductCard key={product.id} product={product} />}
            viewMode={viewMode}
            gridCols={{ default: 1, sm: 2, lg: 3 }}
            showLoadMore
            onLoadMore={() => console.log("Load more")}
            loadMoreLabel="Load More Products"
          />
        </div>
      </section>
    </div>
  );
}
