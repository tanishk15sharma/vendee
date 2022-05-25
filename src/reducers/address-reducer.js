const addressReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return [...state, action.payload];
    default:
      return state;
  }
};
export { addressReducer };
