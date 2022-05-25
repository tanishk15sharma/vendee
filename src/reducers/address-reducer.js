const addressReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return [...state, action.payload];
    case "REMOVE_ADDRESS": {
      console.log(state, action);
      return state.filter(({ id }) => id !== action.payload);
    }
    default:
      return state;
  }
};
export { addressReducer };
