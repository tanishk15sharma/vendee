import React from "react";
import { CartItems } from "../../components/cartpage/CartItems";
import { CartPriceDetails } from "../../components/cartpage/CartPriceDetails";
import { Nav } from "../../components/nav/nav";
import "./CartPage.css";

const CartPage = () => {
  return (
    <div>
      <Nav />
      <div className="cart-container">
        <CartItems />
        <CartPriceDetails />
      </div>
    </div>
  );
};

export { CartPage };
