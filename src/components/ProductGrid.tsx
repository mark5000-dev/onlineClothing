import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Link } from "react-router-dom";

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
];

export function ProductGrid() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked selections from our latest collection
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link to={`/product/${product.id}`}>
            <Card
              key={product.id}
              className="group relative overflow-hidden transition-all hover:shadow-xl border-0"
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
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {product.category}
                </p>
                <h3 className="mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#D4AF37]">
                  ${product.price.toLocaleString()}
                </p>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/products">
          <Button
            size="lg"
            variant="outline"
            className="border-foreground hover:bg-foreground hover:text-background px-8"
          >
            View All Products
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
