const fetchUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_USER_FULFILLED":
      return {
        ...state,
        user: action.payload,
        isError: false,
        msg: "Found",
      };

    case "FETCH_USER_REJECTED":
      return {
        ...state,
        user: {},
        isError: true,
        msg: action.payload,
      };

    case "RESET_CURRENT_USER":
      return {};

    default:
      return state;
  }
};

export default fetchUserReducer;
