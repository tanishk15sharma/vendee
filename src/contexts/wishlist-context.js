import { createContext, useContext } from "react";

const wishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  return <wishlistContext.Provider>{children}</wishlistContext.Provider>;
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistContextProvider, useWishlist };
