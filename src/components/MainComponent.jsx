import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserProfile from "./UserProfile";
import RegistrationForm from "./RegistrationForm";

function MainComponent() {
  const { isRegistered } = useContext(UserContext);
  return <div>{isRegistered ? <UserProfile /> : <RegistrationForm />}</div>;
}

export default MainComponent;
