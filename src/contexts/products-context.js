import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const productsContext = createContext(null);

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setProductLoading(true);
        let response = await axios.get("/api/products");
        setProducts(response.data.products);
        setProductLoading(false);
      } catch (err) {
        console.log(err);
        setProductLoading(false);
      }
    })();
  }, []);
  console.log(products);
  return (
    <productsContext.Provider value={{ products, setProducts, productLoading }}>
      {children}
    </productsContext.Provider>
  );
};

const useProducts = () => useContext(productsContext);

export { ProductsContextProvider, useProducts };
