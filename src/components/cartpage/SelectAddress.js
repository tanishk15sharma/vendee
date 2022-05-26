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
            <span className="sub-txt">Deliver to:</span>
            Tanishk sharma , 452001
            <span className="small-txt">home</span>
          </p>
          <p className="selected-place"> 589/8 nehru nagar near indore</p>
        </div>
        <button className="primary-btn-color btn-pd">CHANGE</button>
      </section>
      {/* <AddressesModal /> */}
    </div>
  );
};

export default SelectAddress;
