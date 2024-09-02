/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CheckOut = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate()

  const [shippingInfo, setShippingInfo] = useState({
   address :"",
   city :"",
   zip :"",
  })

  const handleOrder = () => {
   const newOrder = {
      products: cart.products,
      orderNumber: "12345",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice
   }
   setOrder(newOrder)
   navigate("/order-confirmation")
  }
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECK OUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter name.."
                  className="w-full px-3 py-2 border"
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter email.."
                  className="w-full px-3 py-2 border"
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="">
                  Phone
                </label>
                <input
                  type="phone"
                  name="phone"
                  placeholder="enter phone.."
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>

          {/* Shipping Information */}

          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Address
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter Address..."
                  className="w-full px-3 py-2 border"
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})} 
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="City Name.."
                  className="w-full px-3 py-2 border"
                  onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-700" htmlFor="">
                  Zip code
                </label>
                <input
                  type="text"
                  name="zip"
                  placeholder="Zip Code ..."
                  className="w-full px-3 py-2 border"
                  onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})}
                />
              </div>
            </div>
          </div>
          {/* Payment Information */}

          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Payment Information
              </h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "code"}
                  onChange={() => setPaymentMethod("code")}
                />
                <label className="block text-gray-700 ml-3" htmlFor="">
                  Cash on Delivery
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block text-gray-700 ml-3" htmlFor="">
                  Debit Cart
                </label>
              </div>

              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl mb-4 font-semibold">
                    Debit Card Information
                  </h3>
                  <div className="mb-4">
                    <label
                      htmlFor=""
                      className="text-gray-700 block font-semibold mb-2 "
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter a Card Number..."
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor=""
                      className="text-gray-700 block font-semibold mb-2 "
                    >
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter a Card Hollder..."
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div className="flex w-full gap-10">
                    <div className="mb-4">
                      <label
                        htmlFor=""
                        className="text-gray-700 block font-semibold mb-2 "
                      >
                        Expire Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-2 w-[25rem] rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor=""
                        className="text-gray-700 block font-semibold mb-2 "
                      >
                        CV
                      </label>
                      <input
                        type="text"
                        placeholder="CV..."
                        className="border p-2 w-[25rem] rounded"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product, index) => (
               <div key={index}  className="flex justify-between">
                  <div className="flex items-center">
                     <img src={product.img} alt="" className="w-20 h-20 object-contain rounded" />
                     <div className="ml-4">
                        <h4 className="text-xl font-semibold">{product.name}</h4>
                        <p className="text-gray-600">
                           & {product.price} x {product.quantity}
                        </p>
                     </div>
                  </div>
                  <div className="text-gray-800">
                     ${product.price * product.quantity}
                  </div>
               </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
               <span>Total Price : </span>
               <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800 rounded-full" onClick={handleOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
