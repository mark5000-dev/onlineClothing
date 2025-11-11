import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator
} from "../components/ui/breadcrumb";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Separator } from "../components/ui/separator";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Heart, Star, Truck, RotateCcw, Shield, Minus, Plus, Share2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToCart } from "../redux/features/cartSlice";
import { toggleWishlist } from "../redux/features/wishlistSlice";
import type { CartItem } from "../model";

const id = 1;
const oneOP = {
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
    ],
    reviews: [
      { id: 1, author: "Sarah M.", rating: 5, date: "2 days ago", comment: "Exceptional quality and craftsmanship." },
      { id: 2, author: "James R.", rating: 5, date: "1 week ago", comment: "Luxury through and through." },
    ],
  };

const fetchProductBySlug = async (slug: string) => {
  // Extract id from slug like "cashmere-overcoat-1"
  const id = parseInt(slug.split("-").pop() || "0");
  const res = await fetch(`/api/products/${id}`); // your backend endpoint later
  if (res.ok) return res.json();

  //fallback mock
  return {
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
    ],
    reviews: [
      { id: 1, author: "Sarah M.", rating: 5, date: "2 days ago", comment: "Exceptional quality and craftsmanship." },
      { id: 2, author: "James R.", rating: 5, date: "1 week ago", comment: "Luxury through and through." },
    ],
  };
};

export default function SingleProduct() {
  const { slug } = useParams();
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector(state => state.wishlist.items);

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");

  useEffect(() => {
    if (!slug) return;
    Promise.resolve(oneOP).then(data => {
      setProduct(data);
      setLoading(false);
    });
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[selectedImage]);

  if (loading || !product)
    return <div className="min-h-screen flex items-center justify-center"><p>Loading product...</p></div>;

  const isInWishlist = wishlistItems.some(item => item.productId === product.id);

  const handleAddToCart = () =>
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.images[0],
      size: selectedSize,
    } as CartItem));

  const handleQuantityChange = (delta: number) =>
    setQuantity(prev => Math.max(1, prev + delta));

  const handleToggleWishlist = () =>
    dispatch(toggleWishlist({
      id: Date.now(),
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      inStock: product.stock > 0,
      addedAt: new Date().toISOString(),
    }));

  const colorOptions = [
    { name: "Black", hex: "#000000" },
    { name: "Navy", hex: "#1e3a5f" },
    { name: "Charcoal", hex: "#36454f" },
    { name: "Camel", hex: "#C19A6B" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="/products">Products</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>{product.name}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <Card className="overflow-hidden border-0">
                <div className="relative aspect-[3/4] bg-muted">
                  <ImageWithFallback src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
                  <Badge className="absolute top-6 left-6 bg-[#D4AF37] text-black">Luxury</Badge>
                  <Button
                    size="icon"
                    variant="ghost"
                    className={`absolute top-6 right-6 bg-white/90 hover:bg-white ${isInWishlist ? "text-red-500" : ""}`}
                    onClick={handleToggleWishlist}
                  >
                    <Heart className={`h-5 w-5 ${isInWishlist ? "fill-current" : ""}`} />
                  </Button>
                </div>
              </Card>

              <div className="grid grid-cols-4 gap-4 mt-4">
                {product.images.map((img: string, i: number) => (
                  <Card
                    key={i}
                    className={`overflow-hidden cursor-pointer border-2 transition-all ${
                      selectedImage === i ? "border-[#D4AF37]" : "border-border hover:border-[#D4AF37]/50"
                    }`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <div className="aspect-square bg-muted">
                      <ImageWithFallback src={img} alt={`Image ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="space-y-6">
              <Badge variant="outline" className="border-[#D4AF37]/30 text-[#D4AF37]">{product.category}</Badge>
              <h1 className="font-serif text-[2.5rem] leading-tight">{product.name}</h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews.length} Reviews)</span>
              </div>

              <div className="py-2">
                <p className="text-[#D4AF37] text-[2rem] tracking-tight">${product.price.toLocaleString()}</p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              <Separator />

              {/* Color Selection */}
              <div>
                <Label className="mb-3 block text-sm uppercase tracking-wider">Color</Label>
                <div className="flex items-center gap-3">
                  {colorOptions.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? "border-[#D4AF37] scale-110 shadow-md"
                          : "border-border hover:border-[#D4AF37]/50 hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === color.name && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="w-2 h-2 bg-white rounded-full shadow-sm" />
                        </span>
                      )}
                    </button>
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">{selectedColor}</span>
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <Label className="mb-3 block text-sm uppercase tracking-wider">Size</Label>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                  <div className="flex gap-2">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <div key={size} className="flex-1">
                        <RadioGroupItem value={size} id={size} className="peer sr-only" />
                        <Label
                          htmlFor={size}
                          className="flex items-center justify-center border-2 border-border py-2 cursor-pointer hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 peer-data-[state=checked]:border-[#D4AF37] peer-data-[state=checked]:bg-[#D4AF37]/10 transition-all text-sm"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Quantity */}
              <div>
                <Label className="mb-3 block text-sm uppercase tracking-wider">Quantity</Label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border-2 border-border rounded">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-9 w-9 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]" 
                      onClick={() => handleQuantityChange(-1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input 
                      value={quantity} 
                      className="w-14 h-9 text-center border-0 border-x-2 border-border text-sm" 
                      readOnly 
                    />
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-9 w-9 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]" 
                      onClick={() => handleQuantityChange(1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-xs text-muted-foreground italic">Only {product.stock} remaining</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button 
                  className="flex-1 bg-[#D4AF37] text-black hover:bg-[#C5A028] transition-all hover:shadow-lg" 
                  size="lg"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Separator />

              {/* Product Features */}
              <div className="grid grid-cols-3 gap-3">
                <Card className="text-center border-border hover:border-[#D4AF37]/30 transition-colors bg-card/50">
                  <CardContent className="p-4">
                    <Truck className="h-5 w-5 mx-auto mb-2 text-[#D4AF37]" />
                    <p className="text-xs leading-tight">Free<br/>Shipping</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-border hover:border-[#D4AF37]/30 transition-colors bg-card/50">
                  <CardContent className="p-4">
                    <RotateCcw className="h-5 w-5 mx-auto mb-2 text-[#D4AF37]" />
                    <p className="text-xs leading-tight">30-Day<br/>Returns</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-border hover:border-[#D4AF37]/30 transition-colors bg-card/50">
                  <CardContent className="p-4">
                    <Shield className="h-5 w-5 mx-auto mb-2 text-[#D4AF37]" />
                    <p className="text-xs leading-tight">2-Year<br/>Warranty</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="font-serif text-[2rem] mb-3">Customer Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover what our discerning clients have to say about their experience with our curated collection
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {product.reviews.map((r: any) => (
                <Card key={r.id} className="border-border bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="h-12 w-12 border-2 border-[#D4AF37]">
                        <AvatarFallback className="bg-[#D4AF37]/10 text-[#D4AF37]">
                          {r.author.split(' ').map((n: string) => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{r.author}</h4>
                          <span className="text-xs text-muted-foreground">{r.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3.5 w-3.5 ${
                                i < r.rating 
                                  ? 'fill-[#D4AF37] text-[#D4AF37]' 
                                  : 'fill-muted text-muted'
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{r.comment}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
