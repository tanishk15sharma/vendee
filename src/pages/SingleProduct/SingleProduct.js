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
        <div className="product-img">
          <img src={currentProduct.image} />
        </div>
        <div>
          <div className="product-title">
            <p className="font-xxl">{currentProduct.name}</p>
            <h2>
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
          <div className="single-product-info">
            <h3>
              <span className="sub-txt">Size:</span> {currentProduct.size}
            </h3>
            <h3>
              <span className="sub-txt">Avability:</span>
              {currentProduct.inStock ? "In Stock" : "Out of Stock"}
            </h3>
            <h3>
              <span className="sub-txt">Fast Delivery: </span>
              {currentProduct.fastDelivery
                ? "Fast Delivery"
                : "Fast Delivery Unavailable"}{" "}
            </h3>
          </div>

          <button className="product-card-btn primary-btn-color">
            ADD TO CART
          </button>
          <button className="product-card-btn secondary-border">
            ADD TO WISHLIST
          </button>
          <p className="product-desc">
            <span className="sub-txt">Descrpition:</span> Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Nesciunt fuga, autem harum animi
            magni sunt reiciendis placeat ratione facere omnis alias! Dicta
            culpa commodi totam illo. Perferendis recusandae expedita
            necessitatibus!
          </p>
        </div>
      </section>
    </div>
  );
};

export { SingleProduct };
