import { Hero } from "../components/Hero";
import { FeaturedCollection } from "../components/FeaturedCollection";
import { CategoryShowcase } from "../components/CategoryShowcase";
import { Newsletter } from "../components/Newsletter";
import { ProductGrid } from "../components/ProductGrid";





export default function Home () {

  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <FeaturedCollection />
        <CategoryShowcase />
        < ProductGrid />
        <Newsletter />
      </main>
    </div>

  );
};
