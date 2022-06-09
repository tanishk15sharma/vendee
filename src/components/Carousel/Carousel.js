import React from "react";
import slide1 from "../../assets/carousel-images/Carousel1.webp";
import slide2 from "../../assets/carousel-images/carousle2.jpg";
import slide3 from "../../assets/carousel-images/carousel5.webp";
import "./Carousel.css";
const Carousel = () => {
  return (
    <main>
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          {/* slide image */}
          <div className="slide first">
            <img src={slide1} alt="carousel image" />
          </div>
          <div className="slide">
            <img src={slide2} alt="carousel image" />
          </div>{" "}
          <div className="slide">
            <img src={slide3} alt="carousel image" />
          </div>
          {/* slide image  END*/}
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
          </div>
          <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Carousel };
