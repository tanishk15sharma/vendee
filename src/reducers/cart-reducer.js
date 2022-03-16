const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload);
      break;
    default:
      return state;
  }
};

export { cartReducer };
