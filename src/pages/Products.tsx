import { useState } from "react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Heart, SlidersHorizontal, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Slider } from "../components/ui/slider";

const products = [
  {
    id: 1,
    name: "Elegant Evening Coat",
    price: 1299,
    image: "https://images.unsplash.com/photo-1693474865997-e1bd835a7414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2F0fGVufDF8fHx8MTc2MTk5ODEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Outerwear",
    isNew: true,
  },
  {
    id: 2,
    name: "Designer Handbag",
    price: 2499,
    image: "https://images.unsplash.com/photo-1601924928357-22d3b3abfcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWd8ZW58MXx8fHwxNzYxOTc5MzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Silk Evening Dress",
    price: 1899,
    image: "https://images.unsplash.com/photo-1610209740880-6ecc4b20ea78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGRyZXNzfGVufDF8fHx8MTc2MjAyMjMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Dresses",
    isNew: true,
  },
  {
    id: 4,
    name: "Luxury Jewelry Set",
    price: 3299,
    image: "https://images.unsplash.com/photo-1684439673104-f5d22791c71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwamV3ZWxyeXxlbnwxfHx8fDE3NjIwNTAwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Jewelry",
    isFeatured: true,
  },
  {
    id: 5,
    name: "Premium Leather Shoes",
    price: 899,
    image: "https://images.unsplash.com/photo-1653869225353-8101df710ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc2hvZXN8ZW58MXx8fHwxNzYyMDcxMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Shoes",
    isNew: false,
  },
  {
    id: 6,
    name: "Designer Watch",
    price: 4299,
    image: "https://images.unsplash.com/photo-1751437730397-ef83024b5339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdhdGNofGVufDF8fHx8MTc2MjA2MTk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    isFeatured: true,
  },
  {
    id: 7,
    name: "Cashmere Scarf",
    price: 599,
    image: "https://images.unsplash.com/photo-1718117059204-8380b0706219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzY2FyZnxlbnwxfHx8fDE3NjE5OTgxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories",
    isNew: true,
  },
  {
    id: 8,
    name: "Tailored Suit",
    price: 2199,
    image: "https://images.unsplash.com/photo-1553315164-49bb0615e0c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdWl0fGVufDF8fHx8MTc2MjA2NDQyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Suits",
    isFeatured: false,
  },
];

const categories = ["All", "Dresses", "Outerwear", "Suits", "Accessories", "Shoes", "Jewelry"];

export default function Products() {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1707569590650-2f963183dc0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWJyaWMlMjB0ZXh0dXJlfGVufDF8fHx8MTc2MjAwNjQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury fabric texture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="font-serif text-[3rem] md:text-[4rem] mb-4">
            Our Collection
          </h1>
          <p className="text-background/80 text-lg max-w-2xl">
            Explore timeless pieces crafted with precision and luxury
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
              <p className="text-muted-foreground">
                Showing {products.length} products
              </p>
            </div>

            <Select defaultValue="featured">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside
              className={`lg:block ${
                showFilters ? "block" : "hidden"
              } lg:col-span-1 space-y-8`}
            >
              {/* Categories */}
              <div>
                <h3 className="mb-4 pb-3 border-b border-border">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center gap-2">
                      <Checkbox id={category} />
                      <label
                        htmlFor={category}
                        className="text-sm cursor-pointer hover:text-[#D4AF37] transition-colors"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="mb-4 pb-3 border-b border-border">Price Range</h3>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={5000}
                    step={100}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Size */}
              <div>
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
              <div>
                <h3 className="mb-4 pb-3 border-b border-border">Color</h3>
                <div className="grid grid-cols-6 gap-3">
                  {["#000000", "#FFFFFF", "#8B4513", "#1A1A1A", "#D4AF37", "#2C3E50"].map(
                    (color) => (
                      <button
                        key={color}
                        className="w-8 h-8 rounded-full border-2 border-border hover:border-[#D4AF37] transition-colors"
                        style={{ backgroundColor: color }}
                      />
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
                        {product.isFeatured && (
                          <Badge variant="secondary">Featured</Badge>
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

                      {/* Quick Add */}
                      <div className="absolute bottom-0 left-0 right-0 bg-foreground text-background p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                        <Button className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                          Quick Add
                        </Button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        {product.category}
                      </p>
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

              {/* Pagination */}
              <div className="mt-12 flex justify-center items-center gap-2">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-[#D4AF37] text-black border-[#D4AF37]">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
