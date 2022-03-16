import "./CartPriceDetails.css";
import { useCart } from "../../contexts/cart-context";

const CartPriceDetails = () => {
  const { cartState } = useCart();

  let totalAmount = cartState.reduce(
    (sum, curr) => sum + curr.quantity * curr.discountPrice,
    0
  );
  return (
    <div class="price-details-container">
      <p class="price-details-title bold">PRICE DETAILS</p>
      <hr />
      <ul class="price-list">
        <li class="price-item">
          Price (items) <span>&#8377; 1999</span>
        </li>
        <li class="price-item">
          Discount <span>- &#8377; 1000</span>
        </li>
        <li class="price-item">
          Delivery Charges <span>&#8377; 0</span>
        </li>
        <hr />
        <li class="price-item bold">
          TOTAL AMOUNT <span> &#8377; {totalAmount}</span>
        </li>
        <hr />
      </ul>
      <p class="discount-txt">You will save &#8377; 1000 on this order</p>
      <button class="btn primary-btn">PLACE ORDER</button>
    </div>
  );
};

export { CartPriceDetails };
