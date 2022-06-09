import React from "react";
import { HeaderSection } from "../../components/homepage/Header";
import { RecommendProducts } from "../../components/homepage/RecommendProducts";
import { Footer } from "../../components/homepage/Footer";
import "./HomePage.css";
import { CarouselContainer } from "../../components/CarouselContainer";
const HomePage = () => {
  return (
    <div>
      <HeaderSection />
      {/* <CarouselContainer /> */}
      <RecommendProducts />
      <Footer />
    </div>
  );
};

export { HomePage };
