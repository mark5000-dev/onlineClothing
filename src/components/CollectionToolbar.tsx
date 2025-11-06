import { SlidersHorizontal } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface ProductToolbarProps {
  showFilters: boolean;
  onToggleFilters: () => void;
  totalProducts: number;
}

export const ProductToolbar: React.FC<ProductToolbarProps> = ({
  showFilters,
  onToggleFilters,
  totalProducts,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={onToggleFilters}
          className="gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          {showFilters ? "Hide" : "Show"} Filters
        </Button>
        <p className="text-muted-foreground">
          {totalProducts} products
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
  );
};
