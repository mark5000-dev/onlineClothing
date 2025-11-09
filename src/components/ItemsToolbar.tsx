import { SlidersHorizontal, Grid3x3, List } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SortOption {
  value: string;
  label: string;
}

interface ItemsToolbarProps {
  showFilters?: boolean;
  onToggleFilters?: () => void;
  totalItems: number;
  itemLabel?: string;
  viewMode?: 'grid' | 'list';
  onViewModeChange?: (mode: 'grid' | 'list') => void;
  sortOptions?: SortOption[];
  defaultSort?: string;
  onSortChange?: (value: string) => void;
  showViewToggle?: boolean;
}

const defaultSortOptions: SortOption[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "bestseller", label: "Best Sellers" },
];

export const ItemsToolbar: React.FC<ItemsToolbarProps> = ({
  showFilters,
  onToggleFilters,
  totalItems,
  itemLabel = "items",
  viewMode = 'grid',
  onViewModeChange,
  sortOptions = defaultSortOptions,
  defaultSort = "featured",
  onSortChange,
  showViewToggle = true,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex items-center gap-4">
        {onToggleFilters && (
          <Button
            variant="outline"
            onClick={onToggleFilters}
            className="gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {showFilters ? "Hide" : "Show"} Filters
          </Button>
        )}
        <p className="text-sm text-muted-foreground">
          {totalItems} {itemLabel}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Select defaultValue={defaultSort} onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {showViewToggle && onViewModeChange && (
          <Tabs value={viewMode} onValueChange={(v) => onViewModeChange(v as 'grid' | 'list')}>
            <TabsList>
              <TabsTrigger value="grid">
                <Grid3x3 className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="list">
                <List className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        )}
      </div>
    </div>
  );
};
