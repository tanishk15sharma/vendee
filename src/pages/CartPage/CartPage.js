import React from "react";
import { CartItems } from "../../components/cartpage/CartItems";
import { HeaderSection } from "../../components/cartpage/Header";

const CartPage = () => {
  return (
    <div>
      <HeaderSection />
      <CartItems />
    </div>
  );
};

export { CartPage };
