import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { addressReducer } from "../reducers/address-reducer";
import { getToken } from "../utilities/wishlist-utils";
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
    addressFormModal: false,
  });
  useEffect(() => {
    getToken()
      ? addressDispatch({
          type: "ADD_TEST_ADDRESS",
          payload: authState.user?.address,
        })
      : "";
  }, [authState]);
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
