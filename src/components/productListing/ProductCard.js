import React from "react";
import { useCart, useWishlist } from "../../contexts";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../utilities/cart-utils";

import {
  addToWishlist,
  getToken,
  removeFromWishlist,
} from "../../utilities/wishlist-utils";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { cart, setCart } = useCart();
  const { wishList, setWishList } = useWishlist();

  return (
    <div className="product-card" key={product.id}>
      <div className="product-img-div">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt={`${product.name} image`} />
        </Link>
        <span className="product-rating">
          {product.ratings} <i className="fa-solid fa-star"></i>
        </span>
      </div>
      <div className="product-detail">
        <div className="product-brand">
          {product.brand}
          <div>
            {wishList.some((item) => item._id === product._id) && getToken() ? (
              <i
                className="fas fa-heart"
                style={{ color: "#ff715b" }}
                onClick={() => removeFromWishlist(product._id, setWishList)}
              ></i>
            ) : (
              <i
                className="far fa-heart"
                onClick={() => {
                  getToken()
                    ? addToWishlist(product, setWishList, wishList)
                    : navigate("/login");
                }}
              ></i>
            )}
          </div>
        </div>
        <p className="product-info">{product.name} </p>
        <div className="product-price">
          <span>Rs.{product.discountPrice} </span>
          <span>Rs. {product.actualPrice} </span>
          <span> ({product.discount}% OFF)</span>
        </div>
        <div className="product-size-div">
          <div className="product-size-title">Add size</div>
          <div className="product-size">
            <span>XS</span>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
          </div>
        </div>
      </div>
      {cart.some((item) => item._id === product._id) ? (
        <button
          className="product-btn"
          onClick={() => (getToken() ? navigate("/cart") : navigate("/login"))}
        >
          GO TO CART
        </button>
      ) : (
        <button
          className="product-btn"
          onClick={() => {
            getToken() ? addToCart(product, setCart, cart) : navigate("/login");
          }}
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
};

export { ProductCard };
