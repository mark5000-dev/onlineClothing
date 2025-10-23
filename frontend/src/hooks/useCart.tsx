import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Product } from '../components/ProductCard'

type CartItem = {
  product: Product
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  addToCart: (product: Product, qty?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, qty: number) => void
  clearCart: () => void
  open: boolean
  setOpen: (v: boolean) => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem('cart')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items))
    } catch {}
  }, [items])

  const addToCart = (product: Product, qty = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.product.id === product.id)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx].quantity += qty
        return copy
      }
      return [...prev, { product, quantity: qty }]
    })
  }

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(i => i.product.id !== productId))
  }

  const updateQuantity = (productId: string, qty: number) => {
    setItems(prev => prev.map(i => i.product.id === productId ? { ...i, quantity: Math.max(0, qty) } : i).filter(i => i.quantity > 0))
  }

  const clearCart = () => setItems([])

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, open, setOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
