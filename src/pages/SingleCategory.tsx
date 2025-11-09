import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { SubcategoryNav } from "../components/SubCategoryNav";
import { ItemsToolbar } from "../components/ItemsToolbar";
import { ItemsFilter } from "../components/ItemsFilter";
import { ItemsGrid } from "../components/ItemsGrid";
import { ProductCard } from "../components/ProductCard";
import { CollectionInfo } from "../components/Info";
import type { Product } from "../model";

const products: Product[] = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: 2899,
    image: "https://images.unsplash.com/photo-1675294292093-5f6f5bb8836f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVuaW5nJTIwZHJlc3N8ZW58MXx8fHwxNzYyMDM0OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Dresses",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 2,
    name: "Tailored Wool Coat",
    price: 1899,
    image: "https://images.unsplash.com/photo-1744551358280-f1d593754132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2F0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjIwNzc0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Outerwear",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 3,
    name: "Designer Blazer",
    price: 1299,
    image: "https://images.unsplash.com/flagged/photo-1553802922-5f7e9934e328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGF6ZXJ8ZW58MXx8fHwxNzYyMDg2MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Outerwear",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 4,
    name: "Silk Blouse",
    price: 799,
    image: "https://images.unsplash.com/photo-1694243382333-9e3244d9ba04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJsb3VzZXxlbnwxfHx8fDE3NjIwODYxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Tops",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Pleated Midi Skirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1758749646094-606f23edaef6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2lydHxlbnwxfHx8fDE3NjIwODYxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Bottoms",
    isNew: false,
    isBestseller: false,
  },
  {
    id: 6,
    name: "Wide-Leg Trousers",
    price: 699,
    image: "https://images.unsplash.com/photo-1587088155172-e9355df99c30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHBhbnRzfGVufDF8fHx8MTc2MTk5ODEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Bottoms",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 7,
    name: "Cashmere Sweater",
    price: 999,
    image: "https://images.unsplash.com/photo-1661268095505-cbfb42ef6f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwd29tZW58ZW58MXx8fHwxNzYyMDg2MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Tops",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 8,
    name: "Satin Dress",
    price: 1599,
    image: "https://images.unsplash.com/photo-1675294292093-5f6f5bb8836f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVuaW5nJTIwZHJlc3N8ZW58MXx8fHwxNzYyMDM0OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Dresses",
    isNew: false,
    isBestseller: false,
  },
  {
    id: 9,
    name: "Leather Jacket",
    price: 2299,
    image: "https://images.unsplash.com/photo-1744551358280-f1d593754132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2F0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjIwNzc0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Outerwear",
    isNew: true,
    isBestseller: true,
  },
];

const subcategories = [
  { id: "all", label: "All Items" },
  { id: "dresses", label: "Dresses" },
  { id: "tops", label: "Tops" },
  { id: "bottoms", label: "Bottoms" },
  { id: "outerwear", label: "Outerwear" },
];

const filterSections = [
  {
    id: "price",
    title: "Price Range",
    type: "slider" as const,
    min: 0,
    max: 3000,
    step: 50,
    value: [0, 3000],
  },
  {
    id: "size",
    title: "Size",
    type: "buttons" as const,
    options: [
      { id: "xs", label: "XS" },
      { id: "s", label: "S" },
      { id: "m", label: "M" },
      { id: "l", label: "L" },
      { id: "xl", label: "XL" },
      { id: "xxl", label: "XXL" },
    ],
  },
  {
    id: "color",
    title: "Color",
    type: "colors" as const,
    colors: [
      "#000000",
      "#FFFFFF",
      "#8B4513",
      "#1A1A1A",
      "#D4AF37",
      "#2C3E50",
      "#C19A6B",
      "#8B0000",
      "#2F4F4F",
      "#4B0082",
    ],
  },
  {
    id: "material",
    title: "Material",
    type: "checkbox" as const,
    options: [
      { id: "silk", label: "Silk" },
      { id: "wool", label: "Wool" },
      { id: "cotton", label: "Cotton" },
      { id: "cashmere", label: "Cashmere" },
      { id: "leather", label: "Leather" },
      { id: "linen", label: "Linen" },
    ],
  },
];

export default function SingleCategory() {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");

  const handleFilterChange = (sectionId: string, value: any) => {
    console.log("Filter changed:", sectionId, value);
    // Implement filter logic here
  };

  const handleSortChange = (value: string) => {
    console.log("Sort changed:", value);
    // Implement sort logic here
  };

  const handleSubcategorySelect = (subcategory: any) => {
    setSelectedSubcategory(subcategory.id);
    console.log("Subcategory selected:", subcategory);
    // Implement subcategory filtering logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Page Hero */}
        <PageHero
          imageUrl="https://images.unsplash.com/photo-1661268095505-cbfb42ef6f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwd29tZW58ZW58MXx8fHwxNzYyMDg2MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          title="Women's Collection"
          description="Discover timeless elegance with our carefully curated selection of luxury women's fashion"
          breadcrumbs={[
            { label: "Categories", href: "/categories" },
            { label: "Women's Collection" },
          ]}
          showGradient={true}
        />

        {/* Subcategory Navigation */}
        <SubcategoryNav
          subcategories={subcategories}
          defaultSelected="all"
          onSelect={handleSubcategorySelect}
        />

        {/* Main Content */}
        <section className="py-12 bg-background">
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

        {/* Category Info Section */}
        <CollectionInfo
          title="The Art of Feminine Elegance"
          description="Our women's collection celebrates the modern woman's sophistication and style. Each piece is carefully selected from the world's finest designers and ateliers, ensuring exceptional quality and timeless appeal. From boardroom to ballroom, find pieces that empower and inspire."
        />
      </div>
    </div>
  );
}
