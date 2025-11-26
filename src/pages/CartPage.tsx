import { useState } from "react";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Separator } from "../components/ui/separator";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Alert, AlertDescription } from "../components/ui/alert";
import { X, Minus, Plus, ShoppingBag, Truck, Shield, RotateCcw, Tag, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
  category: string;
}

const relatedProducts = [
  {
    id: 101,
    name: "Silk Designer Scarf",
    price: 299,
    image: "https://images.unsplash.com/photo-1759725608258-6c02f617665b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNjYXJmfGVufDF8fHx8MTc2MjI1MTU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 102,
    name: "Premium Leather Belt",
    price: 449,
    image: "https://images.unsplash.com/flagged/photo-1553802922-5f7e9934e328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWx0fGVufDF8fHx8MTc2MjM2MzcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 103,
    name: "Designer Sunglasses",
    price: 599,
    image: "https://images.unsplash.com/photo-1722842529941-825976fc14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzYyMzIxMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 104,
    name: "Luxury Perfume",
    price: 399,
    image: "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lfGVufDF8fHx8MTc2MjM2MzcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Cashmere Overcoat",
      price: 2899,
      image: "https://images.unsplash.com/photo-1567777301743-3b7ef158aadf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzYyMzIxNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quantity: 1,
      size: "M",
      color: "Black",
      category: "Outerwear",
    },
    {
      id: 2,
      name: "Swiss Luxury Watch",
      price: 8999,
      image: "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjIzMTg1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quantity: 1,
      category: "Accessories",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.trim()) {
      setAppliedPromo(promoCode);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const discount = appliedPromo ? subtotal * 0.1 : 0;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + tax + shipping;

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1 bg-card">
        {/* Breadcrumb */}
        <section className="border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="hover:text-[#D4AF37] transition-colors" asChild>
                  <Link to={"/"}>
                    Home
                  </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Shopping Cart</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-8">
              <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-2">
                Shopping Cart
              </h1>
              <p className="text-muted-foreground">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
              </p>
            </div>

            {cartItems.length === 0 ? (
              <Card className="text-center py-16 border-border">
                <CardContent>
                  <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h2 className="mb-4">Your cart is empty</h2>
                  <p className="text-muted-foreground mb-8">
                    Start exploring our luxury collections
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                      Continue Shopping
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/wishlist">
                        <Heart className="h-4 w-4 mr-2" />
                        View Wishlist
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="border-border">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          {/* Product Image */}
                          <div className="relative w-32 h-32 flex-shrink-0 bg-muted overflow-hidden">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between mb-2">
                              <div className="flex-1 min-w-0">
                                <Badge variant="outline" className="mb-2">
                                  {item.category}
                                </Badge>
                                <h3 className="mb-2">{item.name}</h3>
                                {(item.size || item.color) && (
                                  <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                                    {item.size && <span>Size: {item.size}</span>}
                                    {item.color && <span>Color: {item.color}</span>}
                                  </div>
                                )}
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem(item.id)}
                              >
                                <X className="h-5 w-5" />
                              </Button>
                            </div>

                            <div className="flex items-center justify-between">
                              {/* Quantity Selector */}
                              <div className="flex items-center border border-border">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <Input
                                  type="number"
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                  className="w-16 text-center border-0 border-x border-border"
                                  min={1}
                                />
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>

                              {/* Price */}
                              <div className="text-right">
                                <p className="text-[#D4AF37] text-xl">
                                  ${(item.price * item.quantity).toLocaleString()}
                                </p>
                                {item.quantity > 1 && (
                                  <p className="text-xs text-muted-foreground">
                                    ${item.price.toLocaleString()} each
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Benefits Banner */}
                  <Card className="border-border bg-muted/30">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Truck className="h-5 w-5 text-[#D4AF37]" />
                          <p className="text-sm">Free Shipping Over $500</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <RotateCcw className="h-5 w-5 text-[#D4AF37]" />
                          <p className="text-sm">30-Day Returns</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <Shield className="h-5 w-5 text-[#D4AF37]" />
                          <p className="text-sm">Secure Checkout</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-24 border-border">
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Promo Code */}
                      <div>
                        <Label htmlFor="promo" className="mb-2 block">
                          Promo Code
                        </Label>
                        <div className="flex gap-2">
                          <Input
                            id="promo"
                            placeholder="Enter code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                          />
                          <Button 
                            variant="outline"
                            onClick={applyPromoCode}
                            disabled={!promoCode.trim()}
                          >
                            Apply
                          </Button>
                        </div>
                        {appliedPromo && (
                          <Alert className="mt-3 border-green-500/20 bg-green-500/10">
                            <Tag className="h-4 w-4 text-green-600" />
                            <AlertDescription className="text-green-600 text-sm">
                              Promo code "{appliedPromo}" applied! 10% discount
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>

                      <Separator />

                      {/* Price Breakdown */}
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span>${subtotal.toLocaleString()}</span>
                        </div>
                        
                        {discount > 0 && (
                          <div className="flex justify-between text-sm text-green-600">
                            <span>Discount (10%)</span>
                            <span>-${discount.toLocaleString()}</span>
                          </div>
                        )}
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Shipping</span>
                          <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Tax (8%)</span>
                          <span>${tax.toFixed(2)}</span>
                        </div>

                        <Separator />

                        <div className="flex justify-between">
                          <span>Total</span>
                          <span className="text-[#D4AF37] text-xl">
                            ${total.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Checkout Button */}
                      <Button 
                        className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028]"
                        size="lg"
                      >
                        Proceed to Checkout
                      </Button>

                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>

                      {/* Security Badge */}
                      <div className="text-center text-xs text-muted-foreground pt-4">
                        <Shield className="h-4 w-4 inline mr-2" />
                        Secure SSL Encrypted Checkout
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Recommended Products */}
        {cartItems.length > 0 && (
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mb-12">
                <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-4">
                  Complete Your Look
                </h2>
                <p className="text-muted-foreground text-lg">
                  Handpicked recommendations to complement your selection
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
                      <div className="absolute bottom-0 left-0 right-0 bg-foreground text-background p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                        <Button size="sm" className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-sm mb-2 group-hover:text-[#D4AF37] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[#D4AF37]">${product.price.toLocaleString()}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

    </div>
  );
}
