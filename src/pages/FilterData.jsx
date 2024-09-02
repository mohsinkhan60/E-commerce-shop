import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"


export const FilterData = () => {
   const filterproduct = useSelector((state) => state.product.filterData) 
  return (
   <div className="mt-5 mx-auto container px-4 md:px-16 lg:px-24 py-12  ">
      {filterproduct > 0 ? <>
   <h2 className="text-3xl font-bold mb-10 text-center">Shop</h2>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 cursor-pointer">
     {filterproduct.map((product, index) => (
       <div key={index}>
         <ProductCard product={product} />
       </div>
     ))}
   </div>
   </>:
   <div className="flex items-center flex-col">
       <h2 className="text-3xl font-bold mb-10 text-center"></h2>
       <img src="https://www.dlinkmea.com/images/no-product.png"alt="" />
   </div>
   
}
 </div>
)
}
export default FilterData