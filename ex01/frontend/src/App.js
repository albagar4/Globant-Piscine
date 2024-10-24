import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return <div>{isAuthenticated ? <MainPage /> : <Login />}</div>;
};

export default App;
