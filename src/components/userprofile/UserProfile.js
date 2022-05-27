import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./UserProfile.css";
import loginIcon from "../../assets/nav-icons/user-plus.svg";
import {
  useAuth,
  useCart,
  useWishlist,
  useOrders,
  useAddress,
} from "../../contexts";

const UserProfile = ({ userDetails }) => {
  const [toggleUserProfile, setToggleUserProfile] = useState(false);
  const { setCart } = useCart();
  const { setWishList } = useWishlist();
  const { authDispatch } = useAuth();
  const { setUserOrders } = useOrders();
  const { addressDispatch } = useAddress();
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.clear();
    authDispatch({ type: "USER_LOGOUT" });
    setWishList([]);
    setCart([]);
    setUserOrders([]);
    navigate("/products");
    addressDispatch({ type: "EMPTY_ADDRESS" });
  };

  return (
    <div>
      <div
        className="nav-icon-div"
        onClick={() => setToggleUserProfile((val) => !val)}
      >
        <img src={loginIcon} alt="user-icon" />
        <span>Hey, {userDetails?.firstName} </span>
      </div>
      <div
        className="flex-cl user-modal"
        style={{ display: toggleUserProfile ? "flex" : "none" }}
      >
        <Link to="/settings">Settings</Link>
        <Link to="/address">Address</Link>
        <Link to="/orders">Orders</Link>
        <button onClick={logOutHandler} className="logout-btn">
          logout
        </button>
      </div>
    </div>
  );
};

export { UserProfile };
