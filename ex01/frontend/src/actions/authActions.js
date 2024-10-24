export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const login = (username, password) => {
  return (dispatch) => {
    if (username === "admin" && password === "admin") {
      dispatch({ type: LOGIN_SUCCESS, payload: { username } });
    } else {
      alert("Invalid username or password");
    }
  };
};
export const logout = () => {
  return { type: LOGOUT };
};
