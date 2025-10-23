import React from 'react'
import { useCart } from '../hooks/useCart'
import { useNavigate } from 'react-router-dom'

export const CartDrawer: React.FC = () => {
  const { items, open, setOpen, updateQuantity, removeFromCart, clearCart } = useCart()

  const subtotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0)
  const navigate = useNavigate()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
      <aside className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-lg p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Your cart</h2>
          <button onClick={() => setOpen(false)} aria-label="Close cart">✕</button>
        </div>
        <div className="flex-1 overflow-auto space-y-4">
          {items.length === 0 ? (
            <div className="text-sm text-ui-600">Your cart is empty</div>
          ) : (
            items.map(i => (
              <div key={i.product.id} className="flex items-center space-x-3">
                <img src={i.product.pictureUrl} alt={i.product.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-medium">{i.product.name}</div>
                  <div className="text-sm text-ui-600">${i.product.price.toFixed(2)}</div>
                  <div className="mt-2 flex items-center space-x-2">
                    <button onClick={() => updateQuantity(i.product.id, i.quantity - 1)} className="px-2 py-1 border rounded">-</button>
                    <div className="px-3">{i.quantity}</div>
                    <button onClick={() => updateQuantity(i.product.id, i.quantity + 1)} className="px-2 py-1 border rounded">+</button>
                    <button onClick={() => removeFromCart(i.product.id)} className="ml-2 text-sm text-red-600">Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-ui-600">Subtotal</div>
            <div className="font-semibold">${subtotal.toFixed(2)}</div>
          </div>
          <div className="flex space-x-2">
            <button onClick={() => navigate('/checkout')} className="flex-1 bg-brand text-white py-2 rounded">Checkout</button>
            <button onClick={() => clearCart()} className="flex-1 border py-2 rounded">Clear</button>
          </div>
        </div>
      </aside>
    </div>
  )
}
