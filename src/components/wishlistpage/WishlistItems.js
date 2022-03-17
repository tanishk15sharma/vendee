import "./WishlistItems.css";
import heels from "../../assets/recommendedproduct-images/-Heels.webp";

const WishlistItems = () => {
  return (
    <div className="list-cover">
      <div className="product-card">
        <div className="product-img-div">
          <i className="fa-solid fa-xmark"></i>
          <img src={heels} alt="tshirt" className="product-img" />
        </div>
        <div className="product-detail">
          <div className="product-brand">
            Nautica <i className="fa-solid fa-heart"></i>
          </div>
          <p className="product-info">Yellow Printed Round Neck</p>
          <div className="product-price">
            <span>Rs. 799</span>
            <span>Rs. 999</span>
            <span>(40% OFF)</span>
          </div>
          <div className="product-size-div">
            <div className="product-size-title">Add size</div>
            <div className="product-size">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
          </div>
        </div>
        <button className="product-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export { WishlistItems };
