const initialState = {
  includeOutOfStock: true,
  fastDelivery: false,
  sortBy: null,
};

const filtersReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};

export { filtersReducer, initialState };
