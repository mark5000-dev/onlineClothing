import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
// import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { Cart } from "./Cart";
import { Link } from "react-router-dom";
import { togglecart } from "../redux/features/cartSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

export function Header() {
  const dipatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const numberOfItems = useAppSelector((state) => state.cart.cartItems.length);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
          <div className="flex-shrink-0">
            <h1 className="font-serif text-[2rem] tracking-tight">
              <span className="text-foreground">LUX</span>
              <span className="text-[#D4AF37]">É</span>
            </h1>
          </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/category/new" className="text-foreground hover:text-[#D4AF37] transition-colors">
              New Arrivals
            </a>
            <a href="/category/women" className="text-foreground hover:text-[#D4AF37] transition-colors">
              Women
            </a>
            <a href="/category/men" className="text-foreground hover:text-[#D4AF37] transition-colors">
              Men
            </a>
            <a href="/categories" className="text-foreground hover:text-[#D4AF37] transition-colors">
              Collections
            </a>
            <a href="/about" className="text-foreground hover:text-[#D4AF37] transition-colors">
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Link to={"/profile"}>
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <User className="h-5 w-5" />
            </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => dipatch(togglecart(!isCartOpen))}
            >
              <ShoppingBag className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 bg-[#D4AF37] text-black hover:bg-[#C5A028] h-5 w-5 flex items-center justify-center p-0 text-xs rounded-full">
                {numberOfItems}
              </Badge>
            </Button>
            
            {/* Mobile Menu Sheet */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="font-serif text-[1.5rem]">
                    <span className="text-foreground">LUX</span>
                    <span className="text-[#D4AF37]">É</span>
                  </SheetTitle>
                </SheetHeader>
                <Separator className="my-4" />
                <nav className="flex flex-col gap-4">
                  <a href="#" className="text-foreground hover:text-[#D4AF37] transition-colors py-2">
                    New Arrivals
                  </a>
                  <a href="#" className="text-foreground hover:text-[#D4AF37] transition-colors py-2">
                    Women
                  </a>
                  <a href="#" className="text-foreground hover:text-[#D4AF37] transition-colors py-2">
                    Men
                  </a>
                  <a href="#" className="text-foreground hover:text-[#D4AF37] transition-colors py-2">
                    Collections
                  </a>
                  <a href="#" className="text-foreground hover:text-[#D4AF37] transition-colors py-2">
                    About
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Cart Drawer */}
      <Cart />
    </header>
  );
}
