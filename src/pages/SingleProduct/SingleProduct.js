import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Nav } from "../../components/nav/nav";
import "./SingleProduct.css";
import { useCart, useProducts, useWishlist } from "../../contexts";
import {
  addToWishlist,
  getToken,
  removeFromWishlist,
} from "../../utilities/wishlist-utils";
import { addToCart } from "../../utilities/cart-utils";
const SingleProduct = () => {
  const { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const { products } = useProducts();
  const { cart, setCart } = useCart();
  const { wishList, setWishList } = useWishlist();

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentProduct(products?.find(({ _id }) => _id === productId));
  }, [products, productId]);

  return (
    <div>
      <Nav />
      <section className="singlePage-section">
        <div className="product-img">
          <img src={currentProduct?.image} />
        </div>
        <div className="details-wrapper">
          <div className="product-title">
            <p className="font-xxl">{currentProduct?.name}</p>
            <h2>
              {currentProduct?.brand}
              <span className="rating">
                {currentProduct?.ratings} <i className="fa-solid fa-star"></i>
              </span>
            </h2>
          </div>
          <p className="font-xxl">
            <span className="price-sign">&#8377;</span>
            {currentProduct?.discountPrice}
            <span className="actual-price">{currentProduct?.actualPrice}</span>
            <span className="product-discount">
              ({currentProduct?.discount}% OFF)
            </span>
          </p>
          <div className="single-product-info">
            <h3>
              <span className="sub-txt">Size:</span> {currentProduct?.size}
            </h3>
            <h3>
              <span className="sub-txt">Avability:</span>
              {currentProduct?.inStock ? "In Stock" : "Out of Stock"}
            </h3>
            <h3>
              <span className="sub-txt">Fast Delivery: </span>
              {currentProduct?.fastDelivery
                ? "Fast Delivery"
                : "Fast Delivery Unavailable"}{" "}
            </h3>
          </div>

          {cart.some((item) => item._id === currentProduct?._id) ? (
            <button
              className="product-card-btn primary-btn-color"
              onClick={() =>
                getToken() ? navigate("/cart") : navigate("/login")
              }
            >
              GO TO CART
            </button>
          ) : (
            <button
              className="product-card-btn primary-btn-color"
              onClick={() => {
                getToken()
                  ? addToCart(currentProduct, setCart, cart)
                  : navigate("/login");
              }}
            >
              ADD TO CART
            </button>
          )}

          {wishList.some((item) => item._id === currentProduct?._id) &&
          getToken() ? (
            <button
              className="product-card-btn secondary-border"
              onClick={() =>
                removeFromWishlist(currentProduct?._id, setWishList)
              }
            >
              REMOVE FROM WISHLIST
            </button>
          ) : (
            <button
              className="product-card-btn secondary-border"
              onClick={() => {
                getToken()
                  ? addToWishlist(currentProduct, setWishList, wishList)
                  : navigate("/login");
              }}
            >
              ADD TO WISHLIST
            </button>
          )}

          <p className="product-desc">
            <span className="sub-txt">Descrpition:</span> Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Nesciunt fuga, autem harum animi
            magni sunt reiciendis placeat ratione facere omnis alias! Dicta
            culpa commodi totam illo. Perferendis recusandae expedita
            necessitatibus!
          </p>
        </div>
      </section>
    </div>
  );
};

export { SingleProduct };
