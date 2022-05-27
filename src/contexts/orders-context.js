import { createContext, useContext, useState } from "react";

const orderContext = createContext(null);

const OrderContextProvider = ({ children }) => {
  const [userOrders, setUserOrders] = useState([]);
  return (
    <orderContext.Provider value={{ userOrders, setUserOrders }}>
      {children}
    </orderContext.Provider>
  );
};

const useOrders = () => useContext(orderContext);

export { OrderContextProvider, useOrders };
