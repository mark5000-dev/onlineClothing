import { useEffect, useState } from "react";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Separator } from "../components/ui/separator";
import { Label } from "../components/ui/label";
//import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
//import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
//import { Avatar, AvatarFallback } from "../components/ui/avatar";
//import { Progress } from "../components/ui/progress";
import { Heart, Star, Truck, RotateCcw, Shield, Minus, Plus, Share2 } from "lucide-react";
import { useAppDispatch } from "../redux/hooks";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";
import Loading from "../components/loading";

// Mocked product fetch (pretend this is an API call)
const fetchProduct = async (id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: "Cashmere Overcoat",
        price: 2899,
        stock: 8,
        category: "Outerwear",
        description:
          "Experience unparalleled luxury with this exquisite cashmere overcoat. Meticulously crafted from the finest 100% pure cashmere, this timeless piece combines supreme comfort with sophisticated elegance.",
        images: [
          "https://images.unsplash.com/photo-1567777301743-3b7ef158aadf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1722842529941-825976fc14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
      });
    }, 400); // Simulate network delay
  });
};

const reviews = [
  { id: 1, author: "Sarah M.", rating: 5, date: "2 days ago", comment: "Exceptional quality and craftsmanship. Worth every penny!" },
  { id: 2, author: "James R.", rating: 5, date: "1 week ago", comment: "The attention to detail is remarkable. Truly a luxury piece." },
  { id: 3, author: "Emily K.", rating: 4, date: "2 weeks ago", comment: "Beautiful product, though delivery took a bit longer than expected." },
];

export default function SingleProduct() {
  const dispatch = useAppDispatch();

  // unified product state
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // UI-related state
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  // simulate product fetch
  useEffect(() => {
    fetchProduct(1).then((data: any) => {
      setProduct(data);
      setLoading(false);
    });
  }, []);

  if (loading || !product) {
    return (
      <Loading />
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.images[0],
        size: selectedSize,
      })
    );
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-card border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="hover:text-[#D4AF37] transition-colors">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/products" className="hover:text-[#D4AF37] transition-colors">
                    Products
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{product.name}</BreadcrumbPage>
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
                <Card className="overflow-hidden border-0">
                  <div className="relative aspect-[4/5] bg-muted">
                    <ImageWithFallback
                      src={product.images[selectedImage]}
                      alt={product.name}
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

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image: string, index: number) => (
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
                  <Badge variant="outline" className="mb-4">{product.category}</Badge>
                  <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-4">
                    {product.name}
                  </h1>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    <span className="text-sm">4.9 (124 reviews)</span>
                  </div>

                  <p className="text-[#D4AF37] text-[2rem] mb-6">${product.price.toLocaleString()}</p>

                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <Separator />

                {/* Size */}
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

                {/* Quantity & Add to Cart */}
                <div className="space-y-4">
                  <div>
                    <Label className="mb-4 block">Quantity</Label>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-border">
                        <Button variant="ghost" size="icon" onClick={handleDecrease}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <Input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-16 text-center border-0 border-x border-border"
                          min={1}
                        />
                        <Button variant="ghost" size="icon" onClick={handleIncrease}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">Only {product.stock} items left in stock</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="lg"
                      className="flex-1 bg-[#D4AF37] text-black hover:bg-[#C5A028]"
                      onClick={handleAddToCart}
                    >
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
      </div>
    </div>
  );
}
