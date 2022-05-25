import React, { useState } from "react";
import { useCart, useProducts, useWishlist } from "../../contexts";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../utilities/cart-utils";
import defaultImage from "../../assets/default-img.png";
import {
  addToWishlist,
  getToken,
  removeFromWishlist,
} from "../../utilities/wishlist-utils";

const sizeOptions = [
  {
    name: "size",
    value: "XS",
  },
  {
    name: "size",
    value: "S",
  },
  {
    name: "size",
    value: "M",
  },
  {
    name: "size",
    value: "L",
  },
  {
    name: "size",
    value: "XL",
  },
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { cart, setCart } = useCart();
  const { wishList, setWishList } = useWishlist();
  const { products, setProducts } = useProducts();

  const sizeHandler = (e, id) => {
    const newSize = e.target.value;

    setProducts(
      products.map((currProduct) =>
        currProduct._id === id ? { ...currProduct, size: newSize } : currProduct
      )
    );
  };

  return (
    <div className="product-card" key={product.id}>
      <div className="product-img-div">
        <Link to={`/product/${product._id}`}>
          <img
            src={product.image ? product.image : defaultImage}
            alt={`${product.name} image`}
          />
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
          <div
            className="product-size"
            onClick={(e) => sizeHandler(e, product._id)}
          >
            {sizeOptions.map((size) => (
              <label
                className={`size-name ${
                  product.size === size.value ? "highlight" : ""
                }`}
                key={size.value}
              >
                {size.value}
                <input
                  type="radio"
                  id={size.value}
                  name={product._id}
                  className="hidden"
                  value={size.value}
                  onClick={(e) => sizeHandler(e, product._id)}
                />
              </label>
            ))}
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
