import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CartPage,
  HomePage,
  WishlistPage,
  ProductsPage,
  PageNotFound,
  SingleProduct,
} from "./pages";
import { UserLogin } from "./components/login/Login.js";
import { SignUp } from "./components/signup/SignUp.js";
import Mockman from "mockman-js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/mockapi" element={<Mockman />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
