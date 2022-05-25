import React from "react";
import "./AddressCard.css";
const AddressCard = () => {
  return (
    <div className="address-card-main">
      <h2>NAME</h2>
      <p>LIG NEHRU NAGAR NEAR INDIA</p>
      <p>BANGLORE INDIA</p>
      <p>NUMBER : 8233189891</p>
      <button className="edit-btn">
        EDIT
        <i className="fa-solid fa-pen-clip ml-icon"></i>
      </button>
      <button className="remove-btn">
        REMOVE
        <i className="fa-solid fa-trash-can remove-icon"></i>
      </button>
    </div>
  );
};

export default AddressCard;