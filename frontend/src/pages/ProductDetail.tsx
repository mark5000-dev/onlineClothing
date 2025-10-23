import React from 'react'
import { useParams } from 'react-router-dom'
import sampleProducts from '../data/sample-products.json'
import { useCart } from '../hooks/useCart'

export const ProductDetail: React.FC = () => {
  const { id } = useParams()
  const product = sampleProducts.find(p => p.id === id)
  const { addToCart } = useCart()

  if (!product) return <div className="p-8">Product not found</div>

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img src={product.pictureUrl} alt={product.name} className="w-full object-cover rounded" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
        <div className="text-xl font-bold mb-4">${product.price.toFixed(2)}</div>
        <p className="text-ui-600 mb-6">{product.description}</p>
        <div className="space-x-2">
          <button onClick={() => addToCart(product)} className="bg-brand text-white px-4 py-2 rounded">Add to cart</button>
        </div>
      </div>
    </div>
  )
}
