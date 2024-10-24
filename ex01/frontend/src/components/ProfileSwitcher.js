import React from "react";
import { UserRoles } from "../constants/userRoles";
import styles from "./ProfileSwitcher.module.css";

const ProfileSwitcher = ({ currentRole, onChangeRole }) => {
  return (
    <div className={styles.ProfileSwitcher}>
      <br />
      <label htmlFor="profile">Select profile: </label>
      <select
        id="profile"
        value={currentRole}
        onChange={(e) => onChangeRole(e.target.value)}
      >
        <option value={UserRoles.NORMAL}>{UserRoles.NORMAL}</option>
        <option value={UserRoles.SERVICE_DESK}>{UserRoles.SERVICE_DESK}</option>
        <option value={UserRoles.ADMIN}>{UserRoles.ADMIN}</option>
      </select>
    </div>
  );
};

export default ProfileSwitcher;
