import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Separator } from "../components/ui/separator";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Progress } from "../components/ui/progress";
import { Heart, Star, Truck, RotateCcw, Shield, Minus, Plus, Share2 } from "lucide-react";

const productImages = [
  "https://images.unsplash.com/photo-1567777301743-3b7ef158aadf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzYyMzIxNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjIzMTg1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1722842529941-825976fc14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzYyMzIxMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lfGVufDF8fHx8MTc2MjM2MzcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

const relatedProducts = [
  {
    id: 1,
    name: "Silk Designer Scarf",
    price: 299,
    image: "https://images.unsplash.com/photo-1759725608258-6c02f617665b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNjYXJmfGVufDF8fHx8MTc2MjI1MTU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Premium Leather Belt",
    price: 449,
    image: "https://images.unsplash.com/flagged/photo-1553802922-5f7e9934e328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWx0fGVufDF8fHx8MTc2MjM2MzcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Swiss Luxury Watch",
    price: 8999,
    image: "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjIzMTg1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Luxury Perfume",
    price: 399,
    image: "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lfGVufDF8fHx8MTc2MjM2MzcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const reviews = [
  { id: 1, author: "Sarah M.", rating: 5, date: "2 days ago", comment: "Exceptional quality and craftsmanship. Worth every penny!" },
  { id: 2, author: "James R.", rating: 5, date: "1 week ago", comment: "The attention to detail is remarkable. Truly a luxury piece." },
  { id: 3, author: "Emily K.", rating: 4, date: "2 weeks ago", comment: "Beautiful product, though delivery took a bit longer than expected." },
];

export default function SingleProduct() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-card border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="hover:text-[#D4AF37] transition-colors">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="hover:text-[#D4AF37] transition-colors">
                    Products
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Cashmere Overcoat</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                {/* Main Image */}
                <Card className="overflow-hidden border-0">
                  <div className="relative aspect-[4/5] bg-muted">
                    <ImageWithFallback
                      src={productImages[selectedImage]}
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-6 left-6 bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                      New Arrival
                    </Badge>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-6 right-6 bg-white/90 hover:bg-white"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((image, index) => (
                    <Card
                      key={index}
                      className={`overflow-hidden cursor-pointer border-2 transition-all ${
                        selectedImage === index ? "border-[#D4AF37]" : "border-border hover:border-[#D4AF37]/50"
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <div className="aspect-square bg-muted">
                        <ImageWithFallback
                          src={image}
                          alt={`Product ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <Badge variant="outline" className="mb-4">Outerwear</Badge>
                  <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-4">
                    Cashmere Overcoat
                  </h1>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    <span className="text-sm">4.9 (124 reviews)</span>
                  </div>

                  <p className="text-[#D4AF37] text-[2rem] mb-6">$2,899</p>

                  <p className="text-muted-foreground leading-relaxed">
                    Experience unparalleled luxury with this exquisite cashmere overcoat. 
                    Meticulously crafted from the finest 100% pure cashmere, this timeless 
                    piece combines supreme comfort with sophisticated elegance. Perfect for 
                    the discerning individual who appreciates true quality.
                  </p>
                </div>

                <Separator />

                {/* Size Selection */}
                <div>
                  <Label className="mb-4 block">Select Size</Label>
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                    <div className="grid grid-cols-5 gap-3">
                      {["XS", "S", "M", "L", "XL"].map((size) => (
                        <div key={size}>
                          <RadioGroupItem value={size} id={size} className="peer sr-only" />
                          <Label
                            htmlFor={size}
                            className="flex items-center justify-center border-2 border-border py-3 cursor-pointer hover:border-[#D4AF37] peer-data-[state=checked]:border-[#D4AF37] peer-data-[state=checked]:bg-[#D4AF37]/10 transition-all"
                          >
                            {size}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Color Selection */}
                <div>
                  <Label className="mb-4 block">Select Color</Label>
                  <div className="flex gap-3">
                    {["#000000", "#1A1A1A", "#2F4F4F", "#8B4513"].map((color) => (
                      <button
                        key={color}
                        className="w-10 h-10 rounded-full border-2 border-border hover:border-[#D4AF37] transition-all"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Quantity & Add to Cart */}
                <div className="space-y-4">
                  <div>
                    <Label className="mb-4 block">Quantity</Label>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-border">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <Input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                          className="w-16 text-center border-0 border-x border-border"
                          min={1}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">Only 8 items left in stock</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button size="lg" className="flex-1 bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                      Add to Cart
                    </Button>
                    <Button size="lg" variant="outline">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Product Features */}
                <div className="grid grid-cols-3 gap-4">
                  <Card className="text-center p-4 border-border">
                    <CardContent className="p-0">
                      <Truck className="h-6 w-6 mx-auto mb-2 text-[#D4AF37]" />
                      <p className="text-xs">Free Shipping</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center p-4 border-border">
                    <CardContent className="p-0">
                      <RotateCcw className="h-6 w-6 mx-auto mb-2 text-[#D4AF37]" />
                      <p className="text-xs">30-Day Returns</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center p-4 border-border">
                    <CardContent className="p-0">
                      <Shield className="h-6 w-6 mx-auto mb-2 text-[#D4AF37]" />
                      <p className="text-xs">2-Year Warranty</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Information Tabs */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0">
                <TabsTrigger value="description" className="data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none">
                  Description
                </TabsTrigger>
                <TabsTrigger value="details" className="data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none">
                  Details
                </TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none">
                  Reviews (124)
                </TabsTrigger>
                <TabsTrigger value="shipping" className="data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] rounded-none">
                  Shipping
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-8">
                <div className="max-w-3xl">
                  <h3 className="mb-4">Product Description</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Indulge in the epitome of luxury with our Cashmere Overcoat, a masterpiece 
                    of Italian craftsmanship. Each coat is meticulously handcrafted using only 
                    the finest grade cashmere, sourced from the highlands of Inner Mongolia.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The sophisticated silhouette features a classic notched lapel, welt pockets, 
                    and hand-stitched buttonholes. The interior is lined with premium silk, 
                    ensuring comfort and breathability while maintaining the coat's structure.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This timeless piece transcends seasonal trends, making it an investment 
                    that will serve you for years to come. Perfect for formal occasions or 
                    elevating your everyday wardrobe.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="details" className="mt-8">
                <div className="max-w-3xl">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="materials">
                      <AccordionTrigger>Materials & Construction</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• 100% Pure Cashmere outer shell</li>
                          <li>• Premium silk lining</li>
                          <li>• Hand-stitched buttonholes</li>
                          <li>• Italian horn buttons</li>
                          <li>• Reinforced shoulder construction</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="care">
                      <AccordionTrigger>Care Instructions</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Dry clean only</li>
                          <li>• Store on padded hanger</li>
                          <li>• Avoid direct sunlight</li>
                          <li>• Use cedar blocks for storage</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="sizing">
                      <AccordionTrigger>Sizing Guide</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground mb-4">This piece runs true to size. For a relaxed fit, consider sizing up.</p>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left py-2">Size</th>
                                <th className="text-left py-2">Chest (in)</th>
                                <th className="text-left py-2">Length (in)</th>
                              </tr>
                            </thead>
                            <tbody className="text-muted-foreground">
                              <tr className="border-b border-border">
                                <td className="py-2">XS</td>
                                <td className="py-2">34-36</td>
                                <td className="py-2">28</td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-2">S</td>
                                <td className="py-2">36-38</td>
                                <td className="py-2">29</td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-2">M</td>
                                <td className="py-2">38-40</td>
                                <td className="py-2">30</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <div className="max-w-3xl space-y-8">
                  {/* Rating Overview */}
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle>Customer Reviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center">
                          <div className="text-[3rem] mb-2">4.9</div>
                          <div className="flex items-center justify-center gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">Based on 124 reviews</p>
                        </div>
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center gap-3">
                              <span className="text-sm w-8">{rating} <Star className="h-3 w-3 inline" /></span>
                              <Progress value={rating === 5 ? 85 : rating === 4 ? 12 : 3} className="flex-1" />
                              <span className="text-sm text-muted-foreground w-12 text-right">
                                {rating === 5 ? "85%" : rating === 4 ? "12%" : "3%"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Individual Reviews */}
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <Card key={review.id} className="border-border">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarFallback className="bg-[#D4AF37] text-black">
                                {review.author.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <p className="mb-1">{review.author}</p>
                                  <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`h-3 w-3 ${
                                          star <= review.rating
                                            ? "fill-[#D4AF37] text-[#D4AF37]"
                                            : "text-border"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                              <p className="text-muted-foreground">{review.comment}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">Load More Reviews</Button>
                </div>
              </TabsContent>

              <TabsContent value="shipping" className="mt-8">
                <div className="max-w-3xl space-y-6">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Truck className="h-5 w-5 text-[#D4AF37]" />
                        Shipping Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        We offer complimentary shipping on all orders over $500. Your luxury 
                        items are carefully packaged and insured during transit.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Standard Shipping: 5-7 business days</li>
                        <li>• Express Shipping: 2-3 business days</li>
                        <li>• International Shipping: 7-14 business days</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <RotateCcw className="h-5 w-5 text-[#D4AF37]" />
                        Returns & Exchanges
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We want you to be completely satisfied with your purchase. If for any 
                        reason you're not, we offer a 30-day return policy for unworn items 
                        in original condition with tags attached.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-4">
                You May Also Like
              </h2>
              <p className="text-muted-foreground text-lg">
                Complete your collection with these complementary pieces
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden transition-all hover:shadow-xl cursor-pointer border-0"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[#D4AF37]">${product.price.toLocaleString()}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
