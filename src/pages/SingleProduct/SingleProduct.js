import React from "react";
import { useParams } from "react-router-dom";
import { Nav } from "../../components/nav/nav";
import "./SingleProduct.css";
const SingleProduct = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <div>
      <Nav />
      <div>products</div>
    </div>
  );
};

export { SingleProduct };
