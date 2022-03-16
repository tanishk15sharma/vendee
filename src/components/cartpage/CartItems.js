import "./CartItems.css";

const CartItems = () => {
  return (
    <div class="items">
      <div class="cart-item">
        <div class="cover-img">
          <img
            class="cart-item-img"
            src="../assets/products-img/Nautica-Men-Tshirts-1.webp"
            alt="first tshirt"
          />
        </div>
        <div class="card-content">
          <h4 class="card-title">Men Tshirt</h4>
          <div class="product-price">
            <span>Rs. 799 </span>
            <span> Rs. 999</span>
            <span> (40% OFF)</span>
          </div>
          <p>
            Quantity: <i class="px-1 fa-solid fa-circle-minus"></i>1
            <i class="fa-solid fa-circle-plus"></i>
          </p>
          <button class="btn">Remove from Cart</button>
          <button class="btn">Move to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export { CartItems };
