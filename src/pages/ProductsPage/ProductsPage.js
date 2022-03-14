import React from "react";
import { HeaderSection } from "../../components/productListing/Header";
import { ProductsFilters } from "../../components/productListing/ProductsFilters";

const ProductsPage = () => {
  return (
    <div>
      <HeaderSection />
      <ProductsFilters />
    </div>
  );
};

export { ProductsPage };
