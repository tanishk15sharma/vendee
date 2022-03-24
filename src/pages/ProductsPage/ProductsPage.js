import React from "react";
import { Nav } from "../../components/nav/nav";
import { ProductsContainer } from "../../components/productListing/ProductsContainer";
import { ProductsFilters } from "../../components/productListing/ProductsFilters";
import "./ProductsPage.css";

const ProductsPage = () => {
  return (
    <div>
      <Nav />
      <main>
        <ProductsFilters />
        <ProductsContainer />
      </main>
    </div>
  );
};

export { ProductsPage };
