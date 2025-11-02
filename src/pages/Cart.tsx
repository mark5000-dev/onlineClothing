import { useState } from "react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { X, ShoppingBag, Tag } from "lucide-react";
import { Badge } from "../components/ui/badge";

const initialCartItems = [
  {
    id: 1,
    name: "Elegant Evening Coat",
    price: 1299,
    image: "https://images.unsplash.com/photo-1693474865997-e1bd835a7414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2F0fGVufDF8fHx8MTc2MTk5ODEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "M",
    color: "Black",
    quantity: 1,
  },
  {
    id: 2,
    name: "Designer Handbag",
    price: 2499,
    image: "https://images.unsplash.com/photo-1601924928357-22d3b3abfcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWd8ZW58MXx8fHwxNzYxOTc5MzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "One Size",
    color: "Brown",
    quantity: 1,
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1 bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="font-serif text-[3rem] mb-2">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
              your cart
            </p>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-muted rounded-full mb-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="font-serif text-[2rem] mb-4">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground mb-8">
                Add some luxury pieces to get started
              </p>
              <Button
                size="lg"
                className="bg-[#D4AF37] text-black hover:bg-[#C5A028]"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-card p-6 flex gap-6 relative group"
                  >
                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-4 right-4 p-2 hover:bg-destructive/10 rounded-full transition-colors"
                    >
                      <X className="h-5 w-5 text-muted-foreground hover:text-destructive" />
                    </button>

                    {/* Product Image */}
                    <div className="w-32 h-40 flex-shrink-0 bg-muted overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="mb-2">{item.name}</h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>Size: {item.size}</p>
                          <p>Color: {item.color}</p>
                        </div>
                      </div>

                      <div className="flex items-end justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-[#D4AF37] text-lg">
                            ${(item.price * item.quantity).toLocaleString()}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-sm text-muted-foreground">
                              ${item.price.toLocaleString()} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Continue Shopping */}
                <Button variant="outline" className="w-full sm:w-auto">
                  Continue Shopping
                </Button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card p-6 sticky top-24 space-y-6">
                  <h2 className="font-serif text-[1.5rem]">Order Summary</h2>

                  <Separator />

                  {/* Promo Code */}
                  <div>
                    <label className="block mb-2 text-sm">Promo Code</label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button variant="outline" className="gap-2">
                        <Tag className="h-4 w-4" />
                        Apply
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>
                        {shipping === 0 ? (
                          <Badge
                            variant="secondary"
                            className="bg-[#D4AF37]/10 text-[#D4AF37]"
                          >
                            Free
                          </Badge>
                        ) : (
                          `$${shipping}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Tax (8%)
                      </span>
                      <span>${tax.toFixed(2)}</span>
                    </div>

                    {shipping === 0 && (
                      <p className="text-xs text-[#D4AF37] flex items-center gap-1">
                        🎉 You've qualified for free shipping!
                      </p>
                    )}

                    {shipping > 0 && subtotal < 500 && (
                      <p className="text-xs text-muted-foreground">
                        Add ${(500 - subtotal).toFixed(2)} more for free
                        shipping
                      </p>
                    )}
                  </div>

                  <Separator />

                  {/* Total */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Total</span>
                    <span className="text-[#D4AF37] text-[1.75rem]">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <Button
                    size="lg"
                    className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028] py-6"
                  >
                    Proceed to Checkout
                  </Button>

                  {/* Security Info */}
                  <div className="pt-4 space-y-2 text-xs text-muted-foreground text-center">
                    <p>🔒 Secure Checkout</p>
                    <p>Free returns within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
