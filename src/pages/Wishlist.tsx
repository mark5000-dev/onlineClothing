
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Heart, ShoppingBag, Share2 } from "lucide-react";
import { useAppSelector } from "../redux/hooks";
// import { addToCart } from "../redux/features/cartSlice";
import { Link } from "react-router-dom";
import type { Product } from "../model";
import { ItemsGrid, ProductCard } from "../components";

export default function Wishlist() {
  const wishlistItems = useAppSelector(state => state.wishlist.items);
  const wishlistIds = new Set(wishlistItems.map((item) => item.productId))

  const products = useAppSelector(state => state.products.products);
  const wishlistProducts = products.filter(product => wishlistIds.has(product.id));

 

  const handleShare = () => {
    // Placeholder for share functionality
    alert("Share functionality coming soon!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-background">
        {/* Breadcrumb */}
        <section className="border-b border-border bg-card">
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
                  <BreadcrumbPage>Wishlist</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-2">
                  My Wishlist
                </h1>
                <p className="text-muted-foreground">
                  {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} saved for later
                </p>
              </div>
              {wishlistItems.length > 0 && (
                <Button
                  variant="outline"
                  onClick={handleShare}
                  className="hidden sm:flex items-center gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  Share Wishlist
                </Button>
              )}
            </div>

            { wishlistItems.length === 0 ? (
              <Card className="text-center py-16 border-border">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
                      <Heart className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </div>
                  <h2 className="font-serif text-[1.5rem]">Your wishlist is empty</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Save your favorite items to your wishlist and keep track of products you love
                  </p>
                  <div className="pt-4">
                    <Button
                      asChild
                      className="bg-[#D4AF37] text-black hover:bg-[#C5A028]"
                    >
                      <Link to="/products">
                        Explore Products
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) :(
              <div> 
                <ItemsGrid items={wishlistProducts} renderItem={(product: Product) => <ProductCard product={product} key ={product.id} />} />
              </div>
            )}      


            {wishlistItems.length > 0 && (
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <Card className="border-border bg-muted/30 p-6 text-center">
                  <CardContent className="p-0">
                    <Heart className="h-8 w-8 mx-auto mb-3 text-[#D4AF37]" />
                    <h3 className="mb-2">Save for Later</h3>
                    <p className="text-sm text-muted-foreground">
                      Items in your wishlist are saved across devices
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-muted/30 p-6 text-center">
                  <CardContent className="p-0">
                    <ShoppingBag className="h-8 w-8 mx-auto mb-3 text-[#D4AF37]" />
                    <h3 className="mb-2">Quick Purchase</h3>
                    <p className="text-sm text-muted-foreground">
                      Add wishlist items to cart with one click
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-muted/30 p-6 text-center">
                  <CardContent className="p-0">
                    <Share2 className="h-8 w-8 mx-auto mb-3 text-[#D4AF37]" />
                    <h3 className="mb-2">Share & Discover</h3>
                    <p className="text-sm text-muted-foreground">
                      Share your wishlist with friends and family
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
