import React, { useState } from "react";
import AddressCard from "../../components/address/AddressCard";
import { AddressForm } from "../../components/address/AddressForm";
import { Nav } from "../../components/nav/nav";
import { useAddress } from "../../contexts";
import "./AddressPage.css";
const AddressPage = () => {
  const [toggleAddressForm, setToggleAddressForm] = useState(false);
  const { addressState } = useAddress();
  console.log(addressState);
  return (
    <div>
      <Nav />
      <section className="address-main">
        <button
          className="edit-btn"
          onClick={() => setToggleAddressForm((preValue) => !preValue)}
        >
          <i className="fa-solid fa-plus"></i>
          Add New Address
        </button>
        {addressState?.map((address) => (
          <AddressCard address={address} key={address.id} />
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
