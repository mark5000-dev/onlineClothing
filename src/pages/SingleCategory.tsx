import { useState, useEffect, useMemo } from "react";
import { PageHero } from "../components/PageHero";
import { SubcategoryNav } from "../components/SubCategoryNav";
import { ItemsToolbar } from "../components/ItemsToolbar";
import { ItemsGrid } from "../components/ItemsGrid";
import { ProductCard } from "../components/ProductCard";
import { CollectionInfo } from "../components/Info";
import { type Product, type Subcategory} from "../model";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";


export default function SingleCategory() {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [categoryData, setCategoryData] = useState<{ hero: string; title: string }>({hero:"", title:""});
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");

  //Fetch products with the category given by the slug with error boundaries
  const category = useAppSelector((state) => state.categories.categories.find(c => c.slug === slug));
  if (!category) return <div className="p-12 text-center">Category not found</div>;
  const categoryProducts = useAppSelector((state) => state.products.products.filter(p => p.mainCategory === category.id));
  if (!categoryProducts) return <div className="p-12 text-center">Unable to fetch products with category given</div>;

  const myCategoryData = { hero: category.image , title: category.name };

  useEffect(() => {
    setProducts(categoryProducts);
    setCategoryData(myCategoryData);
    setLoading(false);

    const subs = category.subcategories
      ? [{ id: "all", name: "All Items", slug: "all" }, ...category.subcategories]
      : [{ id: "all", name: "All Items", slug: "all" }];

    setSubcategories(subs);
  }, [slug]);

  const filteredProducts = useMemo(() => {
    if (selectedSubcategory === "all") {
      return products;
    }

    return products.filter((p) =>
      Array.isArray(p.subCategories) &&
      p.subCategories.some(
        (sub) =>
          sub.toLowerCase() === selectedSubcategory.toLowerCase() ||
          sub.replace(/\s+/g, "-").toLowerCase() === selectedSubcategory.toLowerCase()
      )
    );
  }, [products, selectedSubcategory]);



  // const handleFilterChange = (sectionId: string, value: any) => {
  //   console.log("Filter changed:", sectionId, value);
  // };

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
            {/* <div className={`w-full lg:w-1/4 ${showFilters ? "block" : "hidden lg:block"}`}>
              <ItemsFilter
                show={showFilters}
                sections={filterSections}
                onFilterChange={handleFilterChange}
              />
            </div> */}

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