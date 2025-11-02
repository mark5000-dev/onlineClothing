import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function FeaturedCollection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759323321196-2813db509285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjbG90aGluZyUyMHJhY2t8ZW58MXx8fHwxNzYyMDY0NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Featured Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-[#D4AF37] text-black px-6 py-2">
                New Arrivals
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2">
            <div className="max-w-lg">
              <div className="w-16 h-1 bg-[#D4AF37] mb-6" />
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-tight mb-6">
                Crafted for the Discerning
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Every piece in our collection is meticulously selected to embody luxury, 
                quality, and timeless style. From the finest fabrics to impeccable craftsmanship, 
                we bring you fashion that makes a statement.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2" />
                  <div>
                    <p className="mb-1">Premium Materials</p>
                    <p className="text-sm text-muted-foreground">Sourced from the world's finest manufacturers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2" />
                  <div>
                    <p className="mb-1">Expert Craftsmanship</p>
                    <p className="text-sm text-muted-foreground">Each piece made with attention to detail</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2" />
                  <div>
                    <p className="mb-1">Timeless Design</p>
                    <p className="text-sm text-muted-foreground">Styles that transcend seasonal trends</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8">
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
