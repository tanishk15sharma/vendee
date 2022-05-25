import React from "react";
import AddressCard from "../../components/address/AddressCard";
import { Nav } from "../../components/nav/nav";
import "./AddressPage.css";
const AddressPage = () => {
  return (
    <div>
      <Nav />
      <section className="address-main">
        <h1>My Address</h1>
        <div>
          <AddressCard />
        </div>
      </section>
    </div>
  );
};

export { AddressPage };
