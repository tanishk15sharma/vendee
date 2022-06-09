import React, { useState } from "react";
import searchIcon from "../../assets/nav-icons/search.svg";
import likeIcon from "../../assets/nav-icons/heart.svg";
import loginIcon from "../../assets/nav-icons/user-plus.svg";
import cartIcon from "../../assets/nav-icons/shopping-cart.svg";
import { Link } from "react-router-dom";
import { ProductsContainer } from "../../components/productListing/ProductsContainer";
import { ProductsFilters } from "../../components/productListing/ProductsFilters";
import "./ProductsPage.css";
import {
  useAuth,
  useCart,
  useProductsFilters,
  useWishlist,
} from "../../contexts";
import { getToken } from "../../utilities/wishlist-utils";
import { UserProfile } from "../../components/userprofile/UserProfile";

const ProductsPage = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const { wishList } = useWishlist();
  const { cart } = useCart();
  const { dispatch } = useProductsFilters();
  const { authState } = useAuth();

  return (
    <div>
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
              onChange={(e) =>
                dispatch({ type: "SEARCH_PRODUCT", payload: e.target.value })
              }
            />
          </div>
          {!getToken() ? (
            <Link to="/login">
              <div className="nav-icon-div">
                <img src={loginIcon} alt="user-icon" />
                <span>Log in</span>
              </div>
            </Link>
          ) : (
            <UserProfile userDetails={authState.user} />
          )}

          <Link to={getToken() ? "/wishlist" : "/login"}>
            <div className="nav-icon-div">
              <img src={likeIcon} alt="wishlist-icon" />
              <span className="relative">
                Wishlist
                {wishList.length !== 0 && (
                  <span className="icon-counter">{wishList.length}</span>
                )}
              </span>
            </div>
          </Link>

          <Link to={getToken() ? "/cart" : "/login"}>
            <div className="nav-icon-div">
              <img src={cartIcon} alt="cart-icon" />
              <span className="relative">
                Cart
                {cart.length !== 0 && (
                  <span className="icon-counter lt">{cart.length}</span>
                )}
              </span>
            </div>
          </Link>
        </div>
      </nav>
      <main>
        <ProductsFilters />
        <ProductsContainer />
      </main>
    </div>
  );
};

export { ProductsPage };
