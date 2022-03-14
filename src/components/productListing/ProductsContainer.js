import React, { useEffect, useState } from "react";
import tshirt from "../../assets/Products-images/HRX-Yellow-Printed-Round-Neck-T-Shirt--1.webp";
import axios from "axios";
import "./ProductsContainer.css";
// import carouselImg3 from "../../assets/carousel-images/Carousel3.webp";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get("/api/products");
        console.log(response.data.products);
        setProducts(response.data.products);
        setLoad(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  console.log(products);
  return (
    <div className="product-wrapper">
      {load
        ? "loading"
        : products.map((product) => (
            <div class="product-card">
              <div class="product-img-div">
                <img src={tshirt} alt="tshirt" />
              </div>
              <div class="product-detail">
                <div class="product-brand">
                  {product.brand} <i class="fa-solid fa-heart"></i>
                </div>
                <p class="product-info">{product.name} </p>
                <div class="product-price">
                  <span>Rs. {product.discoutPrice} </span>
                  <span>Rs. {product.actualPrice} </span>
                  <span> ({product.discout}% OFF)</span>
                </div>
                <div class="product-size-div">
                  <div class="product-size-title">Add size</div>
                  <div class="product-size">
                    <span>XS</span>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                  </div>
                </div>
              </div>
              <button class="product-btn">ADD TO CART</button>
            </div>
          ))}
    </div>
  );
};

export { ProductsContainer };
