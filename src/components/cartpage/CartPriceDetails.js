import "./CartPriceDetails.css";

const CartPriceDetails = () => {
  return (
    <div class="price-details-container">
      <p class="price-details-title bold">PRICE DETAILS</p>
      <hr />
      <ul class="price-list">
        <li class="price-item">
          Price (2 items) <span>&#8377; 1999</span>
        </li>
        <li class="price-item">
          Discount <span>- &#8377; 1000</span>
        </li>
        <li class="price-item">
          Delivery Charges <span>&#8377; 300</span>
        </li>
        <hr />
        <li class="price-item bold">
          TOTAL AMOUNT <span> &#8377; 2299</span>
        </li>
        <hr />
      </ul>
      <p class="discount-txt">You will save &#8377; 1000 on this order</p>
      <button class="btn primary-btn">PLACE ORDER</button>
    </div>
  );
};

export { CartPriceDetails };
