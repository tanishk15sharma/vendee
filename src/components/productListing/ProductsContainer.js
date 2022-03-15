import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductsContainer.css";
import { useProductsFilters } from "../../contexts/filter-context";
import {
  getSortedProducts,
  getFilteredProducts,
} from "../../utilities/filters-utils";
const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
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

  const { state } = useProductsFilters();
  const { sortBy, includeOutOfStock, fastDelivery, category, brands } = state;
  // console.log(state);
  const sortedProducts = getSortedProducts(products, sortBy);

  const filteredProducts = getFilteredProducts(
    sortedProducts,
    includeOutOfStock,
    fastDelivery,
    category,
    brands
  );
  // console.log(state);
  return (
    <div className="product-wrapper">
      {load
        ? "loading"
        : filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-img-div">
                <img src={product.image} alt="tshirt" />
              </div>
              <div className="product-detail">
                <div className="product-brand">
                  {product.brand} <i className="fa-solid fa-heart"></i>
                </div>
                <p className="product-info">{product.name} </p>
                <div className="product-price">
                  <span>Rs. {product.discoutPrice} </span>
                  <span>Rs. {product.actualPrice} </span>
                  <span> ({product.discout}% OFF)</span>
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
              <button className="product-btn">ADD TO CART</button>
            </div>
          ))}
    </div>
  );
};

export { ProductsContainer };
