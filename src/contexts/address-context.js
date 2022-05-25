import { createContext, useContext, useReducer } from "react";

const addressContext = createContext(null);

const AddressContextProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(addressReducer, []);
  return (
    <addressContext.Provider value={{ addressState, addressDispatch }}>
      {children}
    </addressContext.Provider>
  );
};
const useAddress = () => useContext(addressContext);
export { AddressContextProvider, useAddress };
