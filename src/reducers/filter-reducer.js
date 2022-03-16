const initialState = {
  includeOutOfStock: true,
  fastDelivery: false,
  sortBy: null,
  category: {
    men: true,
    women: true,
    kids: true,
  },
  brands: [],
};

const filtersReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "TOGGLE_STOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    case "TOGGLE_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    case "CATEGORY":
      return {
        ...state,
        category: {
          ...state.category,
          [action.payload]: !state.category[action.payload],
        },
      };
    case "BRANDS":
      return { ...state };
    default:
      return state;
  }
};

export { filtersReducer, initialState };
