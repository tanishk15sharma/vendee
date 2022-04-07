import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { getToken } from "../utilities/wishlist-utils";
import { useAuth } from "./auth-context";

const wishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const { authState } = useAuth();

  useEffect(() => {
    if (!getToken()) return;
    (async () => {
      try {
        const { data } = await axios.get("/api/user/wishlist", {
          headers: { authorization: getToken() },
        });
        setWishList(data.wishlist);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [authState]);

  return (
    <wishlistContext.Provider value={{ wishList, setWishList }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistContextProvider, useWishlist };
