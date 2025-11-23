import { Hero } from "../components/Hero";
import { FeaturedCollection } from "../components/FeaturedCollection";
import { CategoryShowcase } from "../components/CategoryShowcase";
import { Newsletter } from "../components/Newsletter";
import type { Product } from "../model";
import { ProductGrid } from "../components/ProductGrid";

const products: Product[] = [
  {
    id: 1,
    name: "Elegant Evening Coat",
    price: 1299,
    image: "https://images.unsplash.com/photo-1693474865997-e1bd835a7414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2F0fGVufDF8fHx8MTc2MTk5ODEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mainCategory: "womens",
    isNew: true,
  },
  {
    id: 2,
    name: "Designer Handbag",
    price: 2499,
    image: "https://images.unsplash.com/photo-1601924928357-22d3b3abfcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWd8ZW58MXx8fHwxNzYxOTc5MzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mainCategory: "accessories",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Silk Evening Dress",
    price: 1899,
    image: "https://images.unsplash.com/photo-1610209740880-6ecc4b20ea78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGRyZXNzfGVufDF8fHx8MTc2MjAyMjMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mainCategory: "womens",
    isNew: true,
  },
  {
    id: 4,
    name: "Luxury Jewelry Set",
    price: 3299,
    image: "https://images.unsplash.com/photo-1684439673104-f5d22791c71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwamV3ZWxyeXxlbnwxfHx8fDE3NjIwNTAwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mainCategory: "jewelry",
    isFeatured: true,
  },
];


export default function Home () {

  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <FeaturedCollection />
        <CategoryShowcase />
        < ProductGrid products={products} />
        <Newsletter />
      </main>
    </div>

  );
};
