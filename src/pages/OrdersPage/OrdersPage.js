import React from "react";
import "./OrdersPage.css";
import { Nav } from "../../components/nav/nav";
import { useOrders } from "../../contexts";
const OrdersPage = () => {
  const { userOrders } = useOrders();

  return (
    <>
      <Nav />
      <section className="orders-container">
        <p className="title-name">
          <span className="logo-v">My</span>Orders
        </p>
        {userOrders.length === 0 ? <h1>No orders are done by you.</h1> : ""}

        {userOrders.map((order) => {
          return (
            <div className="order-div">
              <h2 className="success-txt">ORDER CONFIRMED</h2>
              <span className="sub-txt">
                {new Date(order.orderDate).toDateString()}
              </span>
              <p>
                <span className="sub-txt">Order ID: {order.orderId}</span>
              </p>

              {order.orderItems.map(
                ({ image, name, actualPrice, size, qty, fastDelivery }) => (
                  <div className="flex items-div dashed-b">
                    <div className="order-itemImg">
                      <img src={image} alt="" className="responsive-Image" />
                    </div>
                    <div className="order-itemInfo">
                      <h3>{name}</h3>
                      <span>
                        <span className="sub-txt">Item Price: </span>&#8377;{" "}
                        {actualPrice}
                      </span>
                      <span>
                        <span className="sub-txt">SIZE: </span>
                        {size}
                      </span>
                      <span>
                        <span className="sub-txt">Oty: </span>
                        {qty}
                      </span>
                      <span>
                        {fastDelivery ? "Fast delivery" : "Modrate delivery"}{" "}
                      </span>
                    </div>
                  </div>
                )
              )}
              <h2>DELIVERY ADDRESS</h2>
              <div className="p1 solid-b">
                <h4> {order.orderAddress.name} </h4>
                <p> {order.orderAddress.address} </p>
                <p>{order.orderAddress.pincode}</p>
                <p>
                  {" "}
                  {order.orderAddress.city} , {order.orderAddress.state}
                </p>
              </div>
              <h2>PRICE DETAILS</h2>
              <div className="p1 solid-b">
                <div className="flex-btw">
                  <span>TOTAL:</span>
                  <span>{order.price}</span>
                </div>
                <div className="flex-btw">
                  <span>DISCOUNT:</span>
                  <span>{order.totalDiscount}%</span>
                </div>
                <div className="flex-btw order-total">
                  <span>TOTAL Amount:</span>
                  <span>{order.total}</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
export { OrdersPage };
