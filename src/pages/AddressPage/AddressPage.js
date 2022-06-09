import React from "react";
import AddressCard from "../../components/address/AddressCard";
import { AddressForm } from "../../components/address/AddressForm";
import { Nav } from "../../components/nav/nav";
import { useAddress } from "../../contexts";
import "./AddressPage.css";
const AddressPage = () => {
  const { addressState, addressData, setAddressData } = useAddress();
  console.log(addressState);
  return (
    <div>
      <Nav />
      <section className="address-main">
        <p className="title-name">
          <span className="logo-v">My</span>Addresses
        </p>
        <button
          className="edit-btn"
          onClick={() => {
            setAddressData((preValue) => ({
              ...preValue,
              addressFormModal: !preValue.addressFormModal,
            }));
          }}
        >
          <i className="fa-solid fa-plus"></i>
          Add New Address
        </button>
        {addressState?.map((address) => (
          <AddressCard address={address} key={address?.id} />
        ))}

        {addressData.addressFormModal ? <AddressForm /> : ""}
      </section>
    </div>
  );
};

export { AddressPage };
