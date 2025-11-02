import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-serif text-[2rem] tracking-tight">
              <span className="text-foreground">LUX</span>
              <span className="text-[#D4AF37]">É</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-foreground hover:text-[#D4AF37] transition-colors">
              New Arrivals
            </Link>
            <Link to="/category/women" className="text-foreground hover:text-[#D4AF37] transition-colors">
              Women
            </Link>
            <Link to="/category/men" className="text-foreground hover:text-[#D4AF37] transition-colors">
              Men
            </Link>
            <Link to="/category/collections" className="text-foreground hover:text-[#D4AF37] transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-foreground hover:text-[#D4AF37] transition-colors">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#0A0A0A] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <a href="#" className="block py-2 text-foreground hover:text-[#D4AF37] transition-colors">
              New Arrivals
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-[#D4AF37] transition-colors">
              Women
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-[#D4AF37] transition-colors">
              Men
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-[#D4AF37] transition-colors">
              Collections
            </a>
            <a href="#" className="block py-2 text-foreground hover:text-[#D4AF37] transition-colors">
              About
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
