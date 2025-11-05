import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const categories = [
  {
    id: 1,
    name: "Women's Collection",
    description: "Elegant pieces crafted for the modern woman",
    image: "https://images.unsplash.com/photo-1661268095505-cbfb42ef6f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwd29tZW58ZW58MXx8fHwxNzYyMDg2MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    itemCount: 156,
  },
  {
    id: 2,
    name: "Men's Collection",
    description: "Sophisticated tailoring and timeless style",
    image: "https://images.unsplash.com/photo-1600481006437-5ef63a680aa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbWVufGVufDF8fHx8MTc2MjA4NjEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    itemCount: 124,
  },
  {
    id: 3,
    name: "Accessories",
    description: "Finishing touches that elevate any ensemble",
    image: "https://images.unsplash.com/photo-1636619608432-77941d282b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NjIwMTY2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    itemCount: 89,
  },
  {
    id: 4,
    name: "Jewelry",
    description: "Exquisite pieces for every occasion",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5fGVufDF8fHx8MTc2MjA3NTI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    itemCount: 67,
  },
  {
    id: 5,
    name: "Shoes",
    description: "From casual elegance to formal sophistication",
    image: "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9lc3xlbnwxfHx8fDE3NjIwODYxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    itemCount: 92,
  },
  {
    id: 6,
    name: "Bags",
    description: "Luxury handbags and statement pieces",
    image: "https://images.unsplash.com/photo-1591348278900-019a8a2a8b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWdzfGVufDF8fHx8MTc2MjA4NjEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    itemCount: 78,
  },
];

export default function Categories() {
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
              {categories.map((category) => (
                <Link to={`/category/${category.name}`}>
                <Card
                  key={category.id}
                  className="group relative overflow-hidden border-0 transition-all duration-500 hover:shadow-2xl cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Overlay */}
                  <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="mb-2">
                      <CardTitle className="font-serif text-[1.75rem] mb-2 text-white">
                        {category.name}
                      </CardTitle>
                      <CardDescription className="text-white/90 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {category.description}
                      </CardDescription>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/80">
                        {category.itemCount} items
                      </span>
                      <div className="flex items-center gap-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                        <span className="text-sm">Explore</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>

                  {/* Top Badge */}
                  <Badge className="absolute top-6 right-6 bg-[#D4AF37] text-black px-4 py-2 text-sm transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 hover:bg-[#C5A028]">
                    {category.itemCount}+ Items
                  </Badge>
                </Card>
                </Link>
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
