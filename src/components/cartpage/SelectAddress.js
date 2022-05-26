import React, { useState } from "react";
import { useAddress } from "../../contexts";
import AddressesModal from "./AddressesModal";
import "./SelectAddress.css";
const SelectAddress = () => {
  const { addressState } = useAddress();
  const [selectedAddress, setSelectedAddress] = useState(addressState[0]);
  const [addressModal, setAddressModal] = useState(false);

  return (
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
      {addressModal && (
        <AddressesModal
          setAddressModal={setAddressModal}
          selectAddress={setSelectedAddress}
          selectedAddress={selectedAddress}
        />
      )}
    </section>
  );
};

export default SelectAddress;
