import { LOGIN_SUCCESS, LOGOUT } from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.username,
      };
    case LOGOUT:
      return { initialState };
    default:
      return state;
  }
};

export default authReducer;
