const authReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOAD":
      return { ...state, loading: true };
    case "USER_LOAD_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuth: true,
        userInfo: action.payload,
      };

    case "USER_LOAD_FALIUR":
      return { ...state, isAuthanticaded: false, loading: false };
  }
};

export { authReducer };
