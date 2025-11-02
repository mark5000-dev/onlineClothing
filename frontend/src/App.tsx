import { Header } from "./components/Header";

import {lazy, Suspense} from "react";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const SingleProduct = lazy(() => import('./pages/SingleProduct'));
const Cart = lazy(() => import('./pages/Cart'));


export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      <Footer />
    </div>
  );
}
