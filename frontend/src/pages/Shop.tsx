import React, { useMemo, useState } from 'react'
import sampleProducts from '../data/sample-products.json'
import { ProductGrid } from '../components/ProductGrid'

export const Shop: React.FC = () => {
  const [query, setQuery] = useState('')
  const [maxPrice, setMaxPrice] = useState<number | ''>('')

  const filtered = useMemo(() => {
    return sampleProducts.filter(p => {
      const matchesQ = p.name.toLowerCase().includes(query.toLowerCase()) || (p.description || '').toLowerCase().includes(query.toLowerCase())
      const matchesPrice = maxPrice === '' ? true : p.price <= (maxPrice as number)
      return matchesQ && matchesPrice
    })
  }, [query, maxPrice])

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Shop</h1>
      <div className="mb-6 flex items-center gap-4">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products" className="border px-3 py-2 rounded w-full sm:w-80" />
        <input value={maxPrice as any} onChange={e => setMaxPrice(e.target.value ? Number(e.target.value) : '')} placeholder="Max price" className="border px-3 py-2 rounded w-32" />
      </div>
      <ProductGrid products={filtered} />
    </main>
  )
}
