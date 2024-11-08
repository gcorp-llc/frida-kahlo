import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Cart from "./shop/Cart";
import Checkout from "./shop/Checkout";
import Wishlist from "./shop/Wishlist";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import ProductDetail from "./shop/ProductDetail";
import Profile from "./user/Profile";
import Setting from "./user/setting";
import Logout from "./auth/LogOut";
import Login from "./auth/Login";
import Register from "./auth/Register";



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}