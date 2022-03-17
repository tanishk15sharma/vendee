import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartPage, HomePage, WishlistPage, ProductsPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
