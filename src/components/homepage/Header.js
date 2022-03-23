import "./Header.css";
// import { useState } from "react";
import { Nav } from "../../components/nav/nav";

const HeaderSection = () => {
  return (
    <>
      <header>
        <a href="http://" className="head-link">
          free delivery for all orders
        </a>
        <a href="http://" className="head-link">
          sign up & get 15% off
        </a>
        <a href="#" className="head-link">
          quick easy returns on prepaid orders
        </a>
      </header>
      <Nav />
    </>
  );
};

export { HeaderSection };
