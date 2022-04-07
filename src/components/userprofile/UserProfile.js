import React, { useState } from "react";
import { Link } from "react-router-dom";

import loginIcon from "../../assets/nav-icons/user-plus.svg";
import { useAuth, useCart, useWishlist } from "../../contexts";

import "./UserProfile.css";
const UserProfile = ({ userDetails }) => {
  const [toggleUserProfile, setToggleUserProfile] = useState(false);
  const { cart, setCart } = useCart();
  const { setWishlist } = useWishlist();
  console.log(cart);
  const { authDispatch } = useAuth();

  const logOutHandler = () => {
    localStorage.removeItem("token");
    authDispatch({ type: "USER_LOGOUT" });
    setCart([]);
    setWishlist([]);
  };
  return (
    <div className="relative">
      <div
        className="nav-icon-div"
        onClick={() => setToggleUserProfile((val) => !val)}
      >
        <img src={loginIcon} alt="user-icon" />
        <span>hi {userDetails?.firstName} </span>
      </div>
      <div
        className="flex-cl user-modal"
        style={{ display: toggleUserProfile ? "flex" : "none" }}
      >
        <Link to="/settings">Settings</Link>
        <Link to="/address">Address</Link>
        <Link to="/help">Help</Link>
        <button onClick={logOutHandler}>logout</button>
      </div>
    </div>
  );
};

export { UserProfile };
