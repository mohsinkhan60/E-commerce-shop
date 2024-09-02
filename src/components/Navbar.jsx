import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Model from "./Model";
import LogIn from "./LogIn";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";

export const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  }
  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  }
  const openLogIn = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  }
  const products = useSelector((state) => state.cart.products);
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-xl font-bold hidden md:block">
          <NavLink to="/">Mohsin Dev</NavLink>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              className="w-full border py-2 px-4 rounded-[2rem] "
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search Products..."
            />
            <FaSearch className="absolute top-3 right-3" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-[1.5rem]" />
            {products.length > 0 && (
              <span className="absolute -top-5 -right-4 bg-red-600 text-white rounded-full px-2">
                {products.length}
              </span>
            )}
          </NavLink>
          <button className="hidden md:block" onClick={() => setIsModelOpen(true)}>Login | Register</button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
         <NavLink to="/" className="hover:underline">Cart</NavLink>
         <NavLink to="/shop" className="hover:underline">Shop</NavLink>
         <NavLink className="hover:underline">Contact</NavLink>
         <NavLink className="hover:underline">About</NavLink>
      </div>
      <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>{isLogin ? <LogIn openSignUp={openSignUp} /> : <Register  openLogIn={openLogIn} />}</Model>
    </nav>
  );
};
export default Navbar;
