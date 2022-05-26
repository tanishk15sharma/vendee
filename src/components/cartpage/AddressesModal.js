import React from "react";
import { useAddress } from "../../contexts/address-context";
import { AddressForm } from "../address/AddressForm";

import "./AddressesModal.css";
const AddressesModal = () => {
  const { addressState, setAddressData, addressData } = useAddress();
  console.log(addressState);
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
                  props.toggleForm((preVal) => !preVal);
                  editHandler(id);
                }}
              >
                EDIT
                <i className="fa-solid fa-pen-clip ml-icon"></i>
              </button>
              <button
                className="remove-btn"
                onClick={() =>
                  addressDispatch({ type: "REMOVE_ADDRESS", payload: id })
                }
              >
                REMOVE
                <i className="fa-solid fa-trash-can remove-icon"></i>
              </button>
            </div>
          </div>
        ))}
        <button
          //   className="edit-btn"
          onClick={() =>
            setAddressData((preValue) => ({
              ...preValue,
              addressFormModal: !preValue.addressFormModal,
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
