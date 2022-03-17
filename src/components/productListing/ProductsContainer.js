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

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const { state } = useProductsFilters();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get("/api/products");
        setProducts(response.data.products);
        console.log(response.data.products);
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
  console.log(state);
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
                4.5 <i class="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="product-detail">
              <div className="product-brand">
                {product.brand}
                <button
                  onClick={() =>
                    wishlistDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: product,
                    })
                  }
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
              </div>
              <p className="product-info">{product.name} </p>
              <div className="product-price">
                <span>Rs. {product.discountPrice} </span>
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
              onClick={() =>
                cartDispatch({ type: "ADD_TO_CART", payload: product })
              }
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
