import React from "react";
import "./RecommendProducts.css";
import sportsShoes from "../../assets/recommendedproduct-images/-Sports-Shoes.webp";
import homeDecor from "../../assets/recommendedproduct-images/Home-Decor.webp";
import jewellery from "../../assets/recommendedproduct-images/Jewellery-1-.webp";
import trendingStyles from "../../assets/recommendedproduct-images/-Trending-Styles.webp";
import heels from "../../assets/recommendedproduct-images/-Heels.webp";
import nike from "../../assets/recommendedproduct-images/1.webp";
import { Link } from "react-router-dom";
import { useProductsFilters } from "../../contexts/filter-context";

const RecommendProducts = () => {
  const { dispatch } = useProductsFilters();
  return (
    <div>
      <section className="deal-section">
        <span className="deal-title">DEALS Of The Day</span>
        <div className="deal-container">
          <Link
            to="/products"
            className="recommendation-img"
            onClick={() =>
              dispatch({ type: "ADD_CATEGORY", payload: "footwear" })
            }
          >
            <img
              src={sportsShoes}
              alt="deal-shoes"
              onClick={() => console.log("ji")}
            />
          </Link>
          <Link
            to="/products"
            className="recommendation-img"
            onClick={() =>
              dispatch({ type: "ADD_CATEGORY", payload: "homedecor" })
            }
          >
            <img src={homeDecor} alt="deal-decor" />
          </Link>
          <Link
            to="/products"
            className="recommendation-img"
            onClick={() =>
              dispatch({ type: "ADD_CATEGORY", payload: "jewellery" })
            }
          >
            <img src={jewellery} alt="deal-jewellery" />
          </Link>
          <Link
            to="/products"
            className="recommendation-img"
            onClick={() => dispatch({ type: "ADD_CATEGORY", payload: "women" })}
          >
            <img src={trendingStyles} alt="deal-treading" />
          </Link>
          <Link
            to="/products"
            className="recommendation-img"
            onClick={() =>
              dispatch({ type: "ADD_CATEGORY", payload: "footwear" })
            }
          >
            <img src={heels} alt="deal-heels" />
          </Link>
          <Link to="/products" className="recommendation-img display-hide">
            <img src={nike} alt="nike-deals" />
          </Link>
        </div>
      </section>
      <section className="banner-section">
        <div className="banner-detail">
          <span>EVERYDAY</span>
          <span>ESSENTIALS</span>
          <Link to="/products">
            <button>
              SHOP NOW
              <i className="fa-solid fa-right-long"></i>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export { RecommendProducts };
