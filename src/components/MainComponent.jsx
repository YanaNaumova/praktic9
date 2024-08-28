import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserProfile from "./UserProfile";
import RegistrationForm from "./RegistrationForm";
import styles from "../styles/MainComponent.module.css";

function MainComponent() {
  const { isRegistered } = useContext(UserContext);
  return (
    <div className={styles.container}>
      {isRegistered ? <UserProfile /> : <RegistrationForm />}
    </div>
  );
}

export default MainComponent;
