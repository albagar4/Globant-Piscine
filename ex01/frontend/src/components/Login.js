import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";
import styles from "./Login.module.css";
import Header from "./Header";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    setUsername("");
    setPassword("");
  };

  // if (isAuthenticated) {
  //   return <h2>Welcome, {username}! You are logged in.</h2>;
  // }
  return (
    <div className={styles.loginContainer}>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username (admin)</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
            className={styles.inputField}
          />
        </div>
        <div>
          <label htmlFor="password">Password (admin)</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className={styles.inputField}
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
