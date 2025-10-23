import React from 'react'
import sampleProducts from '../data/sample-products.json'
import { ProductGrid } from '../components/ProductGrid'

export const Home: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">New Arrivals</h1>
      <ProductGrid products={sampleProducts} />
    </main>
  )
}
