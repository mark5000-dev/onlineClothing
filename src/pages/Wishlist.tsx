import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Badge } from "../components/ui/badge";
import { Heart, ShoppingBag, X, Share2 } from "lucide-react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { removeFromWishlist, toggleWishlist } from "../redux/features/wishlistSlice";
import { addToCart } from "../redux/features/cartSlice";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector(state => state.wishlist.items);

  const handleRemove = (id: number) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (item: any) => {
    dispatch(addToCart({
      id: item.productId,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    }));
  };

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

            {wishlistItems.length === 0 ? (
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
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wishlistItems.map((item) => (
                  <Card
                    key={item.id}
                    className="group overflow-hidden transition-all hover:shadow-xl border-border"
                  >
                    <div className="relative">
                      {/* Product Image */}
                      <Link to={`/product/${item.productId}`}>
                        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {!item.inStock && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <Badge variant="secondary" className="text-sm">
                                Out of Stock
                              </Badge>
                            </div>
                          )}
                        </div>
                      </Link>

                      {/* Remove Button */}
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-3 right-3 bg-white/90 hover:bg-white z-10"
                        onClick={() => handleRemove(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>

                      {/* Quick Add to Cart */}
                      {item.inStock && (
                        <div className="absolute bottom-0 left-0 right-0 bg-foreground text-background p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                          <Button
                            size="sm"
                            className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028]"
                            onClick={() => handleAddToCart(item)}
                          >
                            <ShoppingBag className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <CardContent className="p-4 space-y-3">
                      <Link to={`/product/${item.productId}`}>
                        <h3 className="group-hover:text-[#D4AF37] transition-colors line-clamp-2 min-h-[3rem]">
                          {item.name}
                        </h3>
                      </Link>

                      <div className="flex items-center justify-between">
                        <p className="text-[#D4AF37] text-lg">
                          ${item.price.toLocaleString()}
                        </p>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                          onClick={() => handleRemove(item.id)}
                        >
                          <Heart className="h-5 w-5 fill-current" />
                        </Button>
                      </div>

                      {item.inStock ? (
                        <Button
                          className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028]"
                          onClick={() => handleAddToCart(item)}
                        >
                          Add to Cart
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="w-full"
                          disabled
                        >
                          Out of Stock
                        </Button>
                      )}

                      <p className="text-xs text-muted-foreground">
                        Added {new Date(item.addedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Additional Info */}
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
