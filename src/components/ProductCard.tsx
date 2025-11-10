import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { Link } from "react-router-dom";
import type { Product } from "../model";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toggleWishlist } from "../redux/features/wishlistSlice";
import React from "react";

const slugify = (name: string, id: number) =>
  `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${id}`;

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const dispatch = useAppDispatch();
    const wishlistItems = useAppSelector(state => state.wishlist.items);
    const isInWishlist = wishlistItems.some(item => item.productId === product.id);

    const handleToggleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        
        dispatch(toggleWishlist({
            id: Date.now(),
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            inStock: product.inStock ?? true,
            addedAt: new Date().toISOString(),
        }));
    };

    return (
        <>
        <Link to={`/product/${slugify(product.name, product.id)}`}>
        <Card
                key={product.id}
                className="group relative overflow-hidden transition-all hover:shadow-xl cursor-pointer border-0"
            >
                {/* Product Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                    <Badge className="bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                        New
                    </Badge>
                    )}
                    {product.isBestseller && (
                    <Badge variant="secondary">Bestseller</Badge>
                    )}
                </div>

                {/* Wishlist Button */}
                <Button
                    size="icon"
                    variant="ghost"
                    className={`absolute top-4 right-4 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity ${
                        isInWishlist ? 'text-red-500' : ''
                    }`}
                    onClick={handleToggleWishlist}
                >
                    <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
                </Button>

                {/* Quick View */}
                <div className="absolute bottom-0 left-0 right-0 bg-foreground text-background p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <Button className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028]">
                    Quick View
                    </Button>
                </div>
                </div>

                {/* Product Info */}
                <CardContent className="p-4">
                <h3 className="mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {product.name}
                </h3>
                <p className="text-[#D4AF37]">
                    ${product.price.toLocaleString()}
                </p>
                </CardContent>
            </Card>
        </Link>
        </>
    )
}
