import { useState, useEffect, useMemo } from "react";
import { PageHero } from "../components/PageHero";
import { SubcategoryNav } from "../components/SubCategoryNav";
import { ItemsToolbar } from "../components/ItemsToolbar";
import { ItemsFilter } from "../components/ItemsFilter";
import { ItemsGrid } from "../components/ItemsGrid";
import { ProductCard } from "../components/ProductCard";
import { CollectionInfo } from "../components/Info";
import { type Product, mockProducts as products } from "../model";
import { useParams } from "react-router-dom";

type Subcategory = { id: string; label: string };
type CategoryData = { hero: string; title: string; subcategories: Subcategory[]; products: Product[] };

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

// Mock API function
function fetchCategoryData(slug: string): Promise<CategoryData> {
  const allProducts = products;

  const allSubcategories: Subcategory[] = [
    { id: "all", label: "All Items" },
    { id: "dresses", label: "Dresses" },
    { id: "tops", label: "Tops" },
    { id: "bottoms", label: "Bottoms" },
    { id: "outerwear", label: "Outerwear" },
  ];

  const filteredProducts = allProducts.filter((product) => product.mainCategory === slug);

  return Promise.resolve({
    products: filteredProducts,
    subcategories: allSubcategories,
    hero: "https://images.unsplash.com/photo-1661268095505-cbfb42ef6f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    title: slug === "womens" ? "Women's Collection" : "Category Title",
  });
}

export default function SingleCategory() {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [categoryData, setCategoryData] = useState<{ hero: string; title: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetchCategoryData(slug)
      .then((data) => {
        setProducts(data.products);
        setSubcategories(data.subcategories);
        setCategoryData({ hero: data.hero, title: data.title });
      })
      .finally(() => setLoading(false));
  }, [slug]);

  // Apply subcategory filter
  const filteredProducts = useMemo(() => {
    if (selectedSubcategory === "all") 
      {
        return products
      };
    return products.filter(p => p.mainCategory.toLowerCase() === selectedSubcategory.toLowerCase());
  }, [products, selectedSubcategory]);

  const handleFilterChange = (sectionId: string, value: any) => {
    console.log("Filter changed:", sectionId, value);
  };

  const handleSortChange = (value: string) => console.log("Sort changed:", value);

  const handleSubcategorySelect = (subcategory: Subcategory) => setSelectedSubcategory(subcategory.id);

  if (loading || !categoryData) return <div className="p-12 text-center">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <PageHero
        imageUrl={categoryData.hero}
        title={categoryData.title}
        description={`Explore the best ${categoryData.title.toLowerCase()} from our curated collection.`}
        breadcrumbs={[
          { label: "Categories", href: "/categories" },
          { label: slug || "" },
        ]}
        showGradient
      />

      <SubcategoryNav
        subcategories={subcategories}
        defaultSelected="all"
        onSelect={handleSubcategorySelect}
      />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ItemsToolbar
            showFilters={showFilters}
            onToggleFilters={() => setShowFilters(!showFilters)}
            totalItems={filteredProducts.length}
            itemLabel="products"
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            onSortChange={handleSortChange}
          />

          {/* Layout: sidebar + product grid */}
          <div className="flex gap-8 mt-8">
            {/* Sidebar filters */}
            <div className={`w-full lg:w-1/4 ${showFilters ? "block" : "hidden lg:block"}`}>
              <ItemsFilter
                show={showFilters}
                sections={filterSections}
                onFilterChange={handleFilterChange}
              />
            </div>

            {/* Product grid */}
            <div className="flex-1">
              <ItemsGrid
                items={filteredProducts}
                renderItem={(product: Product) => <ProductCard key={product.id} product={product} />}
                viewMode={viewMode}
                gridCols={{ default: 1, sm: 2, lg: 3 }}
                showLoadMore
                onLoadMore={() => console.log("Load more")}
                loadMoreLabel="Load More Products"
              />
            </div>
          </div>
        </div>
      </section>

      <CollectionInfo
        title="The Art of Feminine Elegance"
        description="Our women's collection celebrates the modern woman's sophistication and style. Each piece is carefully selected from the world's finest designers and ateliers, ensuring exceptional quality and timeless appeal. From boardroom to ballroom, find pieces that empower and inspire."
      />
    </div>
  );
}