import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Slider } from "../components/ui/slider";

interface ProductFiltersProps {
  show: boolean;
  priceRange: number[];
  onPriceChange: (range: number[]) => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  show,
  priceRange,
  onPriceChange,
}) => {
  return (
    <aside
      className={`lg:block ${show ? "block" : "hidden"} lg:col-span-1 space-y-6`}
    >
      {/* Price Range */}
      <Card>
        <CardContent className="p-6">
          <Label className="mb-4 block">Price Range</Label>
          <Separator className="mb-4" />
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={onPriceChange}
              max={3000}
              step={50}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Size */}
      <Card>
        <CardContent className="p-6">
          <Label className="mb-4 block">Size</Label>
          <Separator className="mb-4" />
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
        </CardContent>
      </Card>

      {/* Color */}
      <Card>
        <CardContent className="p-6">
          <Label className="mb-4 block">Color</Label>
          <Separator className="mb-4" />
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
        </CardContent>
      </Card>

      {/* Material */}
      <Card>
        <CardContent className="p-6">
          <Label className="mb-4 block">Material</Label>
          <Separator className="mb-4" />
          <div className="space-y-3">
            {["Silk", "Wool", "Cotton", "Cashmere", "Leather", "Linen"].map(
              (material) => (
                <div key={material} className="flex items-center gap-2">
                  <Checkbox id={material} />
                  <Label
                    htmlFor={material}
                    className="text-sm cursor-pointer hover:text-[#D4AF37] transition-colors"
                  >
                    {material}
                  </Label>
                </div>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};
