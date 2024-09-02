import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { setProducts } from "../redux/productSlice";
import { mackData } from "../assets/mockData";

export const Shop = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mackData));
  }, [dispatch]);
  return (
    <div className="mt-5 mx-auto container px-4 md:px-16 lg:px-24 py-12  ">
      <h2 className="text-3xl font-bold mb-10 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 cursor-pointer">
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;
