import "./CartPriceDetails.css";
import { useCart } from "../../contexts/cart-context";

const CartPriceDetails = () => {
  const { cartState } = useCart();

  if (cartState.length === 0) {
    return <h2>No items in cart</h2>;
  }

  let totalAmount = cartState.reduce(
    (sum, curr) => sum + curr.quantity * curr.discountPrice,
    0
  );
  let price = cartState.reduce(
    (sum, curr) => sum + curr.quantity * curr.actualPrice,
    0
  );

  let discountPrice = cartState.reduce(
    (sum, curr) => sum + curr.quantity * curr.discount,
    0
  );
  return (
    <div className="price-details-container">
      <p className="price-details-title bold">PRICE DETAILS</p>
      <hr />
      <ul className="price-list">
        <li className="price-item">
          Price (items) <span>&#8377; {price}</span>
        </li>
        <li className="price-item">
          Discount <span>- &#8377; {discountPrice}%</span>
        </li>
        <li className="price-item">
          Delivery Charges <span>&#8377; 0</span>
        </li>
        <hr />
        <li className="price-item bold">
          TOTAL AMOUNT <span> &#8377; {totalAmount}</span>
        </li>
        <hr />
      </ul>
      <p className="discount-txt">You will save &#8377; 1000 on this order</p>
      <button className="btn primary-btn">PLACE ORDER</button>
    </div>
  );
};

export { CartPriceDetails };
