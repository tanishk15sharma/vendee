import React, { useState } from "react";
import AddressCard from "../../components/address/AddressCard";
import { AddressForm } from "../../components/address/AddressForm";
import { Nav } from "../../components/nav/nav";
import "./AddressPage.css";
const AddressPage = () => {
  const [toggleAddressForm, setToggleAddressForm] = useState(false);
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
        <div>
          <AddressCard />
        </div>
        {toggleAddressForm ? <AddressForm /> : ""}
      </section>
    </div>
  );
};

export { AddressPage };
