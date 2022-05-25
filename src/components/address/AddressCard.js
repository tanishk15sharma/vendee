import React from "react";
import { useAddress } from "../../contexts";
import "./AddressCard.css";
const AddressCard = (props) => {
  const { addressDispatch } = useAddress();
  const { id, name, address, city, state, number, pincode, option } =
    props.address;
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
      </p>
      <button className="edit-btn">
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
