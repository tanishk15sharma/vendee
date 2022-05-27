import React from "react";
import "./OrdersPage.css";
import { Nav } from "../../components/nav/nav";
import { useOrders } from "../../contexts";
const OrdersPage = () => {
  const { userOrders } = useOrders();
  console.log(userOrders);
  return (
    <div>
      <Nav />
    </div>
  );
};
export { OrdersPage };
