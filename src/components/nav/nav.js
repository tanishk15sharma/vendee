import searchIcon from "../../assets/nav-icons/search.svg";
import likeIcon from "../../assets/nav-icons/heart.svg";
import loginIcon from "../../assets/nav-icons/user-plus.svg";
import cartIcon from "../../assets/nav-icons/shopping-cart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./nav.css";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";
const Nav = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const { wishList } = useWishlist();
  const { cart } = useCart();

  return (
    <nav>
      <div
        className="nav-menu"
        style={{
          transform: toggleHamburger && "translateX(0)",
        }}
      >
        <Link to="/" className="nav-text">
          Home
        </Link>

        <Link to="/products" className="nav-text">
          Products
        </Link>
      </div>
      <div className="logo-div">
        <i
          className="fa-solid fa-bars"
          onClick={() => setToggleHamburger((val) => !val)}
        ></i>
        <p className="logo-name">
          <span className="logo-v">V</span>endee
        </p>
        <i className="fa-solid fa-shoe-prints foot-icon"></i>
        <i className="fa-solid fa-shoe-prints"></i>
      </div>
      <div className="nav-icons-div">
        <div className="nav-icon-div">
          <img
            src={searchIcon}
            className="high-index"
            onClick={() => setToggleSearchBar((val) => !val)}
          />
          <span className="relative high-index">Search</span>
          <input
            className="search-bar"
            placeholder="Search"
            style={{
              width: toggleSearchBar && "20%",
              padding: toggleSearchBar && "0.8rem",
            }}
          />
        </div>
        <Link to="/login">
          <div className="nav-icon-div">
            <img src={loginIcon} alt="user-icon" />
            <span>Log in</span>
          </div>
        </Link>

        <Link to="/wishlist">
          <div className="nav-icon-div">
            <img src={likeIcon} alt="wishlist-icon" />
            <span className="relative">
              Wishlist <span className="icon-counter">{wishList.length}</span>
            </span>
          </div>
        </Link>

        <Link to="/cart">
          <div className="nav-icon-div">
            <img src={cartIcon} alt="cart-icon" />
            <span className="relative">
              Cart <span className="icon-counter lt">{cart.length}</span>
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export { Nav };
