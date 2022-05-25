import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  ProductsContextProvider,
  AuthContextProvider,
  WishlistContextProvider,
  CartContextProvider,
  FiltersContextProvider,
} from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FiltersContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <ProductsContextProvider>
              <App />
            </ProductsContextProvider>
          </WishlistContextProvider>
        </CartContextProvider>
      </FiltersContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
