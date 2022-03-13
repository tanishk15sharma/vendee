import React from "react";
import { HeaderSection } from "../../components/homepage/Header";
import { CarouselContainer } from "../../components/homepage/Carousel";
import { RecommendProducts } from "../../components/homepage/RecommendProducts";

const HomePage = () => {
  return (
    <div>
      <HeaderSection />
      <CarouselContainer />
      <RecommendProducts />
    </div>
  );
};

export { HomePage };
