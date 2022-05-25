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
import { AddressContextProvider } from "./contexts/address-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FiltersContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <ProductsContextProvider>
              <AddressContextProvider>
                <App />
              </AddressContextProvider>
            </ProductsContextProvider>
          </WishlistContextProvider>
        </CartContextProvider>
      </FiltersContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
