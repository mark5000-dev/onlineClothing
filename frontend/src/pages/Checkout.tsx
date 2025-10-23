import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export const Checkout: React.FC = () => {
  const { items, clearCart } = useCart()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')

  const subtotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder: normally submit order to backend
    clearCart()
    navigate('/')
    alert('Order placed (demo).')
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full name</label>
            <input required value={name} onChange={e => setName(e.target.value)} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input required value={address} onChange={e => setAddress(e.target.value)} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <button type="submit" className="bg-brand text-white px-4 py-2 rounded">Place Order</button>
          </div>
        </form>
        <div>
          <h2 className="text-lg font-semibold mb-2">Order summary</h2>
          <div className="space-y-2">
            {items.map(i => (
              <div key={i.product.id} className="flex items-center justify-between">
                <div>{i.product.name} x {i.quantity}</div>
                <div>${(i.product.price * i.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4 flex items-center justify-between font-semibold">Total <div>${subtotal.toFixed(2)}</div></div>
        </div>
      </div>
    </main>
  )
}
