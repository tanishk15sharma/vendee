import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { wishlistReducer } from "../reducers/wishlist-reducer";

const wishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/user/wishlist", {
          headers: { authorization: encodedToken },
        });
        console.log(data.wishlist);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, []);
  return (
    <wishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistContextProvider, useWishlist };
