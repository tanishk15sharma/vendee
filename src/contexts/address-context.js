import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { addressReducer } from "../reducers/address-reducer";
import { useAuth } from "./auth-context";

const addressContext = createContext(null);

const AddressContextProvider = ({ children }) => {
  const { authState } = useAuth();
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
  useEffect(() => {
    addressDispatch({
      type: "ADD_TEST_ADDRESS",
      payload: authState.user.address,
    });
  }, []);
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
