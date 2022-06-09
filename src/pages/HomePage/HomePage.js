import React from "react";
import { HeaderSection } from "../../components/homepage/Header";
import { RecommendProducts } from "../../components/homepage/RecommendProducts";
import { Footer } from "../../components/homepage/Footer";
import "./HomePage.css";
import { Carousel } from "../../components/Carousel/Carousel";
const HomePage = () => {
  return (
    <div>
      <HeaderSection />
      <Carousel />
      <RecommendProducts />
      <Footer />
    </div>
  );
};

export { HomePage };
