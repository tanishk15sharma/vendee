const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      if (state.some((item) => item._id === action.payload._id)) {
        alert("item is already present");
        return state;
      }
      return [...state, action.payload];
    case "REMOVE_FROM_WISHIST":
      return state.filter((item) => item._id !== action.payload._id);
    default:
      return state;
  }
};

export { wishlistReducer };
