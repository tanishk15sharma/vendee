import React from "react";
import { useAddress } from "../../contexts";
import "./AddressCard.css";
const AddressCard = (props) => {
  const { addressDispatch, addressState, setAddressData } = useAddress();
  const { id, name, address, city, state, number, pincode, option } =
    props.address;

  const editHandler = (addressId) => {
    const editAddress = addressState.find(({ id }) => id === addressId);
    setAddressData({ ...editAddress, edit: true });
  };
  return (
    <div className="address-card-main">
      <h2>{name}</h2>
      <p>
        {address} {pincode}
        <span className="sub-txt"> (pincode)</span>
      </p>
      <p>
        {" "}
        {city}, {state}
      </p>
      <p>
        <span className="sub-txt">Phone Number :</span>
        {number}
        <span className="small-block-txt">{option}</span>
      </p>

      <button
        className="edit-btn"
        onClick={() => {
          editHandler(id);
          setAddressData((preValue) => ({
            ...preValue,
            addressFormModal: true,
          }));
        }}
      >
        EDIT
        <i className="fa-solid fa-pen-clip ml-icon"></i>
      </button>
      <button
        className="remove-btn"
        onClick={() => addressDispatch({ type: "REMOVE_ADDRESS", payload: id })}
      >
        REMOVE
        <i className="fa-solid fa-trash-can remove-icon"></i>
      </button>
    </div>
  );
};

export default AddressCard;
