import { ImageWithFallback } from "./ui/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import type { Product } from "../model";
//import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";


export const ProductGrid: React.FC<{ products: Product[] }> = ({products}) => {
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
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-foreground hover:bg-foreground hover:text-background px-8"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
