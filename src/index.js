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
import { OrderContextProvider } from "./contexts/orders-context";

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
                <OrderContextProvider>
                  <App />
                </OrderContextProvider>
              </AddressContextProvider>
            </ProductsContextProvider>
          </WishlistContextProvider>
        </CartContextProvider>
      </FiltersContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
