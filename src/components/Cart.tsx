import { useState } from "react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { X, Minus, Plus, ShoppingBag, Truck } from "lucide-react";

import { addToCart, removeFromCart, reduceFromCart, togglecart, clearCart } from "../redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {type CartItem } from "../models/cart";



export function Cart() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.cart.isCartOpen);
  const items = useAppSelector((state) => state.cart.cartItems);

  const onOpenChange = (open: boolean) => {
    dispatch(togglecart(open));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'cart/updateQuantity', payload: { id, quantity } });
  };

  

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg flex flex-col p-0 bg-[#f9f7f1]">
        <SheetHeader className="px-6 pt-6 pb-4">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart ({items.length})
          </SheetTitle>
        </SheetHeader>
        
        <Separator />

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Add some luxury items to get started
            </p>
            <Button 
              onClick={() => onOpenChange(false)}
              className="bg-[#D4AF37] text-black hover:bg-[#C5A028]"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0 bg-muted overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <h4 className="truncate mb-1">{item.name}</h4>
                          {(item.size || item.color) && (
                            <div className="flex gap-2 text-xs text-muted-foreground">
                              {item.size && <span>Size: {item.size}</span>}
                              {item.color && <span>Color: {item.color}</span>}
                            </div>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 flex-shrink-0"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-border">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => dispatch(reduceFromCart(item.id))}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                            className="w-12 h-8 text-center border-0 border-x border-border p-0"
                            min={1}
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => dispatch(addToCart(item))}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="text-[#D4AF37]">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-border">
              <div className="px-6 py-4 space-y-3">
                {/* Free Shipping Banner */}
                {subtotal > 500 && (
                  <Badge className="w-full bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/20 justify-center py-2">
                    <Truck className="h-3 w-3 mr-2" />
                    Free Shipping Applied
                  </Badge>
                )}
                
                {subtotal < 500 && (
                  <p className="text-xs text-muted-foreground text-center">
                    Add ${(500 - subtotal).toLocaleString()} more for free shipping
                  </p>
                )}
                
                <Separator />
                
                {/* Summary */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span className="text-[#D4AF37]">${total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <SheetFooter className="px-6 pb-6">
                <div className="w-full space-y-2">
                  <Button 
                    className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028]"
                    size="lg"
                  >
                    Proceed to Checkout
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => onOpenChange(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
