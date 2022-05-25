import React from "react";
import { useAddress } from "../../contexts";
import "./AddressForm.css";
import { v4 as uuidv4 } from "uuid";

const AddressForm = ({ toggleForm }) => {
  const { addressDispatch, addressData, setAddressData } = useAddress();

  const changeHandler = (e) => {
    setAddressData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const submitAddress = (e) => {
    e.preventDefault();

    addressData.edit
      ? addressDispatch({
          type: "EDIT_ADDRESS",
          payload: addressData,
        })
      : addressDispatch({
          type: "ADD_ADDRESS",
          payload: { ...addressData, id: uuidv4() },
        });
    setAddressData({
      name: "",
      address: "",
      pincode: "",
      city: "",
      state: "",
      number: "",
      option: "",
      edit: false,
    });
    toggleForm(false);
  };
  return (
    <main
      className="addressForm-main"
      onClick={() => toggleForm((preVal) => !preVal)}
    >
      <form
        className="addAddress-container"
        onClick={(e) => e.stopPropagation()}
        onSubmit={submitAddress}
      >
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
              value="Home"
              onChange={changeHandler}
            />
            <label htmlFor="home" onChange={changeHandler} className="mr-2">
              HOME
            </label>

            <input
              type="radio"
              id="office"
              name="option"
              value="Office"
              onChange={changeHandler}
            />
            <label htmlFor="work" onChange={changeHandler} className="mr-2">
              OFFICE
            </label>
            <input
              type="radio"
              id="guest"
              name="option"
              value="Guest"
              onChange={changeHandler}
            />
            <label htmlFor="guest" onChange={changeHandler} className="mr-2">
              GUEST
            </label>
          </div>
          <button className="primary-btn-color btn-pd" type="submit">
            {addressData.edit ? "EDIT" : "SAVE"}
          </button>
        </div>
      </form>
    </main>
  );
};

export { AddressForm };
