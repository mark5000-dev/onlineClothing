import { useAppSelector } from "../redux/hooks";
import ProductList from "./ProductList";
import type { FC } from "react";

const LatestProducts : FC = () => {
  const newProducts = useAppSelector(
    (state) => state.productReducer.newProducts
  );

  return <ProductList title="New Arrivals" products={newProducts} />;
};

export default LatestProducts;
