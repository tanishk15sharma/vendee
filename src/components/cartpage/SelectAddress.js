import React, { useState } from "react";

import AddressesModal from "./AddressesModal";
import "./SelectAddress.css";
const SelectAddress = ({ selectedAddress, setSelectedAddress }) => {
  const [addressModal, setAddressModal] = useState(false);

  return (
    <section className="selectedAddress-section">
      {selectedAddress ? (
        <>
          <div>
            <p className="addresser-name">
              <span className="sub-txt">Deliver to: </span>
              {selectedAddress?.name} , {selectedAddress?.pincode}
              <span className="small-block-txt">{selectedAddress?.option}</span>
            </p>
            <p className="selected-place"> {selectedAddress?.address}</p>
          </div>
          <button
            className="primary-btn-color btn-pd"
            onClick={() => setAddressModal((preVal) => !preVal)}
          >
            CHANGE
          </button>
        </>
      ) : (
        <h2>No Address available</h2>
      )}
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
