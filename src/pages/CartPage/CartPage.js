import React from "react";
import { CartItems } from "../../components/cartpage/CartItems";
import { CartPriceDetails } from "../../components/cartpage/CartPriceDetails";
import { HeaderSection } from "../../components/cartpage/Header";
import "./CartPage.css";

const CartPage = () => {
  return (
    <div>
      <HeaderSection />
      <div className="cart-container">
        <CartItems />
        <CartPriceDetails />
      </div>
    </div>
  );
};

export { CartPage };
