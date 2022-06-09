import likeIcon from "../../assets/nav-icons/heart.svg";
import loginIcon from "../../assets/nav-icons/user-plus.svg";
import cartIcon from "../../assets/nav-icons/shopping-cart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./nav.css";
import {
  useCart,
  useProductsFilters,
  useWishlist,
  useAuth,
} from "../../contexts";
import { getToken } from "../../utilities/wishlist-utils";
import { UserProfile } from "../userprofile/UserProfile";

const Nav = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const { wishList } = useWishlist();
  const { cart } = useCart();
  const { dispatch } = useProductsFilters();
  const { authState } = useAuth();

  return (
    <nav>
      <div
        className="nav-menu relative"
        style={{
          transform: toggleHamburger && "translateX(0)",
        }}
      >
        <Link to="/" className="nav-text">
          Home
        </Link>
        <div className="navcategory-div">
          {toggleHamburger ? (
            <Link to="/products" className="nav-text">
              Products
            </Link>
          ) : (
            <Link to="/products">
              <button className="categoryBtn">Products</button>
            </Link>
          )}
          <ul className="nav-categories">
            <Link
              to="/products"
              className="recommendation-img"
              onClick={() => dispatch({ type: "ADD_CATEGORY", payload: "men" })}
            >
              <li>
                Men{" "}
                <i className="fa-solid fa-square-arrow-up-right category-icon"></i>{" "}
              </li>
            </Link>
            <Link
              to="/products"
              className="recommendation-img"
              onClick={() =>
                dispatch({ type: "ADD_CATEGORY", payload: "women" })
              }
            >
              <li>
                Women{" "}
                <i className="fa-solid fa-square-arrow-up-right category-icon"></i>{" "}
              </li>
            </Link>
            <Link
              to="/products"
              className="recommendation-img"
              onClick={() =>
                dispatch({ type: "ADD_CATEGORY", payload: "footwear" })
              }
            >
              <li>
                Footwear{" "}
                <i className="fa-solid fa-square-arrow-up-right category-icon"></i>{" "}
              </li>
            </Link>
            <Link
              to="/products"
              className="recommendation-img"
              onClick={() =>
                dispatch({ type: "ADD_CATEGORY", payload: "jewellery" })
              }
            >
              <li>
                Jewellery{" "}
                <i className="fa-solid fa-square-arrow-up-right category-icon"></i>{" "}
              </li>
            </Link>
            <Link
              to="/products"
              className="recommendation-img"
              onClick={() =>
                dispatch({ type: "ADD_CATEGORY", payload: "homedecor" })
              }
            >
              <li>
                Home Decor{" "}
                <i className="fa-solid fa-square-arrow-up-right category-icon"></i>{" "}
              </li>
            </Link>
          </ul>
        </div>
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
  );
};
export { Nav };
