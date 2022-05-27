import React from "react";
import "./OrdersPage.css";
import { Nav } from "../../components/nav/nav";
import { useOrders } from "../../contexts";
const OrdersPage = () => {
  const { userOrders } = useOrders();
  console.log(userOrders);
  return (
    <>
      <Nav />
      <section className="orders-container">
        <div>
          <h2 className="success-txt">ORDER CONFIRMED</h2>
          <span className="sub-txt">DATE</span>
          <p>
            <span className="sub-txt">Order ID:</span> dssaddsaadsdas
          </p>
          {}
          <div className="flex">
            <div className="order-itemImg">
              <img
                src="https://checkmate-store.netlify.app/static/media/chess-fianchetto-book(reduced).cddbc769.webp"
                alt=""
                className="responsive-Image"
              />
            </div>
            <div className="order-itemInfo">
              <h2>order name</h2>
              <span className="sub-txt">8000</span>
              <span className="sub-txt">SIZE: L</span>
              <span className="sub-txt">Oty :1</span>
              <span>Fast delivery</span>
            </div>
          </div>
          <h1>DELIVERY ADDRESS</h1>
          <p>vijay nagar 23u3h213113</p>
          <p>2388390230</p>
          <p>INDORE , INDIA</p>
          <div>
            <h1>PRICE DETAISL</h1>
            <span>TOTAL: 2101o0</span>
          </div>
        </div>
      </section>
    </>
  );
};
export { OrdersPage };
