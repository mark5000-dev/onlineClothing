import { Header } from "./components/Header";
import {lazy, Suspense} from "react";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./redux/hooks";
import { setCategories } from "./redux/features/categoriesSlice";
import { setProducts } from "./redux/features/productsSlice";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const SingleProduct = lazy(() => import('./pages/SingleProduct'));
const Cart = lazy(() => import('./pages/Cart'));
const Category = lazy(() => import('./pages/Categories'));
const SingleCategory = lazy(() => import('./pages/SingleCategory'));
const Products = lazy(() => import('./pages/Products'));
const Profile = lazy(()=> import('./pages/Profile'));
const Wishlist = lazy(() => import('./pages/Wishlist'));

import { mockCategories as categories } from "./model";
import { mockProducts as products } from "./model";


export default function App() {
  const dispatch = useAppDispatch();
  dispatch(setCategories(categories));
  dispatch(setProducts(products));
  return (
    <div className="min-h-screen">
      <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:slug" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Category />} />
            <Route path="/category/:slug" element={<SingleCategory />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      <Footer />
    </div>
  );
}
