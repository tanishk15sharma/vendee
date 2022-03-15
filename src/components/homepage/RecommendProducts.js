import React from "react";
import "./RecommendProducts.css";
import sportsShoes from "../../assets/recommendedproduct-images/-Sports-Shoes.webp";
import homeDecor from "../../assets/recommendedproduct-images/Home-Decor.webp";
import jewellery from "../../assets/recommendedproduct-images/Jewellery-1-.webp";
import trendingStyles from "../../assets/recommendedproduct-images/-Trending-Styles.webp";
import heels from "../../assets/recommendedproduct-images/-Heels.webp";

const RecommendProducts = () => {
  return (
    <div>
      <section className="deal-section">
        <span className="deal-title">DEALS Of The Day</span>
        <div className="deal-container">
          <img src={sportsShoes} alt="deal-shoes" className="product-img" />

          <img src={homeDecor} alt="deal-decor" className="product-img" />

          <img src={jewellery} alt="deal-jewellery" className="product-img" />

          <img
            src={trendingStyles}
            alt="deal-treading"
            className="product-img"
          />

          <img src={heels} alt="deal-heels" className="product-img" />
        </div>
      </section>
      <section className="banner-section">
        <div className="banner-detail">
          <span>EVERYDAY</span>
          <span>ESSENTIALS</span>
          <a href="./pages/product.html">
            <button>
              SHOP NOW
              <i className="fa-solid fa-right-long"></i>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export { RecommendProducts };
