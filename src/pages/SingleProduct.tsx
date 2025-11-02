import { useState } from "react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Heart,
  ShoppingBag,
  Truck,
  Shield,
  RefreshCw,
  Star,
} from "lucide-react";

const productImages = [
  "https://images.unsplash.com/photo-1693474865997-e1bd835a7414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2F0fGVufDF8fHx8MTc2MTk5ODEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1758297679736-2e6ff92d2021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwZGV0YWlsfGVufDF8fHx8MTc2MjA3MTE2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1610209740880-6ecc4b20ea78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGRyZXNzfGVufDF8fHx8MTc2MjAyMjMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1707569590650-2f963183dc0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWJyaWMlMjB0ZXh0dXJlfGVufDF8fHx8MTc2MjAwNjQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

const relatedProducts = [
  {
    id: 2,
    name: "Designer Handbag",
    price: 2499,
    image: "https://images.unsplash.com/photo-1601924928357-22d3b3abfcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWd8ZW58MXx8fHwxNzYxOTc5MzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Premium Leather Shoes",
    price: 899,
    image: "https://images.unsplash.com/photo-1653869225353-8101df710ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc2hvZXN8ZW58MXx8fHwxNzYyMDcxMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 7,
    name: "Cashmere Scarf",
    price: 599,
    image: "https://images.unsplash.com/photo-1718117059204-8380b0706219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzY2FyZnxlbnwxfHx8fDE3NjE5OTgxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Designer Watch",
    price: 4299,
    image: "https://images.unsplash.com/photo-1751437730397-ef83024b5339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdhdGNofGVufDF8fHx8MTc2MjA2MTk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export default function SingleProduct() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1 bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Women
            </a>
            <span>/</span>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Outerwear
            </a>
            <span>/</span>
            <span className="text-foreground">Elegant Evening Coat</span>
          </div>

          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-card">
                <ImageWithFallback
                  src={productImages[selectedImage]}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-[#D4AF37] text-black">
                  New Arrival
                </Badge>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square overflow-hidden bg-card border-2 transition-all ${
                      selectedImage === index
                        ? "border-[#D4AF37]"
                        : "border-transparent hover:border-border"
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="font-serif text-[2.5rem] mb-3">
                  Elegant Evening Coat
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]"
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(24 reviews)</span>
                </div>
                <p className="text-[#D4AF37] text-[2rem]">$1,299.00</p>
              </div>

              <Separator />

              <p className="text-muted-foreground leading-relaxed">
                A timeless piece crafted from the finest Italian wool, this elegant evening 
                coat features a sophisticated silhouette with premium tailoring. Perfect for 
                any formal occasion, it combines luxury with functionality.
              </p>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label>Select Size</label>
                  <a href="#" className="text-sm text-[#D4AF37] hover:underline">
                    Size Guide
                  </a>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      onClick={() => setSelectedSize(size)}
                      className={`${
                        selectedSize === size
                          ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]"
                          : "hover:border-[#D4AF37]"
                      }`}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block mb-3">Quantity</label>
                <div className="flex items-center gap-4 w-32">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="flex-1 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028] py-6"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-foreground hover:bg-foreground hover:text-background py-6"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Add to Wishlist
                </Button>
              </div>

              <Separator />

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-[#D4AF37] mt-1" />
                  <div>
                    <p>Free Shipping</p>
                    <p className="text-sm text-muted-foreground">
                      On orders over $500
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="h-5 w-5 text-[#D4AF37] mt-1" />
                  <div>
                    <p>Easy Returns</p>
                    <p className="text-sm text-muted-foreground">
                      30-day return policy
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[#D4AF37] mt-1" />
                  <div>
                    <p>Authenticity Guaranteed</p>
                    <p className="text-sm text-muted-foreground">
                      100% genuine products
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Additional Info */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="details">
                  <AccordionTrigger>Product Details</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>• Material: 100% Italian Wool</p>
                    <p>• Lining: Premium Silk Blend</p>
                    <p>• Care: Dry Clean Only</p>
                    <p>• Made in Italy</p>
                    <p>• Model is 5'9" wearing size M</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger>Shipping Information</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="mb-2">
                      Standard shipping takes 5-7 business days. Express shipping 
                      available at checkout for 2-3 business day delivery.
                    </p>
                    <p>
                      Free shipping on all orders over $500 within the continental 
                      United States.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                  <AccordionTrigger>Returns & Exchanges</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>
                      We offer a 30-day return policy for unworn items in original 
                      condition with tags attached. Return shipping is free for 
                      exchanges within the US.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mb-20">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#D4AF37] data-[state=active]:bg-transparent"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#D4AF37] data-[state=active]:bg-transparent"
                >
                  Reviews (24)
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-8">
                <div className="max-w-3xl space-y-4 text-muted-foreground">
                  <p>
                    Crafted from the finest Italian wool, this elegant evening coat 
                    represents the pinnacle of luxury outerwear. Each piece is meticulously 
                    tailored by master craftsmen with over 30 years of experience in haute 
                    couture.
                  </p>
                  <p>
                    The sophisticated silhouette features a tailored fit that flatters every 
                    body type, while the premium silk lining ensures ultimate comfort and ease 
                    of movement. The coat's timeless design makes it a versatile addition to 
                    any wardrobe, perfect for both formal occasions and elegant evening events.
                  </p>
                  <p>
                    Details include hand-stitched buttonholes, genuine horn buttons, and 
                    reinforced seams for exceptional durability. The deep pockets are both 
                    functional and stylish, maintaining the coat's sleek profile.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-8">
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-border pb-6 last:border-0">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]"
                            />
                          ))}
                        </div>
                        <span>Verified Purchase</span>
                      </div>
                      <p className="mb-2">Amazing quality and fit!</p>
                      <p className="text-muted-foreground text-sm mb-2">
                        This coat exceeded all my expectations. The quality is outstanding 
                        and the fit is perfect. Worth every penny!
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Sarah M. - November 2, 2025
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="font-serif text-[2.5rem] mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-card overflow-hidden transition-all hover:shadow-xl cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[#D4AF37]">
                      ${product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
