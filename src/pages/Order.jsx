/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";


export const Order = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order</h2>
      <p className="text-green-600 font-semibold text-3xl">
        Your order placed successfully
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h className="text-xl font-semibold mb-2">Order Summary</h>
        <p>Order Number : {order.orderNumber}</p>
        <div className="mt-4">
          <h2 className="text-md font-semibold mb-2">Shipping Information</h2>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-md font-semibold mb-2">products Ordered</h3>
          {order.products.map((product, index) => (
            <div key={index} className="flex justify-between mt-2">
              <p>
                {product.name} * {product.quantity}
              </p>
              <p>${product.price * product.quantity}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <span>Total Price :</span>
          <span className="font-semibold">${order.totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600 rounded-full">
          order tracking
        </button>
        <button className="ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800 rounded-full" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
export default Order;
