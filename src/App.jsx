import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./components/Cart";
import CheckOut from "./pages/CheckOut";
import { useState } from "react";
import Order from "./pages/Order";

export const App = () => {
  const [order, setOrder] = useState(null);
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkOut" element={<CheckOut setOrder={setOrder} />} />
        <Route path="/order-confirmation" element={<Order order={order} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
