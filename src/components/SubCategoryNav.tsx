import { useState } from "react";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface Subcategory {
  id: string;
  label: string;
  value?: string;
}

interface SubcategoryNavProps {
  subcategories: Subcategory[];
  defaultSelected?: string;
  onSelect?: (subcategory: Subcategory) => void;
  className?: string;
  sticky?: boolean;
}

export const SubcategoryNav: React.FC<SubcategoryNavProps> = ({
  subcategories,
  defaultSelected,
  onSelect,
  className = '',
  sticky = true,
}) => {
  const [selected, setSelected] = useState(defaultSelected || subcategories[0]?.id);

  const handleSelect = (subcategory: Subcategory) => {
    setSelected(subcategory.id);
    onSelect?.(subcategory);
  };

  if (subcategories.length === 0) return null;

  return (
    <section 
      className={`bg-card border-b border-border ${sticky ? 'sticky top-20 z-40' : ''} ${className}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex items-center gap-2 py-4">
            {subcategories.map((subcategory) => (
              <Button
                key={subcategory.id}
                onClick={() => handleSelect(subcategory)}
                variant={selected === subcategory.id ? "default" : "ghost"}
                className={`whitespace-nowrap transition-all ${
                  selected === subcategory.id
                    ? "bg-[#D4AF37] text-black hover:bg-[#C5A028]"
                    : "hover:bg-muted"
                }`}
              >
                {subcategory.label}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};
