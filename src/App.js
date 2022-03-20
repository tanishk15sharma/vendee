import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartPage, HomePage, WishlistPage, ProductsPage } from "./pages";
import { Login } from "./components/login/Login.js";
import { SignUp } from "./components/signup/SignUp.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
