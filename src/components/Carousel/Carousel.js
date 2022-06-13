import React, { useEffect } from "react";
import slide1 from "../../assets/carousel-images/Carousel1.webp";
import slide2 from "../../assets/carousel-images/carousle2.jpg";
import slide3 from "../../assets/carousel-images/carousel5.webp";
import "./Carousel.css";
import { Link } from "react-router-dom";
const Carousel = () => {
  let counter = 1;
  useEffect(() => {
    const intervalId = setInterval(() => {
      document.getElementById("radio" + counter).checked = true;
      counter++;
      if (counter > 3) {
        counter = 1;
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [counter]);

  return (
    <div className="slides">
      <input type="radio" name="radio-btn" id="radio1" />
      <input type="radio" name="radio-btn" id="radio2" />
      <input type="radio" name="radio-btn" id="radio3" />
      <div className="slide first">
        <Link to="/products">
          <img src={slide1} alt="carousel image" />
        </Link>
      </div>
      <div className="slide">
        <Link to="/products">
          <img src={slide2} alt="carousel image" />
        </Link>
      </div>{" "}
      <div className="slide">
        <Link to="/products">
          <img src={slide3} alt="carousel image" />
        </Link>
      </div>
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
  );
};

export { Carousel };
