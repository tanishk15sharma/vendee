import "./CartPriceDetails.css";
import { useCart } from "../../contexts/cart-context";
import { checkoutDetails } from "../../utilities/cart-utils";

const CartPriceDetails = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <h2>No items in cart</h2>;
  }
  const { totalAmount, price, discountPrice } = checkoutDetails(cart);

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
      <button className="primary-btn-color btn-pd">PLACE ORDER</button>
    </div>
  );
};

export { CartPriceDetails };
