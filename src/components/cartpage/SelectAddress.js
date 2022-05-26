import React, { useState } from "react";
import AddressesModal from "./AddressesModal";

const SelectAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState();
  const [addressModal, setAddressModal] = useState(false);

  return (
    <div>
      SelectAddress
      <AddressesModal />
    </div>
  );
};

export default SelectAddress;
