import "./App.css";
import React, { useState } from "react";
import { UserRoles } from "./constants/userRoles";
import Header from "./components/Header";
import ProfileSwitcher from "./components/ProfileSwitcher";
import CreateTicket from "./components/CreateTicket";

function App() {
  const [currentRole, setCurrentRole] = useState(UserRoles.NORMAL);
  const renderContentBasedOnRole = () => {
    switch (currentRole) {
      case UserRoles.NORMAL:
        return <div>Welcome, Normal User!</div>;
      case UserRoles.SERVICE_DESK:
        return <div>Welcome, Service Desk User!</div>;
      case UserRoles.ADMIN:
        return <div>Welcome, Admin User!</div>;
      default:
        return <div>Unknown user</div>;
    }
  };
  return (
    <div className="App">
      <Header />
      <CreateTicket />
      <ProfileSwitcher
        currentRole={currentRole}
        onChangeRole={setCurrentRole}
      />
      {renderContentBasedOnRole()}
    </div>
  );
}

export default App;
