import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const productsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get("/api/products");
        setProducts(response.data.products);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <productsContext.Provider value={{ products, setProducts }}>
      {children}
    </productsContext.Provider>
  );
};

const useProducts = () => useContext(productsContext);

export { ProductsContextProvider, useProducts };
