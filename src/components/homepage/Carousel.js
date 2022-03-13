import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import carouselImg1 from "../../assets/carousel-images/Carousel1.webp";
import carouselImg2 from "../../assets/carousel-images/Carousel2.webp";
import carouselImg3 from "../../assets/carousel-images/Carousel3.webp";

// import sportsShoes from "../../assets/recommendedproduct-images/-Sports-Shoes.webp";

const CarouselContainer = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={carouselImg1} alt="First slide" />
          <Carousel.Caption>
            <h3>Vendee Provides you the best clothing</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={carouselImg2}
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={carouselImg3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Men Clothing </h3>
            <p>Get valuable discount on men clothing with better quality</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export { CarouselContainer };
