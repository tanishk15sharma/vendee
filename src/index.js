import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FiltersContextProvider } from "./contexts/filter-context";
import { CartContextProvider } from "./contexts/cart-context";
import { WishlistContextProvider } from "./contexts/wishlist-context";
import { AuthContextProvider } from "./contexts/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FiltersContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <App />
          </WishlistContextProvider>
        </CartContextProvider>
      </FiltersContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
