import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export type Product = {
  id: string
  name: string
  price: number
  pictureUrl?: string
  description?: string
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <article className="card flex flex-col">
      <Link to={`/product/${product.id}`} className="block aspect-[4/5] bg-slate-100">
        <img src={product.pictureUrl || 'https://placehold.co/600x800?text=Product'} alt={product.name} className="w-full h-full object-cover" />
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-display text-lg text-ui-900 mb-1">{product.name}</h3>
        <p className="text-sm text-ui-600 flex-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-semibold text-ui-900">${product.price.toFixed(2)}</div>
          <button onClick={() => addToCart(product)} className="inline-flex items-center px-3 py-1.5 bg-brand text-white rounded-md">Add</button>
        </div>
      </div>
    </article>
  )
}
