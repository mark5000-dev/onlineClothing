import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";

interface FilterOption {
  id: string;
  label: string;
  value?: string;
}

interface FilterSection {
  id: string;
  title: string;
  type: 'checkbox' | 'slider' | 'buttons' | 'colors';
  options?: FilterOption[];
  min?: number;
  max?: number;
  step?: number;
  value?: number[];
  colors?: string[];
}

interface ItemsFilterProps {
  show: boolean;
  sections: FilterSection[];
  onFilterChange?: (sectionId: string, value: any) => void;
  className?: string;
}

export const ItemsFilter: React.FC<ItemsFilterProps> = ({
  show,
  sections,
  onFilterChange,
  className = '',
}) => {
  return (
    <aside
      className={`lg:block ${show ? "block" : "hidden"} space-y-6 ${className}`}
    >
      {sections.map((section) => (
        <Card key={section.id} className="border-border">
          <CardContent className="p-6">
            <Label className="mb-4 block">{section.title}</Label>
            <Separator className="mb-4" />

            {/* Checkbox Type */}
            {section.type === 'checkbox' && section.options && (
              <div className="space-y-3">
                {section.options.map((option) => (
                  <div key={option.id} className="flex items-center gap-2">
                    <Checkbox 
                      id={option.id}
                      onCheckedChange={(checked) => 
                        onFilterChange?.(section.id, { optionId: option.id, checked })
                      }
                    />
                    <Label
                      htmlFor={option.id}
                      className="text-sm cursor-pointer hover:text-[#D4AF37] transition-colors"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            )}

            {/* Slider Type */}
            {section.type === 'slider' && section.value && (
              <div className="space-y-4">
                <Slider
                  value={section.value}
                  onValueChange={(value) => onFilterChange?.(section.id, value)}
                  max={section.max || 10000}
                  min={section.min || 0}
                  step={section.step || 1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${section.value[0]}</span>
                  <span>${section.value[1]}</span>
                </div>
              </div>
            )}

            {/* Buttons Type */}
            {section.type === 'buttons' && section.options && (
              <div className="grid grid-cols-3 gap-2">
                {section.options.map((option) => (
                  <Button
                    key={option.id}
                    variant="outline"
                    size="sm"
                    className="hover:border-[#D4AF37] hover:text-[#D4AF37]"
                    onClick={() => onFilterChange?.(section.id, option.id)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            )}

            {/* Colors Type */}
            {section.type === 'colors' && section.colors && (
              <div className="grid grid-cols-5 gap-3">
                {section.colors.map((color, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-border hover:border-[#D4AF37] transition-colors"
                    style={{ backgroundColor: color }}
                    onClick={() => onFilterChange?.(section.id, color)}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </aside>
  );
};
