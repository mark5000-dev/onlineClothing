import type { FC } from "react";

import { Hero } from "../components/Hero";
import { FeaturedCollection } from "../components/FeaturedCollection";
import { CategoryShowcase } from "../components/CategoryShowcase";
import { ProductGrid } from "../components/ProductGrid";
import { Newsletter } from "../components/Newsletter";

const Home: FC = () => {
  
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <FeaturedCollection />
        <CategoryShowcase />
        <ProductGrid />
        <Newsletter />
      </main>
    </div>

  );
};

export default Home;
