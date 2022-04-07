const authReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOAD":
      return { ...state, loading: true };
    case "USER_LOAD_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload,
      };

    case "USER_LOAD_FALIUR":
      return { ...state, isAuthanticaded: false, loading: false };
    case "USER_LOGOUT":
      return { isAuth: false, loading: false, user: null };
  }
};

export { authReducer };
