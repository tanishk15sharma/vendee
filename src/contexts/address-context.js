import { createContext, useContext, useReducer, useState } from "react";
import { addressReducer } from "../reducers/address-reducer";

const addressContext = createContext(null);

const AddressContextProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(addressReducer, []);
  const [addressData, setAddressData] = useState({
    name: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    number: "",
    option: "",
    edit: false,
  });
  return (
    <addressContext.Provider
      value={{ addressState, addressDispatch, addressData, setAddressData }}
    >
      {children}
    </addressContext.Provider>
  );
};
const useAddress = () => useContext(addressContext);
export { AddressContextProvider, useAddress };
