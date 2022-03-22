import React from "react";
import { Nav } from "../../components/nav/nav";
import { WishlistItems } from "../../components/wishlistpage/WishlistItems";
import "./WishlistPage.css";

const WishlistPage = () => {
  return (
    <div>
      <Nav />
      <main className="wishlist-container">
        <WishlistItems />
      </main>
    </div>
  );
};

export { WishlistPage };
