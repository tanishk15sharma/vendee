import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FiltersContextProvider } from "./contexts/filter-context";
import { CartContextProvider } from "./contexts/cart-context";
import { WishlistContextProvider } from "./contexts/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FiltersContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <App />
        </WishlistContextProvider>
      </CartContextProvider>
    </FiltersContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
