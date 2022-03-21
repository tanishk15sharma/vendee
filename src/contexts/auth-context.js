import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/auth-reducer";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    isAuth: localStorage.getItem("token") ? true : false,
    loading: false,
    user: null,
  });
  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { AuthContextProvider, useAuth };
