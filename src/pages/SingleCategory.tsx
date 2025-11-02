import { useState } from "react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Slider } from "../components/ui/slider";
import { Heart, SlidersHorizontal } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: 2899,
    image: "https://images.unsplash.com/photo-1675294292093-5f6f5bb8836f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVuaW5nJTIwZHJlc3N8ZW58MXx8fHwxNzYyMDM0OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 2,
    name: "Tailored Wool Coat",
    price: 1899,
    image: "https://images.unsplash.com/photo-1744551358280-f1d593754132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2F0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjIwNzc0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 3,
    name: "Designer Blazer",
    price: 1299,
    image: "https://images.unsplash.com/flagged/photo-1553802922-5f7e9934e328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGF6ZXJ8ZW58MXx8fHwxNzYyMDg2MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 4,
    name: "Silk Blouse",
    price: 799,
    image: "https://images.unsplash.com/photo-1694243382333-9e3244d9ba04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJsb3VzZXxlbnwxfHx8fDE3NjIwODYxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Pleated Midi Skirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1758749646094-606f23edaef6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2lydHxlbnwxfHx8fDE3NjIwODYxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false,
    isBestseller: false,
  },
  {
    id: 6,
    name: "Wide-Leg Trousers",
    price: 699,
    image: "https://images.unsplash.com/photo-1587088155172-e9355df99c30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHBhbnRzfGVufDF8fHx8MTc2MTk5ODEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 7,
    name: "Cashmere Sweater",
    price: 999,
    image: "https://images.unsplash.com/photo-1661268095505-cbfb42ef6f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwd29tZW58ZW58MXx8fHwxNzYyMDg2MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 8,
    name: "Satin Dress",
    price: 1599,
    image: "https://images.unsplash.com/photo-1675294292093-5f6f5bb8836f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVuaW5nJTIwZHJlc3N8ZW58MXx8fHwxNzYyMDM0OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false,
    isBestseller: false,
  },
  {
    id: 9,
    name: "Leather Jacket",
    price: 2299,
    image: "https://images.unsplash.com/photo-1744551358280-f1d593754132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2F0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjIwNzc0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    isBestseller: true,
  },
];

const subcategories = ["All Items", "Dresses", "Tops", "Bottoms", "Outerwear"];

export default function SingleCategory() {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("All Items");

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1661268095505-cbfb42ef6f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwd29tZW58ZW58MXx8fHwxNzYyMDg2MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Women's Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>

          <div className="relative container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/80 mb-4">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Home
              </a>
              <span>/</span>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Categories
              </a>
              <span>/</span>
              <span className="text-white">Women's Collection</span>
            </div>

            <h1 className="font-serif text-white text-[3rem] md:text-[4.5rem] leading-tight mb-4">
              Women's Collection
            </h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Discover timeless elegance with our carefully curated selection of 
              luxury women's fashion
            </p>
          </div>
        </section>

        {/* Subcategory Navigation */}
        <section className="bg-card border-b border-border sticky top-20 z-40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
              {subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => setSelectedSubcategory(subcategory)}
                  className={`px-6 py-2 whitespace-nowrap transition-all ${
                    selectedSubcategory === subcategory
                      ? "bg-[#D4AF37] text-black"
                      : "bg-background hover:bg-muted"
                  }`}
                >
                  {subcategory}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="gap-2"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  {showFilters ? "Hide" : "Show"} Filters
                </Button>
                <p className="text-muted-foreground">
                  {products.length} products
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="bestseller">Best Sellers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <aside
                className={`lg:block ${
                  showFilters ? "block" : "hidden"
                } lg:col-span-1 space-y-8`}
              >
                {/* Price Range */}
                <div className="bg-card p-6">
                  <h3 className="mb-4 pb-3 border-b border-border">Price Range</h3>
                  <div className="space-y-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={3000}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Size */}
                <div className="bg-card p-6">
                  <h3 className="mb-4 pb-3 border-b border-border">Size</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <Button
                        key={size}
                        variant="outline"
                        size="sm"
                        className="hover:border-[#D4AF37] hover:text-[#D4AF37]"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Color */}
                <div className="bg-card p-6">
                  <h3 className="mb-4 pb-3 border-b border-border">Color</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {[
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
                    ].map((color) => (
                      <button
                        key={color}
                        className="w-10 h-10 rounded-full border-2 border-border hover:border-[#D4AF37] transition-colors"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Material */}
                <div className="bg-card p-6">
                  <h3 className="mb-4 pb-3 border-border">Material</h3>
                  <div className="space-y-3">
                    {["Silk", "Wool", "Cotton", "Cashmere", "Leather", "Linen"].map(
                      (material) => (
                        <div key={material} className="flex items-center gap-2">
                          <Checkbox id={material} />
                          <label
                            htmlFor={material}
                            className="text-sm cursor-pointer hover:text-[#D4AF37] transition-colors"
                          >
                            {material}
                          </label>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </aside>

              {/* Product Grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative bg-card overflow-hidden transition-all hover:shadow-xl cursor-pointer"
                    >
                      {/* Product Image */}
                      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          {product.isNew && (
                            <Badge className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                              New
                            </Badge>
                          )}
                          {product.isBestseller && (
                            <Badge variant="secondary">Bestseller</Badge>
                          )}
                        </div>

                        {/* Wishlist Button */}
                        <Button
                          size="icon"
                          variant="ghost"
                          className="absolute top-4 right-4 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Heart className="h-5 w-5" />
                        </Button>

                        {/* Quick View */}
                        <div className="absolute bottom-0 left-0 right-0 bg-foreground text-background p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                          <Button className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                            Quick View
                          </Button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h3 className="mb-2 group-hover:text-[#D4AF37] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-[#D4AF37]">
                          ${product.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More */}
                <div className="mt-12 text-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-12 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    Load More Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Info Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-6">
                The Art of Feminine Elegance
              </h2>
              <p className="text-background/80 text-lg leading-relaxed">
                Our women's collection celebrates the modern woman's sophistication 
                and style. Each piece is carefully selected from the world's finest 
                designers and ateliers, ensuring exceptional quality and timeless appeal. 
                From boardroom to ballroom, find pieces that empower and inspire.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
