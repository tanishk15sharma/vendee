import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { getToken } from "../utilities/wishlist-utils";
import { useAuth } from "./auth-context";
const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { authState } = useAuth();

  useEffect(() => {
    if (!authState.isAuth) return;
    (async () => {
      const { data } = await axios.get("/api/user/cart", {
        headers: {
          authorization: getToken(),
        },
      });

      setCart(data.cart);
    })();
  }, [authState]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartContextProvider, useCart };
