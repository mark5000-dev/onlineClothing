import { Header } from "./components/Header";
import { lazy, Suspense, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./redux/hooks";
import { setCategories } from "./redux/features/categoriesSlice";
import { setProducts } from "./redux/features/productsSlice";
import { type Product } from "./model";

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

async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch("./sample_data/sample_data.json");

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const jsonData: Product[] = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching or parsing JSON: ", error);
    return [];
  }
}


export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
  fetchProducts().then((jsonData) => {
    if (jsonData) dispatch(setProducts(jsonData));
  });
  }, [dispatch]);


  dispatch(setCategories(categories));
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
