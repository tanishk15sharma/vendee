import { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/nav-icons/search.svg";
import likeIcon from "../../assets/nav-icons/heart.svg";
import loginIcon from "../../assets/nav-icons/user-plus.svg";
import cartIcon from "../../assets/nav-icons/shopping-cart.svg";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";

import "./Productheader.css";

const HeaderSection = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();

  return (
    <nav>
      <div
        className="nav-route"
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
        {/* <i className="fa-solid fa-shoe-prints foot-icon"></i>
        <i className="fa-solid fa-shoe-prints"></i> */}
      </div>
      <div className="nav-icons-div">
        <div className="nav-icon-div">
          <img
            src={searchIcon}
            alt="search-icon"
            className="index"
            onClick={() => setToggleSearch((val) => !val)}
          />
          <span>Search</span>
          <input
            className="search-bar-i"
            placeholder="Search"
            style={{ display: toggleSearch && "inline" }}
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
            <span>
              Wishlist
              <span className="icon-counter wishlist-pt">
                {wishlistState.length}
              </span>
            </span>
          </div>
        </Link>

        <Link to="/cart">
          <div className="nav-icon-div">
            <img src={cartIcon} alt="cart-icon" />
            <span>
              Cart
              <span className="icon-counter cart-pt">{cartState.length}</span>
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export { HeaderSection };
