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
                <div className="relative aspect-[4/5] bg-muted">
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
              <Badge variant="outline">{product.category}</Badge>
              <h1 className="font-serif text-[2.5rem]">{product.name}</h1>

              <div className="flex items-center gap-4">
                <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-[#D4AF37]" />)}</div>
                <span className="text-sm">{product.reviews.length} Reviews</span>
              </div>

              <p className="text-[#D4AF37] text-[2rem]">${product.price.toLocaleString()}</p>
              <p className="text-muted-foreground">{product.description}</p>

              <Separator />

              {/* Quantity & Add */}
              <div>
                <Label>Quantity</Label>
                <div className="flex items-center gap-4 mt-2">
                  <Button size="icon" variant="ghost" onClick={() => handleQuantityChange(-1)}><Minus /></Button>
                  <Input value={quantity} className="w-16 text-center" readOnly />
                  <Button size="icon" variant="ghost" onClick={() => handleQuantityChange(1)}><Plus /></Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-[#D4AF37] text-black hover:bg-[#C5A028]" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                <Button variant="outline"><Share2 /></Button>
              </div>

              <Separator />

              {/* Product Features */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="text-center p-4 border-border"><CardContent><Truck className="h-6 w-6 mx-auto mb-2 text-[#D4AF37]" /><p className="text-xs">Free Shipping</p></CardContent></Card>
                <Card className="text-center p-4 border-border"><CardContent><RotateCcw className="h-6 w-6 mx-auto mb-2 text-[#D4AF37]" /><p className="text-xs">30-Day Returns</p></CardContent></Card>
                <Card className="text-center p-4 border-border"><CardContent><Shield className="h-6 w-6 mx-auto mb-2 text-[#D4AF37]" /><p className="text-xs">2-Year Warranty</p></CardContent></Card>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-16">
            <h2 className="text-xl mb-4">Customer Reviews</h2>
            <div className="space-y-4">
              {product.reviews.map((r: any) => (
                <div key={r.id} className="border-b border-border pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium">{r.author}</p>
                    <p className="text-sm text-muted-foreground">{r.date}</p>
                  </div>
                  <div className="flex mb-2">{[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#D4AF37]" />)}</div>
                  <p>{r.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
