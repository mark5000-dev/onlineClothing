import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const categories = [
  {
    name: "Women's Collection",
    image: "https://images.unsplash.com/photo-1610209740880-6ecc4b20ea78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGRyZXNzfGVufDF8fHx8MTc2MjAyMjMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Elegant dresses, sophisticated separates",
  },
  {
    name: "Men's Collection",
    image: "https://images.unsplash.com/photo-1553315164-49bb0615e0c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdWl0fGVufDF8fHx8MTc2MjA2NDQyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Tailored suits, refined essentials",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzYxOTc0MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Curated pieces to complete your look",
  },
];

export function CategoryShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully curated collections designed for the modern connoisseur
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link to={`/category/${category.name}`}>
            <Card
              key={index}
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
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="w-12 h-1 bg-[#D4AF37] mb-4 transition-all duration-300 group-hover:w-24" />
                <h3 className="font-serif text-[1.75rem] mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 mb-4">
                  {category.description}
                </p>
                <span className="text-[#D4AF37] inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore Collection
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
