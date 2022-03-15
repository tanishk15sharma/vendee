const initialState = {
  includeOutOfStock: true,
  fastDelivery: false,
  sortBy: null,
};

const filtersReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "TOGGLE_STOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    case "TOGGLE_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    default:
      return state;
  }
};

export { filtersReducer, initialState };
