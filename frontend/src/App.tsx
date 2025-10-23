import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './hooks/useCart'
import { Header } from './components/Header'
import { CartDrawer } from './components/CartDrawer'
import { Home } from './pages/Home'
import { ProductDetail } from './pages/ProductDetail'
import { Shop } from './pages/Shop'
import { Checkout } from './pages/Checkout'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
