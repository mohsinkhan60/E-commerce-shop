/* eslint-disable react/prop-types */
import { useState } from "react";


export const ChangeAddress = ({setAddress, setIsModelOpen}) => {
  const [newAddress, setNewAddress] = useState("");
  const onChange = () => {
    setAddress(newAddress)
    setIsModelOpen(false)
  }
  return (
    <div>
      <input type="text" className="w-full border border-gray-700 py-2 rounded-xl mb-5 px-3 text-xl text-gray-800" placeholder="Change Address..."
      onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex items-end justify-end">
         <button className="bg-gray-600 text-white py-2 px-3 rounded-xl mr-2" onClick={() => setIsModelOpen(false)}>Cencle</button>
         <button  className="bg-blue-500 text-white py-2 px-3 rounded-xl ml-2" onClick={onChange}>Save Address</button>
      </div>
    </div> 
  )
}
export default ChangeAddress