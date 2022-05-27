import React, { useState } from "react";
import { CartItems } from "../../components/cartpage/CartItems";
import { CartPriceDetails } from "../../components/cartpage/CartPriceDetails";
import { Nav } from "../../components/nav/nav";
import { useAddress } from "../../contexts";
import "./CartPage.css";

const CartPage = () => {
  const { addressState } = useAddress();
  const [selectedAddress, setSelectedAddress] = useState(addressState[0]);

  return (
    <div>
      <Nav />
      <div className="cart-container">
        <CartItems
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
        />
        <CartPriceDetails selectedAddress={selectedAddress} />
      </div>
    </div>
  );
};

export { CartPage };
