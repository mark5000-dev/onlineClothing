import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export const Header: React.FC = () => {
  const { items, setOpen } = useCart()
  const total = items.reduce((s, i) => s + i.quantity, 0)

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display">OnlineClothing</Link>
        <nav className="space-x-4">
          <NavLink to="/" className={(nav: { isActive: boolean }) => nav.isActive ? 'text-ui-900 font-semibold' : 'text-ui-600'}>Home</NavLink>
          <NavLink to="/shop" className={(nav: { isActive: boolean }) => nav.isActive ? 'text-ui-900 font-semibold' : 'text-ui-600'}>Shop</NavLink>
          <NavLink to="/account" className={(nav: { isActive: boolean }) => nav.isActive ? 'text-ui-900 font-semibold' : 'text-ui-600'}>Account</NavLink>
          <button onClick={() => setOpen(true)} aria-label="Open cart" className="ml-4 inline-flex items-center space-x-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm">Cart</span>
            <span className="ml-1 inline-flex items-center justify-center bg-brand text-white px-2 py-0.5 rounded-full text-xs">{total}</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
