const addressReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return [...state, action.payload];
    case "REMOVE_ADDRESS": {
      return state.filter(({ id }) => id !== action.payload);
    }
    case "EDIT_ADDRESS": {
      return state.map((address) =>
        address.id === action.payload.id ? action.payload : address
      );
    }
    case "ADD_TEST_ADDRESS": {
      return [...state, action.payload];
    }
    case "EMPTY_ADDRESS": {
      return [];
    }
    default:
      return state;
  }
};
export { addressReducer };
