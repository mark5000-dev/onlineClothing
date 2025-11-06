import { useState } from "react";
import { CollectionHero } from "../components/CollectionHero";
import { ProductToolbar } from "../components/CollectionToolbar";
import { ProductFilters } from "../components/CollectionFilter";
import { CollectionInfo } from "../components/Info";
import { ProductGrid } from "../components/CollectionGrid";


const products = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: 2899,
    image: "https://images.unsplash.com/photo-1675294292093-5f6f5bb8836f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVuaW5nJTIwZHJlc3N8ZW58MXx8fHwxNzYyMDM0OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 2,
    name: "Tailored Wool Coat",
    price: 1899,
    image: "https://images.unsplash.com/photo-1744551358280-f1d593754132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2F0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjIwNzc0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 3,
    name: "Designer Blazer",
    price: 1299,
    image: "https://images.unsplash.com/flagged/photo-1553802922-5f7e9934e328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGF6ZXJ8ZW58MXx8fHwxNzYyMDg2MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 4,
    name: "Silk Blouse",
    price: 799,
    image: "https://images.unsplash.com/photo-1694243382333-9e3244d9ba04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJsb3VzZXxlbnwxfHx8fDE3NjIwODYxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Pleated Midi Skirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1758749646094-606f23edaef6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2lydHxlbnwxfHx8fDE3NjIwODYxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false,
    isBestseller: false,
  },
  {
    id: 6,
    name: "Wide-Leg Trousers",
    price: 699,
    image: "https://images.unsplash.com/photo-1587088155172-e9355df99c30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHBhbnRzfGVufDF8fHx8MTc2MTk5ODEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 7,
    name: "Cashmere Sweater",
    price: 999,
    image: "https://images.unsplash.com/photo-1661268095505-cbfb42ef6f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwd29tZW58ZW58MXx8fHwxNzYyMDg2MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 8,
    name: "Satin Dress",
    price: 1599,
    image: "https://images.unsplash.com/photo-1675294292093-5f6f5bb8836f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVuaW5nJTIwZHJlc3N8ZW58MXx8fHwxNzYyMDM0OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: false,
    isBestseller: false,
  },
  {
    id: 9,
    name: "Leather Jacket",
    price: 2299,
    image: "https://images.unsplash.com/photo-1744551358280-f1d593754132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2F0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjIwNzc0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    isBestseller: true,
  },
];

const Hero = {
  imageUrl: "https://images.unsplash.com/photo-1661268095505-cbfb42ef6f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwd29tZW58ZW58MXx8fHwxNzYyMDg2MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  collectionName: "Women's Collection",
  collectionDescription: "Discover timeless elegance with our carefully curated selection of luxury women's fashion",
  breadcrumbs: ["women's collection"],
}

const Info = {
  title: "The Art of Feminine Elegance",
  description: `Our women's collection celebrates the modern woman's sophistication 
                and style. Each piece is carefully selected from the world's finest 
                designers and ateliers, ensuring exceptional quality and timeless appeal. 
                From boardroom to ballroom, find pieces that empower and inspire.`
};


const subcategories = ["All Items", "Dresses", "Tops", "Bottoms", "Outerwear"];

export default function SingleCategory() {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 3000]);


  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        
        {/* Hero Section */}
        <CollectionHero
          imageUrl={Hero.imageUrl}
          collectionName={Hero.collectionName}
          collectionDescription={Hero.collectionDescription}
          breadcrumbs={Hero.breadcrumbs}
          subcategories={subcategories}
        />
        

        {/* Main Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 lg:px-8">

            {/* Toolbar */}
            <ProductToolbar
              showFilters={showFilters}
              onToggleFilters={() => setShowFilters(!showFilters)}
              totalProducts={products.length}
            />

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <ProductFilters
                show={showFilters}
                priceRange={priceRange}
                onPriceChange={setPriceRange}
              />
            

              {/* Product Grid */}
              <ProductGrid products={products} />
          
            </div>


          </div>
        </section>

        {/* Category Info Section */}
        <CollectionInfo
          title={Info.title}
          description={Info.description}
        />


      </div>
    </div>
  );
}
