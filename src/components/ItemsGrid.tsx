import { type ReactNode } from "react";
import { Button } from "./ui/button";

interface ItemsGridProps {
  items: any[];
  renderItem: (item: any, index: number) => ReactNode;
  viewMode?: 'grid' | 'list';
  gridCols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  showLoadMore?: boolean;
  onLoadMore?: () => void;
  loadMoreLabel?: string;
  className?: string;
}

export const ItemsGrid: React.FC<ItemsGridProps> = ({
  items,
  renderItem,
  viewMode = 'grid',
  gridCols = {
    default: 1,
    sm: 2,
    lg: 3,
    xl: 4,
  },
  showLoadMore = false,
  onLoadMore,
  loadMoreLabel = "Load More",
  className = '',
}) => {
  const getGridClass = () => {
    if (viewMode === 'list') return '';
    
    const classes = ['grid'];
    if (gridCols.default) classes.push(`grid-cols-${gridCols.default}`);
    if (gridCols.sm) classes.push(`sm:grid-cols-${gridCols.sm}`);
    if (gridCols.md) classes.push(`md:grid-cols-${gridCols.md}`);
    if (gridCols.lg) classes.push(`lg:grid-cols-${gridCols.lg}`);
    if (gridCols.xl) classes.push(`xl:grid-cols-${gridCols.xl}`);
    
    return classes.join(' ');
  };

  return (
    <div className={className}>
      <div className={viewMode === 'grid' ? `${getGridClass()} gap-6` : 'space-y-4'}>
        {items.map((item, index) => renderItem(item, index))}
      </div>

      {/* Load More */}
      {showLoadMore && onLoadMore && (
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="px-12 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            onClick={onLoadMore}
          >
            {loadMoreLabel}
          </Button>
        </div>
      )}
    </div>
  );
};
