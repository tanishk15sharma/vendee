const initialState = {
  includeOutOfStock: true,
  fastDelivery: false,
  sortBy: null,
  category: {
    men: true,
    women: true,
    footwear: true,
    homedecor: true,
    jewellery: true,
  },
  brands: [],
  rating: null,
  range: 6000,
  search: "",
};

const filtersReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "TOGGLE_STOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    case "TOGGLE_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    case "ADD_BRAND":
      return { ...state, brands: [...state.brands, action.payload] };
    case "REMOVE_BRAND":
      return {
        ...state,
        brands: state.brands.filter((brand) => brand !== action.payload),
      };
    case "RATING":
      return { ...state, rating: action.payload };
    case "RANGE":
      return { ...state, range: action.payload };
    case "CATEGORY":
      return {
        ...state,
        category: {
          ...state.category,
          [action.payload]: !state.category[action.payload],
        },
      };
    case "SEARCH_PRODUCT":
      return { ...state, search: action.payload };
    case "CLEAR_ALL":
      return {
        includeOutOfStock: true,
        fastDelivery: false,
        sortBy: null,
        category: {
          men: true,
          women: true,
          footwear: true,
          homedecor: true,
          jewellery: true,
        },
        brands: [],
        rating: null,
        range: 6000,
        search: "",
      };
    default:
      return state;
  }
};

export { filtersReducer, initialState };
