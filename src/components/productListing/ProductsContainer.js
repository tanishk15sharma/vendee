import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductsContainer.css";

import {
  getSortedProducts,
  getFilteredProducts,
} from "../../utilities/filters-utils";
import loaderGif from "../../assets/loaderg.gif";
import { useNavigate } from "react-router-dom";
import { useProductsFilters } from "../../contexts";
import { ProductCard } from "./ProductCard";

const ProductsContainer = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const { state } = useProductsFilters();

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get("/api/products");
        setProducts(response.data.products);
        console.log(response);
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
      {load ? (
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
