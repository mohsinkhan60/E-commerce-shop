import { useEffect } from "react";
import { Categories, mackData } from "../assets/mockData";
import Category from "../components/Category";
import InfoSection from "../components/InfoSection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";

export const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mackData));
  },[dispatch]);  
  return (
    <>
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:3/12">
          <div className="bg-red-600 text-xl text-white font-bold px-2 py-2.5">Shop By Categories</div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-xl font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:9/12 mt-8 md:mt-0 h-96 relative">
          <img
            src="https://t3.ftcdn.net/jpg/02/24/64/56/360_F_224645618_dtpq1bEjnN67g3gampm39hg698AUC9tf.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute top-16 left-8">
            <p className="text-gray-600 mb-4 text-xl font-semibold">Code with Mohsin</p>
            <h2 className="text-3xl font-bold">Welcom to E-Shop</h2>
            <p className="text-xl mt-2.5 font-bold text-gray-800">MILLIONS + PRODUCTS</p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 rounded-full">SHOP NOW</button>
          </div>
        </div>
      </div>
      <InfoSection />
      <Category />
      
      <div className="mt-10 mx-auto container py-12 gap-5">
        <h2 className="text-3xl font-bold mb-6 text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 cursor-pointer">
          {products.slice(0, 5).map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <Shop />
    </>
          
  );
};
export default Home;
