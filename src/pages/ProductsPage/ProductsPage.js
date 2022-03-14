import React from "react";
import { HeaderSection } from "../../components/productListing/Header";
import { ProductsContainer } from "../../components/productListing/ProductsContainer";
import { ProductsFilters } from "../../components/productListing/ProductsFilters";
import "./ProductsPage.css";

const ProductsPage = () => {
  return (
    <div>
      <HeaderSection />
      <main>
        <ProductsFilters />
        <ProductsContainer />
      </main>
    </div>
  );
};

export { ProductsPage };
