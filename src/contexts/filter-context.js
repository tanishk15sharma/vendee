import { createContext, useContext, useReducer } from "react";
import { filtersReducer, initialState } from "../reducers/filter-reducer";

const ProductFiltersContext = createContext();

const FiltersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState);
  return (
    <ProductFiltersContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductFiltersContext.Provider>
  );
};

const useProductsFilters = () => useContext(ProductFiltersContext);

export { FiltersContextProvider, useProductsFilters };
