import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const wishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const encodedToken = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/user/wishlist", {
          headers: { authorization: encodedToken },
        });
        setWishList(data.wishlist);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <wishlistContext.Provider value={{ wishList, setWishList }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistContextProvider, useWishlist };
