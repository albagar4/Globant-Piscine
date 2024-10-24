import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/authActions";
import Header from "../components/Header";
import CreateTicket from "../components/CreateTicket";
import styles from "./LogoutButton.module.css";
import CameraComponent from "./CameraComponent";
import TicketList from "./TicketList";

const MainPage = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <TicketList />
      <CreateTicket />
      <div className={styles.buttonContainer}>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default MainPage;
