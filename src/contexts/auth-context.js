import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/auth-reducer";
import { getToken } from "../utilities/wishlist-utils";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    isAuth: getToken() ? true : false,
    loading: false,
    user: JSON.parse(localStorage.getItem("user")),
  });
  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { AuthContextProvider, useAuth };
