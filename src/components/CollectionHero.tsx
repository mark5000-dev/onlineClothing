import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { useState } from "react";

interface CollectionHeroProps {
  imageUrl: string;
  collectionName: string;
  collectionDescription: string;
  breadcrumbs?: string[];
  subcategories?: string[];
}

export const CollectionHero: React.FC<CollectionHeroProps> = ({imageUrl,collectionName,collectionDescription,breadcrumbs = [],subcategories = [],}) => {
    const [selectedSubcategory, setSelectedSubcategory] = useState("All Items");

  return (
    <>
    <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={imageUrl}
          alt={collectionName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-4">
          <BreadcrumbList className="text-white/80">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="hover:text-[#D4AF37] transition-colors">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/60" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories" className="hover:text-[#D4AF37] transition-colors">
                Categories
              </BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center">
                <BreadcrumbSeparator className="text-white/60" />
                {index === breadcrumbs.length - 1 ? (
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-white">{crumb}</BreadcrumbPage>
                  </BreadcrumbItem>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="hover:text-[#D4AF37] transition-colors">
                      {crumb}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )}
              </span>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero Heading */}
        <h1 className="font-serif text-white text-[3rem] md:text-[4.5rem] leading-tight mb-4">
          {collectionName}
        </h1>
        <p className="text-white/90 text-lg max-w-2xl">
          {collectionDescription}
        </p>
      </div>
    </section>
    
        {/* Subcategory Navigation */}
    <section className="bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {subcategories.map((subcategory) => (
            <button
                key={subcategory}
                onClick={() => setSelectedSubcategory(subcategory)}
                className={`px-6 py-2 whitespace-nowrap transition-all ${
                selectedSubcategory === subcategory
                    ? "bg-[#D4AF37] text-black"
                    : "bg-background hover:bg-muted"
                }`}
            >
                {subcategory}
            </button>
            ))}
        </div>
        </div>
    </section>
    </>
  );
};