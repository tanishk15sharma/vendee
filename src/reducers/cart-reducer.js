const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let index = state.findIndex((item) => item.id === action.payload.id);
      if (index === -1) return [...state, { ...action.payload, quantity: 1 }];
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    default:
      return state;
  }
};

export { cartReducer };
