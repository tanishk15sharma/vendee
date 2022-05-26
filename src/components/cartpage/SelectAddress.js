import React, { useState } from "react";
import AddressesModal from "./AddressesModal";
import "./SelectAddress.css";
const SelectAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState({});
  const [addressModal, setAddressModal] = useState(false);

  return (
    <div>
      <section className="selectedAddress-section">
        <div>
          <p>
            <span>Deliver to:</span>
            Tanishk sharma , 452001
            <span>home</span>
          </p>
          <p>589/8 nehru nagar near indore</p>
        </div>
        <button>CHANGE</button>
      </section>
      {/* <AddressesModal /> */}
    </div>
  );
};

export default SelectAddress;
