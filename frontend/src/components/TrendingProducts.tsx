import { useAppSelector } from "../redux/hooks";
import ProductList from "./ProductList";
import type { FC } from "react";

const TrendingProducts: FC = () => {
  const featuredProducts = useAppSelector(
    (state) => state.productReducer.featuredProducts
  );

  return <ProductList title="Trending Products" products={featuredProducts} />;
};

export default TrendingProducts;
