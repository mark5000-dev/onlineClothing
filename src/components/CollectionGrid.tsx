import { ProductCard } from "../components/ProductCard";
import { type Product } from "../model/types";
import { Button } from "../components/ui/button";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="lg:col-span-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
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
  );
};
