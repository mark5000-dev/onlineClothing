import { CategoryCard } from "./CategoryCard";
import {type Category} from "../model"

interface Categories extends Array<Category>{}

const categories: Categories  = [
  {
    id: "1",
    name: "Women's Collection",
    image: "https://images.unsplash.com/photo-1610209740880-6ecc4b20ea78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGRyZXNzfGVufDF8fHx8MTc2MjAyMjMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Elegant dresses, sophisticated separates",
    slug: "womens-collection"
  },
  {
    id: "2",
    name: "Men's Collection",
    image: "https://images.unsplash.com/photo-1553315164-49bb0615e0c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdWl0fGVufDF8fHx8MTc2MjA2NDQyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Tailored suits, refined essentials",
    slug: "mens-collection"
  },
  {
    id: "3",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzYxOTc0MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Curated pieces to complete your look",
    slug: "accessories"
  },
];

export const CategoryShowcase: React.FC = () =>{
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
            <CategoryCard category={category} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}
