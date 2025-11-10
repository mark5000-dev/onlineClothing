import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { Link } from "react-router-dom";
import type { Category } from "../model";

export const CategoryCard: React.FC<{category :Category}> = ({category}) => {
    return (
        <>
        <Link to={`/category/${category.slug}`}>
            <Card
              key={category.id}
              className="group relative overflow-hidden cursor-pointer border-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>
              
              <CardContent className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="w-12 h-1 bg-[#D4AF37] mb-4 transition-all duration-300 group-hover:w-24" />
                <CardTitle className="font-serif text-[1.75rem] mb-2">
                  {category.name}
                </CardTitle>
                <CardDescription className="text-white/80 mb-4">
                  {category.description}
                </CardDescription>
                <span className="text-[#D4AF37] inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore Collection
                  <ArrowRight className="w-4 h-4" />
                </span>
                <br />
                {category.productCount && (
                  <span className="text-sm text-white/80">
                    {category.productCount} items
                  </span>
                )}
              </CardContent>
            </Card>
            </Link>
        </>
    )
}
