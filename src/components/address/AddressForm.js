import React, { useState } from "react";
import "./AddressForm.css";
const AddressForm = () => {
  const [addressData, setAddressData] = useState({
    name: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    number: "",
    option: "",
    edit: false,
  });
  const changeHandler = (e) => {
    setAddressData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  console.log(addressData);
  return (
    <main className="addressForm-main">
      <form className="addAddress-container">
        <div className="addressForm">
          <input
            type="text"
            name="name"
            placeholder="NAME"
            onChange={changeHandler}
            value={addressData.name}
            className="addressInput"
          />
          <input
            type="text"
            name="address"
            placeholder="PERMANENT ADDRESS"
            onChange={changeHandler}
            value={addressData.address}
            className="addressInput"
          />
          <input
            type="number"
            name="pincode"
            placeholder="PINCODE"
            onChange={changeHandler}
            value={addressData.pincode}
            className="addressInput"
          />
          <input
            type="text"
            name="city"
            placeholder="CITY"
            onChange={changeHandler}
            value={addressData.city}
            className="addressInput"
          />
          <input
            type="text"
            name="state"
            placeholder="STATE"
            onChange={changeHandler}
            value={addressData.state}
            className="addressInput"
          />
          <input
            type="text"
            name="number"
            placeholder="MOBILE NUMBER"
            onChange={changeHandler}
            value={addressData.number}
            className="addressInput"
          />
          <div>
            <input
              type="radio"
              id="home"
              name="option"
              value="home"
              onChange={changeHandler}
            />
            <label htmlFor="home" onChange={changeHandler}>
              HOME
            </label>

            <input
              type="radio"
              id="work"
              name="option"
              value="work"
              onChange={changeHandler}
            />
            <label htmlFor="work" onChange={changeHandler}>
              WORK
            </label>
          </div>
          <button className="primary-btn-color btn-pd">
            SAVE
            <i className="fa-solid fa-check ml-icon"></i>
          </button>
        </div>
      </form>
    </main>
  );
};

export { AddressForm };
