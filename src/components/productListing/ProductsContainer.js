import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductsContainer.css";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { useProductsFilters } from "../../contexts/filter-context";
import {
  getSortedProducts,
  getFilteredProducts,
} from "../../utilities/filters-utils";
import loaderGif from "../../assets/loaderg.gif";
import {
  addToWishlist,
  getToken,
  removeFromWishlist,
} from "../../utilities/wishlist-utils";
import { addToCart } from "../../utilities/cart-utils";
import { useNavigate } from "react-router-dom";

const ProductsContainer = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const { state } = useProductsFilters();
  const { cart, setCart } = useCart();
  const { wishList, setWishList } = useWishlist();

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get("/api/products");
        setProducts(response.data.products);
        setLoad(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const {
    sortBy,
    includeOutOfStock,
    fastDelivery,
    category,
    brands,
    rating,
    range,
  } = state;

  const sortedProducts = getSortedProducts(products, sortBy);

  const filteredProducts = getFilteredProducts(
    sortedProducts,
    includeOutOfStock,
    fastDelivery,
    category,
    brands,
    rating,
    range
  );

  return (
    <div className="product-wrapper">
      {load ? (
        <div className="loading-img">
          <img src={loaderGif} alt="loading gif" />
        </div>
      ) : (
        filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-img-div">
              <img src={product.image} alt="tshirt" />
              <span className="product-rating">
                {product.ratings} <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="product-detail">
              <div className="product-brand">
                {product.brand}
                <div>
                  {wishList.find((item) => item._id === product._id) ? (
                    <i
                      className="fas fa-heart action-cl"
                      style={{ color: "#ff715b" }}
                      onClick={() =>
                        removeFromWishlist(product._id, setWishList)
                      }
                    ></i>
                  ) : (
                    <i
                      className="far fa-heart"
                      onClick={() => {
                        getToken()
                          ? addToWishlist(product, setWishList)
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
            <button
              className="product-btn"
              onClick={() => addToCart(product, setCart)}
            >
              ADD TO CART
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export { ProductsContainer };
