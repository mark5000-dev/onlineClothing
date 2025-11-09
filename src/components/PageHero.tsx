import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { Badge } from "./ui/badge";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  imageUrl?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  badge?: {
    label: string;
    variant?: 'default' | 'secondary' | 'outline';
  };
  showGradient?: boolean;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  imageUrl,
  title,
  description,
  breadcrumbs = [],
  badge,
  showGradient = true,
  className = '',
}) => {
  const hasImage = !!imageUrl;

  return (
    <section 
      className={`relative ${hasImage ? 'h-[45vh] min-h-[350px]' : 'py-12'} overflow-hidden ${
        hasImage ? '' : 'bg-card border-b border-border'
      } ${className}`}
    >
      {hasImage && (
        <div className="absolute inset-0">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          {showGradient && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          )}
        </div>
      )}

      <div className={`${hasImage ? 'relative' : ''} container mx-auto px-4 lg:px-8 ${hasImage ? 'h-full flex flex-col justify-center' : ''}`}>
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <Breadcrumb className="mb-4">
            <BreadcrumbList className={hasImage ? 'text-white/80' : ''}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className={`transition-colors ${hasImage ? 'hover:text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}>
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className="flex items-center">
                  <BreadcrumbSeparator className={hasImage ? 'text-white/60' : ''} />
                  {index === breadcrumbs.length - 1 ? (
                    <BreadcrumbItem>
                      <BreadcrumbPage className={hasImage ? 'text-white' : ''}>
                        {crumb.label}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  ) : (
                    <BreadcrumbItem>
                      <BreadcrumbLink 
                        href={crumb.href || '#'} 
                        className={`transition-colors ${hasImage ? 'hover:text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}
                      >
                        {crumb.label}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  )}
                </span>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}

        {/* Badge */}
        {badge && (
          <Badge 
            variant={badge.variant || 'default'}
            className={`mb-4 w-fit ${!badge.variant || badge.variant === 'default' ? 'bg-[#D4AF37] text-black hover:bg-[#C5A028]' : ''}`}
          >
            {badge.label}
          </Badge>
        )}

        {/* Hero Heading */}
        <h1 className={`font-serif ${hasImage ? 'text-white' : ''} text-[3rem] md:text-[4.5rem] leading-tight mb-4`}>
          {title}
        </h1>
        <p className={`${hasImage ? 'text-white/90' : 'text-muted-foreground'} text-lg max-w-2xl`}>
          {description}
        </p>
      </div>
    </section>
  );
};
