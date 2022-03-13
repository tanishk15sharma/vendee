import React from "react";
import { HeaderSection } from "../../components/homepage/Header";
import { RecommendProducts } from "../../components/homepage/RecommendProducts";
import { Footer } from "../../components/homepage/Footer";

const HomePage = () => {
  return (
    <div>
      <HeaderSection />
      <RecommendProducts />
      <Footer />
    </div>
  );
};

export { HomePage };
