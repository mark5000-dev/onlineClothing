import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { CategoryCard } from "../components/CategoryCard";
import type { Category } from "../model";
import { useAppSelector } from "../redux/hooks";


export default function Categories() {

  const categories = useAppSelector((state) => state.categories.categories)

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] bg-foreground text-background overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-[#D4AF37] to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
            <div className="w-16 h-1 bg-[#D4AF37] mb-6" />
            <h1 className="font-serif text-[3.5rem] md:text-[5rem] leading-tight mb-4">
              Shop by Category
            </h1>
            <p className="text-background/80 text-lg md:text-xl max-w-2xl">
              Discover our curated collections of luxury fashion and accessories
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category: Category) => (
                <CategoryCard key={category.id} category={category} />
                
              ))}
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-6">
                Curated Excellence
              </h2>
              <p className="text-background/80 text-lg mb-8 leading-relaxed">
                Each category in our collection represents the finest in luxury fashion. 
                From handcrafted accessories to bespoke tailoring, every piece is selected 
                with meticulous attention to quality and style.
              </p>
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
                <div>
                  <div className="text-[#D4AF37] text-[2.5rem] font-serif mb-2">600+</div>
                  <p className="text-background/70 text-sm">Luxury Items</p>
                </div>
                <div>
                  <div className="text-[#D4AF37] text-[2.5rem] font-serif mb-2">50+</div>
                  <p className="text-background/70 text-sm">Premium Brands</p>
                </div>
                <div>
                  <div className="text-[#D4AF37] text-[2.5rem] font-serif mb-2">100%</div>
                  <p className="text-background/70 text-sm">Authentic</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="p-12 md:p-16 text-center border-0">
              <CardHeader>
                <CardTitle className="font-serif text-[2rem] md:text-[3rem] mb-4">
                  Need Help Finding Something?
                </CardTitle>
                <CardDescription className="text-lg mb-8 max-w-2xl mx-auto">
                  Our style experts are here to assist you in discovering the perfect pieces 
                  for your wardrobe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#C5A028] px-8">
                  Contact Our Stylists
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      
    </div>
  );
}
