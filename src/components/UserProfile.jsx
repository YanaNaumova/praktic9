import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import RegistrationForm from "./RegistrationForm";
import styles from "../styles/UserProfile.module.css";

function UserProfile() {
  const { userData, logautUser } = useContext(UserContext);
  return (
    <>
      {userData.isRegistered ? (
        <div className={styles.container}>
          <h1>User Profile</h1>
          <p className={styles.textStyle}>Login: {userData.login}</p>
          <p className={styles.textStyle}>Email:{userData.email}</p>
          <button onClick={logautUser} className={styles.btn}>
            Logout
          </button>
        </div>
      ) : (
        <RegistrationForm />
      )}
    </>
  );
}

export default UserProfile;
