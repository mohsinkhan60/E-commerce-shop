import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom"


export const Footer = () => {
  return (
    <footer  className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Mohsin Dev</h3>
          <p className="mt-4">
            Shop with us for the best deals on furniture. We are a one-stop<br /> online furniture and decor.
          </p>
        </div>

        <div className="flex flex-col md:items-center">
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li className="flex flex-col space-y-1">
              <NavLink className="hover:underline" >Home</NavLink>
              <NavLink className="hover:underline" >Shop</NavLink>
              <NavLink className="hover:underline" >Contact</NavLink>
              <NavLink className="hover:underline" >About</NavLink>
            </li>
          </ul>
        </div>

        <div className="">
          <h4 className="text-xl font-semibold">Follow us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="" className="hover:text-gray-400 text-2xl"><FaTwitter /></a>
            <a href="" className="hover:text-gray-400 text-2xl"><FaGithub /></a>
            <a href="" className="hover:text-gray-400 text-2xl"><FaLinkedin /></a>
            <a href="" className="hover:text-gray-400 text-2xl"><FaFacebook /></a>
          </div>
          <form action="" className="flex items-center justify-start mt-8">
            <input type="email" placeholder="Enter email..." className="w-full p-2 rounded-l-xl bg-gray-800 border border-gray-200" />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r-xl border border-gray-200">Subscribe</button>
          </form>
        </div>
        

      </div>

      <div className="mt-6 container">
        <hr className="mb-4" />
        <div className="flex flex-col items-center justify-">
          <p className="border-b p-2">
            @ Mohsin Dev. All rights reserved.
          </p>
          </div>
        </div>
    </footer>
  )
}
export default Footer