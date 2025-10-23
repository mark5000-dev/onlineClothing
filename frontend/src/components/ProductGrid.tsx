import React from 'react'
import { ProductCard } from './ProductCard'
import type { Product } from './ProductCard'


export const ProductGrid: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(p => (
        <ProductCard product={p} key={p.id} />
      ))}
    </div>
  )
}
