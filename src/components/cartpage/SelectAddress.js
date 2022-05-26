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
          <p className="addresser-name">
            <span className="sub-txt">Deliver to: </span>
            {selectedAddress.name} , {selectedAddress.pincode}
            <span className="small-block-txt">{selectedAddress.option}</span>
          </p>
          <p className="selected-place"> {selectedAddress.address}</p>
        </div>
        <button
          className="primary-btn-color btn-pd"
          onClick={() => setAddressModal((preVal) => !preVal)}
        >
          CHANGE
        </button>
      </section>
      {addressModal && (
        <AddressesModal
          setAddressModal={setAddressModal}
          selectAddress={setSelectedAddress}
        />
      )}
    </div>
  );
};

export default SelectAddress;
