const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let index = state.findIndex((item) => item._id === action.payload._id);
      if (index === -1) return [...state, { ...action.payload, quantity: 1 }];
      return state.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "REMOVE_PRODUCT":
      return state.filter((item) => item._id !== action.payload._id);
    default:
      return state;
  }
};

export { cartReducer };
