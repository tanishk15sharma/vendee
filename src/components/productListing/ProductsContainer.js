import React, { useState } from "react";
import "./ProductsContainer.css";
import {
  getSortedProducts,
  getFilteredProducts,
} from "../../utilities/filters-utils";
import loaderGif from "../../assets/loaderg.gif";
import { useProducts, useProductsFilters } from "../../contexts";
import { ProductCard } from "./ProductCard";

const ProductsContainer = () => {
  const { state } = useProductsFilters();
  const { products } = useProducts();
  const {
    sortBy,
    includeOutOfStock,
    fastDelivery,
    categories,
    brands,
    rating,
    range,
    search,
  } = state;

  const sortedProducts = getSortedProducts(products, sortBy);

  const filteredProducts = getFilteredProducts(
    sortedProducts,
    includeOutOfStock,
    fastDelivery,
    categories,
    brands,
    rating,
    range,
    search
  );

  return (
    <div className="product-wrapper">
      {!products ? (
        <div className="loading-img">
          <img src={loaderGif} alt="loading gif" />
        </div>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))
      )}
    </div>
  );
};

export { ProductsContainer };
