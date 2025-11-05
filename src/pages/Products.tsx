import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Separator } from "../components/ui/separator";
import { Label } from "../components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Slider } from "../components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { Heart, SlidersHorizontal, Grid3x3, List, Star } from "lucide-react";

const products = [
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

export default function Products() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-card border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="hover:text-[#D4AF37] transition-colors">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>All Products</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Header Section */}
        <section className="bg-background py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge className="bg-[#D4AF37] text-black hover:bg-[#C5A028] mb-4">
                Luxury Collection
              </Badge>
              <h1 className="font-serif text-[3rem] md:text-[4rem] mb-4">
                All Products
              </h1>
              <p className="text-muted-foreground text-lg">
                Explore our complete collection of luxury fashion and accessories, 
                carefully curated for the discerning individual.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Toolbar */}
            <Card className="mb-8 border-border">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="gap-2">
                          <SlidersHorizontal className="h-4 w-4" />
                          Filters
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                        <SheetHeader>
                          <SheetTitle>Filter Products</SheetTitle>
                        </SheetHeader>
                        <Separator className="my-4" />
                        
                        {/* Filters Content */}
                        <div className="space-y-6">
                          {/* Price Range */}
                          <div>
                            <Label className="mb-4 block">Price Range</Label>
                            <Slider
                              value={priceRange}
                              onValueChange={setPriceRange}
                              max={10000}
                              step={100}
                              className="mb-4"
                            />
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>${priceRange[0]}</span>
                              <span>${priceRange[1]}</span>
                            </div>
                          </div>
                          
                          <Separator />
                          
                          {/* Category */}
                          <div>
                            <Label className="mb-4 block">Category</Label>
                            <div className="space-y-3">
                              {["All", "Outerwear", "Accessories", "Jewelry", "Beauty"].map((cat) => (
                                <div key={cat} className="flex items-center gap-2">
                                  <Checkbox id={cat} />
                                  <Label htmlFor={cat} className="text-sm cursor-pointer">
                                    {cat}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <Separator />
                          
                          {/* Rating */}
                          <div>
                            <Label className="mb-4 block">Minimum Rating</Label>
                            <div className="space-y-3">
                              {[5, 4, 3].map((rating) => (
                                <div key={rating} className="flex items-center gap-2">
                                  <Checkbox id={`rating-${rating}`} />
                                  <Label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer flex items-center gap-1">
                                    <Star className="h-3 w-3 fill-[#D4AF37] text-[#D4AF37]" />
                                    {rating}+ Stars
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                    
                    <p className="text-sm text-muted-foreground">
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
                        <SelectItem value="rating">Highest Rated</SelectItem>
                      </SelectContent>
                    </Select>

                    <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "grid" | "list")}>
                      <TabsList>
                        <TabsTrigger value="grid">
                          <Grid3x3 className="h-4 w-4" />
                        </TabsTrigger>
                        <TabsTrigger value="list">
                          <List className="h-4 w-4" />
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className="group relative overflow-hidden transition-all hover:shadow-xl cursor-pointer border-0"
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
                    <CardContent className="p-4">
                      <p className="text-xs text-muted-foreground mb-2">{product.category}</p>
                      <h3 className="mb-2 group-hover:text-[#D4AF37] transition-colors">
                        {product.name}
                      </h3>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-3 w-3 fill-[#D4AF37] text-[#D4AF37]" />
                        <span className="text-sm">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>
                      
                      <p className="text-[#D4AF37]">${product.price.toLocaleString()}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className="group overflow-hidden transition-all hover:shadow-xl cursor-pointer border-0"
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Product Image */}
                        <div className="relative w-full sm:w-64 aspect-[4/3] sm:aspect-square overflow-hidden bg-muted flex-shrink-0">
                          <ImageWithFallback
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          
                          {/* Badges */}
                          <div className="absolute top-4 left-4 flex gap-2">
                            {product.isNew && (
                              <Badge className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                                New
                              </Badge>
                            )}
                            {product.isBestseller && (
                              <Badge variant="secondary">Bestseller</Badge>
                            )}
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 p-6 flex flex-col justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground mb-2">{product.category}</p>
                            <h3 className="text-xl mb-2 group-hover:text-[#D4AF37] transition-colors">
                              {product.name}
                            </h3>
                            
                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-4">
                              <Star className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                              <span className="text-sm">{product.rating}</span>
                              <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                            </div>
                            
                            <p className="text-muted-foreground text-sm mb-4">
                              Premium quality craftsmanship with attention to every detail. 
                              Experience luxury that stands the test of time.
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <p className="text-[#D4AF37] text-xl">${product.price.toLocaleString()}</p>
                            <div className="flex gap-2">
                              <Button variant="outline" size="icon">
                                <Heart className="h-5 w-5" />
                              </Button>
                              <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="outline" className="bg-[#D4AF37] text-black hover:bg-[#C5A028] border-[#D4AF37]">
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
