/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa"
import { addToCart } from "../redux/cartSlice"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom";


export const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    alert("Product added successfully")
  }
  return (
    <div className="bg-white p-4 shadow rounded border transform transition-transform duration-500 hover:scale-105 cursor-pointer">
      <img src={product.img} alt="" className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <div className="flex items-center mb-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
      <div onClick={(e) => handleAddToCart(e, product)} className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-md rounded-full hover:w-32 hover:bg-red-700 transition-all">
        <span className="text-[rem] group-hover:hidden">+</span>
        <span className="hidden group-hover:block">Add to cart</span>
      </div>
    </div>
  )
};
export default ProductCard