import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartPage, HomePage } from "./pages";
import { ProductsPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
