import React from "react";
import { HeaderSection } from "../../components/wishlistpage/Header";
import { WishlistItems } from "../../components/wishlistpage/WishlistItems";
import "./WishlistPage.css";

const WishlistPage = () => {
  return (
    <div>
      <HeaderSection />
      <main className="wishlist-container">
        <WishlistItems />
      </main>
    </div>
  );
};

export { WishlistPage };
