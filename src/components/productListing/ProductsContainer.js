import React from "react";
import "./ProductsContainer.css";
import {
  getSortedProducts,
  getFilteredProducts,
} from "../../utilities/filters-utils";
import emptyCart from "../../assets/empty_cart.png";
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
      {filteredProducts.length === 0 ? (
        <div className="img-center">
          <img src={emptyCart} />
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
