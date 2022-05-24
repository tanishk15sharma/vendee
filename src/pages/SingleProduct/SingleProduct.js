import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "../../components/nav/nav";
import "./SingleProduct.css";
import { useProducts } from "../../contexts";
const SingleProduct = () => {
  const { productId } = useParams();
  const { products } = useProducts();

  const currentProduct = products.find(({ _id }) => _id === productId);

  console.log(currentProduct);
  return (
    <div>
      <Nav />
      <section className="singlePage-section">
        <img src={currentProduct.image} />
        <div>
          <div className="product-title">
            <p className="font-xxl">{currentProduct.name}</p>
            <h2 lassName="product-brand">
              {currentProduct.brand}
              <span className="rating">
                {currentProduct.ratings} <i class="fa-solid fa-star"></i>
              </span>
            </h2>
          </div>
          <p className="font-xxl">
            <span className="price-sign">&#8377;</span>
            {currentProduct.discountPrice}
            <span className="actual-price">{currentProduct.actualPrice}</span>
            <span className="product-discount">
              ({currentProduct.discount}% OFF)
            </span>
          </p>
          <h3>Size:</h3>
          <span>In Stock</span>
          <span>Fast Delivery</span>

          <div>
            <button>ADD TO CART</button>
            <button>ADD TO WISHLIST</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { SingleProduct };
