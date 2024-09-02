
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Model from "./Model";
import ChangeAddress from "./ChangeAddress";
import {decrementQuantity, incrementQuantity, removeFromCart} from "../redux/cartSlice";
import {useNavigate } from "react-router-dom";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main street, 0012");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-lg font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-11">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((product, index) => (
                  <div
                    className="flex items-center justify-between p-3 border-b"
                    key={index}
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        className="w-16 h-16 object-cover rounded-full flex items-center justify-center"
                        src={product.img}
                        alt="img"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-xl font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-20">
                      <p>${product.price}</p>
                      <div className="flex items-center justify-center border">
                        <button className="text-2xl font-bold px-2 border-r" onClick={() => dispatch(decrementQuantity(product.id))}>
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button className="text-2xl font-bold px-2 border-l" onClick={() => dispatch(incrementQuantity(product.id))}>
                          +
                        </button>
                      </div>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button className="text-red-500 hover:text-red-700" onClick={() => dispatch(removeFromCart(product.id))}>
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5  border-b pb-1">
                <span className="text-lg">Total Item : </span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 pb-2 border-b">
                <p>shipping : </p>
                <p className="ml-2">shipping to : </p>
                <span className="text-xl font-bold">{address}</span>
                <button className="text-blue-500 mt-1 ml-2 border p-2 rounded-full border-gray-600" onClick={() => setIsModelOpen(true)}>Change Address</button>
              </div>
              <div className="flex justify-between mb-4">
                <span >Total Price : </span>
                <span>{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800 rounded-full" onClick={() => {Navigate("/checkOut")}}>Proceed To CheckOut</button>
            </div>
          </div>
          <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}><ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} /></Model>
        </div>
      ) : (
        <div className="flex justify-center mt-5">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725148800&semt=ais_hybrid"
            alt="img"
            className="h-96"
          />
        </div>
      )}
    </div>
  );
};
export default Cart;
