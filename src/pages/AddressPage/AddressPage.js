import React, { useState, useEffect } from "react";
import AddressCard from "../../components/address/AddressCard";
import { AddressForm } from "../../components/address/AddressForm";
import { Nav } from "../../components/nav/nav";
import { useAddress } from "../../contexts";
import "./AddressPage.css";
const AddressPage = () => {
  const [toggleAddressForm, setToggleAddressForm] = useState(false);
  const { addressState } = useAddress();

  return (
    <div>
      <Nav />
      <section className="address-main">
        <p className="title-name">
          <span className="logo-v">My</span>Addresses
        </p>
        <button
          className="edit-btn"
          onClick={() => setToggleAddressForm((preValue) => !preValue)}
        >
          <i className="fa-solid fa-plus"></i>
          Add New Address
        </button>
        {addressState?.map((address) => (
          <AddressCard
            address={address}
            key={address.id}
            toggleForm={setToggleAddressForm}
          />
        ))}

        {toggleAddressForm ? (
          <AddressForm toggleForm={setToggleAddressForm} />
        ) : (
          ""
        )}
      </section>
    </div>
  );
};

export { AddressPage };
