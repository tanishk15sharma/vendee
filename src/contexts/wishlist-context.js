import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducers/wishlist-reducer";

const wishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, []);
  return (
    <wishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistContextProvider, useWishlist };
