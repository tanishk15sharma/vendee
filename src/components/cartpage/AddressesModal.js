import React from "react";
import { useAddress } from "../../contexts/address-context";
import { AddressForm } from "../address/AddressForm";

import "./AddressesModal.css";
const AddressesModal = () => {
  const { addressState, addressDispatch, setAddressData, addressData } =
    useAddress();

  const editHandler = (addressId) => {
    const editAddress = addressState.find(({ id }) => id === addressId);
    setAddressData({ ...editAddress, edit: true });
  };
  console.log(addressData.addressFormModal);
  return (
    <main className="addresses-container">
      <div className="addresses">
        {addressState?.map((address) => (
          <div className="address-div">
            <input type="checkbox" className="address-input" />
            <div className="">
              <h2>{address.name}</h2>
              <p>
                {address.address} {address.pincode}
                <span className="sub-txt"> (pincode)</span>
              </p>
              <p>
                {" "}
                {address.city}, {address.state}
              </p>
              <p>
                <span className="sub-txt">Phone Number :</span>
                {address.number}
                <span className="small-txt">{address.option}</span>
              </p>

              <button
                className="edit-btn"
                onClick={() => {
                  setAddressData((preValue) => ({
                    ...preValue,
                    addressFormModal: true,
                  }));
                  editHandler(address.id);
                }}
              >
                EDIT
                <i className="fa-solid fa-pen-clip ml-icon"></i>
              </button>
              <button
                className="remove-btn"
                onClick={() =>
                  addressDispatch({
                    type: "REMOVE_ADDRESS",
                    payload: address.id,
                  })
                }
              >
                REMOVE
                <i className="fa-solid fa-trash-can remove-icon"></i>
              </button>
            </div>
          </div>
        ))}
        <button
          className="edit-btn ml-2"
          onClick={() =>
            setAddressData((preValue) => ({
              ...preValue,
              addressFormModal: true,
            }))
          }
        >
          <i className="fa-solid fa-plus"></i>
          Add New Address
        </button>
        {addressData.addressFormModal ? <AddressForm /> : ""}
      </div>
    </main>
  );
};

export default AddressesModal;
