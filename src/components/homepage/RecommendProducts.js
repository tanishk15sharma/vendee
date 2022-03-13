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
      <section class="product-section">
        <span class="product-title">DEALS Of The Day</span>
        <div class="product-container">
          <img src={sportsShoes} alt="deal-shoes" class="product-img" />

          <img src={homeDecor} alt="deal-decor" class="product-img" />

          <img src={jewellery} alt="deal-jewellery" class="product-img" />

          <img src={trendingStyles} alt="deal-treading" class="product-img" />

          <img src={heels} alt="deal-heels" class="product-img" />
        </div>
      </section>
    </div>
  );
};

export { RecommendProducts };
