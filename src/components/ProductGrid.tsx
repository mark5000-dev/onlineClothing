import { Button } from "./ui/button";
import type { Product } from "../model";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
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
            <ProductCard key={product.id} product={product} />
            
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
